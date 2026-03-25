import { useLang } from '../contexts/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Animated aurora blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px] animate-blob animation-delay-6000" />
      </div>

      {/* Noise / grain texture overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-6 animate-fade-up animate-fade-up-1">
          {t.hero.eyebrow}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up animate-fade-up-2">
          Manuel Estrada
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-10 animate-fade-up animate-fade-up-3">
          {t.hero.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 animate-fade-up animate-fade-up-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {t.hero.cta}
          </a>
          <a
            href="https://github.com/manuelestrada01"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 font-medium px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Location */}
        <p className="text-slate-500 text-sm animate-fade-up animate-fade-up-5">
          {t.hero.location}
        </p>
      </div>

      {/* Wave animated at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none overflow-hidden h-14">
        <div className="flex h-full animate-wave-slide" style={{ width: '200%' }}>
          {[0, 1].map((i) => (
            <svg
              key={i}
              viewBox="0 0 1440 70"
              preserveAspectRatio="none"
              className="h-full block flex-shrink-0"
              style={{ width: '50%' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1350,15 1440,35 L1440,70 L0,70 Z" fill="#1e293b" />
            </svg>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
        <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
