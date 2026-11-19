# Priority 6 — Search Console and useful measurement

19 November 2026. Site source base: 161fab1e241586c00e1e6c7285af617ab0599603. Isolated worktree: measurement-release-check.

## Account changes completed

Native GA4 property 558555392, Parent Tech Safety, now links the verified Search Console domain parenttechsafety.co.uk to Parent Tech Safety website, stream 16112753782 (G-Q4PSPWFXKX). The interface confirmed LINK CREATED on 19 November. Search Console Queries and Google organic search traffic reports are visible in report navigation. This is Google's native product link; it is separate from the expired GSC Wizard subscription.

Registered and confirmed all three event-scoped dimensions in the native UI: Source guide (source_guide), Checklist (checklist_id), Tutorial (tutorial_id).

Created guide_to_checklist as a key event using the Create with code option. No derived page_view rule was created. No monetary value; count as a key event once per session. Raw event totals can still reflect multiple clicks. This is a navigation-intent proxy, not completion, successful safeguarding, a lead, or a purchase. The existing default purchase key event had no stream data; it was not changed. tutorial_open is an ordinary diagnostic event, not a key event.

## Website event plan

| Event | Trigger | Parameters | Interpretation |
|---|---|---|---|
| guide_to_checklist | A specific checklist link in Your next steps on a public app or age guide is activated | source_guide, checklist_id | Parent moves towards practical setup; does not establish checklist completion |
| tutorial_open | Play video is activated for an approved embedded tutorial on a public guide/checklist | source_guide, tutorial_id | Requests the embedded player; does not establish playback duration or completion |

Existing GA4 page_view and enhanced-measurement events remain unchanged. No extra page_view emitter. No fake download or checklist-completion events: the current site has no matching download/completion flow. Direct Watch on YouTube links retain ordinary outbound-link measurement rather than this embedded-player event.

New events only run on the production hostname after explicit consent and with a valid gtag queue. Withdrawing consent disables them synchronously before cookie removal and reload. Rejection and preview visits send no custom events. Blocked storage still permits a per-visit explicit choice. Unknown guides, help/glossary contexts, arbitrary destinations and unapproved video identifiers are rejected. Payloads contain static public identifiers only. Custom event page_location is canonical without query strings or fragments; page_referrer is blank. No message text, names, safeguarding choices or form values are read. Analytics failures must not prevent navigation or video access.

Privacy page explains the two actions and their limits. No Google advertising link or advertising activation was added.

## Verification and publication boundary

Typecheck, production build, 64-route release checks, 32-guide structured-data checks, canonical link checks and 11 consent/event tests pass. Event tests cover all current app/age sources, checklist destinations and embedded video IDs, consent withdrawal, rejected/preview contexts, malicious/free-text inputs and payload content. Existing shared-bundle warning remains outside this priority.

Local preview: http://127.0.0.1:4179/privacy/ and http://127.0.0.1:4179/apps/whatsapp/. Preview visits deliberately do not send to live GA4. Account configuration is live; website instrumentation awaits the user's publication approval. It must not be described as live collection or end-to-end GA4 receipt yet.

After approval, publish only the consent component, GuideNextSteps, YouTubeVideo, guide-analytics module, privacy page, new event tests, consent-test assertions, workflow test step and this document. Exclude generated routeTree changes and unrelated translator work. Then verify one consented guide-to-checklist click and tutorial open in GA4 Realtime/DebugView, verify rejected consent emits neither, and confirm no duplicate page_view on navigation. Do not manufacture a production event without the associated real UI interaction.

Search Console reports and custom dimensions may take time to populate. A successful product link and these intent events do not change Google indexing or guarantee traffic. Compare settled reporting windows after actual collection begins.

Reference: https://support.google.com/analytics/answer/10737381 and https://developers.google.com/analytics/devguides/collection/ga4/events.
