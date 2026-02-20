import { Category } from '@/data/workshops'

const palette: Record<Category, { bg: string; light: string; mid: string; dark: string }> = {
  'icebreaker':      { bg: '#fffbeb', light: '#fde68a', mid: '#f59e0b', dark: '#b45309' },
  'problem-framing': { bg: '#fff7ed', light: '#fed7aa', mid: '#f97316', dark: '#c2410c' },
  'ideation':        { bg: '#faf5ff', light: '#e9d5ff', mid: '#a855f7', dark: '#7e22ce' },
  'prioritisation':  { bg: '#eff6ff', light: '#bfdbfe', mid: '#3b82f6', dark: '#1d4ed8' },
  'retrospective':   { bg: '#f0fdf4', light: '#bbf7d0', mid: '#22c55e', dark: '#15803d' },
  'discovery':       { bg: '#f0fdfa', light: '#99f6e4', mid: '#14b8a6', dark: '#0f766e' },
  'service-design':  { bg: '#eef2ff', light: '#c7d2fe', mid: '#6366f1', dark: '#4338ca' },
  'requirements':    { bg: '#fff1f2', light: '#fecdd3', mid: '#f43f5e', dark: '#be123c' },
  'planning':        { bg: '#f8fafc', light: '#e2e8f0', mid: '#64748b', dark: '#334155' },
  'public-sector':   { bg: '#ecfdf5', light: '#a7f3d0', mid: '#10b981', dark: '#065f46' },
}

// Deterministic PRNG seeded from slug (FNV-1a → xorshift32)
function makePrng(seed: string) {
  let s = 2166136261
  for (let i = 0; i < seed.length; i++) {
    s ^= seed.charCodeAt(i)
    s = Math.imul(s, 16777619) >>> 0
  }
  return () => {
    s ^= s << 13
    s ^= s >> 17
    s ^= s << 5
    s = s >>> 0
    return s / 0x100000000
  }
}

const W = 400
const H = 96

export default function WorkshopCardImage({ slug, category }: { slug: string; category: Category }) {
  const c = palette[category]
  const rand = makePrng(slug)
  const v = Array.from({ length: 14 }, () => rand())
  const type = Math.floor(rand() * 4)

  // SVG clip ID — must be unique per card on the page
  const clipId = `cc-${slug.replace(/[^a-z0-9]/gi, '-')}`

  let shapes: React.ReactNode

  if (type === 0) {
    // Large circle anchored to one edge + floating medium circle + small dot
    const onRight = v[0] > 0.5
    const cx1 = onRight ? W + 10 - v[1] * 40 : -10 + v[1] * 40
    const cy1 = v[2] * H
    const r1 = 50 + v[3] * 40
    const cx2 = W * (onRight ? 0.15 : 0.55) + v[4] * W * 0.25
    const cy2 = 12 + v[5] * (H - 24)
    const r2 = 14 + v[6] * 22
    shapes = <>
      <circle cx={cx1} cy={cy1} r={r1} fill={c.light} />
      <circle cx={cx2} cy={cy2} r={r2} fill={c.mid} opacity={0.38 + v[7] * 0.22} />
      <circle cx={W * 0.25 + v[8] * W * 0.5} cy={8 + v[9] * (H - 16)} r={4 + v[10] * 7} fill={c.dark} opacity={0.55 + v[11] * 0.25} />
    </>
  } else if (type === 1) {
    // Rotated rounded rectangle + circle + dot
    const rw = 110 + v[0] * 100
    const rh = 28 + v[1] * 28
    const rx = v[2] * (W - rw)
    const ry = v[3] * (H - rh)
    const rot = -25 + v[4] * 50
    const cx2 = W * 0.25 + v[5] * W * 0.5
    const cy2 = H * 0.2 + v[6] * H * 0.6
    shapes = <>
      <rect
        x={rx} y={ry} width={rw} height={rh} rx={10}
        fill={c.light}
        transform={`rotate(${rot} ${rx + rw / 2} ${ry + rh / 2})`}
      />
      <circle cx={cx2} cy={cy2} r={18 + v[7] * 24} fill={c.mid} opacity={0.38 + v[8] * 0.22} />
      <circle cx={W * 0.1 + v[9] * W * 0.8} cy={8 + v[10] * (H - 16)} r={4 + v[11] * 6} fill={c.dark} opacity={0.6} />
    </>
  } else if (type === 2) {
    // Three circles: large light, medium mid, small dark — well spread
    shapes = <>
      <circle cx={W * 0.1 + v[0] * W * 0.2} cy={v[1] * H} r={32 + v[2] * 40} fill={c.light} />
      <circle cx={W * 0.42 + v[3] * W * 0.18} cy={v[4] * H} r={18 + v[5] * 28} fill={c.mid} opacity={0.42 + v[6] * 0.25} />
      <circle cx={W * 0.68 + v[7] * W * 0.22} cy={v[8] * H} r={8 + v[9] * 18} fill={c.dark} opacity={0.55 + v[10] * 0.25} />
    </>
  } else {
    // Large circle centre-ish + two smaller satellites
    const cx1 = W * 0.38 + v[0] * W * 0.24
    const cy1 = H * 0.3 + v[1] * H * 0.4
    const r1 = 32 + v[2] * 28
    shapes = <>
      <circle cx={cx1} cy={cy1} r={r1} fill={c.light} />
      <circle cx={cx1 - r1 * (0.9 + v[3] * 0.4)} cy={cy1 + (v[4] - 0.5) * 28} r={10 + v[5] * 16} fill={c.mid} opacity={0.45 + v[6] * 0.25} />
      <circle cx={cx1 + r1 * (0.8 + v[7] * 0.4)} cy={cy1 + (v[8] - 0.5) * 28} r={7 + v[9] * 12} fill={c.dark} opacity={0.55 + v[10] * 0.2} />
    </>
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: 'block', height: '88px', width: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width={W} height={H} />
        </clipPath>
      </defs>
      <rect width={W} height={H} fill={c.bg} />
      <g clipPath={`url(#${clipId})`}>{shapes}</g>
    </svg>
  )
}
