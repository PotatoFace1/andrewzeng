import Link from "next/link";

export default function GoKartPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-5xl font-bold">Go-Kart</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Developed and refined a custom go-kart platform, focusing on
            drivetrain performance, safety, and chassis reliability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Selected and integrated motor, controller, and gearing</li>
            <li>Improved braking response and stability under load</li>
            <li>Reinforced frame components for repeated testing cycles</li>
            <li>Collected telemetry for iterative performance tuning</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tools Used</h2>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-wide text-gray-500">
            <span>CAD</span>
            <span>Fabrication</span>
            <span>Power Electronics</span>
            <span>Data Logging</span>
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
