import { useLang } from '../contexts/LangContext'
import { useReveal } from '../hooks/useReveal'

const getSkills = (t) => [
  { category: t.skills.categories.frontend,  items: ['React', 'Vue', 'HTML5', 'CSS3', 'JavaScript ES6+'] },
  { category: t.skills.categories.backend,   items: ['Node.js', 'Next.js', 'Firebase Cloud Functions v2', 'Java'] },
  { category: t.skills.categories.mobile,    items: ['Flutter', 'Dart'] },
  { category: t.skills.categories.databases, items: ['SQL Server', 'Firebase Firestore'] },
  { category: t.skills.categories.payments,  items: ['Mercado Pago Checkout Pro'] },
  { category: t.skills.categories.tools,     items: ['Git', 'GitHub', 'Scrum', 'Cloudflare', 'Firebase Hosting', 'Firebase Storage'] },
]

export default function Skills() {
  const ref = useReveal()
  const { t } = useLang()
  const SKILLS = getSkills(t)

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-12">
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">
          {t.skills.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.skills.heading}</h2>
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
