import { useEffect, useRef } from 'react'

const HEX_RADIUS   = 26
const BASE_ALPHA   = 0.055   // resting stroke opacity
const GLOW_COLOR   = [6, 182, 212]   // cyan-500
const PULSE_SPEED  = 0.018           // lerp speed per frame
const SPAWN_CHANCE = 0.004           // probability per hex per frame to start glowing

function hexPoints(cx, cy, r) {
  const pts = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6  // pointy-top
    pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)])
  }
  return pts
}

function drawHex(ctx, pts, strokeAlpha, glowAlpha) {
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < 6; i++) ctx.lineTo(pts[i][0], pts[i][1])
  ctx.closePath()

  if (glowAlpha > 0.01) {
    ctx.fillStyle = `rgba(${GLOW_COLOR.join(',')},${glowAlpha * 0.12})`
    ctx.fill()
    ctx.shadowColor = `rgba(${GLOW_COLOR.join(',')},${glowAlpha * 0.6})`
    ctx.shadowBlur = 14
  } else {
    ctx.shadowBlur = 0
  }

  ctx.strokeStyle = `rgba(${GLOW_COLOR.join(',')},${strokeAlpha})`
  ctx.lineWidth = 0.8
  ctx.stroke()
  ctx.shadowBlur = 0
}

export default function HexGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let raf

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let hexes  = []

    function buildGrid() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)

      hexes = []
      const colW   = Math.sqrt(3) * HEX_RADIUS
      const rowH   = HEX_RADIUS * 1.5
      const cols   = Math.ceil(W / colW) + 2
      const rows   = Math.ceil(H / rowH) + 2

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offset = col % 2 === 0 ? 0 : HEX_RADIUS * 0.865
          const cx = col * colW * 0.865 + colW * 0.5
          const cy = row * rowH + offset + HEX_RADIUS
          hexes.push({
            pts:        hexPoints(cx, cy, HEX_RADIUS - 1),
            glow:       0,
            glowTarget: 0,
          })
        }
      }
    }

    function tick() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      for (const hex of hexes) {
        // Randomly kick off a pulse
        if (hex.glowTarget === 0 && Math.random() < SPAWN_CHANCE) {
          hex.glowTarget = 1
        }

        // Lerp toward target
        hex.glow += (hex.glowTarget - hex.glow) * PULSE_SPEED

        // Once near peak, start fading
        if (hex.glowTarget === 1 && hex.glow > 0.85) {
          hex.glowTarget = 0
        }

        const strokeAlpha = BASE_ALPHA + hex.glow * 0.18
        drawHex(ctx, hex.pts, strokeAlpha, hex.glow)
      }

      raf = requestAnimationFrame(tick)
    }

    buildGrid()
    tick()

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf)
      buildGrid()
      tick()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
