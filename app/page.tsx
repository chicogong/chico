import { profile, projects, links } from '@/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Header with Avatar */}
        <header className="mb-16 fade-in">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg scale-on-hover">
              C
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 gradient-text">
                {profile.name}
              </h1>
              <p className="text-lg text-neutral-600 mb-1">
                {profile.role} <span className="text-neutral-400">@</span> <span className="font-medium">{profile.company}</span>
              </p>
              <p className="text-sm text-neutral-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </p>
            </div>
          </div>

          <p className="text-neutral-600 leading-relaxed text-lg max-w-2xl">
            {profile.bio}
          </p>
        </header>

        {/* Projects with Cards */}
        <section className="mb-16 slide-up">
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-8 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600"></span>
            Selected Work
          </h2>
          <div className="grid gap-4 md:gap-6">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    {project.github && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {project.github}
                      </div>
                    )}
                  </div>
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mb-16 slide-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-purple-600 to-pink-600"></span>
            Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-md transition-all scale-on-hover"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200 fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-neutral-500">
            © 2026 · Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}
