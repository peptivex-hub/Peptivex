import { supabase } from "../../../lib/supabase";

export default async function Home() {
  const { data: compounds, error } = await supabase
    .from("compounds")
    .select("*")
    .order("name");

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Peptivex
        </h1>

        <p className="text-slate-400 mb-10">
          Research intelligence for peptides, compounds, longevity and performance.
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8">
            Error loading compounds
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {compounds?.map((compound) => (
            <div
              key={compound.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-semibold mb-2">
                {compound.name}
              </h2>

              <p className="text-slate-400 mb-4">
                {compound.description}
              </p>

              <div className="text-sm text-slate-500">
                Evidence Level: {compound.evidence_level}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}