import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/lib/constants'

export const runtime = 'edge'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || SITE_CONFIG.tagline

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #152a40 100%)',
        }}
      >
        <div tw="flex flex-col items-center justify-center px-16 py-12">
          <h1
            tw="text-6xl font-bold text-white text-center mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {title}
          </h1>
          <p
            tw="text-2xl text-white/90 text-center max-w-3xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {SITE_CONFIG.description}
          </p>
          <div tw="mt-8 flex items-center">
            <p
              tw="text-xl text-white/80"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {SITE_CONFIG.name}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
