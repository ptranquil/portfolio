import { lazy, Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CursorGlow } from '@/components/effects/CursorGlow'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { LoadingScreen } from '@/components/effects/LoadingScreen'
import { Hero } from '@/sections/Hero'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const About = lazy(() => import('@/sections/About').then((m) => ({ default: m.About })))
const Skills = lazy(() => import('@/sections/Skills').then((m) => ({ default: m.Skills })))
const Projects = lazy(() =>
  import('@/sections/Projects').then((m) => ({ default: m.Projects }))
)
const Experience = lazy(() =>
  import('@/sections/Experience').then((m) => ({ default: m.Experience }))
)
const SystemDesign = lazy(() =>
  import('@/sections/SystemDesign').then((m) => ({ default: m.SystemDesign }))
)
const Contact = lazy(() => import('@/sections/Contact').then((m) => ({ default: m.Contact })))

function SectionFallback() {
  return <div className="min-h-[40vh]" />
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll()

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <main>
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <SystemDesign />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
