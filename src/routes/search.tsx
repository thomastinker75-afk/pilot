import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { searchEntries, type SearchEntry } from "@/content/discovery";
import { publicPath } from "@/lib/public-path";

export const Route = createFileRoute("/search")({
  component: SearchPage,
  head: () => ({
    meta: [
      { title: "Search guides and dictionary — Parent Tech Safety" },
      {
        name: "description",
        content:
          "Find existing app guides, setup checklists, age advice and possible slang meanings.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});
const kinds: ("All" | SearchEntry["kind"])[] = [
  "All",
  "App or game",
  "Age guide",
  "Checklist",
  "Dictionary",
  "Website",
];
function SearchPage() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<(typeof kinds)[number]>("All");
  const results = useMemo(() => searchEntries(query), [query]);
  const filtered = results.filter((r) => kind === "All" || r.kind === kind);
  const ready = query.trim().length >= 2;
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <p className="eyebrow">Find the guidance you need</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
        Search Parent Tech Safety
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Look for an app, a setting, your child’s age or a word you don’t recognise.
      </p>
      <label htmlFor="site-search" className="mt-8 block font-semibold">
        What are you looking for?
      </label>
      <div className="relative mt-2">
        <Search className="pointer-events-none absolute left-4 top-4 size-5 text-muted-foreground" />
        <input
          id="site-search"
          type="search"
          value={query}
          maxLength={160}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try WhatsApp, screen time or iPhone"
          aria-describedby="search-privacy"
          autoComplete="off"
          className="w-full rounded-xl border border-border bg-card py-3.5 pl-12 pr-4 text-base"
        />
      </div>
      <p id="search-privacy" className="mt-3 text-sm text-muted-foreground">
        Search runs on this device. Your words aren’t sent to our servers or analytics. Leave out
        names and private messages.
      </p>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter search results">
        {kinds.map((k) => (
          <button
            type="button"
            key={k}
            aria-pressed={kind === k}
            onClick={() => setKind(k)}
            className={`rounded-full border px-4 py-2 text-sm font-medium ${kind === k ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:bg-secondary"}`}
          >
            {k === "Website"
              ? "Other pages"
              : k === "App or game"
                ? "Apps & games"
                : k === "Age guide"
                  ? "Age guides"
                  : k === "Checklist"
                    ? "Checklists"
                    : k}
          </button>
        ))}
      </div>
      <p role="status" className="mt-6 text-sm text-muted-foreground">
        {ready
          ? `${filtered.length} ${filtered.length === 1 ? "result" : "results"} found${kind === "All" ? "" : " in this category"}.`
          : "Enter at least two letters or numbers to search."}
      </p>
      {ready && filtered.length > 0 && (
        <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {filtered.map((r) => (
            <li key={`${r.kind}-${r.href}-${r.title}`} className="p-5 md:p-6">
              <p className="text-sm text-muted-foreground">{r.kind}</p>
              <h2 className="mt-1 font-display text-xl font-semibold">
                <a href={publicPath(r.href)} className="underline underline-offset-4">
                  {r.title}
                </a>
              </h2>
              <p className="mt-2 text-muted-foreground">{r.description}</p>
            </li>
          ))}
        </ul>
      )}
      {ready && filtered.length === 0 && (
        <div className="mt-5 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">No matching guidance found</h2>
          <p className="mt-3 text-muted-foreground">
            Try a shorter phrase, another spelling or a different category. A search result cannot
            tell you whether a situation is safe.
          </p>
          {kind !== "All" && (
            <button
              type="button"
              className="mt-4 font-semibold underline"
              onClick={() => setKind("All")}
            >
              Search all categories
            </button>
          )}
        </div>
      )}
      {!ready && (
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">A few useful starting points</h2>
          <ul className="mt-4 space-y-3">
            {[
              ["/apps/", "Browse apps and games"],
              ["/checklists/", "Set up a phone or account"],
              ["/glossary/", "Explain a message privately"],
              ["/#concern-heading", "Choose a concern"],
            ].map(([href, label]) => (
              <li key={href}>
                <a className="font-medium underline underline-offset-4" href={publicPath(href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-8">
        Worried about something that has happened?{" "}
        <a className="font-semibold underline underline-offset-4" href={publicPath("/help/")}>
          Go straight to Get Help
        </a>
        .
      </p>
      <noscript>
        <p className="mt-5">
          Search needs JavaScript. Use the navigation or the starting points above to browse the
          guides.
        </p>
      </noscript>
    </div>
  );
}
