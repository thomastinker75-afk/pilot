import assert from "node:assert/strict";
import { test } from "node:test";
import { explainMessage, MESSAGE_LIMIT } from "../src/lib/slang-explainer.ts";
import { GLOSSARY } from "../src/content/data.ts";

test("whole phrases, case, spacing and apostrophes", () => {
  const matches = explainMessage("NO   CAP! I’m dead, fit check, six-seven, bussin'");
  assert.deepEqual(
    matches.map((m) => m.text),
    ["NO   CAP", "I’m dead", "fit check", "six-seven", "bussin'"],
  );
});
test("no substring matches inside words, numbers, email addresses or URLs", () => {
  assert.deepEqual(
    explainMessage("capital suspected firewood 1670 sus@example.com https://example.com/sus"),
    [],
  );
});
test("ambiguous abbreviations retain both entries instead of picking an intent", () => {
  const [match] = explainMessage("op");
  assert.deepEqual(
    match.entries.map((e) => e.term),
    ["OP", "Opp / Opps"],
  );
});
test("repeated emoji, skin tone and variation selectors preserve input offsets", () => {
  const message = "🫶🏽💀💀 ❄ snow ❄️";
  const matches = explainMessage(message);
  assert.deepEqual(
    matches.map((m) => m.text),
    ["🫶🏽", "💀", "💀", "❄", "❄️"],
  );
  for (const m of matches) assert.equal(message.slice(m.start, m.end), m.text);
});
test("does not split a joined emoji into a different meaning", () => {
  assert.deepEqual(explainMessage("🍄‍🟫"), []);
});
test("leaves unknown and ordinary text alone, without guessing", () => {
  assert.deepEqual(explainMessage("please collect groceries tomorrow zzznewterm"), []);
  assert.deepEqual(explainMessage("212 mango mustard"), []);
});
test("does not interpret markup and rejects excessive input", () => {
  const input = '<script>alert("sus")</script>';
  const match = explainMessage(input)[0];
  assert.equal(match.text, "sus");
  assert.equal(input.slice(0, match.start), '<script>alert("');
  assert.throws(() => explainMessage("x".repeat(MESSAGE_LIMIT + 1)), RangeError);
  assert.deepEqual(explainMessage(""), []);
});
test("all enabled entries match their complete headword without losing offsets", () => {
  for (const entry of GLOSSARY.filter((e) => e.matchable !== false)) {
    for (const alias of [...entry.term.split(" / "), ...(entry.aliases ?? [])]) {
      assert.ok(
        explainMessage(alias).some((m) => m.entries.includes(entry)),
        `Missing ${entry.term}: ${alias}`,
      );
    }
  }
});
