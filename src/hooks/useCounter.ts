import { useEffect, useState } from 'react'

export function useCounter(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let start = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, active, duration])

  return count
}
