import { motion } from 'framer-motion'
import { Building2, Cloud, Network, Workflow } from 'lucide-react'
import { ABOUT_HIGHLIGHTS, ABOUT_PILLARS, STATS } from '@/constants/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'

const pillarIcons = [Building2, Cloud, Network, Workflow]

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
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About"
          title="Enterprise-grade engineering"
          subtitle="Full stack and backend engineer delivering scalable cloud-native systems, modular architectures, and production reliability across enterprise client ecosystems."
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

        <div className="mt-20 relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-accent/50 via-white/10 to-transparent" />
          <div className="space-y-8">
            {ABOUT_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2 md:left-6 top-2 w-3 h-3 rounded-full bg-accent glow-accent" />
                <span className="font-mono text-xs text-cyan">{item.year}</span>
                <h3 className="text-lg font-medium mt-1 mb-2">{item.title}</h3>
                <p className="text-muted text-sm max-w-2xl leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
