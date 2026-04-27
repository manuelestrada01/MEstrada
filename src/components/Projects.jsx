import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../contexts/LangContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const getProjects = (t) => [
  {
    badge: t.projects.badges.ecommerce,
    name: 'Genesis Airsoft',
    description: t.projects.descriptions.genesis,
    tags: ['React', 'Firebase', 'Cloud Functions', 'Mercado Pago', 'ViaCargo'],
    github: null,
    live: 'https://genesisairsoft.com.ar',
    wip: false,
  },
  {
    badge: t.projects.badges.mobile,
    name: 'Nutrabit',
    description: t.projects.descriptions.nutrabit,
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    github: null,
    live: null,
    wip: false,
  },
  {
    badge: t.projects.badges.webapp,
    name: 'CoolVending',
    description: t.projects.descriptions.coolvending,
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/manuelestrada01/Coolvending',
    live: null,
    wip: true,
  },
  {
    badge: t.projects.badges.tool,
    name: 'BrickLack',
    description: t.projects.descriptions.bricklack,
    tags: ['React 19', 'TypeScript', 'Vite', 'GSAP', 'Firebase', 'React Query', 'Zustand', 'Rebrickable API'],
    github: 'https://github.com/manuelestrada01/BrickLack',
    live: 'https://www.bricklack.com/',
    wip: false,
  },
]

function LockIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const { t } = useLang()
  const PROJECTS = getProjects(t)

  useGSAP((context, contextSafe) => {
    // ── Heading entrance ──────────────────────────────────────────────
    gsap.from('.projects-heading', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-heading',
        start: 'top 88%',
        once: true,
      },
    })

    // ── Cards: hide initially then batch-animate on scroll ────────────
    gsap.set('.project-card', { opacity: 0, y: 64, scale: 0.9 })

    ScrollTrigger.batch('.project-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.13,
          ease: 'power3.out',
        })
      },
      start: 'top 90%',
      once: true,
    })

    // ── 3D tilt + cursor shimmer ───────────────────────────────────────
    const cards = Array.from(sectionRef.current.querySelectorAll('.project-card'))

    const handlers = cards.map((card) => {
      const shimmer = card.querySelector('.card-shimmer')

      const onMove = contextSafe((e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2

        gsap.to(card, {
          rotateX: ((y - cy) / cy) * -7,
          rotateY: ((x - cx) / cx) * 7,
          transformPerspective: 900,
          duration: 0.3,
          ease: 'power2.out',
        })

        gsap.to(shimmer, {
          opacity: 1,
          x: x - cx,
          y: y - cy,
          duration: 0.5,
          ease: 'power2.out',
        })
      })

      const onLeave = contextSafe(() => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
        gsap.to(shimmer, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
      })

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)

      return { card, onMove, onLeave }
    })

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    }
  }, { scope: sectionRef })

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">

      {/* ── Heading ──────────────────────────────────────────────────── */}
      <div className="projects-heading mb-16">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          {t.projects.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.projects.heading}</h2>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {PROJECTS.map((project, index) => {
          const isCyan = !project.wip
          return (
            <div
              key={project.name}
              className={`project-card relative overflow-hidden rounded-2xl flex flex-col border transition-[border-color,box-shadow] duration-300 ${
                isCyan
                  ? 'bg-surface-card border-surface-border hover:border-cyan-500/40 hover:shadow-[0_0_30px_-8px_rgba(6,182,212,0.25)]'
                  : 'bg-surface-card border-surface-border hover:border-amber-400/40 hover:shadow-[0_0_30px_-8px_rgba(251,191,36,0.2)]'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Top accent line */}
              <div
                className={`absolute inset-x-0 top-0 h-px ${
                  isCyan
                    ? 'bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-amber-400/70 to-transparent'
                }`}
              />

              {/* Cursor-following radial glow */}
              <div
                className="card-shimmer absolute pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: '360px',
                  height: '360px',
                  top: '50%',
                  left: '50%',
                  background: isCyan
                    ? 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)'
                    : 'radial-gradient(circle, rgba(251,191,36,0.09) 0%, transparent 65%)',
                }}
              />

              {/* Number watermark */}
              <span
                className="absolute top-2 right-4 font-mono font-bold select-none pointer-events-none leading-none text-white/[0.04]"
                style={{ fontSize: '5.5rem' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* ── Card body ─────────────────────────────────────── */}
              <div className="relative p-6 flex flex-col gap-4 h-full">

                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`inline-block text-xs font-mono uppercase tracking-widest rounded-full px-3 py-1 border ${
                      isCyan
                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                    }`}
                  >
                    {project.badge}
                  </span>
                  {project.wip && (
                    <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest rounded-full px-3 py-1">
                      {t.projects.wip}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold text-white transition-colors duration-200 ${
                    isCyan ? 'group-hover:text-cyan-400' : 'group-hover:text-amber-400'
                  }`}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface border border-surface-border text-slate-500 text-xs rounded-full px-3 py-1 transition-colors duration-200 hover:text-slate-300 hover:border-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-surface-border/60" />

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs border border-surface-border hover:border-cyan-400/50 hover:text-cyan-400 text-slate-400 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-cyan-500/5"
                    >
                      <GitHubIcon /> GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs border border-surface-border/40 text-slate-600 px-4 py-2 rounded-lg cursor-not-allowed select-none">
                      <LockIcon /> {t.projects.private}
                    </span>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 font-medium px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      <ExternalLinkIcon /> {t.projects.visit}
                    </a>
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
