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

type Direction = "slangToEnglish" | "englishToSlang";

const DIRECTION_META: Record<
  Direction,
  { from: string; to: string; placeholder: string }
> = {
  slangToEnglish: {
    from: "Teen slang",
    to: "Plain English",
    placeholder:
      "Paste a message, e.g. “fr fr that fit is mid ngl, but the rizz is wild 💀🔥”",
  },
  englishToSlang: {
    from: "Plain English",
    to: "Teen slang",
    placeholder:
      "Type something in plain English, e.g. “That outfit is honestly amazing.”",
  },
};

function Translator() {
  const [direction, setDirection] = useState<Direction>("slangToEnglish");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const meta = DIRECTION_META[direction];

  async function translate() {
    const text = input.trim();
    if (!text || loading) return;
    setLoading(true);
    setError(null);
    setOutput("");
    try {
      const res = await fetch("/api/translate-slang", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text, direction }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        translation?: string;
        error?: string;
      };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setOutput(data.translation ?? "");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  function swap() {
    setDirection((d) =>
      d === "slangToEnglish" ? "englishToSlang" : "slangToEnglish",
    );
    setInput(output);
    setOutput(input);
    setError(null);
  }

  return (
    <section
      aria-labelledby="translator-heading"
      className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <Sparkles className="size-3.5" /> AI translator
          </p>
          <h2
            id="translator-heading"
            className="mt-2 font-display text-3xl tracking-tight md:text-4xl"
          >
            Slang ⇄ plain English.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Paste a message you’ve seen and get a calm, plain-English
            translation — with a flag if anything sounds risky. Powered by AI;
            always double-check tone and context.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {meta.from}
          </p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={meta.placeholder}
            maxLength={2000}
            rows={6}
            className="mt-2 w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
          />
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{input.length}/2000</span>
            <button
              type="button"
              onClick={() => {
                setInput("");
                setOutput("");
                setError(null);
              }}
              className="hover:text-foreground"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-col">
          <button
            type="button"
            onClick={swap}
            aria-label="Swap translation direction"
            className="rounded-full border border-border bg-background p-2 transition-colors hover:bg-secondary"
          >
            <ArrowLeftRight className="size-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {meta.to}
          </p>
          <div className="mt-2 min-h-[9rem] whitespace-pre-wrap text-sm">
            {loading ? (
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Loader2 className="size-4 animate-spin" /> Translating…
              </span>
            ) : error ? (
              <span className="text-destructive">{error}</span>
            ) : output ? (
              output
            ) : (
              <span className="text-muted-foreground/70">
                Translation will appear here.
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Nothing you type is stored. Avoid pasting personal information.
        </p>
        <button
          type="button"
          onClick={translate}
          disabled={loading || !input.trim()}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity disabled:opacity-50"
        >
          {loading && <Loader2 className="size-4 animate-spin" />}
          Translate
        </button>
      </div>
    </section>
  );
}

