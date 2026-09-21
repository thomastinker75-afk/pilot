# Video previews and Cloudflare handoff

The shared player now uses 24 local YouTube poster images with a visible Play action. Selecting Play requests the YouTube player; a direct watch link remains available after loading. Changing video resets the player to its poster. A failed image falls back to the title and Play action, including an image failure before React has attached its event handlers.

Sources and retrieval details are in video-poster-sources.json. These are the publisher thumbnails supplied in YouTube's video metadata; they are not newly created editorial artwork. The refresh script is manual, so ordinary builds do not depend on YouTube requests.

Validation completed locally:

- Typecheck, eight existing translator tests and semantic lint for changed code passed. The inherited formatting rule was disabled for lint.
- GitHub project-path preview, Cloudflare root-path preview and a local release build using the proposed domain each generated 64 static routes and passed their static/release checks. No domain was purchased or configured by these local checks.
- Cloudflare hosting wording was verified in rendered privacy HTML; the GitHub preview continues to use its own hosting wording.
- Browser checks passed at 1440, 768 and 320 pixels: posters displayed, no YouTube/thumbnail-host resource connection before Play, and no page overflow. Keyboard Enter loaded the intended player, the watch link remained visible, all nine News video cards had posters, 200% zoom had no overflow, and an intentionally unavailable poster kept a usable fallback.
- Desktop and mobile screenshots were inspected. End-to-end playback availability for every third-party video remains controlled by YouTube and the uploader.

Cloudflare setup remains an owner action. docs/cloudflare-setup.md now gives the exact repository, Pages configuration, environment variables, temporary URL and later custom-domain steps.
