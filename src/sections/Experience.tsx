import { motion } from 'framer-motion'
import { AI_ENGINEERING, EXPERIENCE } from '@/constants/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/utils/cn'

export function Experience() {
  const featured = EXPERIENCE.find((e) => e.featured)

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Professional trajectory"
          subtitle="Enterprise platforms, cloud migrations, and production systems across telecommunications, logistics, and client ecosystems."
        />

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-strong rounded-2xl p-6 md:p-8 border border-accent/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs text-cyan">{featured.period}</span>
                <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent-glow text-[10px] font-mono uppercase tracking-wider">
                  Current
                </span>
                <span className="px-2 py-0.5 rounded-full glass text-[10px] font-mono uppercase tracking-wider text-muted">
                  Enterprise
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">{featured.role}</h3>
              <p className="text-accent-glow font-medium mt-1">{featured.company}</p>
              <p className="text-muted text-sm mt-4 leading-relaxed max-w-3xl">{featured.summary}</p>

              <ul className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-2">
                {featured.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted flex gap-2 leading-relaxed">
                    <span className="text-cyan shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 glass rounded-xl p-5 border border-violet-500/20">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-glow mb-2">
                  {AI_ENGINEERING.title} · {AI_ENGINEERING.tools.join(' + ')}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  On the enterprise platform: development, pre-PR review, testing, documentation,
                  and debugging — with measurable gains in delivery speed and review quality.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {AI_ENGINEERING.outcomes.slice(0, 4).map((o) => (
                    <li key={o} className="text-xs text-muted/90 flex gap-2">
                      <span className="text-cyan shrink-0">→</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {'techStack' in featured && featured.techStack && (
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">
                    Technology ecosystem
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.techStack.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono glass px-2 py-1 rounded-full text-muted/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div className="relative">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-white/10" />

          {EXPERIENCE.filter((e) => !e.featured).map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12 }}
              className="relative pl-10 md:pl-14 pb-12 last:pb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className={cn(
                  'absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 bg-void z-10',
                  exp.current ? 'border-cyan' : 'border-accent'
                )}
              />

              <span className="font-mono text-xs text-cyan">{exp.period}</span>
              <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
              <p className="text-muted text-sm mb-2">{exp.company}</p>
              {'summary' in exp && exp.summary && (
                <p className="text-muted text-sm mb-4 leading-relaxed">{exp.summary}</p>
              )}

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted flex gap-2 leading-relaxed">
                    <span className="text-accent-glow shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {'achievements' in exp && exp.achievements && exp.achievements.length > 0 && (
                <div className="glass rounded-xl p-4 mt-2">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-2">
                    Impact
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted/90">
                        → {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
