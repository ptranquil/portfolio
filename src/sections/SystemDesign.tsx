import { motion } from 'framer-motion'
import { useState } from 'react'
import { ARCHITECTURE_FLOWS, ENGINEERING_PRINCIPLES } from '@/constants/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/utils/cn'

function FlowDiagram({
  nodes,
  active,
}: {
  nodes: readonly string[]
  active: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-2 md:gap-4 py-8 px-4 overflow-x-auto">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-2 md:gap-4 shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(99,102,241,0.4)' }}
            className="glass rounded-xl px-3 py-2 md:px-4 md:py-3 font-mono text-[10px] md:text-xs text-center min-w-[60px] md:min-w-[80px]"
          >
            {node}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={active ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.1, duration: 0.4 }}
              className="flex items-center gap-1"
            >
              <div className="w-6 md:w-12 h-px bg-accent/50 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cyan"
                  animate={active ? { x: ['-100%', '100%'] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '40%' }}
                />
              </div>
              <span className="text-accent-glow text-xs">→</span>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

function QueueAnimation({ active }: { active: boolean }) {
  const messages = ['event_1', 'event_2', 'event_3']

  return (
    <div className="glass rounded-2xl p-6 mt-8">
      <p className="font-mono text-xs text-muted mb-4">Queue workflow visualization</p>
      <div className="flex gap-4 items-end h-24">
        {['Producer', 'Exchange', 'Queue', 'Consumer'].map((label, col) => (
          <div key={label} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full h-16 relative glass rounded-lg overflow-hidden">
              {active &&
                messages.map((msg, i) => (
                  <motion.div
                    key={`${label}-${msg}`}
                    className="absolute left-1 right-1 h-4 rounded bg-accent/40 font-mono text-[8px] flex items-center justify-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{
                      y: [0, 48, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: col * 0.4 + i * 0.6,
                      repeat: Infinity,
                    }}
                  >
                    {col === 0 ? msg : ''}
                  </motion.div>
                ))}
            </div>
            <span className="font-mono text-[10px] text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SystemDesign() {
  const [activeFlow, setActiveFlow] = useState(0)
  const flow = ARCHITECTURE_FLOWS[activeFlow]

  return (
    <section id="system-design" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Engineering Mindset"
          title="System design philosophy"
          subtitle="How I approach distributed systems, cloud-native delivery, and production-grade architecture — beyond surface-level stack lists."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {ENGINEERING_PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <h4 className="font-mono text-sm text-accent-glow mb-2">{p.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
          Architecture flows
        </p>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {ARCHITECTURE_FLOWS.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFlow(i)}
              className={cn(
                'text-left glass rounded-2xl p-5 transition-all',
                activeFlow === i && 'border-accent/40 bg-accent/5'
              )}
            >
              <h3 className="font-medium mb-2">{f.title}</h3>
              <p className="text-muted text-sm">{f.description}</p>
            </button>
          ))}
        </div>

        <motion.div
          key={flow.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong rounded-2xl"
        >
          <FlowDiagram nodes={flow.nodes} active />
        </motion.div>

        <QueueAnimation active />
      </div>
    </section>
  )
}
