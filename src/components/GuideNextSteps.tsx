import { AGE_BANDS, APPS, CHECKLISTS } from "@/content/data";
import { AGE_JOURNEYS, CHECKLIST_JOURNEYS } from "@/content/guide-journeys";
import { publicPath } from "@/lib/public-path";
import { trackGuideToChecklist } from "@/lib/guide-analytics";

type Props = { kind: "age" | "app" | "checklist"; slug: string };
export function GuideNextSteps({ kind, slug }: Props) {
  const ageJourney = kind === "age" ? AGE_JOURNEYS[slug] : undefined;
  const checklistJourney = kind === "checklist" ? CHECKLIST_JOURNEYS[slug] : undefined;
  const ages =
    kind === "app"
      ? Object.entries(AGE_JOURNEYS)
          .filter(([, journey]) => journey.apps.includes(slug))
          .map(([age]) => age)
      : (checklistJourney?.ages ?? []);
  const apps = ageJourney?.apps ?? checklistJourney?.apps ?? [];
  const checklistSlugs =
    ageJourney?.checklists ??
    (kind === "app"
      ? ["minecraft", "fortnite", "gta-online", "vrchat"].includes(slug)
        ? ["social-lockdown"]
        : ["iphone-first-setup", "android-first-setup", "social-lockdown"]
      : []);
  const groups = [
    {
      title: "App and game explainers",
      items: apps
        .map((id) => APPS.find((a) => a.slug === id))
        .filter((a) => a !== undefined)
        .map((a) => ({ title: a.name, detail: a.minAge, href: `/apps/${a.slug}/` })),
    },
    {
      title: "Put the settings into practice",
      items: checklistSlugs
        .map((id) => CHECKLISTS.find((c) => c.slug === id))
        .filter((c) => c !== undefined)
        .map((c) => ({
          title: c.title,
          detail: "Step-by-step setup",
          href: `/checklists/${c.slug}/`,
        })),
    },
    {
      title: "Advice for your child’s age",
      items: ages
        .map((id) => AGE_BANDS.find((a) => a.slug === id))
        .filter((a) => a !== undefined)
        .map((a) => ({
          title: `Ages ${a.range}: ${a.headline}`,
          detail: "Conversations, risks and family routines",
          href: `/age-guides/${a.slug}/`,
        })),
    },
  ].filter((group) => group.items.length);
  return (
    <section
      aria-label="Related guides and next steps"
      className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 md:p-7"
    >
      <p className="eyebrow">Keep going</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight">Your next steps</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {ageJourney?.intro ??
          "Connect the settings with the apps, conversations and family routines that matter to your child."}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        An explainer link is not a recommendation to use an app at this age. Check its account rules
        and content ratings; some services are for adults only.
      </p>
      <div className="mt-6 space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={publicPath(item.href)}
                    onClick={() => trackGuideToChecklist(
                      `/${kind === "age" ? "age-guides" : kind === "app" ? "apps" : "checklists"}/${slug}/`,
                      item.href,
                    )}
                    className="group block h-full rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="font-semibold text-primary group-hover:underline">
                      {item.title} <span aria-hidden="true">→</span>
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{item.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm">
        <a
          href={publicPath("/help/")}
          className="font-semibold text-primary underline underline-offset-4"
        >
          Need help with an immediate concern?
        </a>
      </p>
    </section>
  );
}
