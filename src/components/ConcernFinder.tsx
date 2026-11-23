import { useState } from "react";
import { CONCERNS } from "@/content/discovery";
import { publicPath } from "@/lib/public-path";

export function ConcernFinder() {
  const [selected, setSelected] = useState<string | null>(null);
  const concern = CONCERNS.find((c) => c.id === selected);
  return (
    <section aria-labelledby="concern-heading" className="border-y border-border py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Find a starting point</p>
          <h2 id="concern-heading" className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            What are you worried about?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Choose a concern to find a few useful guides. You don’t need to know the name of an app.
          </p>
          <a
            href={publicPath("/help/")}
            className="mt-5 inline-block font-semibold underline underline-offset-4"
          >
            Something has happened? Open Get Help
          </a>
        </div>
        <div>
          <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Choose a concern">
            {CONCERNS.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={selected === c.id}
                aria-controls="concern-results"
                onClick={() => setSelected(c.id)}
                className={`min-h-14 rounded-xl border px-4 py-3 text-left text-base font-medium transition-colors ${selected === c.id ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:bg-secondary"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div id="concern-results" aria-live="polite" aria-atomic="true" className="mt-5">
            {concern ? (
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold">{concern.label}</h3>
                <p className="mt-2 text-muted-foreground">{concern.intro}</p>
                <ul className="mt-4 divide-y divide-border">
                  {concern.links.map((l) => (
                    <li key={l.href} className="py-3">
                      <a
                        href={publicPath(l.href)}
                        className="font-semibold underline underline-offset-4"
                      >
                        {l.title}
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">{l.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Choose any topic above to see where to start.
              </p>
            )}
          </div>
          <noscript>
            <p className="mt-4">
              To choose a concern, enable JavaScript. You can also{" "}
              <a className="underline" href={publicPath("/help/")}>
                open Get Help
              </a>{" "}
              or{" "}
              <a className="underline" href={publicPath("/checklists/")}>
                browse setup checklists
              </a>
              .
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
