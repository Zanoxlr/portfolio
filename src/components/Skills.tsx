import { useT } from '../App'

export default function Skills() {
  const { t } = useT()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">{t.skills.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {t.skills.categories.map((cat) => (
            <div key={cat.label} className="card">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600/20 to-blue-500/20 border border-violet-500/30 text-violet-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
