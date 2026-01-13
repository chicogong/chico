import { profile, skills } from '@/lib/data'
import { GitHubStats } from './components/GitHubComponents'
import { Header } from './components/Header'
import { TechStack } from './components/TechStack'
import { ProjectList } from './components/ProjectList'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ArticleList } from './components/ArticleList'

export default function Home() {
  // JSON-LD structured data for SEO
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
    url: 'https://chico.aimake.cc',
    sameAs: [
      `https://github.com/${profile.github}`,
      `https://x.com/${profile.twitter}`,
    ],
    description: profile.bio,
    knowsAbout: skills.map(skill => skill.name),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
        
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-20 md:py-32 relative z-10">
          
          <Header />
          
          <div className="space-y-24">
            <TechStack />
            
            <ProjectList />
            
            <section className="mb-20 slide-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-neutral-900"></span>
                GitHub Activity
              </h2>
              <GitHubStats />
            </section>

            <ArticleList />
            
            <ExperienceTimeline />
          </div>

          <footer className="mt-32 pt-10 border-t border-neutral-100 text-center md:text-left fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} {profile.name}. All rights reserved.
              </p>
              <p className="text-xs text-neutral-400 font-mono">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}