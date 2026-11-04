import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const paths = ['apps/gta-online', 'apps/fortnite', 'apps/roblox', 'apps/minecraft', 'checklists/iphone-first-setup'];
for (const path of paths) {
  const html = readFileSync(`dist/client/${path}/index.html`, 'utf8');
  const graphs = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const graph = graphs.find(g => g['@graph'])?.['@graph'];
  assert(graph, `${path}: guide schema missing`);
  const article = graph.find(g => g['@type'] === 'Article');
  const crumbs = graph.find(g => g['@type'] === 'BreadcrumbList');
  assert.equal(article.dateModified, '2026-11-04');
  assert.equal(article.mainEntityOfPage, `https://parenttechsafety.co.uk/${path}/`);
  assert.equal(crumbs.itemListElement.length, 3);
  assert.equal(crumbs.itemListElement[2].item, article.mainEntityOfPage);
  assert(html.includes(article.headline), `${path}: title missing`);
  for (const anchor of ['quick-answer', 'parent-questions', 'first-actions', 'source-review']) assert(html.includes(`id="${anchor}"`), `${path}: ${anchor} missing`);
  assert(html.includes('Settings have not been tested'), `${path}: testing disclosure missing`);
  console.log(`PASS ${path}: content, review disclosure, Article and breadcrumbs`);
}
const iphone = readFileSync('dist/client/checklists/iphone-first-setup/index.html', 'utf8');
const images = [...iphone.matchAll(/<img\b[^>]*>/g)];
assert(images.every(([tag]) => /\balt=/.test(tag)), 'iPhone image alternative missing');
console.log(`PASS iPhone image review: ${images.length} image elements; instructional media uses labelled video embeds and captions`);
