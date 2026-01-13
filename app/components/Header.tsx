import { profile, links } from '@/lib/data'
import { Avatar } from './GitHubComponents'

export function Header() {
  return (
    <header className="mb-16 fade-in relative">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div className="relative">
            <Avatar />
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-4 font-medium">
            {profile.role} <span className="text-neutral-300 mx-1">|</span> {profile.company}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <div className="flex items-center text-sm text-neutral-500 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100">
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </div>
            
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-neutral-500 hover:text-blue-600 bg-neutral-50 hover:bg-blue-50 px-3 py-1 rounded-full border border-neutral-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-neutral-600 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0">
        {profile.bio}
      </p>
    </header>
  )
}
