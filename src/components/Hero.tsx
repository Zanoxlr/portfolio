import { useT } from '../App'

export default function Hero() {
  const { t } = useT()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-14">
      <div className="max-w-3xl">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-400 mb-6">
          {t.hero.eyebrow}
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 gradient-text">
          {t.hero.headline}
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-3">
          {t.hero.subheadline}
        </p>
        <p className="text-sm text-gray-600 mb-2 tracking-wider font-mono">
          {t.hero.stack}
        </p>
        <p className="text-sm text-gray-700 mb-10">
          — {t.hero.name}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
          >
            {t.hero.cta_projects}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold border border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-colors"
          >
            {t.hero.cta_contact}
          </a>
        </div>
      </div>
    </section>
  )
}
