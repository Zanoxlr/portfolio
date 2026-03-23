import { useT } from '../App'

export default function About() {
  const { t } = useT()

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Bio + stats */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">{t.about.heading}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t.about.body}
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="card text-center px-2 py-4">
                <div className="text-xl md:text-2xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
