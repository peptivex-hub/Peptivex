import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Persistent disclaimer block */}
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-900">Peptivex is a research-information platform.</strong>{" "}
            We do not sell, prescribe, dispense, or supply peptides or any other
            compounds. Content is for research and informational purposes only
            and is not medical advice. Many compounds discussed are
            investigational, off-label, or not FDA-approved. Nothing on this
            site should be interpreted as recommending human use of any
            compound. Always consult a qualified, licensed healthcare
            professional.
          </p>
        </div>

        {/* Link grid */}
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Peptivex</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Trust</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/methodology" className="text-slate-600 hover:text-slate-900">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-slate-600 hover:text-slate-900">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-slate-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-600 hover:text-slate-900">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:peptivex@gmail.com" className="text-slate-600 hover:text-slate-900">
                  General Inquiries
                </a>
              </li>
              <li>
                <a href="mailto:peptivex@gmail.com?subject=Content%20Concern" className="text-slate-600 hover:text-slate-900">
                  Report a Concern
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">
            © 2026 Peptivex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}