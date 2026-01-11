export interface Project {
  name: string
  description: string
  url: string
  icon: string
  color: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export const projects: Project[] = [
  {
    name: 'Realtime AI',
    description: 'WebSocket-based real-time voice conversation platform',
    url: 'https://realtime-ai.chat',
    icon: '🎙️',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'TRTC AI Quick Build',
    description: 'Build real-time AI voice apps in minutes',
    url: 'https://github.com/chicogong/trtc-ai-build-quickly',
    icon: '🚀',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Conversational AI Agent',
    description: 'TRTC-based voice/video AI platform',
    url: 'https://github.com/chicogong/conversational-ai-agent',
    icon: '🤖',
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'AI Tools',
    description: 'Collection of Realtime AI utilities',
    url: 'https://tools.realtime-ai.chat',
    icon: '⚡',
    color: 'from-green-500 to-emerald-600'
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: '⚡',
    url: 'https://github.com/chicogong'
  },
  {
    name: 'X/Twitter',
    icon: '𝕏',
    url: 'https://x.com/chicogongx'
  },
  {
    name: 'Email',
    icon: '✉️',
    url: 'mailto:chicogong@tencent.com'
  }
]
