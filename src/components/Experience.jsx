import { useReveal } from '../hooks/useReveal'

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Genesis Airsoft',
    period: 'Septiembre 2025 – Presente',
    bullets: [
      'Desarrollé una plataforma e-commerce completa con React y Firebase, contribuyendo a un incremento del 35% en ventas a través de mejoras de UX.',
      'Integré Mercado Pago Checkout Pro, aumentando los pedidos en un 15%.',
      'Implementé notificaciones por email con MailSender, expandiendo el alcance mayorista en un 30%.',
      'Diseñé arquitectura serverless con Firebase Hosting, Firestore, Storage y Cloud Functions v2.',
      'Integré lógica de envíos con ViaCargo, reduciendo costos logísticos en un 20%.',
      'Construí sistema de validación de pedidos mediante Cloud Functions para garantizar integridad de órdenes.',
    ],
    tags: ['React', 'Firebase', 'Node.js', 'Cloud Functions', 'Mercado Pago', 'ViaCargo'],
    delay: 'reveal-delay-1',
  },
  {
    role: 'Full Stack Developer',
    company: 'Nutrabit',
    period: 'Marzo 2025 – Julio 2025',
    bullets: [
      'Desarrollé funcionalidades clave de una app móvil con Flutter & Dart para gestión nutricional.',
      'Integré Firebase (Firestore, Storage, Authentication) para datos, autenticación y almacenamiento de archivos.',
      'Implementé gestión de turnos, calendario y personalización de perfiles de usuario.',
      'Construí sistema de carga y almacenamiento de PDFs y contenido multimedia para compartir entre nutricionistas y pacientes.',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Storage', 'Firebase Auth'],
    delay: 'reveal-delay-2',
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-12">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          // experiencia
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Mi trayectoria</h2>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
