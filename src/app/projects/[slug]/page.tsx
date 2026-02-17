import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectDetails: Record<
    string,
    { title: string; description: string }
  > = {
    "pocket-rocket": {
      title: "Pocket Rocket",
      description:
        "Designed and built a compact rocket system. Led propulsion testing and structural validation.",
    },
    "rocket-engine-testing": {
      title: "Rocket Engine Testing",
      description:
        "Conducted static fire tests, analyzed thrust curves, and improved injector design.",
    },
    "can-bus": {
      title: "CAN Bus PCB",
      description:
        "Designed and fabricated a custom CAN bus PCB integrating microcontroller, transceiver, and multi-node communication architecture for embedded systems testing.",
    },
    "fuel-cell": {
      title: "Fuel Cell System",
      description:
        "Developed a hydrogen fuel cell prototype with voltage regulation and load analysis.",
    },
    "rc-car": {
      title: "RC Car Platform",
      description:
        "Built an autonomous RC car platform integrating sensors, control systems, and embedded logic.",
    },
  };

  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
  <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-8 py-24">

    <div className="max-w-4xl mx-auto space-y-16">

      <h1 className="text-5xl font-bold">
        {project.title}
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          {project.description}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Highlights</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Designed multi-layer PCB in KiCad</li>
          <li>Integrated CAN transceiver and STM32 microcontroller</li>
          <li>Implemented differential bus termination</li>
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

      <a
        href="/projects"
        className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
      >
        ← Back to Projects
      </a>

    </div>

  </main>
);

}
