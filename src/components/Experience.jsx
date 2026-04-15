import { useLang } from '../contexts/LangContext'
import { useReveal } from '../hooks/useReveal'

// ─── SVG Illustrations ────────────────────────────────────────────────────────

function DashboardIllustration({ accent }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="cv-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill={accent} opacity="0.22"/>
        </pattern>
      </defs>
      <rect width="280" height="160" fill="url(#cv-dots)"/>

      {/* Browser chrome */}
      <rect x="24" y="18" width="232" height="128" rx="6" stroke={accent} strokeWidth="1.2" strokeOpacity="0.45"/>
      <rect x="24" y="18" width="232" height="26" fill={accent} fillOpacity="0.07" stroke={accent} strokeWidth="1.2" strokeOpacity="0.35"/>
      <circle cx="38" cy="31" r="4" fill={accent} fillOpacity="0.4"/>
      <circle cx="50" cy="31" r="4" fill={accent} fillOpacity="0.22"/>
      <circle cx="62" cy="31" r="4" fill={accent} fillOpacity="0.12"/>
      <rect x="78" y="26" width="120" height="10" rx="5" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="0.7" strokeOpacity="0.3"/>

      {/* Sidebar */}
      <rect x="24" y="44" width="54" height="102" fill={accent} fillOpacity="0.04" stroke={accent} strokeWidth="0.7" strokeOpacity="0.3"/>
      <rect x="30" y="54" width="36" height="7" rx="2" fill={accent} fillOpacity="0.35"/>
      <rect x="30" y="67" width="28" height="5" rx="2" fill={accent} fillOpacity="0.14"/>
      <rect x="30" y="78" width="32" height="5" rx="2" fill={accent} fillOpacity="0.14"/>
      <rect x="30" y="89" width="20" height="5" rx="2" fill={accent} fillOpacity="0.14"/>
      <rect x="30" y="100" width="26" height="5" rx="2" fill={accent} fillOpacity="0.14"/>

      {/* Stat cards */}
      <rect x="86" y="52" width="77" height="38" rx="4" fill={accent} fillOpacity="0.07" stroke={accent} strokeWidth="0.8" strokeOpacity="0.38"/>
      <rect x="171" y="52" width="77" height="38" rx="4" fill={accent} fillOpacity="0.04" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25"/>
      <rect x="90" y="60" width="38" height="5" rx="2" fill={accent} fillOpacity="0.18"/>
      <rect x="90" y="70" width="26" height="9" rx="2" fill={accent} fillOpacity="0.42"/>
      <rect x="175" y="60" width="32" height="5" rx="2" fill={accent} fillOpacity="0.14"/>
      <rect x="175" y="70" width="22" height="9" rx="2" fill={accent} fillOpacity="0.28"/>

      {/* Bar chart area */}
      <rect x="86" y="98" width="162" height="42" rx="4" fill={accent} fillOpacity="0.04" stroke={accent} strokeWidth="0.7" strokeOpacity="0.25"/>
      {[0,1,2,3,4,5].map((i) => {
        const heights = [24, 32, 16, 38, 28, 42]
        const h = heights[i]
        return (
          <rect key={i} x={91 + i*25} y={132 - h} width="16" height={h} rx="2"
                fill={accent} fillOpacity={i === 5 ? 0.5 : 0.18}/>
        )
      })}
      <line x1="90" y1="132" x2="244" y2="132" stroke={accent} strokeWidth="0.6" strokeOpacity="0.25"/>

      {/* Ambient glow */}
      <ellipse cx="140" cy="90" rx="70" ry="44" fill={accent} fillOpacity="0.025"/>
    </svg>
  )
}

