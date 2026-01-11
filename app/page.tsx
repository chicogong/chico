import { profile, projects, links } from '@/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {profile.name}
          </h1>
          <p className="text-lg text-neutral-600 mb-2">
            {profile.role} at {profile.company}
          </p>
          <p className="text-neutral-500 leading-relaxed">
            {profile.bio}
          </p>
        </header>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Selected Work
          </h2>
          <ul className="space-y-6">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <h3 className="font-medium mb-1 link-underline">
                    {project.name}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {project.desc}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Connect */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Connect
          </h2>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 link-underline text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200">
          <p className="text-xs text-neutral-400">
            © 2026 · {profile.location}
          </p>
        </footer>
      </div>
    </main>
  )
}
