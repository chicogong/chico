import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8 fade-in">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            页面未找到
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            返回首页
          </Link>
          <a
            href="https://github.com/chicogong"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-md transition-all"
          >
            访问 GitHub
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-16 opacity-20">
          <svg
            className="w-48 h-48 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}
