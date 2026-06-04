import { motion } from 'framer-motion'
import { useState } from 'react'
import { SKILL_CATEGORIES } from '@/constants/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/utils/cn'

const categories = Object.keys(SKILL_CATEGORIES) as (keyof typeof SKILL_CATEGORIES)[]

export function Skills() {
  const [active, setActive] = useState<keyof typeof SKILL_CATEGORIES>('Backend')
  const skills = SKILL_CATEGORIES[active]

  const orbitSkills = Object.values(SKILL_CATEGORIES).flat()

  return (
    <section id="skills" className="section-padding relative overflow-hidden pt-10 md:pt-14">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technical arsenal"
          subtitle="Interactive skill map across backend, cloud, data, and DevOps domains."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                active === cat
                  ? 'bg-accent/20 text-white border border-accent/40'
                  : 'glass text-muted hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(99,102,241,0.3)',
                }}
                className="glass rounded-xl px-5 py-4 font-mono text-sm cursor-default group"
              >
                <span className="text-muted group-hover:text-accent-glow transition-colors">
                  {'> '}
                </span>
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <div className="relative h-[320px] md:h-[400px] flex items-center justify-center mx-auto max-w-md">
            <motion.div
              className="absolute w-32 h-32 rounded-full glass-strong flex items-center justify-center z-10"
              animate={{ boxShadow: ['0 0 40px rgba(99,102,241,0.2)', '0 0 60px rgba(34,211,238,0.3)', '0 0 40px rgba(99,102,241,0.2)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="font-mono text-xs text-center text-muted">
                Core
                <br />
                Stack
              </span>
            </motion.div>

            {orbitSkills.slice(0, 12).map((skill, i) => {
              const angle = (i / 12) * Math.PI * 2
              const radius = 140
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={skill}
                  className="absolute font-mono text-[10px] md:text-xs glass px-2 py-1 rounded-full cursor-default -translate-x-1/2 -translate-y-1/2"
                  style={{ left: '50%', top: '50%' }}
                  initial={{ x, y, opacity: 0 }}
                  animate={{
                    x: [x, x * 1.05, x],
                    y: [y, y * 1.05, y],
                    opacity: 0.7,
                  }}
                  whileHover={{ scale: 1.2, opacity: 1, zIndex: 20 }}
                  transition={{
                    x: { duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 0.3 },
                  }}
                >
                  {skill}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