function EcommerceIllustration({ accent }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="gen-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M 22 0 L 0 0 0 22" stroke={accent} strokeWidth="0.3" strokeOpacity="0.18"/>
        </pattern>
      </defs>
      <rect width="280" height="160" fill="url(#gen-grid)"/>

      {/* 3 product cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={18 + i*82} y="14" width="70" height="88" rx="5"
                fill={accent} fillOpacity={i === 0 ? 0.1 : 0.05}
                stroke={accent} strokeWidth={i === 0 ? 1.2 : 0.7}
                strokeOpacity={i === 0 ? 0.65 : 0.35}/>
          <rect x={22 + i*82} y="18" width="62" height="46" rx="3"
                fill={accent} fillOpacity="0.09"/>
          <line x1={22 + i*82} y1={18} x2={84 + i*82} y2={64}
                stroke={accent} strokeWidth="0.5" strokeOpacity="0.18"/>
          <line x1={84 + i*82} y1={18} x2={22 + i*82} y2={64}
                stroke={accent} strokeWidth="0.5" strokeOpacity="0.18"/>
          <rect x={22 + i*82} y="70" width="40" height="6" rx="2"
                fill={accent} fillOpacity="0.28"/>
          <rect x={22 + i*82} y="80" width="28" height="5" rx="2"
                fill={accent} fillOpacity="0.48"/>
          <rect x={22 + i*82} y="89" width="50" height="4" rx="2"
                fill={accent} fillOpacity="0.13"/>
        </g>
      ))}

      {/* Cart */}
      <path d="M 22 116 L 28 136 L 92 136 L 102 116 Z"
            fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1.2" strokeOpacity="0.55"/>
      <circle cx="44" cy="142" r="5" fill={accent} fillOpacity="0.45"/>
      <circle cx="74" cy="142" r="5" fill={accent} fillOpacity="0.45"/>

      {/* Metric badge */}
      <rect x="116" y="110" width="80" height="34" rx="6"
            fill={accent} fillOpacity="0.09" stroke={accent} strokeWidth="1" strokeOpacity="0.45"/>
      <rect x="122" y="117" width="30" height="5" rx="2" fill={accent} fillOpacity="0.2"/>
      <text x="122" y="138" fontFamily="'JetBrains Mono',monospace" fontSize="14"
            fontWeight="700" fill={accent} fillOpacity="0.9">+35%</text>

      {/* Payment card */}
      <rect x="212" y="106" width="52" height="38" rx="5"
            fill={accent} fillOpacity="0.07" stroke={accent} strokeWidth="0.8" strokeOpacity="0.45"/>
      <rect x="218" y="114" width="30" height="4" rx="2" fill={accent} fillOpacity="0.28"/>
      <rect x="218" y="122" width="38" height="8" rx="2"
            fill={accent} fillOpacity="0.13" stroke={accent} strokeWidth="0.5" strokeOpacity="0.35"/>
      <rect x="218" y="134" width="22" height="5" rx="2" fill={accent} fillOpacity="0.35"/>

      {/* Ambient glow */}
      <ellipse cx="140" cy="82" rx="90" ry="52" fill={accent} fillOpacity="0.022"/>
    </svg>
  )
}

