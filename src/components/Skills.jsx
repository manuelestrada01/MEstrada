import { useReveal } from '../hooks/useReveal'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Vue', 'HTML5', 'CSS3', 'JavaScript ES6+'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Firebase Cloud Functions v2'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart'],
  },
  {
    category: 'Bases de datos',
    items: ['SQL Server', 'Firebase Firestore'],
  },
  {
    category: 'Pagos & APIs',
    items: ['Mercado Pago Checkout Pro'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Scrum', 'Cloudflare', 'Firebase Hosting', 'Firebase Storage'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-12">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          // habilidades
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Stack tecnológico</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((group, i) => (
          <div
            key={group.category}
            className={`reveal reveal-delay-${Math.min(i + 1, 6)} bg-surface-card rounded-xl p-5 border border-surface-border hover:border-cyan-400/40 transition-colors`}
          >
            <p className="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-surface border border-surface-border rounded-full px-3 py-1 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
