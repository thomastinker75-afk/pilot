import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { SITE_PATHS, PUBLIC_PATHS } from "../src/content/site-paths.ts";

const manifest = JSON.parse(readFileSync(".static-build.json", "utf8"));
const root = manifest.output;
const basePath = manifest.basePath ?? "/";
assert.deepEqual(
  manifest.paths,
  SITE_PATHS,
  "Build is out of date; rebuild after changing routes.",
);
for (const path of SITE_PATHS) {
  const html = readFileSync(join(root, path, "index.html"), "utf8");
  for (const pattern of [
    /<html\b/,
    /<title>[^<]+<\/title>/,
    /<main\b/,
    /<h1\b/,
    /name="description"/,
  ])
    assert.match(html, pattern, `Missing rendered content: ${path}`);
  if (manifest.siteUrl && PUBLIC_PATHS.includes(path)) {
    assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i,
      `Public page blocks indexing: ${path}`);
    assert.ok(
      html.includes(`rel="canonical" href="${manifest.siteUrl}${basePath}${path === "/" ? "" : path.slice(1) + "/"}"`),
      `Canonical mismatch: ${path}`,
    );
  } else
    assert.match(
      html,
      /name="robots" content="noindex, nofollow"/,
      `Preview must not be indexed: ${path}`,
    );
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    const urlPath = decodeURIComponent(match[1].split(/[?#]/)[0]);
    if (urlPath.startsWith("//")) continue;
    assert.ok(urlPath.startsWith(basePath), `Link escapes the deployment path: ${urlPath}`);
    const target = join(root, urlPath.slice(basePath.length));
    assert.ok(
      existsSync(target) || existsSync(join(target, "index.html")),
      `Missing local asset/link ${urlPath} on ${path}`,
    );
  }
}
for (const filename of ["roblox-risks.mp4", "family-link-tutorial.mp4"]) {
  const bytes = readFileSync(join(root, "media", filename));
  assert.equal(bytes.toString("ascii", 4, 8), "ftyp", `Invalid video: ${filename}`);
}
function checkScripts(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) checkScripts(file);
    else if (/\.(js|css|html)$/.test(file))
      assert.doesNotMatch(
        readFileSync(file, "utf8"),
        /ai\.gateway\.lovable|__l5e\/|LOVABLE_API_KEY|FIRECRAWL_API_KEY|api\/translate-slang/,
        `Platform dependency in ${file}`,
      );
  }
}
checkScripts(root);
assert.ok(existsSync(join(root, "404.html")), "Static 404 page is missing.");
assert.ok(existsSync(join(root, ".nojekyll")), "GitHub Pages marker is missing.");
if (manifest.siteUrl) {
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, PUBLIC_PATHS.length);
  for (const path of PUBLIC_PATHS)
    assert.ok(sitemap.includes(`<loc>${manifest.siteUrl}${basePath}${path === "/" ? "" : path.slice(1) + "/"}</loc>`));
  assert.ok(
    readFileSync(join(root, "robots.txt"), "utf8").includes(
      `Sitemap: ${manifest.siteUrl}${basePath}sitemap.xml`,
    ),
  );
}
if (process.argv.includes("--release")) {
  assert.ok(
    manifest.siteUrl,
    "Set VITE_SITE_URL to the real public origin and rebuild before release.",
  );
  assert.equal(new URL(manifest.siteUrl).protocol, "https:", "Public site must use HTTPS.");
}
console.log(
  `PASS: ${SITE_PATHS.length} rendered routes, local assets, videos, indexing settings and platform independence.`,
);