function MobileIllustration({ accent }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="nut-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.7" fill={accent} opacity="0.16"/>
        </pattern>
      </defs>
      <rect width="280" height="160" fill="url(#nut-dots)"/>

      {/* Shadow phone */}
      <rect x="112" y="18" width="76" height="132" rx="12"
            fill={accent} fillOpacity="0.03" stroke={accent} strokeWidth="0.7" strokeOpacity="0.2"/>

      {/* Main phone */}
      <rect x="96" y="10" width="76" height="140" rx="12"
            fill={accent} fillOpacity="0.07" stroke={accent} strokeWidth="1.5" strokeOpacity="0.6"/>
      <rect x="100" y="14" width="68" height="132" rx="9"
            fill={accent} fillOpacity="0.04"/>

      {/* Notch */}
      <rect x="120" y="10" width="32" height="7" rx="3.5"
            fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1" strokeOpacity="0.4"/>

      {/* Home indicator */}
      <rect x="119" y="144" width="36" height="3" rx="1.5" fill={accent} fillOpacity="0.4"/>

      {/* App header bar */}
      <rect x="102" y="26" width="56" height="16" rx="3"
            fill={accent} fillOpacity="0.14"/>
      <rect x="106" y="29" width="28" height="6" rx="2" fill={accent} fillOpacity="0.3"/>

      {/* Bar chart */}
      {[0,1,2,3,4,5].map((i) => {
        const heights = [28, 44, 18, 54, 36, 46]
        const h = heights[i]
        return (
          <rect key={i} x={104 + i*11} y={98 - h} width="8" height={h} rx="2"
                fill={accent} fillOpacity={i === 3 ? 0.52 : 0.18}
                stroke={accent} strokeWidth={i === 3 ? 0.8 : 0} strokeOpacity="0.6"/>
        )
      })}
      <line x1="102" y1="98" x2="172" y2="98" stroke={accent} strokeWidth="0.7" strokeOpacity="0.28"/>

      {/* Calendar dots */}
      {[0,1,2,3,4,5,6].map(i => (
        <circle key={i} cx={104 + i*10} cy="110" r="3.5"
                fill={accent} fillOpacity={[1,4,6].includes(i) ? 0.48 : 0.08}
                stroke={accent} strokeWidth="0.5" strokeOpacity="0.28"/>
      ))}

      {/* List items */}
      <rect x="102" y="122" width="62" height="5" rx="2" fill={accent} fillOpacity="0.2"/>
      <rect x="102" y="132" width="44" height="5" rx="2" fill={accent} fillOpacity="0.14"/>

      {/* Decorative rings */}
      <circle cx="44" cy="52" r="22" fill="none"
              stroke={accent} strokeWidth="0.7" strokeOpacity="0.18" strokeDasharray="3 5"/>
      <circle cx="44" cy="52" r="12" fill="none"
              stroke={accent} strokeWidth="0.4" strokeOpacity="0.12"/>
      <circle cx="234" cy="112" r="28" fill="none"
              stroke={accent} strokeWidth="0.6" strokeOpacity="0.14" strokeDasharray="2 6"/>

      {/* Ambient glow */}
      <ellipse cx="134" cy="80" rx="40" ry="58" fill={accent} fillOpacity="0.045"/>
    </svg>
  )
}

// ─── Config ───────────────────────────────────────────────────────────────────

const VISUALS = {
  levelup: {
    bg: 'linear-gradient(145deg, #1c1408 0%, #0e0a02 55%, #1a1205 100%)',
    accent: '#d4a853',
    image: '/travelerforge-preview.png',
    Illustration: DashboardIllustration,
  },
  coolvending: {
    bg: 'linear-gradient(145deg, #1a1145 0%, #0d0922 55%, #111735 100%)',
    accent: '#818cf8',
    image: '/coolvending-preview.png',
    Illustration: DashboardIllustration,
  },
  genesis: {
    bg: 'linear-gradient(145deg, #061a08 0%, #020d03 55%, #0a1c0b 100%)',
    accent: '#4ade80',
    image: '/genesis-preview.png',
    Illustration: EcommerceIllustration,
  },
  nutrabit: {
    bg: 'linear-gradient(145deg, #042a26 0%, #020f0e 55%, #063430 100%)',
    accent: '#2dd4bf',
    Illustration: MobileIllustration,
  },
}

