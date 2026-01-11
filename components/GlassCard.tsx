'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all ${className}`}
    >
      {children}
    </motion.div>
  )
}
