import { useState, useEffect, useCallback } from 'react'

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleKey = useCallback(() => {
    let buffer = []
    let timer = null

    const listener = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      buffer.push(key)

      // Only keep the last N keys (length of sequence)
      if (buffer.length > KONAMI.length) {
        buffer = buffer.slice(-KONAMI.length)
      }

      // Reset buffer after 3s of inactivity
      clearTimeout(timer)
      timer = setTimeout(() => { buffer = [] }, 3000)

      // Check match
      if (buffer.length === KONAMI.length && buffer.every((k, i) => k === KONAMI[i])) {
        buffer = []
        setTriggered(true)
        setVisible(true)
      }
    }

    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const cleanup = handleKey()
    return cleanup
  }, [handleKey])

  // Auto-hide after 2.5s
  useEffect(() => {
    if (!triggered) return
    const t1 = setTimeout(() => setVisible(false), 2200)
    const t2 = setTimeout(() => setTriggered(false), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [triggered])

  if (!triggered) return null

  return (
    <>
      {/* Subtle border shimmer on the whole page */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          border: '2px solid transparent',
          borderImage: 'linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6, #10b981) 1',
          opacity: visible ? 0.6 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Small toast notification */}
      <div
        style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: `translateX(-50%) translateY(${visible ? '0' : '16px'})`,
          zIndex: 9999,
          background: '#1a1d21',
          border: '1px solid #252830',
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '13px',
          color: '#e4e6eb',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          whiteSpace: 'nowrap',
        }}
      >
        You found the FlowAI secret ✨
      </div>
    </>
  )
}
