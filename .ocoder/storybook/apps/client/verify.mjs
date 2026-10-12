/**
 * Checks this Storybook the way Ocoder's capture will, so work can be confirmed before it is handed
 * back. Every catalog case is rendered in every theme, inside the same sandboxed iframe capture uses,
 * and fails on what capture fails on:
 *
 * - a declared check (`catalog.json`) not satisfied within the case timeout
 * - any console error
 * - any request to another origin, or any WebSocket (capture blocks the network)
 * - any 4xx/5xx response from the Storybook itself
 * - a broken image, or web fonts that do not finish loading
 *
 * Usage: `pnpm run verify` (builds first) or `node verify.mjs --no-build`; `--report <file>` also
 * writes the JSON summary to a file.
 * Chromium: OCODER_CHROMIUM_PATH, or Playwright's own build when unset. Prints one line per case and a JSON summary; exits non-zero
 * when any case fails.
 */
import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const here = fileURLToPath(new URL('.', import.meta.url));
const site = join(here, 'storybook-static');
const CASE_TIMEOUT_MS = 15_000;

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

if (!process.argv.includes('--no-build')) {
  execFileSync('pnpm', ['run', 'build-storybook'], { cwd: here, stdio: 'inherit' });
}
// Unset, Playwright uses its own Chromium build (the harness sandbox ships the matching one).
const executablePath = process.env.OCODER_CHROMIUM_PATH || undefined;

const catalog = JSON.parse(await readFile(join(here, 'catalog.json'), 'utf8'));
const index = JSON.parse(await readFile(join(site, 'index.json'), 'utf8'));

