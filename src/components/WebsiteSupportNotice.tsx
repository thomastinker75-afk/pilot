import { Link } from "@tanstack/react-router";

export function WebsiteSupportNotice() {
  return (
    <section id="website-support" className="mt-8 rounded-2xl border border-border bg-secondary p-6">
      <h2 className="font-display text-2xl">Website support only</h2>
      <p className="mt-3">Our website contact is for broken links, technical problems and content corrections only. We do not provide safeguarding advice, counselling or emergency support.</p>
      <p className="mt-3">Email: <a href="mailto:webhelp@parenttechsafety.co.uk" className="break-all font-semibold underline underline-offset-4">webhelp@parenttechsafety.co.uk</a></p>
      <p className="mt-3 text-sm">Please do not send children’s private messages, images or details of a safeguarding concern to this email address.</p>
      <p className="mt-4">Worried about a child? <Link to="/help" hash="support-services" className="font-semibold underline underline-offset-4">Get Help: contact a support service</Link>. In an immediate emergency in the UK, call <a href="tel:999" className="font-semibold underline underline-offset-4">999</a>.</p>
    </section>
  );
}
