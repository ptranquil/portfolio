import { motion } from 'framer-motion'
import { Building2, Cloud, Network, Sparkles } from 'lucide-react'
import { ABOUT_PILLARS, STATS } from '@/constants/data'
import { AiEngineeringCard } from '@/components/about/AiEngineeringCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'

const pillarIcons = [Building2, Cloud, Network, Sparkles]

function StatCard({
  label,
  value,
  suffix,
  active,
}: {
  label: string
  value: number
  suffix: string
  active: boolean
}) {
  const count = useCounter(value, active)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 text-center group hover:border-accent/30 transition-colors"
    >
      <p className="text-3xl md:text-4xl font-semibold text-gradient-accent font-mono">
        {count}
        {suffix}
      </p>
      <p className="text-muted text-sm mt-2">{label}</p>
    </motion.div>
  )
}

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-padding relative pb-10 md:pb-14" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About"
          title="Enterprise-grade engineering"
          subtitle="Full stack and backend engineer delivering scalable cloud-native systems, modular architectures, and AI-assisted workflows with Cursor and Claude — always engineer-reviewed before production."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <StatCard {...stat} active={inView} />
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {ABOUT_PILLARS.map((p, i) => {
              const Icon = pillarIcons[i] ?? Building2
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-5 group"
                >
                  <Icon className="w-5 h-5 text-accent-glow mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-medium mb-1">{p.label}</h3>
                  <p className="text-muted text-sm">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <AiEngineeringCard />
      </div>
    </section>
  )
}
