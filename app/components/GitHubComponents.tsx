'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface GitHubStats {
  repos: number
  stars: number
  avatarUrl: string
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => {
        setStats({ repos: 50, stars: 100, avatarUrl: '' })
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-5 rounded-xl bg-neutral-200 h-24" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200">
        <div className="text-3xl font-bold gradient-text mb-1">{stats?.repos || 0}</div>
        <div className="text-sm text-neutral-600">Repositories</div>
      </div>
      <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200">
        <div className="text-3xl font-bold gradient-text mb-1">1K+</div>
        <div className="text-sm text-neutral-600">Contributions</div>
      </div>
      <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200">
        <div className="text-3xl font-bold gradient-text mb-1">{stats?.stars || 0}</div>
        <div className="text-sm text-neutral-600">Stars Earned</div>
      </div>
    </div>
  )
}

export function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        setAvatarUrl(data.avatarUrl)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading || !avatarUrl) {
    return (
      <div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg scale-on-hover"
        aria-hidden="true"
      >
        C
      </div>
    )
  }

  return (
    <Image
      src={avatarUrl}
      alt="Chico avatar"
      width={80}
      height={80}
      className="w-20 h-20 rounded-full shrink-0 shadow-lg scale-on-hover"
      priority
    />
  )
}
