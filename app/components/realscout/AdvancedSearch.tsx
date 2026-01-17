'use client'

import { REALSCOUT_CONFIG } from '@/lib/constants'
import { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': {
        'agent-encoded-id': string
        children?: never
      }
    }
  }
}

type AdvancedSearchProps = {
  className?: string
}

export default function AdvancedSearch({
  className = '',
}: AdvancedSearchProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <realscout-advanced-search
        agent-encoded-id={REALSCOUT_CONFIG.agentEncodedId}
      />
    </div>
  )
}
