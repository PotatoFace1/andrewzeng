import Link from "next/link";

export default function FmcwRadarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-5xl font-bold">FMCW Radar</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Designed and tested an FMCW radar prototype to estimate target
            distance and relative motion from reflected chirp signals.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Implemented chirp-based signal generation and acquisition</li>
            <li>Applied FFT-based processing for range estimation</li>
            <li>Validated measurements against controlled test distances</li>
            <li>Improved SNR with filtering and signal windowing</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tools Used</h2>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-wide text-gray-500">
            <span>MATLAB</span>
            <span>Python</span>
            <span>RF Lab Equipment</span>
            <span>Signal Processing</span>
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
