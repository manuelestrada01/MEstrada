import { useReveal } from '../hooks/useReveal'

const PROJECTS = [
  {
    badge: 'E-Commerce',
    name: 'Genesis Airsoft',
    description:
      'Plataforma de e-commerce completa para tienda de airsoft. Incluye catálogo de productos, carrito de compras, checkout con Mercado Pago, gestión de pedidos, notificaciones por email y lógica de envíos con ViaCargo.',
    tags: ['React', 'Firebase', 'Cloud Functions', 'Mercado Pago', 'ViaCargo'],
    github: null,
    live: 'https://genesisairsoft.com.ar',
    wip: false,
    delay: 'reveal-delay-1',
  },
  {
    badge: 'App Móvil',
    name: 'Nutrabit',
    description:
      'Aplicación móvil de gestión nutricional para nutricionistas y pacientes. Gestión de turnos, calendario, perfiles personalizados y sistema de documentos (PDF/multimedia) para compartir contenido entre profesionales y pacientes.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    github: null,
    live: null,
    wip: false,
    delay: 'reveal-delay-2',
  },
  {
    badge: 'Web App',
    name: 'CoolVending',
    description:
      'Plataforma web para gestión y visualización de máquinas expendedoras. Interfaz moderna para administrar inventario, seguimiento de ventas y estado de máquinas en tiempo real.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/manuelestrada01/Coolvending',
    live: null,
    wip: true,
    delay: 'reveal-delay-3',
  },
]

function LockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-12">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          // proyectos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Lo que construí</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className={`reveal ${project.delay} flex flex-col bg-surface-card rounded-2xl p-6 border transition-colors group ${
              project.wip
                ? 'border-amber-500/20 hover:border-amber-400/40'
                : 'border-surface-border hover:border-cyan-400/40'
            }`}
          >
            {/* Badge row */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest rounded-full px-3 py-1">
                {project.badge}
              </span>
              {project.wip && (
                <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest rounded-full px-3 py-1">
                  En desarrollo
                </span>
              )}
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface border border-surface-border text-slate-400 text-xs rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              {/* GitHub */}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-32 flex items-center justify-center gap-1.5 text-xs border border-surface-border hover:border-cyan-400 hover:text-cyan-400 text-slate-400 px-3 py-1.5 rounded-md transition-colors"
                >
                  <GitHubIcon /> GitHub
                </a>
              ) : (
                <span className="w-32 flex items-center justify-center gap-1.5 text-xs border border-surface-border/50 text-slate-700 px-3 py-1.5 rounded-md cursor-not-allowed">
                  <LockIcon /> Privado
                </span>
              )}

              {/* Live */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-32 flex items-center justify-center gap-1.5 text-xs bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 font-medium px-3 py-1.5 rounded-md transition-colors"
                >
                  <ExternalLinkIcon /> Ver sitio
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
