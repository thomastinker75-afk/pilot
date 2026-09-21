import { Fragment, useState } from "react";
import { explainMessage, MESSAGE_LIMIT, type Match } from "@/lib/slang-explainer";

export function MessageExplainer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ text: string; matches: Match[] } | null>(null);
  const [error, setError] = useState("");
  const buttonClass =
    "rounded-full border border-border px-5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
  const definitions = result ? [...new Set(result.matches.flatMap((match) => match.entries))] : [];
  return (
    <section
      aria-labelledby="explainer-heading"
      className="mt-10 rounded-2xl border border-border bg-card p-5 md:p-8"
    >
      <p className="eyebrow">Private · No AI</p>
      <h2 id="explainer-heading" className="mt-2 font-display text-3xl font-semibold">
        Explain a message
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Find possible meanings for slang and emoji in a message. Your text is processed on this
        device; this tool does not send or save it. It matches dictionary entries, not intent or
        tone.
      </p>
      <label htmlFor="slang-message" className="mt-6 block text-sm font-semibold">
        Message to explain
      </label>
      <textarea
        id="slang-message"
        value={text}
        maxLength={MESSAGE_LIMIT}
        rows={4}
        autoComplete="off"
        spellCheck={false}
        aria-describedby="message-hint"
        placeholder="Try: that fit is mid ngl, no cap 💀"
        onChange={(event) => {
          setText(event.target.value);
          setResult(null);
          setError("");
        }}
        className="mt-2 w-full resize-y rounded-xl border border-border bg-background p-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      />
      <p id="message-hint" className="mt-2 text-xs text-muted-foreground">
        {text.length} / {MESSAGE_LIMIT} characters. Leave out names and personal details.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className={`${buttonClass} bg-foreground text-background`}
          onClick={() => {
            if (!text.trim()) {
              setError("Enter a message first.");
              setResult(null);
              return;
            }
            try {
              setResult({ text, matches: explainMessage(text) });
              setError("");
            } catch {
              setError(
                "This browser could not explain the message. You can still search the dictionary below.",
              );
            }
          }}
        >
          Explain message
        </button>
        <button
          type="button"
          className={buttonClass}
          onClick={() => {
            setText("");
            setResult(null);
            setError("");
          }}
        >
          Clear message
        </button>
      </div>
      <noscript>
        <p className="mt-4">
          Enable JavaScript to use the message explainer. The dictionary entries remain readable
          below.
        </p>
      </noscript>
      <div role="status" aria-live="polite" className="mt-4 text-sm">
        {error ||
          (result
            ? result.matches.length
              ? `${definitions.length} dictionary ${definitions.length === 1 ? "entry" : "entries"} found. Possible meanings are below.`
              : "No dictionary matches found. This does not mean the message is safe or unsafe; the words may be ordinary language or slang we do not cover."
            : "")}
      </div>
      {result && result.matches.length > 0 && (
        <div className="mt-5 border-t border-border pt-5">
          <h3 className="font-semibold">Your message, with matches highlighted</h3>
          <p className="mt-3 whitespace-pre-wrap break-words rounded-xl bg-secondary p-4 leading-8">
            {result.matches.map((match, index) => (
              <Fragment key={match.start}>
                {result.text.slice(index ? result.matches[index - 1].end : 0, match.start)}
                <mark className="rounded bg-primary/15 px-1 text-foreground">{match.text}</mark>
              </Fragment>
            ))}
            {result.text.slice(result.matches.at(-1)!.end)}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Unhighlighted text is unchanged and has not been interpreted. Ordinary words such as
            “fit” can also match. These are possible meanings, not a sentence translation or safety
            assessment.
          </p>
          <dl className="mt-5 divide-y divide-border">
            {definitions.map((entry) => (
              <div key={entry.term} className="py-4">
                <dt className="font-semibold">{entry.term}</dt>
                <dd className="mt-1 text-sm">{entry.meaning}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{entry.context}</dd>
                {entry.sourceUrl && (
                  <dd className="mt-2 text-xs">
                    <a
                      href={entry.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      Meaning reference
                    </a>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
