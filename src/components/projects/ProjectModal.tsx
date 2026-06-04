import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { Project } from '@/constants/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 md:w-full md:max-w-2xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl p-6 md:p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                {project.featured && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-glow mb-2 block">
                    Flagship project
                  </span>
                )}
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-muted text-sm mt-1">{project.tagline}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-muted leading-relaxed mb-4">{project.description}</p>

            {'scale' in project && project.scale && (
              <p className="font-mono text-xs text-cyan mb-6">{project.scale}</p>
            )}

            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-glow mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="glass px-3 py-1 rounded-full text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan mb-3">
                  Engineering highlights
                </h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted flex gap-2">
                      <span className="text-accent-glow">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-violet mb-3">
                  Architecture
                </h4>
                <ul className="space-y-2">
                  {project.architecture.map((a) => (
                    <li key={a} className="text-sm text-muted flex gap-2">
                      <span className="text-cyan">◇</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {'challenges' in project && project.challenges && (
              <div className="mb-8 glass rounded-xl p-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                  Technical challenges solved
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((c) => (
                    <li key={c} className="text-sm text-muted/90">
                      ▸ {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
