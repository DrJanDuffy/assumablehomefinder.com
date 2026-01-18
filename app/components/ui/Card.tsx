import { type ReactNode } from 'react'
import Link from 'next/link'

type CardProps = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function Card({
  children,
  className = '',
  href,
  onClick,
}: CardProps) {
  const baseStyles =
    'rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow [@media(hover:hover)]:hover:shadow-md'

  const combinedClassName = `${baseStyles} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  )
}
