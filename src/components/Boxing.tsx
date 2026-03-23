import { useT } from '../App'

export default function Boxing() {
  const { t } = useT()

  return (
    <section id="boxing" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-72 shrink-0">
            <img
              src="/images/boxing-win.png"
              alt="Boxing win"
              className="w-full rounded-xl object-cover shadow-lg shadow-violet-900/20"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">{t.about.boxing.heading}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{t.about.boxing.body}</p>
            <ul className="flex flex-wrap gap-3 mt-2">
              {t.about.boxing.traits.map((trait) => (
                <li
                  key={trait}
                  className="px-3 py-1 rounded-full text-sm font-semibold bg-violet-900/40 text-violet-300 border border-violet-700/40"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
