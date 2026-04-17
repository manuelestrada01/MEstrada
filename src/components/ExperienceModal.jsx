import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLang } from '../contexts/LangContext'

const MODAL_LABELS = {
  es: { did: '// Lo que hice', stack: '// Stack técnico', close: 'Cerrar', view: 'Ver proyecto' },
  en: { did: '// What I did', stack: '// Tech stack', close: 'Close', view: 'View project' },
}

export default function ExperienceModal({ job, visual, statusStyle, onClose }) {
  const overlayRef = useRef(null)
  const panelRef   = useRef(null)
  const closeRef   = useRef(null)
  const imgRefs    = useRef([])
  const { lang }   = useLang()
  const labels     = MODAL_LABELS[lang] ?? MODAL_LABELS.es
  const { Illustration } = visual
  const images     = visual.images ?? []
  const hasImages  = images.length > 0

  const [imgIdx, setImgIdx] = useState(0)

  const [lightbox, setLightbox]   = useState(false)
  const lbOpenRef  = useRef(false)   // ref so ESC handler (inside useGSAP) can read it
  const lbRef      = useRef(null)
  const lbImgRef   = useRef(null)

  // Disable lightbox on touch/mobile — the carousel is already full-width there
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const openLightbox  = () => { if (!isDesktop) return; setLightbox(true);  lbOpenRef.current = true  }
  const closeLightbox = () => { setLightbox(false); lbOpenRef.current = false }

  // Body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Carousel: instant switch — show active image, hide others
  useEffect(() => {
    imgRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { opacity: i === imgIdx ? 1 : 0, zIndex: i === imgIdx ? 2 : 1 })
    })
  }, [imgIdx])

  // Entrance + exit setup
  useGSAP((context, contextSafe) => {
    gsap.timeline()
      .from(overlayRef.current, { opacity: 0, duration: 0.22, ease: 'power2.out' })
      .from(panelRef.current, { y: 50, opacity: 0, duration: 0.4, ease: 'expo.out' }, '-=0.1')
      .from('.m-item', { opacity: 0, y: 12, stagger: 0.04, ease: 'power2.out', duration: 0.35 }, '-=0.2')

    const exitFn = contextSafe(() => {
      gsap.timeline({ onComplete: onClose })
        .to(panelRef.current, { y: 50, opacity: 0, duration: 0.3, ease: 'power3.in' })
        .to(overlayRef.current, { opacity: 0, duration: 0.22, ease: 'power2.in' }, '-=0.08')
    })
    closeRef.current = exitFn

    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lbOpenRef.current) { setLightbox(false); lbOpenRef.current = false }
        else { closeRef.current?.() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, { scope: overlayRef })

  const prevImg = () => setImgIdx(i => (i - 1 + images.length) % images.length)
  const nextImg = () => setImgIdx(i => (i + 1) % images.length)

  // Lightbox entrance animation
  useEffect(() => {
    if (!lightbox || !lbRef.current || !lbImgRef.current) return
    gsap.fromTo(lbRef.current,   { opacity: 0 },         { opacity: 1, duration: 0.22, ease: 'power2.out' })
    gsap.fromTo(lbImgRef.current, { scale: 0.93, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'expo.out', delay: 0.05 })
  }, [lightbox])

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-slate-950/92 flex items-end md:items-center justify-center p-0 md:p-4"
      onClick={() => closeRef.current?.()}
    >
      <div
        ref={panelRef}
        className="relative w-full md:rounded-2xl rounded-t-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        style={{ maxWidth: 'min(92vw, 1200px)', background: '#0c1322', border: `1px solid ${visual.accent}28`, willChange: 'transform, opacity' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ═══════════════════════════════════════════════════
            LEFT — Image carousel
        ═══════════════════════════════════════════════════ */}
        <div
          className={`relative w-full md:w-[60%] h-64 md:h-auto md:min-h-full shrink-0 overflow-hidden group/img ${isDesktop && hasImages ? 'cursor-zoom-in' : ''}`}
          style={{ background: visual.bg }}
          onClick={hasImages && isDesktop ? openLightbox : undefined}
        >
          {/* Images stacked for crossfade */}
          {hasImages ? (
            images.map((src, i) => (
              <img
                key={src}
                ref={el => { imgRefs.current[i] = el }}
                src={src}
                alt={`${job.company} — screenshot ${i + 1}`}
                className="absolute inset-0 w-full h-full object-contain object-center"
                style={{ opacity: i === 0 ? 1 : 0 }}
              />
            ))
          ) : (
            // Fallback: SVG illustration
            <div
              ref={el => { imgRefs.current[0] = el }}
              className="absolute inset-0"
            >
              <Illustration accent={visual.accent} />
            </div>
          )}

          {/* Bottom gradient for readability on mobile */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent md:hidden" />

          {/* Top gradient for button area */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/60 to-transparent" />

          {/* Subtle accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 100%, ${visual.accent}10 0%, transparent 60%)` }}
          />

          {/* Zoom hint — visible on hover (desktop only) */}
          {hasImages && isDesktop && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              <div className="w-10 h-10 rounded-full bg-slate-950/70 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6"/>
                </svg>
              </div>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeRef.current?.() }}
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors z-10"
            aria-label="Cerrar"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Carousel controls — only when >1 image */}
          {images.length > 1 && (
            <>
              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImg() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/75 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-400 transition-colors z-10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImg() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/75 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-400 transition-colors z-10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setImgIdx(i) }}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                    style={{
                      background: visual.accent,
                      opacity: i === imgIdx ? 1 : 0.3,
                      transform: i === imgIdx ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="absolute top-3 right-3 font-mono text-[10px] text-slate-300 bg-slate-950/75 backdrop-blur-sm px-2 py-0.5 rounded-full border border-slate-700/50 z-10">
                {imgIdx + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* ═══════════════════════════════════════════════════
            RIGHT — Info panel
        ═══════════════════════════════════════════════════ */}
        <div className="no-scrollbar flex-1 overflow-y-auto flex flex-col divide-y divide-slate-700/40">

          {/* Header: title + status + period */}
          <div className="m-item p-5 flex items-start justify-between gap-3 shrink-0">
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">{job.company}</h2>
              <p className="font-mono text-slate-400 text-[11px] mt-0.5">{job.role}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${statusStyle.text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot} animate-pulse`} />
                {job.status}
              </span>
              <span className="font-mono text-[10px] text-slate-500">{job.period}</span>
            </div>
          </div>

          {/* Bullets */}
          <div className="m-item p-5 flex flex-col gap-3">
            <p
              className="font-mono text-[11px] uppercase tracking-widest"
              style={{ color: visual.accent, opacity: 0.65 }}
            >
              {labels.did}
            </p>
            <ul className="flex flex-col gap-2.5">
              {job.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="text-sm shrink-0 mt-0.5 leading-none select-none"
                    style={{ color: visual.accent }}
                  >
                    ✦
                  </span>
                  <span className="text-sm text-slate-300 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="m-item p-5 flex flex-col gap-3">
            <p
              className="font-mono text-[11px] uppercase tracking-widest"
              style={{ color: visual.accent, opacity: 0.65 }}
            >
              {labels.stack}
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[11px] bg-slate-900 border border-slate-700/60 text-slate-300 rounded-md px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="m-item p-5 flex items-center flex-wrap gap-2.5 shrink-0 mt-auto">
            <button
              onClick={() => closeRef.current?.()}
              className="inline-flex items-center gap-1.5 text-xs border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 px-4 py-2 rounded-lg transition-all duration-200"
            >
              {labels.close}
            </button>

            {job.github?.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                style={{ border: `1px solid ${visual.accent}35`, color: visual.accent }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub · {label}
              </a>
            ))}

            {job.link && (
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                style={{
                  background: `${visual.accent}15`,
                  border: `1px solid ${visual.accent}40`,
                  color: visual.accent,
                }}
              >
                {labels.view}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            )}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          LIGHTBOX — fullscreen image viewer
      ═══════════════════════════════════════════════════ */}
      {lightbox && hasImages && (
        <div
          ref={lbRef}
          className="fixed inset-0 z-[200] bg-slate-950/97 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Image */}
          <img
            ref={lbImgRef}
            src={images[imgIdx]}
            alt={`${job.company} — screenshot ${imgIdx + 1}`}
            className="lb-img max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style={{ maxWidth: '95vw', maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Counter */}
          {images.length > 1 && (
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700/50">
              {imgIdx + 1} / {images.length}
            </span>
          )}

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImg() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>,
    document.getElementById('modal-root')
  )
}
