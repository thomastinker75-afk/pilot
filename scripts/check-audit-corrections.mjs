import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { SITE_PATHS } from '../src/content/site-paths.ts';
const manifest=JSON.parse(readFileSync('.static-build.json','utf8'));
const html=path=>readFileSync(`${manifest.output}/${path}/index.html`,'utf8');
const help=html('help');
assert.ok(help.includes('Do not screenshot, photograph, download or forward sexual images'));
assert.ok(help.includes('NCMEC'));
assert.ok(!help.includes('Photograph the screen with another device'));
const age=html('age-guides/0-4');
assert.ok(age.includes('March 2026') && age.includes('1 hour a day'));
assert.ok(!age.includes('UK guidance does not set an hour limit for under-5s'));
assert.ok(html('apps/roblox').includes('Restricted content is for ages 18+'));
const news=html('news');
for(const id of ['research','articles','videos']) assert.ok(news.includes(`id="${id}"`));
assert.ok(news.includes('Acta Paediatrica'));
assert.ok(!news.includes('Journal of Applied Psychology'));
for(const path of SITE_PATHS){
 const page=html(path.slice(1));
 assert.ok(page.includes('property="og:image"'),path);
 assert.ok(page.includes('href="#main-content"'),path);
 assert.ok(!page.includes('<iframe'),`Player connected before activation: ${path}`);
 if(path.startsWith('/apps-audit')) assert.ok(page.includes('content="noindex, nofollow"'),path);
}
console.log('PASS: safety corrections, research sections, sharing metadata, skip links and opt-in players.');
