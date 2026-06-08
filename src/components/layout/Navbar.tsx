import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '@/constants/data'
import { scrollToSection } from '@/utils/scroll'
import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/utils/cn'

interface NavbarProps {
  ready?: boolean
}

function NavbarMobile() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-colors duration-200',
          mobileOpen ? 'z-[60]' : 'z-40',
          scrolled && 'glass border-b border-white/5 py-3'
        )}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNav('hero')}
            className="font-mono text-sm font-medium tracking-tight touch-manipulation"
          >
            PD<span className="text-accent-glow">.</span>
          </button>

          <button
            type="button"
            className="text-muted p-2 -mr-2 touch-manipulation"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-void flex flex-col items-center justify-center gap-6 pt-16"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className="text-xl font-medium touch-manipulation py-2 min-h-[44px]"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="text-sm px-6 py-3 rounded-full glass touch-manipulation min-h-[44px]"
          >
            Let's talk
          </button>
          <p className="font-mono text-xs text-muted mt-2">{SITE.name}</p>
        </div>
      )}
    </>
  )
}

function NavbarDesktop({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => scrollToSection(id)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 transition-all duration-300',
        scrolled && 'glass border-b border-white/5 py-3'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNav('hero')}
          className="font-mono text-sm font-medium tracking-tight hover:text-accent-glow transition-colors"
        >
          PD<span className="text-accent-glow">.</span>
        </button>

        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => handleNav('contact')}
          className="text-sm px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
        >
          Let's talk
        </button>
      </nav>
    </motion.header>
  )
}

export function Navbar({ ready = true }: NavbarProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <NavbarMobile />
  }

  return <NavbarDesktop ready={ready} />
}
