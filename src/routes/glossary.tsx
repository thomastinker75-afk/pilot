import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GLOSSARY, REVIEWED, type GlossaryEntry } from "@/content/data";
import { RiskPill } from "@/routes/index";
import { ArrowLeftRight, Loader2, Search, Sparkles } from "lucide-react";

export const Route = createFileRoute("/glossary")({
  component: Glossary,
  head: () => ({
    meta: [
      { title: "Teen slang, acronym & emoji dictionary for parents (2026)" },
      {
        name: "description",
        content:
          "A–Z dictionary of the slang, acronyms, numbers and emoji UK teens use online. Reviewed monthly with calm guidance on when it’s worth a conversation.",
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
          g.meaning.toLowerCase().includes(needle) ||
          g.context.toLowerCase().includes(needle))
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
    <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Living dictionary · Reviewed {REVIEWED}</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        The full slang, acronym & emoji dictionary.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        {GLOSSARY.length}+ terms UK teens actually use right now — from TikTok memes
        to group-chat acronyms. We review trends every month against TikTok, Reddit,
        Common Sense Media, Internet Matters and NSPCC Net Aware, and update this
        page so you can keep up without doom-scrolling.
      </p>

      <Translator />



      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t}
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
            placeholder="Search 180+ terms"
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
              <h2 className="font-display text-4xl font-semibold tracking-tight">
                {letter}
              </h2>
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
                    <p className="font-display text-2xl font-semibold tracking-tight">
                      {g.term}
                    </p>
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
                  </div>
                  <RiskPill level={g.riskLevel} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        Editorial note: meanings depend on context, group and platform. The same
        emoji can be playful in one chat and concerning in another. We review this
        dictionary monthly and add new terms as they trend — last review{" "}
        {REVIEWED}. Spotted a missing word? Tell us via the help page.
      </p>
    </div>
  );
}
