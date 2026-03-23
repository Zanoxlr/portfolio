import { useState } from 'react'
import { useT } from '../App'
import { projects } from '../data/projects'

function ImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div
        className="relative rounded-lg overflow-hidden cursor-zoom-in bg-gray-800"
        style={{ aspectRatio: '16/9' }}
        onClick={() => setLightbox(images[active])}
      >
        <img
          src={images[active]}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            images[active].includes('-site.') || images[active].includes('callcenter') ? 'object-top' : 'object-center'
          }`}
        />
        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-full">
            {active + 1}/{images.length}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-colors ${
                i === active ? 'border-violet-500' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}
    </>
  )
}

export default function Projects() {
  const { lang, t } = useT()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">{t.projects.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card flex flex-col gap-4">
              {project.images && <ImageGallery images={project.images} />}
              <h3 className="text-lg font-bold text-white">{project.title[lang]}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {project.description[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    {t.projects.live}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {t.projects.confidential}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-600 text-sm italic">
          {t.projects.footer}
        </p>
      </div>
    </section>
  )
}
