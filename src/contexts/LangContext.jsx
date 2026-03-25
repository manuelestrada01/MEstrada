import { createContext, useContext, useState } from 'react'
import { es, en } from '../i18n'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es')

  const value = {
    lang,
    setLang,
    toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
    t: lang === 'es' ? es : en,
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
