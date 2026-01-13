import { projects } from '@/lib/data'

export function ProjectList() {
  return (
    <section className="mb-20 slide-up" style={{ animationDelay: '300ms' }}>
      <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-8 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-neutral-900"></span>
        Selected Work
      </h2>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-1"
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            
            <div className="relative p-6 rounded-2xl bg-white border border-neutral-200 group-hover:border-transparent shadow-sm group-hover:shadow-xl transition-all h-full flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold bg-neutral-50 text-neutral-600 rounded-md border border-neutral-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link if available */}
              {project.github && (
                <div className="sm:border-l sm:border-neutral-100 sm:pl-6 flex items-center sm:items-start shrink-0">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source
                  </span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
