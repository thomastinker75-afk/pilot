# Resource-link replacements — review, 20 November 2026

Prepared 16 replacements across 11 app guides. Not published. Base commit: 3e92cbac5d9e94ba9f625c6b979b224aa7704a5c. The Common Sense X removal and official Twitch harassment-guide replacement are already live and preserved.

The exact old/new URLs, link labels and matching rationale are in resource-link-replacements-2026-11-20.json. Replacements preserve the original publisher and purpose wherever a current equivalent is available. Broader replacements are labelled accurately: NSPCC's current chat-app guide includes WhatsApp; Reddit's replacement is its Privacy & Security help category; Meta's current teen-supervision article uses the Meta Horizon name. The FTC link remains historical US consumer advice about NGL, rather than a general claim about Sendit or UK law.

## Correction to the earlier audit

The HTTP-only check classified 26 references as automated-access refusals (403), not broken. The user correctly found that the Internet Matters Twitch page was actually a 404. Reading those pages in a browser confirmed seven missing Internet Matters pages (Twitch, Telegram, Fortnite, Instagram, Yubo, BeReal and Minecraft), plus missing Reddit and BeReal help pages. It also confirmed that several other 403 references work or redirect normally, so those have been retained.

The old Yubo safety subdomain fails DNS resolution; the old Net Aware WhatsApp reference could not be retrieved. Both have current publisher replacements. In addition, the old WhatsApp privacy URL returned HTTP 200 but displayed a page-not-found message after rendering. Its replacement is WhatsApp's current How to change your privacy settings article. A successful response code alone does not establish a usable article.

The Common Sense Media AI-companion resource redirects to a sign-in page. It was recorded as access-restricted, not a 404, and is unchanged. Other reviews were not treated as broken solely because they need consent, redirect, or use client-side rendering.

## Verification

Full rendered content was read for the new Internet Matters guides, Minecraft family-group instructions, Meta supervision and Reddit/BeReal help categories. VRChat's official documentation, Yubo's current Safety Hub, the FTC consumer alert and NSPCC chat-app advice were read through web sources. WhatsApp's new privacy-settings article was verified in the browser after loading. Browser checks and relevant headings are recorded in resource-browser-checks-2026-11-20.json.

Source parsing confirms all 16 old URLs are absent and every replacement is present in an app's settings resources. Typecheck, production build and 64-route release checks passed. The new WhatsApp link was included in the final rebuilt preview. Preview: http://127.0.0.1:4180/apps/twitch/ (also apps/whatsapp/ and apps/minecraft/).

After publication approval, release only data.ts and the resource-replacement records. Exclude generated routeTree formatting, local build output and unrelated work in other checkouts. Verify the 11 affected live guides and the new hrefs after deployment.
