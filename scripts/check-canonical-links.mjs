import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { SITE_PATHS } from "../src/content/site-paths.ts";
import { createCanonicalRedirects } from "../src/lib/canonical-redirects.ts";
const manifest = JSON.parse(readFileSync(".static-build.json", "utf8"));
const base = manifest.basePath;
const expected = createCanonicalRedirects(SITE_PATHS, base);
const rules = readFileSync("dist/client/_redirects", "utf8").trim().split(/\r?\n/);
assert.equal(rules.length, expected.size);
for (const line of rules) {
  const [source, destination, status] = line.split(/\s+/);
  assert.equal(expected.get(source), destination);
  assert.equal(status, "308");
  assert(!expected.has(destination));
}
let checked = 0;
for (const path of SITE_PATHS) {
  const html = readFileSync(
    `dist/client/${path === "/" ? "" : path.slice(1) + "/"}index.html`,
    "utf8",
  );
  for (const match of html.matchAll(/<a\b[^>]*href="([^"#]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathname = href.split(/[?#]/)[0];
    assert(!expected.has(pathname), `Noncanonical internal link ${href} on ${path}`);
    if (!pathname.split("/").pop()?.includes("."))
      assert(pathname.endsWith("/"), `Page link needs trailing slash: ${href} on ${path}`);
    checked++;
  }
}
assert(existsSync("dist/client/404.html"));
console.log(
  `PASS: ${SITE_PATHS.length} rendered pages, ${checked} canonical internal links and ${rules.length} permanent redirect rules with no loops.`,
);
