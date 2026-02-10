export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-6 py-32 text-center">
      
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

      <p className="text-lg mb-12 text-gray-400">
        Feel free to reach out for collaboration, opportunities, or questions.
      </p>

      <form
        action="mailto:andrewzeng88@gmail.com"
        method="post"
        encType="text/plain"
        className="max-w-lg mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full p-4 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full p-4 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          className="w-full p-4 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 transition text-white font-bold py-3 rounded"
        >
          Send Message
        </button>
      </form>

    </main>
  );
}
