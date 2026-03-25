import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LangContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, toggleLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  const NAV_LINKS = [
    { label: t.nav.inicio,      href: '#hero' },
    { label: t.nav.sobre,       href: '#about' },
    { label: t.nav.habilidades, href: '#skills' },
    { label: t.nav.experiencia, href: '#experience' },
    { label: t.nav.contacto,    href: '#contact' },
  ]

  const LangToggle = ({ className = '' }) => (
    <button
      onClick={toggleLang}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className={`rounded overflow-hidden transition-all duration-200 hover:scale-110 hover:ring-1 hover:ring-cyan-400/50 ${className}`}
    >
      <img
        src={lang === 'es' ? 'https://flagcdn.com/w40/ar.png' : 'https://flagcdn.com/w40/us.png'}
        alt={lang === 'es' ? 'Argentina' : 'United States'}
        className="w-7 h-auto block"
      />
    </button>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-surface/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-cyan-400 font-semibold text-lg tracking-tight hover:text-cyan-300 transition-colors"
        >
          ME<span className="text-slate-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side: lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 text-sm px-4 py-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
          >
            {t.nav.contacto}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-b border-surface-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-300 text-base hover:text-cyan-400 transition-colors block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <LangToggle />
          </div>
        </div>
      )}
    </header>
  )
}
