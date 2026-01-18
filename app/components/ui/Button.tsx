import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode, useMemo } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  fullWidthMobile?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-dark)]',
  secondary:
    'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] active:bg-[var(--color-secondary-dark)]',
  outline:
    'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white active:bg-[var(--color-primary)] active:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm min-h-[40px]',
  md: 'px-4 py-3 text-base min-h-[48px]',
  lg: 'px-6 py-3.5 text-lg min-h-[52px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  fullWidthMobile = false,
}: ButtonProps) {
  const combinedClassName = useMemo(
    () => {
      const baseStyles = `inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-[0.98] min-w-[48px] ${
        fullWidthMobile ? 'w-full sm:w-auto' : ''
      }`
      return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
    },
    [variant, size, className, fullWidthMobile]
  )

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
