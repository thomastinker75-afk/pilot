import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';
import { APPS, AGE_BANDS, CHECKLISTS } from '../src/content/data.ts';
const source = readFileSync(new URL('../src/lib/guide-analytics.ts',import.meta.url),'utf8');
const compiled = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
function session({hostname='parenttechsafety.co.uk',granted=true,path='/apps/whatsapp/',gtag=true}={}) {
  const events=[];
  const window={location:{hostname,pathname:path,search:'?message=private',hash:'#private'},ptsAnalyticsGranted:granted,...(gtag?{gtag:(...args)=>events.push(args)}:{})};
  const exports={};vm.runInNewContext(compiled,{exports,window});return {events,window,...exports};
}
test('neither event runs without explicit consent, a loaded queue, or on previews',()=>{
  for(const options of [{granted:false},{granted:undefined,gtag:false},{gtag:false},{hostname:'localhost'},{hostname:'127.0.0.1'},{hostname:'preview.pages.dev'}]) {
    const s=session(options);s.trackGuideToChecklist('/apps/whatsapp/','/checklists/social-lockdown/');s.trackTutorialOpen('Tan9jBmKIjI');assert.equal(s.events.length,0);
  }
});
test('all current public app and age sources and checklist destinations are covered',()=>{
  const s=session();
  for(const path of [...APPS.map(a=>`/apps/${a.slug}/`),...AGE_BANDS.map(a=>`/age-guides/${a.slug}/`)]) {
    for(const c of CHECKLISTS) {const before=s.events.length;s.trackGuideToChecklist(path,`/checklists/${c.slug}/`);assert.equal(s.events.length,before+1,path);}
  }
});
test('reject unknown routes, sensitive help/glossary context and arbitrary parameters',()=>{
  const s=session();
  for(const path of ['/help/','/glossary/','/apps-audit/whatsapp/','/apps/private/','/apps/whatsapp/?message=private'])s.trackGuideToChecklist(path,'/checklists/social-lockdown/');
  for(const dest of ['/help/','/checklists/private/','/checklists/social-lockdown/?message=private'])s.trackGuideToChecklist('/apps/whatsapp/',dest);
  for(const id of ['07123456789','private text','unknownABCD'])s.trackTutorialOpen(id);
  assert.equal(s.events.length,0);
  for(const path of ['/help/','/glossary/','/news/','/apps-audit/whatsapp/']){s.window.location.pathname=path;s.trackTutorialOpen('Tan9jBmKIjI');}
  assert.equal(s.events.length,0);
});
test('event payloads contain only approved public identifiers and no query or fragment data',()=>{
  const s=session();s.trackGuideToChecklist('/apps/whatsapp/','/checklists/social-lockdown/');s.trackTutorialOpen('Tan9jBmKIjI');
  assert.equal(s.events[0][1],'guide_to_checklist');assert.equal(s.events[1][1],'tutorial_open');
  for(const [, ,params] of s.events){assert.equal(params.source_guide,'/apps/whatsapp/');assert.equal(params.page_location,'https://parenttechsafety.co.uk/apps/whatsapp/');assert.equal(params.page_referrer,'');assert.doesNotMatch(JSON.stringify(params),/private|message=|#|\?/);assert.equal(params.send_to,'G-Q4PSPWFXKX');}
  assert.deepEqual(Object.keys(s.events[0][2]).sort(),['send_to','source_guide','page_location','page_referrer','checklist_id'].sort());
  s.window.ptsAnalyticsGranted=false;s.trackTutorialOpen('Tan9jBmKIjI');assert.equal(s.events.length,2);
});
test('all embedded guide tutorials are measured, and Analytics failures do not break actions',()=>{
  const ids=new Set();function scan(v){if(!v||typeof v!=='object')return;for(const [k,x] of Object.entries(v)){if(k==='youtubeId')ids.add(x);else scan(x);}}scan([APPS,CHECKLISTS]);
  const s=session();for(const id of ids)s.trackTutorialOpen(id);assert.equal(s.events.length,ids.size);
  s.window.gtag=()=>{throw Error('blocked')};assert.doesNotThrow(()=>s.trackTutorialOpen('Tan9jBmKIjI'));
});
