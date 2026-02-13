import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-6 py-32">
      
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGE */}
        <div className="w-full">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src="/_DSC2635.jpeg"  // put image inside /public
              alt="Contact"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — CONTACT INFO */}
        <div className="space-y-10">

          <div>
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-gray-400">
              Feel free to reach out for collaboration, internships, or engineering opportunities.
            </p>
          </div>

          <div className="space-y-8">

            <div>
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Email
              </h2>
              <a
                href="mailto:zeng.and@northeastern.edu"
                className="text-lg hover:text-blue-400 transition"
              >
                zeng.and@northeastern.edu
              </a>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                GitHub
              </h2>
              <a
                href="https://github.com/PotatoFace1/andrewzeng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition"
              >
                github.com/PotatoFace1/andrewzeng
              </a>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                LinkedIn
              </h2>
              <a
                href="https://www.linkedin.com/in/andrew-zeng1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition"
              >
                linkedin.com/in/andrew-zeng1/
              </a>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Location
              </h2>
              <p className="text-lg text-gray-400">
                Boston, MA · Open to relocation
              </p>
            </div>

          </div>

          {/* BACK BUTTON */}
          <div className="pt-8">
            <Link
              href="/"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              ← Back to Home
            </Link>
          </div>

        </div>

      </section>
    </main>
  );
}
