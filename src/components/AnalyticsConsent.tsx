import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const measurementId = "G-Q4PSPWFXKX";
const preferenceKey = "pts-analytics-consent";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

function startAnalytics() {
  const target = window as AnalyticsWindow;
  if (target.gtag) return;
  target.dataLayer = target.dataLayer || [];
  target.gtag = (...args) => target.dataLayer!.push(args);
  target.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  target.gtag("js", new Date());
  target.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function AnalyticsConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Keep development and preview visits out of the live property's reports.
    if (window.location.hostname !== "parenttechsafety.co.uk" &&
        window.location.hostname !== "www.parenttechsafety.co.uk") return;
    let preference: string | null = null;
    try { preference = localStorage.getItem(preferenceKey); } catch { /* Ask each visit if storage is unavailable. */ }
    if (preference === "accepted") startAnalytics();
    else if (preference !== "rejected") setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener("pts-open-analytics", open);
    return () => window.removeEventListener("pts-open-analytics", open);
  }, []);

  function choose(accepted: boolean) {
    try { localStorage.setItem(preferenceKey, accepted ? "accepted" : "rejected"); } catch { /* Choice still applies to this page. */ }
    setVisible(false);
    if (accepted) startAnalytics();
    else if ((window as AnalyticsWindow).gtag) {
      // Remove Analytics cookies, then reload to remove its listeners completely.
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (name !== "_ga" && !name.startsWith("_ga_")) continue;
        for (const domain of ["", "; domain=parenttechsafety.co.uk", "; domain=www.parenttechsafety.co.uk"]) {
          document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
        }
      }
      window.location.reload();
    }
  }

  if (!visible) return null;
  return (
    <section aria-label="Analytics cookies" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-5 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4">
        <p className="flex-1 text-sm">May we use Google Analytics cookies to understand visits and improve this site? Optional analytics stays off until you accept. <Link to="/privacy" className="underline">Privacy details</Link></p>
        <button onClick={() => choose(false)} className="rounded-md border border-input px-4 py-2 text-sm">Reject analytics</button>
        <button onClick={() => choose(true)} className="rounded-md border border-input px-4 py-2 text-sm">Accept analytics</button>
      </div>
    </section>
  );
}
