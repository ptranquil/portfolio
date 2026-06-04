import { motion } from 'framer-motion'
import { ArrowUpRight, Layers } from 'lucide-react'
import { useState } from 'react'
import { PROJECTS } from '@/constants/data'
import type { Project } from '@/constants/types'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectModal } from '@/components/projects/ProjectModal'
import { cn } from '@/utils/cn'

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (p: Project) => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative glass rounded-2xl overflow-hidden cursor-pointer',
        project.featured && 'md:col-span-2 border border-accent/25',
        !project.featured && index % 2 === 1 && 'lg:mt-0'
      )}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      role="button"
      tabIndex={0}
    >
      <div
        className={cn('absolute inset-0 bg-linear-to-br opacity-60', project.gradient)}
        style={{ boxShadow: `inset 0 0 60px ${project.accent}15` }}
      />

      <div
        className={cn(
          'relative p-6 md:p-8 flex flex-col',
          project.featured ? 'min-h-[240px]' : 'min-h-[280px]'
        )}
      >
        <div className="flex justify-between items-start mb-4 gap-3">
          <div className="flex flex-wrap gap-2">
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded glass"
              style={{ color: project.accent }}
            >
              0{index + 1}
            </span>
            {project.featured && (
              <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-accent/20 text-accent-glow">
                Flagship
              </span>
            )}
          </div>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={20} className="text-muted" />
          </motion.div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient-accent transition-all">
          {project.name}
        </h3>
        <p className="text-muted text-sm mb-4 flex-1">{project.tagline}</p>

        {'scale' in project && project.scale && (
          <p className="font-mono text-[10px] text-cyan/80 mb-4">{project.scale}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, project.featured ? 6 : 4).map((t) => (
            <span key={t} className="text-[10px] font-mono text-muted/80 glass px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
          {project.tech.length > (project.featured ? 6 : 4) && (
            <span className="text-[10px] font-mono text-muted">
              +{project.tech.length - (project.featured ? 6 : 4)}
            </span>
          )}
        </div>

        <div className="flex items-center pt-4 border-t border-white/5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(project)
            }}
            className="text-sm text-muted hover:text-white flex items-center gap-1 transition-colors"
          >
            <Layers size={14} />
            Engineering deep-dive
          </button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: project.accent }}
        />
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Engineering highlights"
          subtitle="Production systems across enterprise platforms, serverless migrations, logistics protocols, and commerce integrations — architecture-first, not repo-driven."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
