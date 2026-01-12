export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 flex items-center justify-center">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
        </div>

        <p className="text-neutral-600 font-medium">加载中...</p>
      </div>
    </main>
  )
}
