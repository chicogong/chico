import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

// Image generation for PWA
export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 320,
          background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        C
      </div>
    ),
    {
      ...size,
    }
  )
}
