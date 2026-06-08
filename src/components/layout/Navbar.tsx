import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '@/constants/data'
import { scrollToSection } from '@/utils/scroll'
import { isTouchDevice } from '@/utils/device'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = isTouchDevice()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <>
      <motion.header
        initial={isMobile ? { y: 0 } : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 px-6 md:px-12 py-4 transition-all duration-300',
          mobileOpen ? 'z-[60]' : 'z-40',
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

          <ul className="hidden md:flex items-center gap-8">
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
            className="hidden md:block text-sm px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            Let's talk
          </button>

          <button
            type="button"
            className="md:hidden text-muted p-2 -mr-2 touch-manipulation"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-void/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 pt-16"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className="text-2xl font-medium touch-manipulation py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="text-sm px-6 py-3 rounded-full glass touch-manipulation"
            >
              Let's talk
            </button>
            <p className="font-mono text-xs text-muted mt-4">{SITE.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
