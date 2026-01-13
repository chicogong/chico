import { skills } from '@/lib/data'

export function TechStack() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill.name)
    return acc
  }, {} as Record<string, string[]>)

  const categoryColors: Record<string, string> = {
    'Core': 'from-blue-500 to-cyan-500',
    'Frontend': 'from-purple-500 to-pink-500',
    'Backend': 'from-green-500 to-emerald-500',
    'AI': 'from-orange-500 to-red-500',
  }

  return (
    <section className="mb-20 slide-up" style={{ animationDelay: '200ms' }}>
      <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-8 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-neutral-900"></span>
        Tech Stack
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(skillsByCategory).map(([category, items], idx) => (
          <div 
            key={category} 
            className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all"
            style={{ animationDelay: `${200 + idx * 100}ms` }}
          >
            <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r ${categoryColors[category] || 'from-gray-600 to-gray-800'}`}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
