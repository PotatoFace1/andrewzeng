export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 text-gray-700 font-sans">
      {/* NAVIGATION */}
      <header className="p-6 border-b">
        <nav className="flex justify-center gap-16 text-sm font-bold uppercase tracking-wide">
          <a href="/about" className="hover:text-red-600">About</a>
          <a href="/projects" className="hover:text-red-600">Projects</a>
          <a href="/resume" className="hover:text-red-600">Resume</a>
          <a href="/contact" className="hover:text-red-600">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32 sm:py-48">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">bachelors in mechanical engineering & computer science minor </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">@Northeastern University</h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          I build things that move, fly, or talk on a bus. Currently grinding through engineering at Northeastern, aiming to engineer tomorrow’s airborne systems.
        </p>
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
