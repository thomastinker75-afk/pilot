import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

const NAV = [
  { to: "/age-guides", label: "Age Guides" },
  { to: "/apps", label: "Apps & Games" },
  { to: "/glossary", label: "Slang & Emoji" },
  { to: "/checklists", label: "Checklists" },
  { to: "/news", label: "News" },
  { to: "/help", label: "Get Help" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-[1.05rem] font-semibold leading-none tracking-tight">
            Parent Tech
            <span className="block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Safety
            </span>
          </span>
        </Link>

        <nav className="desktop-navigation hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-navigation hidden md:block">
          <Link
            to="/help"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Worried right now?
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="mobile-menu-toggle grid size-10 place-items-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="mobile-navigation-panel border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/help"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Worried right now?
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
