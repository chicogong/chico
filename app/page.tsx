import { profile, projects, links, skills, articles, experience } from '@/lib/data'
import { GitHubStats, Avatar } from './components/GitHubComponents'

export default function Home() {
  // JSON-LD structured data for SEO
  // Content is from our own data file and JSON.stringify auto-escapes, so it's safe
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    worksFor: {
      '@type': 'Organization',
      name: profile.company,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beijing',
      addressCountry: 'CN',
    },
    email: profile.email,
    url: 'https://chico-lac.vercel.app',
    sameAs: [
      `https://github.com/${profile.github}`,
      `https://x.com/${profile.twitter}`,
    ],
    description: profile.bio,
    knowsAbout: skills.map(skill => skill.name),
  }

  return (
    <>
      {/* JSON-LD Structured Data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Header with Avatar */}
        <header className="mb-16 fade-in">
          <div className="flex items-start gap-6 mb-6">
            <Avatar />
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

        {/* Skills */}
        <section className="mb-16 slide-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-green-600 to-teal-600"></span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-neutral-200 text-sm font-medium text-neutral-700 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Projects with Cards */}
        <section className="mb-16 slide-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-8 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-600"></span>
            Selected Work
          </h2>
          <div className="grid gap-4 md:gap-6">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`访问项目: ${project.name} - ${project.desc}`}
                className="group relative p-6 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
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

        {/* GitHub Stats */}
        <section className="mb-16 slide-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-orange-600 to-red-600"></span>
            GitHub Activity
          </h2>
          <GitHubStats />
        </section>

        {/* Articles */}
        <section className="mb-16 slide-up" style={{ animationDelay: '450ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-purple-600 to-pink-600"></span>
            Recent Writing
          </h2>
          <div className="space-y-3">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200 hover:bg-white hover:shadow-md hover:border-purple-200 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900 group-hover:text-purple-600 transition-colors mb-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-500">{article.date}</p>
                  </div>
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16 slide-up" style={{ animationDelay: '500ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-green-600 to-emerald-600"></span>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l-2 border-neutral-200 last:border-l-0 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-white"></div>
                <div className="mb-1">
                  <h3 className="font-semibold text-neutral-900">{exp.role}</h3>
                  <p className="text-sm text-neutral-600">{exp.company}</p>
                </div>
                <p className="text-xs text-neutral-500 mb-2">{exp.period}</p>
                <p className="text-sm text-neutral-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mb-16 slide-up" style={{ animationDelay: '550ms' }}>
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-600"></span>
            Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`通过${link.name}联系我`}
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
    </>
  )
}
