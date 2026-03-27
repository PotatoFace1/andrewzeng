import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="site-shell text-slate-100">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        <div className="surface-card p-4 md:p-6">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/contactphoto.jpeg"
              alt="Contact"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="surface-card px-8 py-10 md:px-10 md:py-12">
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-3">
                Let&apos;s Build
              </p>
              <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white">
                Contact
              </h1>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-2">
                  Email
                </h2>
                <a
                  href="mailto:zeng.and@northeastern.edu"
                  className="text-lg text-slate-200 hover:text-blue-300 transition"
                >
                  zeng.and@northeastern.edu
                </a>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-2">
                  GitHub
                </h2>
                <a
                  href="https://github.com/PotatoFace1/andrewzeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-slate-200 hover:text-blue-300 transition"
                >
                  github.com/PotatoFace1/andrewzeng
                </a>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-2">
                  LinkedIn
                </h2>
                <a
                  href="https://www.linkedin.com/in/andrew-zeng1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-slate-200 hover:text-blue-300 transition"
                >
                  linkedin.com/in/andrew-zeng1/
                </a>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-2">
                  Location
                </h2>
                <p className="text-lg text-slate-300">Pittsburgh, PA - Boston, MA</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="btn-ghost inline-block px-6 py-3 rounded-xl font-semibold transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
