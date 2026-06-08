import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ExternalLink, Mail, FolderOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  HERO_INTRO,
  HERO_TAGLINE,
  HERO_TECH_ICONS,
  ROTATING_TITLES,
  SITE,
} from '@/constants/data'
import { Button } from '@/components/ui/Button'
import { ParticleGrid } from '@/components/effects/ParticleGrid'
import { scrollToSection } from '@/utils/scroll'

const easeOut = [0.22, 1, 0.36, 1] as const

interface HeroProps {
  ready?: boolean
}

function RotatingTitle({ ready }: { ready: boolean }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!ready) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_TITLES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [ready])

  return (
    <div className="h-8 md:h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={ready ? ROTATING_TITLES[index] : 'idle'}
          initial={{ y: 30, opacity: 0 }}
          animate={ready ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="block font-mono text-sm md:text-base text-cyan tracking-wide"
        >
          {ROTATING_TITLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function FloatingIcons({ ready }: { ready: boolean }) {
  const positions = [
    { x: '8%', y: '20%', delay: 0 },
    { x: '85%', y: '25%', delay: 0.5 },
    { x: '12%', y: '70%', delay: 1 },
    { x: '78%', y: '65%', delay: 1.5 },
    { x: '90%', y: '45%', delay: 0.8 },
    { x: '5%', y: '45%', delay: 1.2 },
    { x: '50%', y: '15%', delay: 0.3 },
  ]

  return (
    <>
      {HERO_TECH_ICONS.map((tech, i) => (
        <motion.div
          key={tech}
          className="absolute hidden lg:flex glass px-3 py-1.5 rounded-full font-mono text-[10px] text-muted"
          style={{ left: positions[i]?.x, top: positions[i]?.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            ready
              ? {
                  opacity: [0.4, 0.9, 0.4],
                  y: [0, -12, 0],
                  scale: 1,
                }
              : { opacity: 0, scale: 0.8, y: 0 }
          }
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay: positions[i]?.delay },
            y: { duration: 5, repeat: Infinity, delay: positions[i]?.delay },
            scale: { duration: 0.6, delay: 0.8 + i * 0.1 },
          }}
        >
          {tech}
        </motion.div>
      ))}
    </>
  )
}

export function Hero({ ready = true }: HeroProps) {
  const name = SITE.name.split(' ')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden"
    >
      <ParticleGrid />
      <FloatingIcons ready={ready} />

      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{
          background:
            'conic-gradient(from 180deg, rgba(99,102,241,0.4), rgba(34,211,238,0.2), rgba(167,139,250,0.3), rgba(99,102,241,0.4))',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6"
        >
          {HERO_TAGLINE}
        </motion.p>

        <div className="overflow-hidden mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
            <motion.span
              className="block text-gradient"
              initial={{ y: 120, opacity: 0 }}
              animate={ready ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
            >
              {name[0]}
            </motion.span>
            <motion.span
              className="block text-gradient-accent"
              initial={{ y: 120, opacity: 0 }}
              animate={ready ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
            >
              {name[1]}
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col items-center gap-2 mb-10"
        >
          <RotatingTitle ready={ready} />
          <p className="text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            {HERO_INTRO}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            icon={<FolderOpen size={16} />}
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            href={SITE.resumeUrl}
            openInNewTab
            icon={<ExternalLink size={16} />}
          >
            View Resume
          </Button>
          <Button
            variant="ghost"
            icon={<Mail size={16} />}
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-white transition-colors"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
