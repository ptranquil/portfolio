import { MotionConfig } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CursorGlow } from '@/components/effects/CursorGlow'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { LoadingScreen } from '@/components/effects/LoadingScreen'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { SystemDesign } from '@/sections/SystemDesign'
import { Contact } from '@/sections/Contact'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useIntroReady } from '@/hooks/useIntroReady'

export default function App() {
  const { isMobile, ready, skipLoader, onIntroComplete } = useIntroReady()
  useSmoothScroll()

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
      {!skipLoader && !ready && <LoadingScreen onComplete={onIntroComplete} />}

      {!isMobile && <ScrollProgress />}
      {!isMobile && <CursorGlow />}

      <Navbar ready={ready} />
      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <SystemDesign />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
