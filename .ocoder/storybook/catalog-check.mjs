/**
 * Checks `catalog.json` against the format Ocoder's Visual Previews accepts, so a catalog that would
 * be refused after the run is reported during it. `verify.mjs` runs this first.
 *
 * The rules mirror the catalog contract (`@ocoder/preview-contracts`); a test in the generator keeps
 * the two in agreement. Plain JavaScript with no imports: this folder installs only what the stories
 * need.
 */

const KEY = /^[a-z0-9][a-z0-9._-]{0,127}$/;
const RECORD_ID = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}$/;
const GIT_SHA = /^[a-f0-9]{40}$/;
const ATTRIBUTE_NAME = /^[a-zA-Z][a-zA-Z0-9:_-]{0,127}$/;
const KEY_HINT =
  'lowercase letters, digits, ".", "_" or "-", starting with a letter or digit, at most 128';

const CHECK_FIELDS = {
  visible: { required: ['selector'], optional: ['text'] },
  text: { required: ['selector', 'includes'], optional: [] },
  count: { required: ['selector', 'equals'], optional: [] },
  attribute: { required: ['selector', 'name', 'equals'], optional: [] },
};

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isAssetPath(value) {
  return (
    typeof value === 'string' &&
    value.length >= 1 &&
    value.length <= 1024 &&
    // eslint-disable-next-line no-control-regex
    !/[\\\x00-\x1f\x7f%?#:]/.test(value) &&
    value.split('/').every((part) => part !== '' && part !== '.' && part !== '..')
  );
}

/** Every problem with the catalog, each naming the field; empty when it is valid. */
export function catalogProblems(catalog) {
  const problems = [];
  const report = (path, message) => problems.push(`${path}: ${message}`);
  const keys = (value, path, allowed) => {
    for (const key of Object.keys(value)) {
      if (!allowed.includes(key))
        report(`${path}.${key}`, `unknown field; allowed: ${allowed.join(', ')}`);
    }
  };
  const key = (value, path) => {
    if (typeof value !== 'string' || !KEY.test(value)) report(path, `must be a key (${KEY_HINT})`);
  };
  const text = (value, path, min, max) => {
    if (typeof value !== 'string' || value.length < min || value.length > max) {
      report(path, `must be a string of ${min} to ${max} characters`);
    }
  };
  const integer = (value, path, min, max) => {
    if (!Number.isInteger(value) || value < min || value > max) {
      report(path, `must be a whole number from ${min} to ${max}`);
    }
  };

  if (!isObject(catalog)) return ['catalog: must be an object'];
  keys(catalog, 'catalog', ['schema_version', 'target_id', 'viewport', 'themes', 'cases']);
  if (catalog.schema_version !== 1) report('schema_version', 'must be 1');
  key(catalog.target_id, 'target_id');

  if (!isObject(catalog.viewport)) report('viewport', 'must be an object');
  else {
    keys(catalog.viewport, 'viewport', ['viewport_key', 'width', 'height', 'device_scale_factor']);
    key(catalog.viewport.viewport_key, 'viewport.viewport_key');
    integer(catalog.viewport.width, 'viewport.width', 100, 4096);
    integer(catalog.viewport.height, 'viewport.height', 100, 4096);
    const scale = catalog.viewport.device_scale_factor;
    if (typeof scale !== 'number' || Number.isNaN(scale) || scale < 1 || scale > 3) {
      report('viewport.device_scale_factor', 'must be a number from 1 to 3');
    }
  }

  if (!Array.isArray(catalog.themes) || catalog.themes.length < 1 || catalog.themes.length > 16) {
    report('themes', 'must list 1 to 16 themes');
  } else {
    catalog.themes.forEach((theme, index) => key(theme, `themes[${index}]`));
    if (new Set(catalog.themes).size !== catalog.themes.length)
      report('themes', 'Duplicate theme keys');
  }

  if (!Array.isArray(catalog.cases) || catalog.cases.length < 1 || catalog.cases.length > 1000) {
    report('cases', 'must list 1 to 1000 cases');
    return problems;
  }
  const scenarios = new Set();
  const bindings = new Map();
  catalog.cases.forEach((item, index) => {
    const at = `cases[${index}]`;
    if (!isObject(item)) return report(at, 'must be an object');
    keys(item, at, [
      'component_key',
      'scenario_key',
      'checkpoint_key',
      'source_binding',
      'storybook_story_id',
      'required',
      'checks',
      'capture_selector',
    ]);
    key(item.component_key, `${at}.component_key`);
    key(item.scenario_key, `${at}.scenario_key`);
    key(item.checkpoint_key, `${at}.checkpoint_key`);
    key(item.storybook_story_id, `${at}.storybook_story_id`);
    if (typeof item.required !== 'boolean') report(`${at}.required`, 'must be true or false');
    if (item.capture_selector !== undefined)
      text(item.capture_selector, `${at}.capture_selector`, 1, 512);

    const binding = item.source_binding;
    if (!isObject(binding)) report(`${at}.source_binding`, 'must be an object');
    else {
      keys(binding, `${at}.source_binding`, ['file', 'export_name', 'quarry_evidence']);
      if (!isAssetPath(binding.file)) {
        report(
          `${at}.source_binding.file`,
          'must be a relative path with no "..", "%", "?", "#" or ":"',
        );
      }
      text(binding.export_name, `${at}.source_binding.export_name`, 1, 128);
      const evidence = binding.quarry_evidence;
      if (evidence !== undefined) {
        if (!isObject(evidence))
          report(`${at}.source_binding.quarry_evidence`, 'must be an object');
        else {
          keys(evidence, `${at}.source_binding.quarry_evidence`, [
            'git_sha',
            'snapshot_id',
            'component_id',
          ]);
          if (typeof evidence.git_sha !== 'string' || !GIT_SHA.test(evidence.git_sha)) {
            report(`${at}.source_binding.quarry_evidence.git_sha`, 'must be a 40-character commit');
          }
          for (const name of ['snapshot_id', 'component_id']) {
            if (typeof evidence[name] !== 'string' || !RECORD_ID.test(evidence[name])) {
              report(`${at}.source_binding.quarry_evidence.${name}`, 'must be an ID');
            }
          }
        }
      }
    }

    if (!Array.isArray(item.checks) || item.checks.length < 1 || item.checks.length > 32) {
      report(`${at}.checks`, 'must list 1 to 32 checks');
    } else {
      item.checks.forEach((check, checkIndex) => {
        const here = `${at}.checks[${checkIndex}]`;
        if (!isObject(check)) return report(here, 'must be an object');
        const fields = CHECK_FIELDS[check.kind];
        if (!fields) {
          return report(`${here}.kind`, `must be one of: ${Object.keys(CHECK_FIELDS).join(', ')}`);
        }
        keys(check, here, ['kind', ...fields.required, ...fields.optional]);
        text(check.selector, `${here}.selector`, 1, 512);
        if (check.kind === 'visible' && check.text !== undefined)
          text(check.text, `${here}.text`, 0, 512);
        if (check.kind === 'text') text(check.includes, `${here}.includes`, 1, 2048);
        if (check.kind === 'count') integer(check.equals, `${here}.equals`, 0, 10000);
        if (check.kind === 'attribute') {
          if (typeof check.name !== 'string' || !ATTRIBUTE_NAME.test(check.name)) {
            report(`${here}.name`, 'must be an attribute name');
          }
          text(check.equals, `${here}.equals`, 0, 2048);
        }
      });
    }

    const scenario = `${item.component_key}:${item.scenario_key}:${item.checkpoint_key}`;
    if (scenarios.has(scenario)) {
      report(
        at,
        `Duplicate scenario ${scenario}: give each case of a component its own scenario_key`,
      );
    }
    scenarios.add(scenario);
    if (isObject(binding)) {
      const bound = `${binding.file}:${binding.export_name}`;
      if (bindings.has(item.component_key) && bindings.get(item.component_key) !== bound) {
        report(
          at,
          'Component key has conflicting source bindings: cases of one component share its source_binding',
        );
      }
      bindings.set(item.component_key, bound);
    }
  });
  return problems;
}