const STATUS_COLORS = {
  'En producción': { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  'App Móvil':     { dot: 'bg-cyan-400',    text: 'text-cyan-400'    },
  'En desarrollo': { dot: 'bg-amber-400',   text: 'text-amber-400'   },
  'Live':          { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  'Mobile App':    { dot: 'bg-cyan-400',    text: 'text-cyan-400'    },
  'In Progress':   { dot: 'bg-amber-400',   text: 'text-amber-400'   },
}

const getExperience = (t) => [
  {
    key: 'levelup',
    role: 'Full Stack Developer',
    company: 'LevelUp — Visor Académico Gamificado',
    period: t.experience.jobs.levelup.period,
    status: t.experience.jobs.levelup.status,
    short: t.experience.jobs.levelup.short,
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Google OAuth', 'Google Classroom API'],
    link: 'https://www.travelerforge.com/login',
    delay: 'reveal-delay-1',
  },
  {
    key: 'coolvending',
    role: 'Full Stack Developer — Freelance',
    company: 'CoolVending',
    period: t.experience.jobs.coolvending.period,
    status: t.experience.jobs.coolvending.status,
    short: t.experience.jobs.coolvending.short,
    tags: ['React 19', 'Vite', 'Firebase', 'Bootstrap 5', 'Firestore', 'Firebase Auth'],
    link: 'https://coolvending.com.ar',
    delay: 'reveal-delay-1',
  },
  {
    key: 'genesis',
    role: 'Full Stack Developer',
    company: 'Genesis Airsoft',
    period: t.experience.jobs.genesis.period,
    status: t.experience.jobs.genesis.status,
    short: t.experience.jobs.genesis.short,
    tags: ['React', 'Firebase', 'Cloud Functions v2', 'Mercado Pago', 'ViaCargo'],
    link: 'https://genesisairsoft.com.ar/',
    delay: 'reveal-delay-2',
  },
  {
    key: 'nutrabit',
    role: 'Full Stack Developer',
    company: 'Nutrabit',
    period: t.experience.jobs.nutrabit.period,
    status: t.experience.jobs.nutrabit.status,
    short: t.experience.jobs.nutrabit.short,
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Auth'],
    link: null,
    github: [
      { label: 'Admin', url: 'https://github.com/Nutrabit/Nutrabit-admin' },
      { label: 'Paciente', url: 'https://github.com/Nutrabit/Nutrabit-paciente' },
    ],
    delay: 'reveal-delay-3',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Experience() {
  const ref = useReveal()
  const { t } = useLang()
  const EXPERIENCE = getExperience(t)

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="reveal mb-12">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          {t.experience.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.experience.heading}</h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCE.map((job) => {
          const visual = VISUALS[job.key]
          const { Illustration } = visual
          const statusStyle = STATUS_COLORS[job.status] ?? { dot: 'bg-slate-400', text: 'text-slate-400' }

          return (
            <div
              key={job.key}
              className={`reveal ${job.delay} group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-surface transition-all duration-300 hover:-translate-y-1`}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = visual.accent + '55'
                e.currentTarget.style.boxShadow = `0 24px 64px -12px ${visual.accent}1a`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* ── Header / Illustration ── */}
              <div
                className="relative h-52 overflow-hidden flex-shrink-0"
                style={{ background: visual.bg }}
              >
                {visual.image ? (
                  <>
                    <img
                      src={visual.image}
                      alt={job.company}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    {/* Subtle gradient overlay so text stays readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
                  </>
                ) : (
                  <Illustration accent={visual.accent} />
                )}

                {/* Period pill */}
                <span className="absolute top-3 right-3 font-mono text-[10px] text-slate-400 bg-slate-950/75 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-700/50 leading-none">
                  {job.period}
                </span>
              </div>

              {/* ── Body ── */}
              <div className="flex flex-col flex-1 p-5">
                {/* Company + Status */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-base leading-tight group-hover:text-cyan-400 transition-colors duration-200">
                    {job.company}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] shrink-0 ${statusStyle.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot} animate-pulse shrink-0`} />
                    {job.status}
                  </span>
                </div>

                {/* Role */}
                <p className="font-mono text-slate-500 text-[11px] mb-3 leading-none">
                  {job.role}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {job.short}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-slate-900 border border-slate-700/60 text-slate-400 rounded-md px-2 py-0.5 leading-relaxed"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] opacity-60 hover:opacity-100 transition-opacity"
                      style={{ color: visual.accent }}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      {job.link.replace('https://', '')}
                    </a>
                  )}

                  {job.github?.map(({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] opacity-60 hover:opacity-100 transition-opacity"
                      style={{ color: visual.accent }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      {label}
                    </a>
                  ))}

                  {!job.link && !job.github && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                      Repositorio privado
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
