export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-6 py-32">
      
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — IMAGE */}
        <div className="w-full">
          <div className="w-full aspect-square bg-gray-900 rounded-xl overflow-hidden">
            {/* Replace src with your image in /public */}
            <img
              src="/_DSC2635.jpeg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE — CONTACT INFO */}
        <div className="space-y-8">

          <h1 className="text-4xl font-bold">Contact</h1>

          <p className="text-lg text-gray-400">
            Feel free to reach out for collaboration, internships, or engineering opportunities.
          </p>

          <div className="space-y-6">

            <div>
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Email
              </h2>
              <a
                href="mailto:andrewzeng88@gmail.com"
                className="text-lg hover:text-blue-400 transition"
              >
                andrewzeng88@gmail.com
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
                href="https://linkedin.com/in/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition"
              >
                linkedin.com/in/your-link
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

        </div>

      </section>
    </main>
  );
}
