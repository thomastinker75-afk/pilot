# Slang and emoji review — 21 September 2026

The starting dictionary contained 176 entries. All were read for meaning, ambiguity and unsupported claims of current usage. The updated dictionary has 196 entries. This review does not establish how frequently every expression is used by UK teenagers, nor certify any message as safe. Older expressions remain useful for reference.

## Material corrections

- Emoji definitions now include ordinary readings alongside possible slang readings. The glossary shows “Context matters” for emoji rather than automatically labelling an isolated symbol “Investigate”. The explainer does not assign a message-level risk score.
- Crying-face emoji can express sadness as well as laughter. Skull imagery is not always a joke. Removed the claim that the skull has replaced the laughing emoji.
- Removed unsupported self-harm inference from the butterfly entry and softened assumptions about black hearts and smiling-through-tears.
- Bae is an affectionate nickname; removed the asserted acronym origin. Fit can also mean attractive or physically healthy. POS has several meanings. OP and opp can collide after case normalization, so the explainer returns both entries.
- Smurfing is playing below one's true skill level, not specifically adults using children's accounts. Sus predates Among Us. Tradwife wording now distinguishes a label from evidence about an individual's beliefs.
- Corrected the overly narrow goblin-mode and brain-rot definitions. Neither establishes a clinical diagnosis.
- 53X is documented older shorthand, not automatically a current filter-evasion tactic. Numeric codes can also be ordinary numbers.
- The source explanation of mango mustard claimed mango has six letters; it has five. The numerical explanation was discarded. Mango mustard and 212 have no reliable fixed translation established here: both remain labelled uncertain and are excluded from automatic matching.
- Removed claims that all terms are used “right now”, that reviews happen monthly, and that unspecified TikTok/Reddit scans or NSPCC Net Aware checks had been performed.

## Additions

Added aura farming, crash out, unc, lowkenuinely, it's giving and 41 from individual Dictionary.com entries; fire, wilted flower and face with bags under eyes from Emojipedia; and 11 established text abbreviations from luna's acronym reference. Newly documented is not the same as newly invented or universally popular.

## References inspected

- [luna: teen slang](https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/) — published update 24 July 2026; comparison reference for existing slang. Its mango letter-count error was rejected rather than reproduced.
- [luna: text acronyms](https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/) — published update 25 July 2025; expansion reference, not proof of September 2026 popularity.
- [luna: emoji guide](https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-emoji-dictionary/) — published update 7 January 2026; contextual reading, not a diagnostic codebook.
- [Dictionary.com slang](https://www.dictionary.com/culture/slang) and the individual meaning links in the data: 67, aura farming, brainrot, goblin mode, crash out, unc, lowkenuinely, it's giving, 41, 53x and pretty sus. POS and tradwife use the dictionary definition pages. [TikTok terms](https://www.dictionary.com/articles/tiktok-slang-words) supports opp/opps.
- [NetLingo acronyms](https://www.netlingo.com/acronyms) and [CD9](https://www.netlingo.com/word/cd9.php) — established abbreviations, not a trend ranking.
- [Riot: smurfing definition](https://playvalorant.com/en-us/news/game-updates/riot-mobile-verification-beta/) — direct game publisher definition.
- All 30 emoji now link to individual Emojipedia entries. Literal and figurative meanings may coexist; the linked page does not necessarily substantiate every historical slang association retained from the source dictionary.

Some existing general-language explanations were retained after editorial review. Not every inherited entry has a separate current source citation. No claim of exhaustive slang coverage, universal meanings, clinical assessment or automatic future updates is made.

## Implementation and validation

The explainer uses the shared dictionary, curated aliases, whole-word boundaries and longest phrase matching. It preserves original offsets and punctuation, handles emoji presentation/skin-tone variants without splitting joined emoji, and avoids matching inside URLs or email addresses. Unknown text remains unchanged; no sentence translation is fabricated. Two uncertain entries are not matched.

No API, model, account, external dependency or message persistence was added. Source references are ordinary user-activated links. The dictionary remains readable without JavaScript; interactive explaining requires a browser supporting grapheme segmentation.

Eight Node test groups cover phrase precedence, boundaries, ambiguity, emoji variants, unknown terms, markup, length limits and all enabled headwords/aliases. TypeScript, focused lint and the 63-page static build/export checks pass. The repository-wide formatting backlog is unchanged; semantic lint was run on the supplied content file without its inherited formatting rule.

Chromium checks passed at 1440, 768, 390 and 320 pixels, plus 200% CSS zoom. Keyboard activation, empty/unknown input, clearing, stale-result removal, escaped markup and alias search passed. Explaining messages made no network requests and changed neither local nor session storage.
