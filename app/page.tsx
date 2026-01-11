import GlassCard from '@/components/GlassCard'
import ProjectCard from '@/components/ProjectCard'
import AnimatedBackground from '@/components/AnimatedBackground'
import { projects, socialLinks } from '@/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-7xl">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {/* Hero Card - 大卡片 */}
          <GlassCard className="md:col-span-2 lg:col-span-2 md:row-span-2" delay={0}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold shrink-0 animate-glow">
                C
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">Chico Gong</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-4">Realtime AI & Voice Engineer</p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                  让人们像对话一样自然地使用软件 — Building conversational AI and real-time voice experiences
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs md:text-sm text-gray-400">@ Tencent · Beijing</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* About Me - 右上角卡片 */}
          <GlassCard className="md:col-span-2 lg:col-span-2" delay={0.1}>
            <h2 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Focus Areas</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl md:text-2xl">🎙️</span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Voice & TTS Engineering</h3>
                  <p className="text-xs md:text-sm text-gray-400">Streaming ASR→LLM→TTS pipelines with WebRTC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl md:text-2xl">🤖</span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Conversational AI</h3>
                  <p className="text-xs md:text-sm text-gray-400">Memory, tool calling & real-time interaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl md:text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Tech Stack</h3>
                  <p className="text-xs md:text-sm text-gray-400">JavaScript, Python, Node.js, WebRTC, OpenAI</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Featured Projects */}
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}

          {/* Social Links */}
          <GlassCard delay={0.4}>
            <h3 className="text-lg font-bold mb-4 text-center">Connect</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-3 md:p-4 text-center hover:scale-105 hover:bg-white/10 transition-all group"
                >
                  <div className="text-xl md:text-2xl mb-1 group-hover:scale-110 transition-transform">{link.icon}</div>
                  <span className="text-[10px] md:text-xs text-gray-400">{link.name}</span>
                </a>
              ))}
            </div>
          </GlassCard>

          {/* GitHub Contributions */}
          <GlassCard className="md:col-span-2 lg:col-span-3" delay={0.5}>
            <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
            <div className="bg-slate-900/50 rounded-lg p-3 md:p-4 overflow-x-auto">
              <img
                src="https://ghchart.rshashi.org/38bdf8/chicogong"
                alt="GitHub Contributions"
                className="w-full h-auto max-w-full"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
              <a
                href="https://github.com/chicogong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm px-3 py-1.5 glass rounded-full hover:bg-white/10 transition-colors"
              >
                View Profile →
              </a>
              <span className="text-xs md:text-sm px-3 py-1.5 glass rounded-full">🏆 Pair Extraordinaire × 2</span>
              <span className="text-xs md:text-sm px-3 py-1.5 glass rounded-full">🦈 Pull Shark × 3</span>
            </div>
          </GlassCard>

        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            © 2026 Chico Gong · Built with Next.js 15 & Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}
