import { useState } from 'react'
import { motion } from 'framer-motion'
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
import { shouldSkipLoadingScreen } from '@/utils/device'

export default function App() {
  const [loaded, setLoaded] = useState(shouldSkipLoadingScreen())
  useSmoothScroll()

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <motion.div
        initial={loaded ? false : { opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: loaded ? 0 : 0.5 }}
      >
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <SystemDesign />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
