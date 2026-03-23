import { useT } from '../App'

export default function Nav() {
  const { lang, t, setLang } = useT()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-sm tracking-wide gradient-text">{t.nav.name}</span>
        <button
          onClick={() => setLang(lang === 'en' ? 'sl' : 'en')}
          className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-colors"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'SL' : 'EN'}
        </button>
      </div>
    </nav>
  )
}
