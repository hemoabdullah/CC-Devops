export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Hammam Abdullah</h1>
          <p className="text-xl text-slate-300 mb-2">Student ID: 2341720203</p>
          <p className="text-lg text-blue-400">Cloud Computing & DevOps Student</p>
        </div>

        {/* Tech Interests Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Tech Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <span className="text-lg">☁️ Cloud Computing</span>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <span className="text-lg">🔧 DevOps</span>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <span className="text-lg">💻 Full Stack Development</span>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <span className="text-lg">🎨 UI/UX Design</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Languages & Frameworks</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• JavaScript / TypeScript</li>
                <li>• React / Next.js</li>
                <li>• Node.js</li>
                <li>• HTML / CSS / Tailwind</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">DevOps & Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Docker</li>
                <li>• Git / GitHub</li>
                <li>• CI/CD Pipelines</li>
                <li>• Linux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Portfolio</h2>
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold mb-2">CC-Devops Project</h3>
              <p className="text-slate-300 mb-3">
                A student portfolio website built with Next.js, featuring Docker containerization and CI/CD integration.
              </p>
              <div className="flex gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
              </div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure Projects</h3>
              <p className="text-slate-300 mb-3">
                Various cloud computing projects focusing on deployment, scaling, and infrastructure automation.
              </p>
              <div className="flex gap-2">
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm">Terraform</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Get In Touch</h2>
          <p className="text-slate-300 mb-6">
            Interested in collaboration or have a question? Feel free to reach out!
          </p>
          <a
            href="https://github.com/hemoabdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            View GitHub Profile
          </a>
        </section>
      </div>
    </div>
  );
}
