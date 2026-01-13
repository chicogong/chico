import { experience } from '@/lib/data'

export function ExperienceTimeline() {
  return (
    <section className="mb-20 slide-up" style={{ animationDelay: '500ms' }}>
      <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-8 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-neutral-900"></span>
        Experience
      </h2>
      
      <div className="space-y-0">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-10 border-l border-neutral-200 last:pb-0 last:border-transparent">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 ring-4 ring-white"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-neutral-900">{exp.role}</h3>
              <span className="text-sm font-mono text-neutral-400 shrink-0">{exp.period}</span>
            </div>
            
            <div className="text-sm font-medium text-blue-600 mb-3">{exp.company}</div>
            
            <p className="text-neutral-600 leading-relaxed text-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
