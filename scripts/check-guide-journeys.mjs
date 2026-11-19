import fs from 'node:fs';
import assert from 'node:assert/strict';
import { APPS, AGE_BANDS, CHECKLISTS } from '../src/content/data.ts';
const html=path=>fs.readFileSync(`dist/client/${path ? path+'/' : ''}index.html`,'utf8');
const links=markup=>[...markup.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map(m=>m[1]);
const norm=href=>href.replace(/\/$/,'');
const all=new Set(['',...APPS.map(a=>'apps/'+a.slug),...AGE_BANDS.map(a=>'age-guides/'+a.slug),...CHECKLISTS.map(c=>'checklists/'+c.slug),'help']);
const incoming=new Set();
for(const path of [...APPS.map(a=>'apps/'+a.slug),...AGE_BANDS.map(a=>'age-guides/'+a.slug),...CHECKLISTS.map(c=>'checklists/'+c.slug)]){
 const page=html(path);const section=page.match(/<section\b[^>]*aria-label="Related guides and next steps"[^>]*>([\s\S]*?)<\/section>/)?.[1];assert(section,`Missing next steps on ${path}`);
 const targets=links(section);assert(targets.length>=2,`Too few next steps on ${path}`);
 for(const href of targets){assert(href.endsWith('/'),`Noncanonical related link ${href}`);assert(all.has(norm(href).slice(1)),`Unknown destination ${href}`);if(path.startsWith('age-guides/')&&href.startsWith('/apps/'))incoming.add(norm(href).slice(1));}
}
for(const app of APPS)assert(incoming.has('apps/'+app.slug),`No age guide links to ${app.slug}`);
const home=html('');const cards=[...home.matchAll(/<a\b[^>]*aria-label="Read the ([^"]*) parent guide"[^>]*>/g)];assert.equal(cards.length,6,'Homepage should have six linked cards');
console.log(`PASS: ${APPS.length+AGE_BANDS.length+CHECKLISTS.length} guide pages have valid next-step destinations; all ${APPS.length} apps have age-guide links; six homepage cards are links.`);
