export default function Home() {
  return (
    <main className="min-h-screen bg-[#081826] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Peptivex</div>
          <a
            href="#waitlist"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Join Waitlist
          </a>
        </nav>

        <div className="flex flex-1 flex-col justify-center py-20">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#36D7FF]">
            Research Intelligence
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            The intelligence layer for peptide and longevity research.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Peptivex transforms scientific literature, clinical trials, and
            biomedical research into clear, citation-first intelligence for
            peptides, GLP-1s, and emerging longevity compounds.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="rounded-full bg-[#36D7FF] px-6 py-3 font-semibold text-[#081826] transition hover:opacity-90"
            >
              Request Early Access
            </a>

            <a
              href="#research"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View Research Tools
            </a>
          </div>

          <div
            id="research"
            className="mt-16 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                title: "Compound Database",
                copy: "Search peptides, GLP-1s, metabolic therapies, and longevity compounds in one research-first library.",
              },
              {
                title: "Evidence Scoring",
                copy: "Understand where evidence is strongest, limited, emerging, or preclinical.",
              },
              {
                title: "Clinical Trial Tracking",
                copy: "Follow active, completed, and emerging studies tied to compounds and conditions.",
              },
              {
                title: "AI Research Copilot",
                copy: "Ask what the research says without crossing into dosing, diagnosis, or treatment guidance.",
              },
              {
                title: "Research Comparisons",
                copy: "Compare compounds side by side across mechanisms, evidence tiers, safety context, and trial activity.",
              },
              {
                title: "Saved Research Boards",
                copy: "Organize compounds, citations, and research questions into reusable boards.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>

          <form
            id="waitlist"
            action="https://formspree.io/f/xpqeraar"
            method="POST"
            className="mt-16 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="text-3xl font-semibold">
              Join the Peptivex Early Access List
            </h2>

            <p className="mt-4 text-slate-300">
              Get notified when Peptivex launches and help shape the future of
              peptide and longevity research intelligence.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900"
              />

              <select
                name="role"
                required
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900"
              >
                <option value="">I am a...</option>
                <option>Healthcare Provider</option>
                <option>Researcher</option>
                <option>Independent Researcher</option>
                <option>Longevity Enthusiast</option>
                <option>Clinic Owner</option>
                <option>Investor</option>
                <option>Other</option>
              </select>

              <select
                name="primary_goal"
                required
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900"
              >
                <option value="">Primary research interest</option>
                <option>Weight Loss / Metabolic Health</option>
                <option>Longevity</option>
                <option>Performance</option>
                <option>Recovery / Injury</option>
                <option>Gut Health / Inflammation</option>
                <option>Cognitive Health</option>
                <option>Hormone Optimization</option>
                <option>General Research</option>
              </select>

              <textarea
                name="interest"
                rows={4}
                placeholder="What peptides, compounds, or research topics are you most interested in?"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900"
              />

              <textarea
                name="frustration"
                rows={3}
                placeholder="What is your biggest frustration with peptide or longevity research today?"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#36D7FF] px-6 py-4 font-semibold text-[#081826] transition hover:opacity-90"
              >
                Request Early Access
              </button>
            </div>
          </form>

          <p className="mt-10 max-w-3xl text-sm leading-6 text-slate-400">
            Peptivex is for research and educational purposes only. It does not
            provide medical advice, diagnosis, treatment guidance, prescribing
            recommendations, or dosing instructions.
          </p>
        </div>
      </section>
    </main>
  );
}