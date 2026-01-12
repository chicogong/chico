'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // 监控 Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // 监控 LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime)
      })
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

      // 监控 FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime)
        })
      })
      fidObserver.observe({ type: 'first-input', buffered: true })

      // 监控 CLS (Cumulative Layout Shift)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
            console.log('CLS:', clsValue)
          }
        }
      })
      clsObserver.observe({ type: 'layout-shift', buffered: true })

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}
