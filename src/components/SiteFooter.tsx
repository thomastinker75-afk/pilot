import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="eyebrow">Parent Tech Safety Hub</p>
          <p className="mt-3 max-w-md font-display text-2xl leading-tight tracking-tight">
            Online safety guidance for parents — without the panic.
          </p>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Plain-English, age-based advice on apps, games, slang, screen time,
            and the settings worth checking tonight.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/age-guides" className="hover:text-primary">Age Guides</Link></li>
            <li><Link to="/apps" className="hover:text-primary">Apps & Games</Link></li>
            <li><Link to="/glossary" className="hover:text-primary">Slang & Emoji</Link></li>
            <li><Link to="/checklists" className="hover:text-primary">Checklists</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Help &amp; website information</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/help" className="hover:text-primary">Worried about a child? Get Help</Link></li>
            <li><Link to="/about" className="hover:text-primary">About this hub</Link></li>
            <li><Link to="/about" hash="website-support" className="hover:text-primary">Website issues &amp; corrections only</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Parent Tech Safety Hub. Educational content — not a substitute for professional advice.</p>
          <p>If a child is in immediate danger, contact your local emergency services.</p>
        </div>
      </div>
    </footer>
  );
}
