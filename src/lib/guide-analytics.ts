// Only public editorial identifiers are accepted. Never pass user-entered text here.
const appSlugs = ['telegram','tiktok','snapchat','instagram','youtube','whatsapp','discord','roblox','fortnite','twitch','kick','yubo','x-twitter','reddit','bereal','ngl-sendit','omegle-style','minecraft','vrchat','gta-online','character-ai','replika'];
const ageSlugs = ['0-4','5-7','8-10','11-13','14-15','16-17'];
const checklistSlugs = ['android-first-setup','iphone-first-setup','youtube-safer','social-lockdown'];
const tutorialIds = new Set(['0dy1St39xeo','3qkNYcRnwYc','8osRlWJwkbk','8siFNH-brM4','A9PUMeAQRbA','BYRQvANa7OE','Tan9jBmKIjI','_Lx5VmAdZSI','aFIpQLYMGXY','d2zPq1lfqQs','hgYhGoUQFWM','kyONXkjYm-s','nEwGEoLYiBA','uVwBW1b2HlM','v9EKV2nSU8w']);
const guidePaths = new Set([
  ...appSlugs.map(s=>`/apps/${s}/`),
  ...ageSlugs.map(s=>`/age-guides/${s}/`),
  ...checklistSlugs.map(s=>`/checklists/${s}/`),
]);
export type GuideAnalyticsWindow = Window & {
  ptsAnalyticsGranted?: boolean;
  gtag?: (...args: unknown[]) => void;
};

function send(name: string, source: string, parameters: Record<string, string>) {
  if (typeof window === 'undefined' || !guidePaths.has(source)) return;
  const target = window as GuideAnalyticsWindow;
  if (!['parenttechsafety.co.uk','www.parenttechsafety.co.uk'].includes(window.location.hostname)
      || target.ptsAnalyticsGranted !== true || typeof target.gtag !== 'function') return;
  try {
    target.gtag('event', name, {
      send_to: 'G-Q4PSPWFXKX',
      source_guide: source,
      page_location: `https://parenttechsafety.co.uk${source}`,
      page_referrer: '',
      ...parameters,
    });
  } catch { /* Analytics must never interrupt navigation or opening a tutorial. */ }
}

export function trackGuideToChecklist(source: string, destination: string) {
  if (!checklistSlugs.some(s=>destination===`/checklists/${s}/`)) return;
  if (!/^\/(apps|age-guides)\//.test(source)) return;
  send('guide_to_checklist', source, { checklist_id: destination.split('/')[2] });
}

export function trackTutorialOpen(videoId: string) {
  if (typeof window === 'undefined' || !tutorialIds.has(videoId)) return;
  // pathname deliberately excludes search terms, query strings and fragment text.
  send('tutorial_open', window.location.pathname, { tutorial_id: videoId });
}
