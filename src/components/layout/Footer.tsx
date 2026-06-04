import { SITE } from '@/constants/data'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Enterprise systems · cloud-native backends.
        </p>
        <p className="font-mono text-xs">
          Node.js · AWS · Angular · PostgreSQL · RabbitMQ · Firebase
        </p>
      </div>
    </footer>
  )
}
