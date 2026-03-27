import Link from "next/link";

export default function CustomBusPcbPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-5xl font-bold">Custom BUS PCB</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Designed and fabricated a custom communication bus PCB for embedded
            systems integration and multi-node testing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Created a multi-layer PCB layout in KiCad</li>
            <li>Integrated transceiver and microcontroller interfaces</li>
            <li>Added proper bus termination and signal integrity checks</li>
            <li>Validated communication across multiple nodes</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tools Used</h2>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-wide text-gray-500">
            <span>KiCad</span>
            <span>CAN Bus</span>
            <span>Embedded C</span>
            <span>Oscilloscope</span>
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
