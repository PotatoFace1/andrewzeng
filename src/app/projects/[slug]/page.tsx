interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

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

  const project = projectDetails[slug];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-3xl">Project Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-400">{project.description}</p>
      </div>
    </main>
  );
}
