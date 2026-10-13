/**
 * Ocoder-generated Storybook configuration. This file is the same for every repository; what is
 * specific to this one is in `target.json`.
 *
 * The customer's own package manager and build never run. This workspace installs the packages
 * the app declares, at the versions the app's lockfile resolved, and the customer's source and
 * config files resolve their imports through it.
 */
import fs from 'node:fs';
import Module, { registerHooks } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

type Target = {
  /** Repository-relative app package directory. */
  appDir: string;
  /** Whether the app has a PostCSS config to reuse. */
  postcss: boolean;
  /** Repository-relative path of this folder, e.g. `.ocoder/storybook/apps/web`. */
  workspaceRoot: string;
  /** Packages replaced by a generated stand-in, mapped to the stand-in under `.storybook/`. */
  stubs?: Record<string, string>;
  /** Repository-relative folder the app serves at `/` (Vite's `public/`), or null. */
  publicDir?: string | null;
  /** The app's entry module, and its stand-in under `.storybook/`. */
  entry?: { module: string; standIn: string } | null;
  /** The app's import aliases from its TypeScript config; `target` is repository-relative. */
  aliases?: Array<{ prefix: string; target: string; wildcard: boolean }>;
};

const here = path.dirname(fileURLToPath(import.meta.url));
const target = JSON.parse(fs.readFileSync(path.join(here, 'target.json'), 'utf8')) as Target;

// Real paths: Vite and Node report importers by real path, and a symlinked parent directory would
// otherwise stop customer files from matching SOURCE_ROOT.
const WORKSPACE = fs.realpathSync(path.resolve(here, '..'));

/**
 * The customer's repository root. In place, it is as many levels up as `workspaceRoot` is deep; a
 * working copy elsewhere sets OCODER_SOURCE_ROOT so the same story files resolve the same source.
 */
const SOURCE_ROOT = fs.realpathSync(
  process.env.OCODER_SOURCE_ROOT
    ? path.resolve(process.env.OCODER_SOURCE_ROOT)
    : path.resolve(WORKSPACE, ...target.workspaceRoot.split('/').map(() => '..')),
);
const APP_ROOT = path.join(SOURCE_ROOT, target.appDir);
const WORKSPACE_IMPORTER = path.join(WORKSPACE, 'package.json');

function inside(file: string, directory: string): boolean {
  const relative = path.relative(directory, file);
  return relative !== '' && !relative.startsWith('..') && !path.isAbsolute(relative);
}

function isBare(source: string): boolean {
  return !/^(\.|\/|\0|[a-zA-Z]:|@source\/|node:|virtual:|data:|https?:)/.test(source);
}

/** A bare import made by a customer file, which therefore resolves through this workspace. */
function fromCustomer(source: string, importer: string | null | undefined): boolean {
  return (
    !!importer && isBare(source) && inside(importer, SOURCE_ROOT) && !inside(importer, WORKSPACE)
  );
}

/**
 * Browser code: customer source resolves its packages (`react` and the rest) as if this
 * workspace had imported them. That also keeps one copy of every package, so context providers and
 * their consumers agree.
 */
function resolveCustomerImportsThroughWorkspace(): Plugin {
  return {
    name: 'ocoder-resolve-through-workspace',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (!fromCustomer(source, importer?.split('?')[0])) return null;
      return this.resolve(source, WORKSPACE_IMPORTER, { ...options, skipSelf: true });
    },
  };
}

/**
 * Auth SDKs need a key and a network the sandbox does not have, so imports of them, from anywhere,
 * load a stand-in that answers as a signed-in sample user. They are not installed.
 */
function resolveStubs(): Plugin {
  const stubs = new Map(
    Object.entries(target.stubs ?? {}).map(([name, file]) => [name, path.join(here, file)]),
  );
  return {
    name: 'ocoder-auth-stubs',
    enforce: 'pre',
    resolveId(source) {
      return stubs.get(source) ?? null;
    },
  };
}

/**
 * The app's entry module mounts the whole app when loaded; components that import it (often for a
 * shared query client) get the stand-in instead, which exports the same names.
 */
function resolveEntryStandIn(): Plugin {
  const entry = target.entry ? path.join(SOURCE_ROOT, target.entry.module) : null;
  const standIn = target.entry ? path.join(here, target.entry.standIn) : null;
  return {
    name: 'ocoder-entry-stand-in',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (!entry || !importer || !inside(importer.split('?')[0]!, SOURCE_ROOT)) return null;
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
      return resolved && resolved.id.split('?')[0] === entry ? standIn : null;
    },
  };
}

// Node code: the customer's config files (postcss.config.cjs) run as written, loading their
// plugins from this workspace. ESM imports go through the module hook; `require.resolve`, which
// PostCSS config loaders use for plugins, bypasses it, so CommonJS resolution gets the same rule.
registerHooks({
  resolve(specifier, context, nextResolve) {
    const parent = context.parentURL?.startsWith('file:')
      ? fileURLToPath(context.parentURL)
      : undefined;
    return fromCustomer(specifier, parent)
      ? nextResolve(specifier, { ...context, parentURL: pathToFileURL(WORKSPACE_IMPORTER).href })
      : nextResolve(specifier, context);
  },
});

type ResolveFilename = (
  request: string,
  parent: { filename?: string | null } | undefined,
  ...rest: unknown[]
) => string;
const commonjs = Module as unknown as {
  _resolveFilename: ResolveFilename;
  _nodeModulePaths: (from: string) => string[];
};
const resolveFilename = commonjs._resolveFilename;
const workspaceParent = {
  filename: WORKSPACE_IMPORTER,
  paths: commonjs._nodeModulePaths(WORKSPACE),
};
commonjs._resolveFilename = function (request, parent, ...rest) {
  return fromCustomer(request, parent?.filename)
    ? resolveFilename.call(this, request, workspaceParent, ...rest)
    : resolveFilename.call(this, request, parent, ...rest);
};

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  // Files the app serves at `/` (images, translations, manifests), at the same paths.
  staticDirs: target.publicDir ? [path.join(SOURCE_ROOT, target.publicDir)] : [],
  framework: { name: '@storybook/react-vite', options: {} },
  core: { disableTelemetry: true },

  async viteFinal(viteConfig) {
    viteConfig.plugins = [
      resolveStubs(),
      resolveEntryStandIn(),
      resolveCustomerImportsThroughWorkspace(),
      ...(viteConfig.plugins ?? []),
      react(),
    ];

    viteConfig.resolve ??= {};
    const existing = viteConfig.resolve.alias ?? [];
    viteConfig.resolve.alias = [
      ...(Array.isArray(existing)
        ? existing
        : Object.entries(existing).map(([find, replacement]) => ({ find, replacement }))),
      { find: /^@source\//, replacement: `${SOURCE_ROOT}/` },
      // The app's own aliases (`@/…`), so its source resolves its imports as it does in its build.
      ...(target.aliases ?? []).map((alias) => ({
        find: new RegExp(
          `^${alias.prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}${alias.wildcard ? '' : '$'}`,
        ),
        replacement: path.join(SOURCE_ROOT, alias.target) + (alias.wildcard ? '/' : ''),
      })),
    ];

    // Vite searches upward from this directory for a PostCSS config: the app's own.
    viteConfig.css ??= {};
    if (target.postcss) viteConfig.css.postcss = APP_ROOT;

    viteConfig.server ??= {};
    viteConfig.server.fs = { allow: [WORKSPACE, SOURCE_ROOT] };

    return viteConfig;
  },
};

export default config;
