import { motion } from 'framer-motion'
import { Download, Mail, FileText } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/SocialIcons'
import { SITE } from '@/constants/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const links = [
  {
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Professional profile',
    href: SITE.linkedin,
    isLucide: false,
  },
  {
    Icon: GitHubIcon,
    label: 'GitHub',
    value: 'Engineering projects',
    href: SITE.github,
    isLucide: false,
  },
  {
    Icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    isLucide: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's engineer at scale"
          subtitle={SITE.collaborationMessage}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 md:p-10 mb-8 text-center"
        >
          <FileText className="w-8 h-8 text-accent-glow mx-auto mb-4" />
          <p className="text-muted leading-relaxed max-w-lg mx-auto mb-8">
            Interested in enterprise platforms, cloud-native backends, or distributed systems
            architecture? Connect via the channels below or download my resume.
          </p>
          <Button variant="primary" href={SITE.resumeUrl} icon={<Download size={16} />}>
            Download Resume
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: '0 12px 40px rgba(99,102,241,0.2)',
              }}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center group hover:border-accent/30 transition-colors"
            >
              <div className="p-3 rounded-xl glass mb-4 group-hover:scale-110 transition-transform">
                {link.isLucide ? (
                  <Mail
                    size={24}
                    className="text-muted group-hover:text-accent-glow transition-colors"
                  />
                ) : (
                  <link.Icon
                    size={24}
                    className="text-muted group-hover:text-accent-glow transition-colors"
                  />
                )}
              </div>
              <span className="font-medium mb-1">{link.label}</span>
              <span className="text-muted text-xs font-mono">{link.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs text-muted mt-10"
        >
          <span className="text-accent-glow">→</span> {SITE.name} · Software Engineer
        </motion.p>
      </div>
    </section>
  )
}
