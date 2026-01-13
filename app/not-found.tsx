import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
       <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8 fade-in">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            Back to Home
          </Link>
          <a
            href="https://github.com/chicogong"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-md transition-all"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </main>
  )
}