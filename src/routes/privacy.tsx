import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({ meta: [{ title: "Privacy — Parent Tech Safety Hub" }, { name: "description", content: "How the message explainer works on your device, and how hosting, fonts and optional video players connect to external services." }] }),
});
function Privacy() {
  return <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
    <p className="eyebrow">Updated 21 September 2026</p>
    <h1 className="mt-4 font-display text-5xl">Privacy on this site</h1>
    <h2 className="mt-10 font-display text-2xl">Messages stay in your browser</h2>
    <p className="mt-4">The dictionary explainer matches text on your device. It does not send the message to an AI service or save it in browser storage. You can clear it with the Clear button. It does not need names or other personal details.</p>
    <h2 className="mt-10 font-display text-2xl">Hosting and external connections</h2>
    <p className="mt-4">This preview is hosted on GitHub Pages. Visiting a website sends technical information, such as your IP address and browser details, to its hosting provider. The site loads fonts from Google Fonts. Those requests are separate from the text you enter in the explainer.</p>
    <h2 className="mt-10 font-display text-2xl">Videos and links</h2>
    <p className="mt-4">YouTube players load only when you select Load video. This connects your browser to YouTube, whose privacy and storage practices then apply. You can also open the video on YouTube. Locally hosted videos load from the site’s host. Following other external links takes you to services with their own privacy policies.</p>
    <h2 className="mt-10 font-display text-2xl">Contact details</h2>
    <p className="mt-4">Thomas Tinker owns this site. A public corrections email will be added after the domain and its email are set up. Do not send children’s private messages or images to this site. For a safety concern, use the official services linked from our help page.</p>
    <p className="mt-6"><Link to="/help" className="underline underline-offset-4">Get help with a safety concern</Link></p>
  </article>;
}
