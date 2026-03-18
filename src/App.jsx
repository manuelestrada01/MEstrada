import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import WaveDivider from './components/WaveDivider'

// Surface colors from tailwind.config.js
const DARK = '#0f172a'   // bg-surface
const CARD = '#1e293b'   // bg-surface-card

export default function App() {
  return (
    <div className="bg-surface text-slate-100 font-sans min-h-screen">
      <Navbar />
      <main>
        {/* Hero — dark bg */}
        <Hero />

        {/* About — card bg (wave is embedded inside Hero) */}
        <div className="bg-surface-card">
          <About />
        </div>

        {/* Wave: card → dark */}
        <WaveDivider from={CARD} to={DARK} flip />

        {/* Skills — dark bg */}
        <Skills />

        {/* Wave: dark → card */}
        <WaveDivider from={DARK} to={CARD} />

        {/* Experience — card bg */}
        <div className="bg-surface-card">
          <Experience />
        </div>

        {/* Wave: card → dark */}
        <WaveDivider from={CARD} to={DARK} flip />

        {/* Projects — dark bg */}
        <Projects />

        {/* Wave: dark → card */}
        <WaveDivider from={DARK} to={CARD} />

        {/* Contact — card bg */}
        <div className="bg-surface-card">
          <Contact />
        </div>
      </main>

      <footer className="bg-surface-card text-center text-slate-600 text-sm py-8 border-t border-surface-border">
        <p>
          © {new Date().getFullYear()} Manuel Estrada · Construido con{' '}
          <span className="text-cyan-400">React</span> &amp; Vite
        </p>
      </footer>
    </div>
  )
}
