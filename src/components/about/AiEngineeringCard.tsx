import { motion } from 'framer-motion'
import { AI_ENGINEERING } from '@/constants/data'

export function AiEngineeringCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 glass-strong rounded-2xl p-6 md:p-8 border border-accent/15 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-glow">
            {AI_ENGINEERING.title}
          </span>
          {AI_ENGINEERING.tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-mono glass px-2 py-0.5 rounded-full text-cyan"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="text-muted text-sm leading-relaxed max-w-3xl mb-8">
          {AI_ENGINEERING.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {AI_ENGINEERING.practices.map((p, i) => (
            <motion.div
              key={p.area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-4"
            >
              <h4 className="font-mono text-xs text-cyan mb-2">{p.area}</h4>
              <p className="text-muted text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">
              Outcomes
            </p>
            <ul className="space-y-2">
              {AI_ENGINEERING.outcomes.map((o) => (
                <li key={o} className="text-sm text-muted flex gap-2">
                  <span className="text-accent-glow shrink-0">→</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-xl p-4 border border-white/5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
              Guardrails
            </p>
            <p className="text-sm text-muted/90 leading-relaxed">{AI_ENGINEERING.guardrails}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
