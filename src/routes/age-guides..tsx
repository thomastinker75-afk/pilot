
function DeepDive({ items }: { items: ExpertResource[] }) {
  const typeStyles: Record<ExpertResource["type"], string> = {
    Study: "bg-primary/10 text-primary",
    Report: "bg-foreground/10 text-foreground",
    Article: "bg-secondary text-foreground/80",
    Video: "bg-destructive/10 text-destructive",
    Book: "bg-accent text-accent-foreground",
  };
  return (
    <section className="rounded-2xl border border-border bg-background p-7">
      <div className="flex items-center gap-2 text-foreground/80">
        <GraduationCap className="size-4" />
        <p className="eyebrow">If you want to know more from the experts</p>
      </div>
      <h2 className="mt-3 font-display text-2xl tracking-tight">
        Original studies, reports and videos behind the consequences above
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Hand-picked from paediatricians, regulators, academic journals and investigative reporting around the world. Open in a new tab.
      </p>
      <ul className="mt-6 divide-y divide-border">
        {items.map((r) => (
          <li key={r.url} className="py-4">
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${typeStyles[r.type]}`}>
                {r.type}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-start gap-1.5">
                  <span className="font-medium leading-snug group-hover:text-primary">{r.title}</span>
                  <ExternalLink className="mt-1 size-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{r.source}</span>
                {r.note && (
                  <span className="mt-1.5 block text-sm leading-relaxed text-foreground/75">{r.note}</span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
