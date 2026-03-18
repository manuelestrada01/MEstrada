import { useReveal } from '../hooks/useReveal'

const INFO_CARDS = [
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Analista de Sistemas',
    subtitle: 'ORT Argentina · 2022 – 2025 · Promedio: 8/10',
    delay: 'reveal-delay-1',
    cert: null,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Analista Programador',
    subtitle: 'ORT Argentina · 2022 – 2024',
    delay: 'reveal-delay-2',
    cert: null,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Claude Code in Action',
    subtitle: 'Anthropic · Marzo 2026',
    delay: 'reveal-delay-3',
    cert: 'https://verify.skilljar.com/c/adieks77p9ig',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Inglés B1',
    subtitle: 'Lectura técnica fluida, comunicación profesional básica',
    delay: 'reveal-delay-4',
    cert: null,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Foco actual',
    subtitle: 'Arquitecturas serverless, Flutter, integraciones de pagos',
    delay: 'reveal-delay-5',
    cert: null,
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <div>
          <div className="reveal mb-8">
            <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
              // sobre mí
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Quién soy</h2>
          </div>

          <div className="reveal reveal-delay-1 space-y-4">
            <p className="text-slate-400 leading-relaxed">
              Soy Full Stack Developer y Analista de Sistemas, egresado de ORT Argentina (2022–2025,
              promedio 8/10). Me especializo en construir aplicaciones web y móviles completas,
              combinando una sólida base técnica con foco en la experiencia del usuario y el impacto
              en el negocio.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Actualmente trabajo como desarrollador en Genesis Airsoft, donde construí una
              plataforma de e-commerce con React y Firebase que contribuyó a incrementar las ventas
              en un <span className="text-cyan-400 font-semibold">35%</span>. Me apasiona resolver
              problemas reales con código limpio y soluciones escalables.
            </p>
          </div>
        </div>

        {/* Right: Info cards */}
        <div className="flex flex-col gap-4">
          {INFO_CARDS.map((card) => {
            const content = (
              <>
                <div className="mt-0.5 shrink-0">{card.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold">{card.title}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{card.subtitle}</p>
                </div>
                {card.cert && (
                  <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 rounded-full px-2 py-0.5 shrink-0">
                    verificar ↗
                  </span>
                )}
              </>
            )

            const baseClass = `reveal ${card.delay} flex items-start gap-4 bg-surface-card rounded-xl p-4 border border-surface-border transition-colors`

            return card.cert ? (
              <a
                key={card.title}
                href={card.cert}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClass} hover:border-cyan-400/60 hover:bg-cyan-400/5`}
              >
                {content}
              </a>
            ) : (
              <div key={card.title} className={`${baseClass} hover:border-cyan-400/40`}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
