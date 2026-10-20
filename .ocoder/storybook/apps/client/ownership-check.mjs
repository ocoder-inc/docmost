/**
 * Checks that only files the harness owns were added, changed or removed, against a manifest of the
 * workspace as it was when the harness started. `verify.mjs` runs this first when a manifest is
 * given (`OCODER_OWNERSHIP_MANIFEST`).
 *
 * Ocoder applies the same rules again after the run and refuses everything if one is broken, so a
 * problem reported here is one to fix now. Plain JavaScript with no imports beyond Node's own: this
 * folder installs only what the stories need.
 */
import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

/** Every file under `directory` with its SHA-256, skipping the folders named in `skip`. */
export async function currentFiles(directory, skip = ['node_modules', 'storybook-static']) {
  const files = {};
  const walk = async (folder) => {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      const path = join(folder, entry.name);
      if (entry.isDirectory()) {
        if (folder === directory && skip.includes(entry.name)) continue;
        await walk(path);
      } else if (entry.isFile()) {
        files[relative(directory, path).split(sep).join('/')] = createHash('sha256')
          .update(await readFile(path))
          .digest('hex');
      } else {
        // A symlink, device or socket. Ocoder commits plain files only.
        files[relative(directory, path).split(sep).join('/')] = 'not-a-plain-file';
      }
    }
  };
  await walk(directory);
  return files;
}

/** Every ownership problem, each naming the file and what to do; empty when there is none. */
export function ownershipProblems(manifest, files) {
  const owned = manifest.owned.map((source) => new RegExp(source));
  const deletable = manifest.deletable.map((source) => new RegExp(source));
  const ignored = (manifest.ignored ?? []).map((source) => new RegExp(source));
  const isOwned = (path) => owned.some((pattern) => pattern.test(path));
  const problems = [];
  for (const [path, hash] of Object.entries(manifest.files)) {
    if (!(path in files)) {
      if (!deletable.some((pattern) => pattern.test(path))) {
        problems.push(
          isOwned(path)
            ? `${path}: deleted. A story file may be edited but not deleted; restore it.`
            : `${path}: deleted. You do not own this file; restore it exactly as it was.`,
        );
      }
    } else if (files[path] !== hash && !isOwned(path)) {
      problems.push(`${path}: changed. You do not own this file; restore it exactly as it was.`);
    }
  }
  for (const [path, hash] of Object.entries(files)) {
    // Never committed (a log a failed build left behind), so nobody's change.
    if (ignored.some((pattern) => pattern.test(path))) continue;
    if (hash === 'not-a-plain-file') {
      problems.push(
        `${path}: not a plain file. Symbolic links and special files are refused; remove it.`,
      );
    } else if (!(path in manifest.files) && !isOwned(path)) {
      problems.push(`${path}: added. New files may only go where you own them; remove it.`);
    }
  }
  return problems.sort();
}
