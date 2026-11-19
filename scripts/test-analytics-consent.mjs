import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(new URL('../src/components/AnalyticsConsent.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;

function session({ hostname = 'parenttechsafety.co.uk', preference, storageBlocked = false } = {}) {
  const values = new Map(preference ? [['pts-analytics-consent', preference]] : []);
  const scripts = [], cookieWrites = [], listeners = new Map();
  let visible = false, effect, mounted = false, reloads = 0;
  const localStorage = {
    getItem(key) { if (storageBlocked) throw Error('blocked'); return values.get(key) ?? null; },
    setItem(key, value) { if (storageBlocked) throw Error('blocked'); values.set(key, value); },
  };
  const window = { location: { hostname, reload() { reloads++; } }, addEventListener: (key, fn) => listeners.set(key, fn), removeEventListener: key => listeners.delete(key) };
  const document = {
    head: { appendChild(script) { scripts.push(script); } },
    createElement(tag) { assert.equal(tag, 'script'); return {}; },
    get cookie() { return '_ga=123; _ga_Q4PSPWFXKX=456; unrelated=keep'; },
    set cookie(value) { cookieWrites.push(value); },
  };
  const jsx = (type, props) => ({ type, props });
  const exports = {};
  const context = { exports, window, document, localStorage, require(name) {
    if (name === 'react') return { useState: () => [visible, value => { visible = value; }], useEffect: callback => { if (!mounted) effect = callback; } };
    if (name === 'react/jsx-runtime') return { jsx, jsxs: jsx };
    if (name === '@tanstack/react-router') return { Link: 'a' };
    throw Error(`Unexpected import ${name}`);
  } };
  vm.runInNewContext(compiled, context);
  function render() { const tree = exports.AnalyticsConsent(); if (!mounted) { mounted = true; effect?.(); return exports.AnalyticsConsent(); } return tree; }
  function choose(label) {
    const find = node => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'button' && node.props.children === label) return node;
      return [node.props?.children].flat().map(find).find(Boolean);
    };
    const button = find(render()); assert(button, `${label} button missing`); button.props.onClick();
  }
  return { window, scripts, values, cookieWrites, listeners, render, choose, reloads: () => reloads };
}

test('no Google script or commands before consent, or after initial rejection', () => {
  for (const preference of [undefined, 'rejected']) {
    const s = session({ preference }); s.render();
    assert.equal(s.scripts.length, 0); assert.equal(s.window.dataLayer, undefined);
    if (!preference) { s.choose('Reject analytics'); assert.equal(s.values.get('pts-analytics-consent'), 'rejected'); assert.equal(s.scripts.length, 0); }
  }
});
test('acceptance queues valid Google Arguments commands before loading the tag', () => {
  const s = session(); s.render(); s.choose('Accept analytics');
  assert.equal(s.scripts.length, 1); assert.match(s.scripts[0].src, /id=G-Q4PSPWFXKX$/);
  assert.equal(s.scripts[0].async, true);
  const queue = s.window.dataLayer;
  for (const command of queue) {
    assert.equal(Array.isArray(command), false, 'Arrays are not valid gtag command objects');
    assert.equal(Object.prototype.toString.call(command), '[object Arguments]');
  }
  assert.equal(queue[0][0], 'consent'); assert.equal(queue[0][2].analytics_storage, 'granted');
  for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization']) assert.equal(queue[0][2][key], 'denied');
  assert.equal(queue[1][0], 'js'); assert.equal(queue[2][0], 'config'); assert.equal(queue[2][1], 'G-Q4PSPWFXKX');
  assert.equal(queue[2][2].allow_google_signals, false); assert.equal(queue[2][2].allow_ad_personalization_signals, false);
});
test('returning consent and reopening settings do not initialise tracking twice', () => {
  const s = session({ preference: 'accepted' }); s.render();
  s.listeners.get('pts-open-analytics')(); s.choose('Accept analytics');
  assert.equal(s.scripts.length, 1); assert.equal(s.window.dataLayer.length, 3);
});
test('withdrawing consent clears Analytics cookies, reloads, and stays off next visit', () => {
  const s = session({ preference: 'accepted' }); s.render(); s.listeners.get('pts-open-analytics')(); s.choose('Reject analytics');
  assert.equal(s.values.get('pts-analytics-consent'), 'rejected'); assert.equal(s.reloads(), 1);
  assert(s.cookieWrites.some(value => value.startsWith('_ga=;'))); assert(s.cookieWrites.some(value => value.startsWith('_ga_Q4PSPWFXKX=;')));
  assert(s.cookieWrites.every(value => !value.startsWith('unrelated=')));
  const next = session({ preference: s.values.get('pts-analytics-consent') }); next.render(); assert.equal(next.scripts.length, 0);
});
test('localhost and preview hosts never load production tracking, including saved acceptance', () => {
  for (const hostname of ['localhost', '127.0.0.1', 'preview.pages.dev']) {
    const s = session({ hostname, preference: 'accepted' }); assert.equal(s.render(), null); assert.equal(s.scripts.length, 0);
  }
});
test('blocked storage still allows an explicit consent choice for this visit', () => {
  const s = session({ storageBlocked: true }); s.render(); s.choose('Accept analytics'); assert.equal(s.scripts.length, 1);
});
