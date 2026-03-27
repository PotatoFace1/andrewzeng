import Link from "next/link";

export default function RcCarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-5xl font-bold">RC Car Platform</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Built an autonomous-ready RC car platform with onboard sensing,
            control loops, and embedded software for rapid prototyping.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Integrated IMU, distance sensors, and motor drivers</li>
            <li>Implemented closed-loop speed and steering control</li>
            <li>Designed modular firmware for quick feature testing</li>
            <li>Bench-tested reliability across varied terrain</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tools Used</h2>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-wide text-gray-500">
            <span>Embedded C</span>
            <span>STM32</span>
            <span>PID Control</span>
            <span>Sensor Fusion</span>
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
