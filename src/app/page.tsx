export default function Home() {
  return (
<main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 font-sans">
      {/* NAVIGATION */}
      <header className="p-6 border-b">
        <nav className="flex justify-center gap-16 text-sm font-bold uppercase tracking-wide">
          <a href="/about" className="hover:text-red-600">About</a>
          <a href="/projects" className="hover:text-red-600">Projects</a>
          <a href="/resume" className="hover:text-red-600">Resume</a>
          <a href="/contact" className="hover:text-red-600">Contact</a>
          <a href="/blog" className="hover:text-red-600">GitHub</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32 sm:py-48">
        <h2 className="text-4xl sm:text-4xl font-bold mb-4">hello - i'm andrew  </h2>
        <h3 className="text-2xl sm:text-2xl font-semibold mb-6 text-gray-300">ba of mechanical engineering + minor of computer science</h3>
        <h4 className="text-lg sm:text-xl mb-8 text-gray-400"> @Northeastern University</h4>
        <a
          href="/projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>
    </main>
  );
}
