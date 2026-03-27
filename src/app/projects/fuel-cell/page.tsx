import Link from "next/link";

export default function FuelCellPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-5xl font-bold">Fuel Cell</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Prototyped a compact fuel-cell-based power system and evaluated
            output regulation, transient behavior, and load compatibility.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Characterized voltage-current curves under variable loads</li>
            <li>Designed regulation stage for stable output delivery</li>
            <li>Monitored thermal and efficiency performance over time</li>
            <li>Validated reliability during long-duration operation</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tools Used</h2>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-wide text-gray-500">
            <span>Circuit Design</span>
            <span>Power Analysis</span>
            <span>DC-DC Conversion</span>
            <span>Lab Instrumentation</span>
          </div>
        </section>

        <Link
          href="/projects"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
