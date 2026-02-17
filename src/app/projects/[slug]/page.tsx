import Link from "next/link";

type Project = {
  title: string;
  description: string;
};

const projectDetails: Record<string, Project> = {
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
    title: "CAN Bus System",
    description:
      "Implemented a multi-node CAN Bus network with arbitration and message priority control.",
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

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectDetails[params.slug];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl">Project not found.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-6 py-32">

      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed">
          {project.description}
        </p>

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
