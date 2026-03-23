import { createContext, useContext, useState } from 'react'
import en, { type Translations } from './i18n/en'
import sl from './i18n/sl'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

type Lang = 'en' | 'sl'

interface LangContextType {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: en,
  setLang: () => {},
})

export const useT = () => useContext(LangContext)

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const t = lang === 'en' ? en : sl

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="text-center py-8 text-gray-600 text-sm">
          © {new Date().getFullYear()} Žan Močnik
        </footer>
      </div>
    </LangContext.Provider>
  )
}
