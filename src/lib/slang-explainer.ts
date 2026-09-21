import { GLOSSARY, type GlossaryEntry } from "../content/data.ts";

export const MESSAGE_LIMIT = 2000;
export type Match = { start: number; end: number; text: string; entries: GlossaryEntry[] };

// Keep offsets in the original message, including multi-codepoint emoji.
function normalizedMessage(text: string) {
  let value = "";
  const starts: number[] = [],
    ends: number[] = [];
  for (const { segment, index } of new Intl.Segmenter("en", { granularity: "grapheme" }).segment(
    text,
  )) {
    const normalized = segment
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/\uFE0E|\uFE0F|\p{Emoji_Modifier}/gu, "");
    value += normalized;
    for (let i = 0; i < normalized.length; i++) {
      starts.push(index);
      ends.push(index + segment.length);
    }
  }
  return { value, starts, ends };
}

const normalize = (text: string) =>
  text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/\uFE0E|\uFE0F|\p{Emoji_Modifier}/gu, "");
const word = /[\p{L}\p{N}_]/u;
const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const aliases = new Map<string, GlossaryEntry[]>();
for (const entry of GLOSSARY) {
  if (entry.matchable === false) continue;
  for (const alias of [...entry.term.split(" / "), ...(entry.aliases ?? [])]) {
    const key = normalize(alias.trim());
    if (!key) continue;
    const existing = aliases.get(key) ?? [];
    if (!existing.includes(entry)) existing.push(entry);
    aliases.set(key, existing);
  }
}
const rules = [...aliases].map(([alias, entries]) => ({
  alias,
  entries,
  pattern: new RegExp(escape(alias).replace(/\s+/g, "\\s+"), "gu"),
}));

export function explainMessage(text: string): Match[] {
  if (text.length > MESSAGE_LIMIT) throw new RangeError(`Use at most ${MESSAGE_LIMIT} characters.`);
  const { value, starts, ends } = normalizedMessage(text);
  const protectedSpans = [
    ...value.matchAll(/(?:https?:\/\/|www\.)\S+|[\p{L}\p{N}._%+-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,}/gu),
  ].map((m) => [m.index, m.index + m[0].length]);
  const candidates: Match[] = [];
  for (const { alias, entries, pattern } of rules) {
    pattern.lastIndex = 0;
    for (const match of value.matchAll(pattern)) {
      const start = match.index,
        end = start + match[0].length;
      if (
        (start > 0 && starts[start] === starts[start - 1]) ||
        (end < value.length && ends[end - 1] === ends[end])
      )
        continue;
      const before = Array.from(value.slice(0, start)).at(-1) ?? "";
      const after = Array.from(value.slice(end))[0] ?? "";
      if (
        (word.test(alias[0]) && word.test(before)) ||
        (word.test(alias.at(-1)!) && word.test(after))
      )
        continue;
      if (protectedSpans.some(([a, b]) => start < b && end > a)) continue;
      candidates.push({
        start: starts[start],
        end: ends[end - 1],
        text: text.slice(starts[start], ends[end - 1]),
        entries,
      });
    }
  }
  // Prefer whole phrases to their component words, then reject overlapping matches.
  candidates.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
  const matches: Match[] = [];
  let cursor = 0;
  for (const candidate of candidates) {
    if (candidate.start < cursor) continue;
    matches.push(candidate);
    cursor = candidate.end;
  }
  return matches;
}
