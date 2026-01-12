import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from './components/Analytics'
import { ErrorBoundary } from './components/ErrorBoundary'
import { PerformanceMonitor } from './components/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://chico-lac.vercel.app'),
  title: {
    default: 'Chico - Realtime AI Engineer',
    template: '%s | Chico'
  },
  description: 'Building conversational AI and real-time voice experiences. Realtime AI Engineer at Tencent, working on WebRTC, voice AI, and real-time communication technologies.',
  keywords: ['Chico', 'Realtime AI', 'Voice AI', 'WebRTC', 'Tencent', 'AI Engineer', 'Conversational AI', 'Real-time Communication', 'WebSocket', 'AI Voice', 'Beijing'],
  authors: [{ name: 'Chico', url: 'https://chico-lac.vercel.app' }],
  creator: 'Chico',
  publisher: 'Chico',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://chico-lac.vercel.app',
    title: 'Chico - Realtime AI Engineer',
    description: 'Building conversational AI and real-time voice experiences. Working on WebRTC, voice AI, and real-time communication at Tencent.',
    siteName: 'Chico Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Chico - Realtime AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chico - Realtime AI Engineer',
    description: 'Building conversational AI and real-time voice experiences',
    creator: '@chicogongx',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '01p8stpIcQDDBokaub6E3Luwr_bbTgg1FvOClREYrm0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
          <Analytics />
          <PerformanceMonitor />
        </ErrorBoundary>
      </body>
    </html>
  )
}
