import { useT } from '../App'

export default function Contact() {
  const { t } = useT()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">{t.contact.heading}</h2>
        <p className="text-gray-400 mb-10 text-lg max-w-md mx-auto">{t.contact.body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:zanoxlr@gmail.com"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
          >
            {t.contact.email}
          </a>
          <a
            href="https://wa.me/38640305464"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-semibold border border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-colors"
          >
            {t.contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  )
}
