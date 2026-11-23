import { createFileRoute, Link } from "@tanstack/react-router";
import { APPS } from "@/content/data";
import { useMemo, useState } from "react";
import { filterApps } from "@/content/discovery";
import { ArrowUpRight, Gamepad2, MessageSquare, Smartphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/apps/")({
  component: AppsIndex,
  head: () => ({
    meta: [
      { title: "App & game guides for parents — Parent Tech Safety" },
      {
        name: "description",
        content:
          "What each app and game actually is, the real risks, and settings to review. TikTok, Snapchat, Roblox, Fortnite, Discord and more.",
      },
    ],
  }),
});

function icon(c: string) {
  if (c === "Game") return <Gamepad2 className="size-5" />;
  if (c === "Messaging") return <MessageSquare className="size-5" />;
  if (c === "Video") return <Sparkles className="size-5" />;
  return <Smartphone className="size-5" />;
}

function AppsIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Social", "Messaging", "Video", "Game"];
  const filtered = useMemo(() => filterApps(query, category), [query, category]);
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Apps & games</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        The platforms in your child’s pocket — explained.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Each card covers the minimum age, why kids use it, the real risks, and the precise settings
        to check. No hype, no panic.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5 md:p-6">
        <label htmlFor="app-search" className="block font-semibold">
          Find an app or game
        </label>
        <input
          id="app-search"
          type="search"
          value={query}
          maxLength={100}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try Roblox, WhatsApp or AI"
          autoComplete="off"
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base"
        />
        <div
          className="mt-4 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter apps by category"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${category === c ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:bg-secondary"}`}
            >
              {c === "Game" ? "Games" : c}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p role="status" className="text-sm text-muted-foreground">
            {filtered.length} of {APPS.length} guides shown
          </p>
          {(query || category !== "All") && (
            <button
              type="button"
              className="text-sm font-semibold underline underline-offset-4"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
      {filtered.length === 0 && (
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">No matching app guides</h2>
          <p className="mt-2 text-muted-foreground">
            Try another name or clear the filters to see all guides. An app missing from this list
            is not necessarily safe or unsafe.
          </p>
        </div>
      )}
      <noscript>
        <p className="mt-4">
          Enable JavaScript to use search and filters. All app guides are listed below.
        </p>
      </noscript>

      {(["Social", "Messaging", "Video", "Game"] as const).map((cat) => {
        const items = filtered.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="mt-16 first:mt-12">
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {cat}
              </h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {items.length} {items.length === 1 ? "app" : "apps"}
              </span>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {items.map((a) => (
                <article
                  key={a.slug}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <header className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      {icon(a.category)}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-2xl font-semibold tracking-tight">
                          {a.name}
                        </h3>
                        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">
                          {a.minAge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {a.category}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        UK age assurance:{" "}
                        <span className="font-semibold text-foreground">{a.ukAgeAssurance}</span>
                      </p>
                    </div>
                  </header>

                  <p className="mt-4 text-sm text-muted-foreground">{a.why}</p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow !text-destructive">Risks</p>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {a.risks.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-destructive" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">Settings</p>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {a.settings.map((s) => (
                          <li key={s} className="flex gap-2">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/apps/$slug/"
                    params={{ slug: a.slug }}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Know more about {a.name} <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
