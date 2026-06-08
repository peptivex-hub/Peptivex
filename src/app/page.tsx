export default function Home() {
  return (
    <main className="min-h-screen bg-[#081826] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#36D7FF]">
          Peptivex
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          The intelligence layer for peptide and longevity research.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Peptivex transforms scientific literature, clinical trials, and
          biomedical research into clear, citation-first intelligence for
          peptides, GLP-1s, and emerging longevity compounds.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#waitlist"
            className="rounded-full bg-[#36D7FF] px-6 py-3 font-medium text-[#081826]"
          >
            Join Waitlist
          </a>

          <a
            href="#research"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white"
          >
            Explore Research
          </a>
        </div>

        <div id="research" className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            "Compound Database",
            "Evidence Scoring",
            "Clinical Trial Tracking",
            "AI Research Copilot",
            "Research Comparisons",
            "Saved Research Boards",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-400">
          Research and education only. Not medical advice, diagnosis, or
          treatment guidance.
        </p>
      </section>
    </main>
  );
}