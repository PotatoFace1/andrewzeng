import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "FMCW Radar",
    slug: "FMCW-radar",
    image: "/temp.png",
  },
  {
    title: "Custom BUS PCB",
    slug: "custom-bus-pcb",
    image: "/temp.png",
  },
  {
    title: "RC Car Platform",
    slug: "rc-car",
    image: "/temp.png",
  },
  {
    title: "Go-Kart",
    slug: "go-kart",
    image: "/temp.png",
  },
  {
    title: "Fuel Cell",
    slug: "fuel-cell",
    image: "/temp.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-6 py-32">

      <h1 className="text-5xl font-bold text-center mb-20">
        Projects.
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h2 className="mt-4 text-2xl font-semibold group-hover:text-blue-400 transition">
              {project.title}
            </h2>
          </Link>
        ))}

      </div>

    </main>
  );
}
