'use client'

import { REALSCOUT_CONFIG } from '@/lib/constants'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': {
        'agent-encoded-id': string
        children?: never
      }
    }
  }
}

type SimpleSearchProps = {
  className?: string
}

export default function SimpleSearch({
  className = '',
}: SimpleSearchProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <realscout-simple-search
        agent-encoded-id={REALSCOUT_CONFIG.agentEncodedId}
      />
    </div>
  )
}
