import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

export const metadata = {
  title: "Peptivex | Peptide & Longevity Research Intelligence",
  description:
    "The intelligence layer for peptide and longevity research. Citation-first compound research, evidence scoring, and clinical-trial tracking. Launching soon.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          {/* Top bar with logo + nav */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight text-white">
              Peptivex
            </div>
            <Link
              href="#waitlist"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-white"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Hero copy */}
          <div className="mt-20 max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
              Research Intelligence · Launching Soon
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The intelligence layer for peptide and longevity research.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Peptivex transforms scientific literature, clinical trials, and
              biomedical research into clear, citation-first intelligence for
              peptides, GLP-1s, and emerging longevity compounds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#waitlist"
                className="rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 hover:bg-slate-200"
              >
                Request Early Access
              </Link>
              <Link
                href="/methodology"
                className="rounded-lg border border-slate-700 px-6 py-3 text-center text-base font-semibold text-white hover:border-slate-500"
              >
                See Our Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What Peptivex does
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            A research-first platform built around citations, evidence
            transparency, and conservative framing.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Compound Database"
              description="Search peptides, GLP-1s, metabolic therapies, and longevity compounds in one research-first library."
            />
            <FeatureCard
              title="Evidence Scoring"
              description="Understand where evidence is strongest, limited, emerging, or preclinical."
            />
            <FeatureCard
              title="Clinical Trial Tracking"
              description="Follow active, completed, and emerging studies tied to compounds and conditions."
            />
            <FeatureCard
              title="AI Research Copilot"
              description="Ask what the research says without crossing into dosing, diagnosis, or treatment guidance."
            />
            <FeatureCard
              title="Research Comparisons"
              description="Compare compounds side by side across mechanisms, evidence tiers, safety context, and trial activity."
            />
            <FeatureCard
              title="Saved Research Boards"
              description="Organize compounds, citations, and research questions into reusable boards."
            />
          </div>
        </div>
      </section>

      {/* Waitlist section */}
      <section id="waitlist" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join the Peptivex Early Access List
            </h2>
            <p className="mt-3 text-slate-400">
              Get notified when Peptivex launches and help shape the future of
              peptide and longevity research intelligence.
            </p>
          </div>

          <div className="mt-10">
            <WaitlistForm />
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Peptivex is for research and educational purposes only. It does
            not provide medical advice, diagnosis, treatment guidance,
            prescribing recommendations, or dosing instructions.
          </p>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:border-slate-700">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}