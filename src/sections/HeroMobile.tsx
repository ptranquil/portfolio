import { ArrowDown, ExternalLink, Mail, FolderOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { HERO_INTRO, HERO_TAGLINE, ROTATING_TITLES, SITE } from '@/constants/data'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/utils/scroll'

/** Static hero — no Framer Motion, reliable touch scroll & taps on mobile. */
export function HeroMobile() {
  const name = SITE.name.split(' ')
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((i) => (i + 1) % ROTATING_TITLES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center section-padding"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted mb-6">
          {HERO_TAGLINE}
        </p>

        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter leading-[0.95] mb-4">
          <span className="block text-gradient">{name[0]}</span>
          <span className="block text-gradient-accent">{name[1]}</span>
        </h1>

        <div className="flex flex-col items-center gap-2 mb-10">
          <span className="font-mono text-sm text-cyan tracking-wide h-8 flex items-center">
            {ROTATING_TITLES[titleIndex]}
          </span>
          <p className="text-muted max-w-2xl text-sm leading-relaxed">{HERO_INTRO}</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
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
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted touch-manipulation"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
