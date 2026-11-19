import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  APP_EDITORIAL,
  AGE_EDITORIAL,
  CHECKLIST_EDITORIAL,
} from "../src/content/guide-editorial.ts";
import { GUIDE_UPDATES } from "../src/content/guide-updates.ts";

const manifest = JSON.parse(readFileSync(".static-build.json", "utf8"));
assert.ok(manifest.siteUrl, "Build with the public origin to verify structured data.");
const entries = [
  ...Object.entries(APP_EDITORIAL).map(([slug, guide]) => [`/apps/${slug}`, guide]),
  ...Object.entries(AGE_EDITORIAL).map(([slug, guide]) => [`/age-guides/${slug}`, guide]),
  ...Object.entries(CHECKLIST_EDITORIAL).map(([slug, guide]) => [`/checklists/${slug}`, guide]),
  ...Object.entries(GUIDE_UPDATES).map(([slug, guide]) => [
    `/${slug === "iphone-first-setup" ? "checklists" : "apps"}/${slug}`,
    guide,
  ]),
];
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const titles = new Set();
for (const [path, guide] of entries) {
  const html = readFileSync(`${manifest.output}${path}/index.html`, "utf8");
  const graphs = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].flatMap((m) => {
    const s = JSON.parse(m[1]);
    return s["@graph"] ?? [s];
  });
  const articles = graphs.filter((s) => s["@type"] === "Article");
  const breadcrumbs = graphs.filter((s) => s["@type"] === "BreadcrumbList");
  assert.equal(articles.length, 1, `${path}: one Article`);
  assert.equal(breadcrumbs.length, 1, `${path}: one BreadcrumbList`);
  assert.equal(articles[0].headline, guide.title, `${path}: schema headline`);
  assert.equal(articles[0].description, guide.description, `${path}: schema description`);
  assert.equal(articles[0].mainEntityOfPage, `${manifest.siteUrl}${path}/`);
  assert.equal(articles[0].author.name, "Parent Tech Safety");
  assert.equal(decode(html.match(/<title>([^<]+)<\/title>/)[1]), guide.title);
  assert.equal(
    decode(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]*>/g, "")),
    guide.title,
  );
  assert.ok(!titles.has(guide.title), `Duplicate title: ${guide.title}`);
  titles.add(guide.title);
  assert.equal(breadcrumbs[0].itemListElement.length, 3);
  assert.equal(breadcrumbs[0].itemListElement[2].item, `${manifest.siteUrl}${path}/`);
  assert.match(html, /aria-label="Breadcrumb"/);
  assert.match(html, /aria-current="page"/);
  assert.match(html, new RegExp(`dateTime="${articles[0].dateModified}"`, "i"));
  for (const source of guide.checkedSources ?? [])
    assert.ok(html.includes(`href="${decode(source.url).replace(/&/g, "&amp;")}"`));
}
console.log(
  `PASS: ${entries.length} guides have matching titles, visible headings, dated authorship, one Article and matching breadcrumbs.`,
);
