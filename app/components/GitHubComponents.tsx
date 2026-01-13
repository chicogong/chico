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
          <div key={i} className="p-5 rounded-xl bg-white/40 border border-white/20 h-24 shadow-sm" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200 hover:shadow-md transition-all">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-1">{stats?.repos || 0}</div>
        <div className="text-sm text-neutral-600">Repositories</div>
      </div>
      <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200 hover:shadow-md transition-all">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-1">1K+</div>
        <div className="text-sm text-neutral-600">Contributions</div>
      </div>
      <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200 hover:shadow-md transition-all">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 mb-1">{stats?.stars || 0}</div>
        <div className="text-sm text-neutral-600">Stars Earned</div>
      </div>
    </div>
  )
}

export function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState('https://github.com/chicogong.png')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only fetch if we want to confirm the URL or get other data, 
    // but the png link is reliable.
    setLoading(false)
    
    // Optionally still fetch for latest, but don't clear the default
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (data.avatarUrl) {
          setAvatarUrl(data.avatarUrl)
        }
      })
      .catch(() => {
        // Do nothing on error, keep default
      })
  }, [])

  return (
    <Image
      src={avatarUrl}
      alt="Chico avatar"
      width={96}
      height={96}
      className="w-24 h-24 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 scale-on-hover object-cover ring-4 ring-white"
      priority
    />
  )
}