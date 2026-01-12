import { NextResponse } from 'next/server'

export const revalidate = 3600 // Cache for 1 hour

interface GitHubStats {
  repos: number
  stars: number
  avatarUrl: string
}

export async function GET() {
  try {
    const username = 'chicogong'
    const token = process.env.GITHUB_TOKEN

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers, next: { revalidate: 3600 } })
    ])

    if (!userRes.ok || !reposRes.ok) {
      throw new Error('GitHub API request failed')
    }

    const userData = await userRes.json()
    const reposData = await reposRes.json()

    const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)

    const stats: GitHubStats = {
      repos: userData.public_repos,
      stars: totalStars,
      avatarUrl: userData.avatar_url
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json(
      { repos: 50, stars: 100, avatarUrl: '' },
      { status: 200 }
    )
  }
}
