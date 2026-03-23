import type { Translations } from './en'

const sl: Translations = {
  nav: {
    name: 'Žan Močnik',
  },
  hero: {
    eyebrow: 'Full-Stack Razvijalec',
    headline: 'Programska oprema, ki deluje.',
    subheadline: 'Čist backend. Hiter frontend. Mobile First.',
    stack: '.Net, Blazor, React, Tailwind, MySQL',
    name: 'Žan Močnik',
    cta_projects: 'Moji projekti',
    cta_contact: 'Najem',
  },
  about: {
    heading: 'O meni',
    body: 'Full-stack razvijalec s 5+ leti komercialnih izkušenj na področju zalednega, čelnega in mobilnega razvoja. Razvil VAR sistem za svetovne judo tekme, sistem za upravljanje tekmovanj za Mednarodno judo zvezo in SaaS za klicne centre, ki ga uporabljajo večji slovenski telekomunikacijski operaterji. Trenutno freelance — na voljo za delo na daljavo in dolgoročno sodelovanje.',
    stats: [
      { value: '5+', label: 'Let izkušenj' },
      { value: '5', label: 'Realiziranih projektov' },
      { value: 'SL · EN', label: 'Jeziki' },
    ],
    boxing: {
      heading: 'Izven zaslona',
      body: 'Tekmovalno boksiram — zmagal sem na tekmah in vodil treninge za 25 ljudi. Enak miselni vzorec prinašam v vsak projekt: disciplina, fokus in dokončanje tega, kar začnem. Brez izgovorov, samo rezultati.',
      traits: ['Discipliniran', 'Dokonča, kar začne', 'Zanesljiv', 'Tekmovalen'],
    },
  },
  skills: {
    heading: 'Tehnologije',
    categories: [
      { label: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Blazor', 'EF Core', 'REST API', 'MySQL', 'PostgreSQL'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
      { label: 'Mobilno', items: ['React Native'] },
      { label: 'DevOps', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux'] },
    ],
  },
  projects: {
    heading: 'Projekti',
    live: 'Odpri',
    confidential: 'Zaupno',
    footer: "To so projekti, na katere sem ponosen. Vsak je bil rešen problem, vsak rok izpolnjen. Zgradimo nekaj skupaj.",
  },
  contact: {
    heading: 'Kontakt',
    body: 'Na voljo sem za projektno in redno sodelovanje. Urna postavka: 15–25 EUR/uro.',
    email: 'Pošlji e-pošto',
    whatsapp: 'WhatsApp',
  },
}

export default sl
