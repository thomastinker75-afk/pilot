import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GLOSSARY, REVIEWED } from "@/content/data";
import { RiskPill } from "@/routes/index";
import { Search } from "lucide-react";

export const Route = createFileRoute("/glossary")({
  component: Glossary,
  head: () => ({
    meta: [
      { title: "Teen slang, acronym & emoji glossary for parents" },
      { name: "description", content: "Plain-English explanations of slang, acronyms and emoji your child may use online — with calm guidance on when it’s worth a conversation." },
    ],
  }),
});

const TABS = ["All", "Slang", "Acronym", "Emoji"] as const;

function Glossary() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return GLOSSARY.filter((g) =>
      (tab === "All" || g.kind === tab) &&
      (q === "" || g.term.toLowerCase().includes(q.toLowerCase()) || g.meaning.toLowerCase().includes(q.toLowerCase()))
    );
  }, [tab, q]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Glossary · Reviewed {REVIEWED}</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        Slang, acronyms & emoji — decoded calmly.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Language online changes weekly. We focus on what a term <em>can</em> mean,
        and on when it’s worth a chat — not a confrontation.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                tab === t ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:bg-secondary"
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
            placeholder="Search terms"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none ring-ring focus:ring-2"
          />
        </label>
      </div>

      <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {filtered.map((g) => (
          <li key={g.term} className="grid gap-3 p-5 sm:grid-cols-[140px_1fr_auto] sm:items-center">
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight">{g.term}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{g.kind}</p>
            </div>
            <div>
              <p className="text-sm font-medium">{g.meaning}</p>
              <p className="mt-1 text-sm text-muted-foreground">{g.context}</p>
            </div>
            <RiskPill level={g.riskLevel} />
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="p-10 text-center text-sm text-muted-foreground">No matches. Try a different word.</li>
        )}
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        Editorial note: meanings depend on context, group, and platform. The same emoji can be playful in
        one chat and concerning in another. When in doubt, ask — without anger.
      </p>
    </div>
  );
}
