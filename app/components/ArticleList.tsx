import { articles } from '@/lib/data'

export function ArticleList() {
  if (articles.length === 0) return null
  
  return (
    <section className="mb-20 slide-up" style={{ animationDelay: '450ms' }}>
      <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-8 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-neutral-900"></span>
        Writing
      </h2>
      
      <div className="space-y-4">
        {articles.map((article, index) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 -mx-4 rounded-xl hover:bg-neutral-50 transition-colors"
            style={{ animationDelay: `${450 + index * 50}ms` }}
          >
            <div>
              <h3 className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-neutral-400">{article.date}</span>
                <span className="text-xs text-neutral-300">•</span>
                <span className="text-xs font-medium text-neutral-500 group-hover:text-blue-500 transition-colors">Read Article</span>
              </div>
            </div>
            
            <svg className="w-5 h-5 text-neutral-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
