'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass rounded-2xl p-6 block group hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
          {project.icon}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{project.name}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      </div>
    </motion.a>
  )
}
