import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
  openInNewTab?: boolean
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  icon,
  openInNewTab = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors relative overflow-hidden'

  const variants = {
    primary: 'bg-accent/90 text-white hover:bg-accent glow-accent',
    secondary: 'glass text-white hover:bg-white/10',
    ghost: 'text-muted hover:text-white hover:bg-white/5',
  }

  const content = (
    <>
      {icon}
      {children}
    </>
  )

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <motion.a
        href={href}
        target={openInNewTab || href.startsWith('http') ? '_blank' : undefined}
        rel={openInNewTab || href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
