import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GLOSSARY, type GlossaryEntry } from "@/content/data";
import { MessageExplainer } from "@/components/MessageExplainer";
import { RiskPill } from "@/routes/index";
import { Search } from "lucide-react";

export const Route = createFileRoute("/glossary")({
  component: Glossary,
  head: () => ({
    meta: [
      { title: "Teen slang, acronym & emoji dictionary for parents (2026)" },
      {
        name: "description",
        content:
          "Explore slang and emoji meanings, or explain a message privately on your device with our dictionary-based tool. No AI or account needed.",
      },
    ],
  }),
});

const TABS = ["All", "Slang", "Acronym", "Emoji", "Number"] as const;
const LETTERS = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function firstLetter(term: string): string {
  const c = term.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

function Glossary() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return GLOSSARY.filter(
      (g) =>
        (tab === "All" || g.kind === tab) &&
        (needle === "" ||
          g.term.toLowerCase().includes(needle) ||
          g.aliases?.some((alias) => alias.toLowerCase().includes(needle)) ||
          g.meaning.toLowerCase().includes(needle) ||
          g.context.toLowerCase().includes(needle)),
    );
  }, [tab, q]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    for (const entry of filtered) {
      const key = firstLetter(entry.term);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(entry);
    }
    return LETTERS.filter((l) => map.has(l)).map((l) => ({
      letter: l,
      entries: map.get(l)!.sort((a, b) => a.term.localeCompare(b.term)),
    }));
  }, [filtered]);

  const presentLetters = new Set(grouped.map((g) => g.letter));

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 [overflow-wrap:anywhere] md:px-8 md:py-24">
      <p className="eyebrow">Dictionary · Wording reviewed 21 September 2026</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        The full slang, acronym & emoji dictionary.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        {GLOSSARY.length} entries covering slang, acronyms, numbers and emoji. Some are newer memes;
        others are established expressions. Meanings vary between people, places and conversations.
        Start with curiosity, not assumptions.
      </p>
      <MessageExplainer />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t}
              aria-pressed={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                tab === t
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <label className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search dictionary"
            placeholder={`Search ${GLOSSARY.length} terms`}
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none ring-ring focus:ring-2"
          />
        </label>
      </div>

      {/* A–Z jump nav */}
      <nav
        aria-label="Jump to letter"
        className="sticky top-[64px] z-10 -mx-2 mt-8 flex flex-wrap gap-1 rounded-2xl border border-border bg-background/85 px-2 py-2 backdrop-blur"
      >
        {LETTERS.map((l) => {
          const active = presentLetters.has(l);
          return (
            <a
              key={l}
              href={active ? `#letter-${l}` : undefined}
              aria-disabled={!active}
              className={`min-w-8 rounded-md px-2 py-1 text-center text-xs font-semibold tracking-wide transition-colors ${
                active
                  ? "text-foreground hover:bg-secondary"
                  : "cursor-not-allowed text-muted-foreground/40"
              }`}
            >
              {l}
            </a>
          );
        })}
      </nav>

      {grouped.length === 0 && (
        <p className="mt-10 rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
          No matches. Try a different word.
        </p>
      )}

      <div className="mt-8 space-y-12">
        {grouped.map(({ letter, entries }) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-32">
            <div className="mb-4 flex items-baseline gap-4">
              <h2 className="font-display text-4xl font-semibold tracking-tight">{letter}</h2>
              <span className="rule flex-1" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {entries.length} {entries.length === 1 ? "term" : "terms"}
              </span>
            </div>
            <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
              {entries.map((g) => (
                <li
                  key={`${letter}-${g.term}`}
                  className="grid gap-3 p-5 sm:grid-cols-[160px_1fr_auto] sm:items-start"
                >
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-tight">{g.term}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {g.kind}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{g.meaning}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{g.context}</p>
                    {g.example && (
                      <p className="mt-2 border-l-2 border-border pl-3 text-sm italic text-muted-foreground">
                        {g.example}
                      </p>
                    )}
                    {g.reviewNote && (
                      <p className="mt-2 text-xs text-muted-foreground">{g.reviewNote}</p>
                    )}
                    {!g.sourceUrl && <p className="mt-2 text-xs text-muted-foreground">Individual source verification pending.</p>}
                    {g.sourceUrl && (
                      <a
                        href={g.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs underline underline-offset-4"
                      >
                        Meaning reference
                      </a>
                    )}
                  </div>
                  {g.kind === "Emoji" ? (
                    <span className="text-xs text-muted-foreground">Context matters</span>
                  ) : (
                    <RiskPill level={g.riskLevel} />
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section
        className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground"
        aria-labelledby="dictionary-sources"
      >
        <h2 id="dictionary-sources" className="font-semibold text-foreground">
          About these meanings
        </h2>
        <p className="mt-2">
          The September 2026 wording review compared the existing entries with published slang and
          emoji references, corrected ambiguous definitions and added documented examples. It is not
          a survey of what every teen uses today. Uncertain entries are labelled and excluded from
          message matching.
        </p>
        <p className="mt-2">
          Conversation labels are editorial prompts, not evidence of harm. An emoji, slang word or
          lack of a match cannot establish someone’s intentions or wellbeing.
        </p>
        <p className="mt-3">
          References:{" "}
          <a
            className="underline"
            href="https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/"
          >
            luna’s teen slang guide
          </a>
          ,{" "}
          <a
            className="underline"
            href="https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
          >
            text acronyms
          </a>
          ,{" "}
          <a className="underline" href="https://www.dictionary.com/culture/slang">
            Dictionary.com
          </a>{" "}
          and individual Emojipedia entries linked above.
        </p>
      </section>
    </div>
  );
}
