import { useLang } from '../contexts/LangContext'
import { useReveal } from '../hooks/useReveal'

const getExperience = (t) => [
  {
    role: 'Full Stack Developer — Freelance',
    company: 'CoolVending',
    period: t.experience.jobs.coolvending.period,
    bullets: t.experience.jobs.coolvending.bullets,
    tags: ['React 19', 'Vite', 'Firebase', 'Bootstrap 5', 'React Router v7', 'Firestore', 'Firebase Auth'],
    link: 'https://coolvending.com.ar',
    delay: 'reveal-delay-1',
  },
  {
    role: 'Full Stack Developer',
    company: 'Genesis Airsoft',
    period: t.experience.jobs.genesis.period,
    bullets: t.experience.jobs.genesis.bullets,
    tags: ['React', 'Firebase', 'Node.js', 'Cloud Functions', 'Mercado Pago', 'ViaCargo'],
    link: 'https://genesisairsoft.com.ar/',
    delay: 'reveal-delay-2',
  },
  {
    role: 'Full Stack Developer',
    company: 'Nutrabit',
    period: t.experience.jobs.nutrabit.period,
    bullets: t.experience.jobs.nutrabit.bullets,
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Storage', 'Firebase Auth'],
    delay: 'reveal-delay-3',
  },
]

export default function Experience() {
  const ref = useReveal()
  const { t } = useLang()
  const EXPERIENCE = getExperience(t)

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-12">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          {t.experience.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.experience.heading}</h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-12">
        {/* Vertical line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-surface-border" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className={`reveal ${job.delay} relative`}>
              {/* Timeline dot */}
              <div className="absolute -left-8 md:-left-12 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-surface ring-4 ring-surface" />

              <div className="bg-surface-card rounded-2xl p-6 border border-surface-border hover:border-cyan-400/30 transition-colors">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="text-cyan-400 font-medium">{job.company}</p>
                  </div>
                  <span className="font-mono text-slate-400 text-sm shrink-0">{job.period}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                      <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {job.link.replace('https://', '')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
