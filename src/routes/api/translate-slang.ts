import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";

type Direction = "slangToEnglish" | "englishToSlang";

interface Body {
  text?: string;
  direction?: Direction;
}

const SYSTEM_PROMPTS: Record<Direction, string> = {
  slangToEnglish:
    "You are a translator that converts UK/US teen slang, acronyms, numbers and emoji-coded messages into clear, plain standard English for a parent. Preserve meaning, tone and intent. If a term has a concerning or risky double meaning (drugs, self-harm, sexual content, bullying), note it briefly in parentheses after the translation. Keep it concise. Return ONLY the translated text — no preamble, no quotes, no explanations beyond the inline parenthetical notes.",
  englishToSlang:
    "You are a translator that converts plain standard English into current UK/US teen slang the way a 13–17 year old might actually text it in 2026 (TikTok/Discord/Snap style). Use lowercase, common acronyms, and a few fitting emoji where natural. Keep it realistic — do not overdo it. Return ONLY the translated text, no preamble or quotes.",
};

export const Route = createFileRoute("/api/translate-slang")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        let body: Body;
        try {
          body = (await request.json()) as Body;
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const text = (body.text ?? "").toString().trim();
        const direction: Direction =
          body.direction === "englishToSlang" ? "englishToSlang" : "slangToEnglish";

        if (!text) return new Response("Missing text", { status: 400 });
        if (text.length > 2000)
          return new Response("Text too long (max 2000 chars)", { status: 400 });

        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey)
          return new Response("Server not configured", { status: 500 });

        const upstream = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Lovable-API-Key": apiKey,
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                { role: "system", content: SYSTEM_PROMPTS[direction] },
                { role: "user", content: text },
              ],
            }),
          },
        );

        if (upstream.status === 429)
          return Response.json(
            { error: "Rate limit reached. Please wait a moment and try again." },
            { status: 429 },
          );
        if (upstream.status === 402)
          return Response.json(
            { error: "AI credits exhausted. Add credits in Workspace settings." },
            { status: 402 },
          );
        if (!upstream.ok) {
          const errText = await upstream.text();
          return Response.json(
            { error: `Translation failed: ${errText.slice(0, 200)}` },
            { status: 500 },
          );
        }

        const data = (await upstream.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const translation = data.choices?.[0]?.message?.content?.trim() ?? "";
        return Response.json({ translation, direction });
      },
    },
  },
});
