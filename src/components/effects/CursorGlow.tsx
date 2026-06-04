import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      animate={{ x: x - 200, y: y - 200 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div
        className="w-[400px] h-[400px] rounded-full opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(34,211,238,0.3) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
