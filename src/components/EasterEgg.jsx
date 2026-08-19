import { useState, useEffect, useCallback, useRef } from 'react'

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false)
  const bufferRef = useRef([])
  const timeoutRef = useRef(null)

  const handleKey = useCallback((e) => {
    if (triggered) return

    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
    const buf = bufferRef.current

    buf.push(key)

    // Keep buffer trimmed to Konami length
    if (buf.length > KONAMI.length) {
      buf.shift()
    }

    // Check match
    if (
      buf.length === KONAMI.length &&
      buf.every((k, i) => k === KONAMI[i])
    ) {
      setTriggered(true)
      bufferRef.current = []

      // Auto-dismiss after 2.5s
      timeoutRef.current = setTimeout(() => {
        setTriggered(false)
      }, 2500)
    }
  }, [triggered])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [handleKey])

  if (!triggered) return null

  return (
    <>
      {/* Subtle page border glow */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          boxShadow: 'inset 0 0 80px rgba(16, 185, 129, 0.12)',
          animation: 'easterGlow 2.5s ease-out forwards',
        }}
      />

      {/* Small toast notification */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          backgroundColor: '#141618',
          border: '1px solid #252830',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#e4e6eb',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.01em',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
          animation: 'easterSlideUp 0.35s ease-out, easterFadeOut 0.4s ease-in 2.1s forwards',
        }}
      >
        <span style={{ fontSize: '15px' }}>✨</span>
        <span>You found the FlowAI secret</span>
      </div>

      <style>{`
        @keyframes easterSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes easterFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes easterGlow {
          0%   { opacity: 0; }
          15%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  )
}
