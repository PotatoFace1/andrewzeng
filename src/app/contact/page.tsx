import Link from "next/link";
import ContactPhotoCarousel from "./contact-photo-carousel";

export default function ContactPage() {
  return (
    <main className="site-shell text-zinc-200">
      <section className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-stretch md:gap-10">
        <div className="surface-card p-4 md:p-5">
          <ContactPhotoCarousel />
        </div>

        <div className="surface-card px-6 py-10 md:px-8 md:py-11">
          <div className="space-y-10">
            <div>
              <p className="label mb-2">Contact</p>
              <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
                Get in touch
              </h1>
            </div>

            <div className="space-y-7">
              <div>
                <h2 className="label mb-2">Email</h2>
                <a
                  href="mailto:zeng.and@northeastern.edu"
                  className="text-[15px] text-zinc-300 transition hover:text-white"
                >
                  zeng.and@northeastern.edu
                </a>
              </div>

              <div>
                <h2 className="label mb-2">GitHub</h2>
                <a
                  href="https://github.com/PotatoFace1/andrewzeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-zinc-300 transition hover:text-white"
                >
                  github.com/PotatoFace1/andrewzeng
                </a>
              </div>

              <div>
                <h2 className="label mb-2">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/andrew-zeng1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-zinc-300 transition hover:text-white"
                >
                  linkedin.com/in/andrew-zeng1/
                </a>
              </div>

              <div>
                <h2 className="label mb-2">Location</h2>
                <p className="text-[15px] text-zinc-400">
                  Pittsburgh, PA — Boston, MA
                </p>
              </div>
            </div>

            <div className="pt-1">
              <Link href="/" className="btn-ghost inline-block px-5 py-2.5 text-sm">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
