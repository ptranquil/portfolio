import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS, SITE } from '@/constants/data'
import { scrollToSection } from '@/utils/scroll'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50)
  })

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
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
            className="md:hidden text-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        className="fixed inset-0 z-30 md:hidden glass-strong flex flex-col items-center justify-center gap-8"
      >
        {NAV_LINKS.map((link, i) => (
          <motion.button
            key={link.id}
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.05 }}
            type="button"
            onClick={() => handleNav(link.id)}
            className="text-2xl font-medium"
          >
            {link.label}
          </motion.button>
        ))}
        <p className="font-mono text-xs text-muted mt-8">{SITE.name}</p>
      </motion.div>
    </>
  )
}
