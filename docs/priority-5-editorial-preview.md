# Priority 5 — guide editorial preview, 19 November 2026

Status: ready for user preview; not published. Base: b7e83b115ab2ae92093514fc572a1dab6572869f.

WhatsApp video follow-up: replaced the inherited general Internet Matters messaging/device video with WhatsApp’s own “Parental controls for parent-managed accounts on WhatsApp” (https://www.youtube.com/watch?v=Tan9jBmKIjI), published 11 March 2026. Search metadata identifies the verified WhatsApp channel; YouTube’s live oEmbed response independently confirms title and publisher WhatsApp, https://www.youtube.com/@WhatsApp. The description/chapter list covers contact and group management, privacy and activity notifications. The official https://www.whatsapp.com/parentalcontrols page corroborates these tools and warns of gradual rollout. The visible caption limits the tutorial to parent-managed accounts. This is publisher/description verification, not a claim that every second of the video or the settings on a real account was tested. Replaced the WhatsApp tutorial search-result links with the same direct official video. Saved its locally served thumbnail and provenance in docs/video-poster-sources.json.

Isolated workspace: C:/Users/thoma/Desktop/MCP/Personal/ParentGuide/Git/editorial-release-check.

## Scope

- Clear, topic-specific titles and descriptions for the remaining 18 app guides, all six age guides and three remaining checklists (27 pages).
- Matching visible H1s, social metadata, visible breadcrumbs, organizational authorship and Article/BreadcrumbList structured data.
- Editorial dates explicitly distinguish an editorial update from a fresh full-policy review or hands-on testing. Existing historical evidence dates remain intact.
- Targeted, source-checked explanations for Snapchat Family Centre, Discord UK age checks, WhatsApp parent-managed accounts, Character.AI Reading Mode, NGL versus Sendit, Kick supervision, Monkey’s service-specific adult rule, YouTube supervision and Android Family Link limitations. Citations appear beside those explanations.
- Existing four game guide reviews and the iPhone review remain dated 4 November; no new review date is invented for them.

## Sources consulted

Sources were read on 19 November, only to verify the specific new summary points. This is not a full re-audit of all claims or all pages.

- https://parents.snapchat.com/family-center?lang=en-GB
- https://support.discord.com/hc/en-us/articles/33362401287959-How-Teens-Experience-Discord-in-the-UK
- https://www.whatsapp.com/legal/privacy-disclosure-for-parent-managed-accounts
- https://support.character.ai/hc/en-us/articles/51795669396763-What-is-Reading-Mode
- https://ngl.link/p/terms
- https://iconichearts.com/terms
- https://help.kick.com/es/articles/10137486-seguridad-de-adolescentes-y-menores (English candidate unavailable; existing official Spanish source verified and labelled as Spanish)
- https://www.monkey.app/sc.html
- https://support.google.com/families/answer/7101025?hl=en
- https://support.google.com/youtube/answer/10314074?hl=en

## Verification

Typecheck and production build pass. Static checks cover all 64 rendered routes, assets and indexing settings. Guide checks cover all 32 substantive guides: unique matching titles and headings, authorship, dates, one Article and BreadcrumbList each, matching canonical breadcrumb destinations and visible source links. Canonical checks pass for 1,451 internal links and 127 permanent redirect rules.

The existing build warning about the large shared JavaScript chunk remains; this is not a performance change. The first restricted build could not connect to its local renderer; a permitted build completed successfully.

Local preview: http://127.0.0.1:4178/apps/whatsapp/ (also age-guides/14-15/ and checklists/android-first-setup/).

Publish only the three changed guide routes, new GuideEditorial component, guide-editorial content file, verification script, this report, the WhatsApp-specific data.ts changes, new video poster and its provenance entry after user approval. Exclude generated routeTree formatting and unrelated translator work in other checkouts. The main site has not been changed by this preview.
