import { projects, links } from '@/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-20">

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">Chico Gong</h1>
          <p className="text-xl text-gray-400 text-balance">
            Building conversational AI and real-time voice experiences at Tencent
          </p>
        </header>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-start justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div>
                    <h3 className="font-medium group-hover:text-white transition-colors">{project.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{project.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors mt-1 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Connect</h2>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-600">
            © 2026 · Beijing
          </p>
        </footer>
      </div>
    </main>
  )
}