const server = createServer(async (request, response) => {
  const path = normalize(decodeURIComponent(new URL(request.url, 'http://x').pathname));
  const file = join(site, path === sep || path === '/' ? 'index.html' : path);
  if (!file.startsWith(site + sep)) return void response.writeHead(403).end();
  try {
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const previewOrigin = `http://127.0.0.1:${server.address().port}`;
// Capture frames each story from a different origin than the page that frames it.
const harnessUrl = `http://localhost:${server.address().port}/__ocoder_harness.html`;

// The same launch flags as capture. The framing page is served by request interception, so it has no
// network address; without LocalNetworkAccessChecks disabled, Chromium refuses to let it frame the
// loopback Storybook.
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: [
    '--disable-features=LocalNetworkAccessChecks,MediaRouter,WebRtcHideLocalIpsWithMdns',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-domain-reliability',
    '--disable-sync',
    '--dns-prefetch-disable',
  ],
});
const results = [];
try {
  for (const item of catalog.cases) {
    for (const theme of catalog.themes) {
      results.push(await verifyCase(item, theme));
    }
  }
} finally {
  await browser.close();
  server.close();
}

const failed = results.filter((result) => !result.passed);
const summary = {
  cases: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  results,
};
const reportIndex = process.argv.indexOf('--report');
if (reportIndex > 0 && process.argv[reportIndex + 1]) {
  await writeFile(process.argv[reportIndex + 1], `${JSON.stringify(summary, null, 2)}\n`);
}
for (const result of results) {
  console.log(
    `${result.passed ? 'PASS' : 'FAIL'} ${result.case}${result.passed ? '' : ` — ${result.problems.join('; ')}`}`,
  );
}
console.log(JSON.stringify(summary, null, 2));
process.exit(failed.length === 0 ? 0 : 1);

async function verifyCase(item, theme) {
  const name = `${item.storybook_story_id} [${theme}]`;
  const problems = [];
  if (!index.entries?.[item.storybook_story_id]) {
    return {
      case: name,
      passed: false,
      problems: [`story ${item.storybook_story_id} is not in the built index.json`],
    };
  }
  const context = await browser.newContext({
    viewport: { width: catalog.viewport.width, height: catalog.viewport.height },
    deviceScaleFactor: catalog.viewport.device_scale_factor,
    locale: 'en-US',
    timezoneId: 'UTC',
    reducedMotion: 'reduce',
  });
  const deadline = Date.now() + CASE_TIMEOUT_MS;
  const remaining = () => Math.max(1, deadline - Date.now());
  try {
    await context.route('**/*', async (route) => {
      const url = route.request().url();
      if (url === harnessUrl) {
        return route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<!doctype html><style>html,body,iframe{border:0;margin:0;width:100%;height:100%}</style><iframe title="Preview"></iframe>',
        });
      }
      if (new URL(url).origin === previewOrigin) return route.continue();
      problems.push(`blocked request to another origin: ${url}`);
      return route.abort('blockedbyclient');
    });
    await context.routeWebSocket(/.*/, (socket) => {
      problems.push(`blocked WebSocket: ${socket.url()}`);
      return socket.close({ code: 1008, reason: 'blocked' });
    });
    const page = await context.newPage();
    page.on('console', (message) => {
      if (message.type() === 'error') problems.push(`console error: ${message.text()}`);
    });
    page.on('pageerror', (error) => problems.push(`uncaught error: ${error.message}`));
    page.on('response', (response) => {
      if (response.status() >= 400 && new URL(response.url()).origin === previewOrigin) {
        problems.push(`HTTP ${response.status()} for ${new URL(response.url()).pathname}`);
      }
    });

    const canvas = new URL('/iframe.html', previewOrigin);
    canvas.searchParams.set('id', item.storybook_story_id);
    canvas.searchParams.set('viewMode', 'story');
    canvas.searchParams.set('globals', `theme:${theme}`);
    await page.goto(harnessUrl, { waitUntil: 'domcontentloaded', timeout: remaining() });
    const handle = page.locator('iframe[title="Preview"]');
    await handle.evaluate((iframe, src) => {
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      iframe.src = src;
    }, canvas.href);
    const frame = await (await handle.elementHandle()).contentFrame();
    await frame.waitForLoadState('load', { timeout: remaining() });

    for (const check of item.checks) {
      try {
        await runCheck(frame, check, remaining());
      } catch {
        problems.push(`check not satisfied: ${JSON.stringify(check)}`);
        const shown = await frame
          .evaluate(() => {
            const display = document.querySelector('.sb-errordisplay');
            return display && getComputedStyle(display).display !== 'none'
              ? display.textContent.replace(/\s+/g, ' ').trim().slice(0, 600)
              : null;
          })
          .catch(() => null);
        if (shown) problems.push(`Storybook error: ${shown}`);
        else {
          // No error, but nothing visible: say so, with the likely causes.
          const empty = await frame
            .evaluate(() => {
              const root = document.querySelector('#storybook-root');
              if (!root) return 'the story root is missing';
              const visible = [...root.querySelectorAll('*')].some((element) => {
                if (['STYLE', 'SCRIPT', 'TEMPLATE'].includes(element.tagName)) return false;
                const box = element.getBoundingClientRect();
                return box.width > 0 && box.height > 0;
              });
              if (visible) return null;
              return root.querySelector(':not(style):not(script)')
                ? 'rendered elements, but none is visible (zero size, hidden, or off-screen)'
                : 'rendered nothing: the component returned null, or it shows only its children or data it was not given';
            })
            .catch(() => null);
          if (empty) problems.push(empty);
        }
        break;
      }
    }
    const assets = await frame.evaluate(async () => {
      await document.fonts.ready;
      return {
        broken: Array.from(document.images)
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
        fonts: document.fonts.status,
      };
    });
    if (assets.broken.length > 0) problems.push(`broken images: ${assets.broken.join(', ')}`);
    if (assets.fonts !== 'loaded') problems.push('web fonts did not finish loading');
    await page.waitForTimeout(50);
  } catch (error) {
    problems.push(error instanceof Error ? error.message.split('\n')[0] : String(error));
  } finally {
    await context.close();
  }
  return { case: name, passed: problems.length === 0, problems: [...new Set(problems)] };
}

/** The same semantics as capture's `assertDeclaredState`. */
async function runCheck(frame, check, timeout) {
  if (check.kind === 'visible') {
    const locator = check.text
      ? frame.locator(check.selector).filter({ hasText: check.text })
      : frame.locator(check.selector);
    await locator.first().waitFor({ state: 'visible', timeout });
  } else if (check.kind === 'text') {
    await frame.waitForFunction(
      ({ selector, includes }) =>
        Array.from(document.querySelectorAll(selector)).some((element) =>
          (element.textContent ?? '').includes(includes),
        ),
      { selector: check.selector, includes: check.includes },
      { timeout },
    );
  } else if (check.kind === 'count') {
    await frame.waitForFunction(
      ({ selector, equals }) => document.querySelectorAll(selector).length === equals,
      { selector: check.selector, equals: check.equals },
      { timeout },
    );
  } else {
    await frame.waitForFunction(
      ({ selector, name, equals }) =>
        Array.from(document.querySelectorAll(selector)).some(
          (element) => element.getAttribute(name) === equals,
        ),
      { selector: check.selector, name: check.name, equals: check.equals },
      { timeout },
    );
  }
}
