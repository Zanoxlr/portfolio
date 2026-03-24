const en = {
  nav: {
    name: 'Žan Močnik',
  },
  hero: {
    eyebrow: 'Full-Stack Developer',
    headline: 'Software that ships.',
    subheadline: 'Mobile First. Fast frontend. Clean backend.',
    stack: '.Net, Blazor, React, Tailwind, MySQL',
    name: 'Žan Močnik',
    cta_projects: 'See My Work',
    cta_contact: 'Hire Me',
  },
  about: {
    heading: 'About Me',
    body: "Full-stack developer with 5+ years of commercial experience across backend, frontend, and mobile. Built a VAR system deployed at world judo tournaments, match administration software for the International Judo Federation, and a call center SaaS used by major Slovenian telecom providers. Currently freelancing, open to remote project-based and long-term engagements.",
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '5+', label: 'Shipped Projects' },
      { value: 'EN · SL', label: 'Languages' },
    ],
    boxing: {
      heading: 'Beyond the Screen',
      body: "I compete in boxing. Won matches, and led training sessions for 25 people. The same mindset I bring to the ring is what I bring to every project: discipline, focus, and finishing what I start. No excuses, just results.",
      traits: ['Disciplined', 'Gets things done', 'Reliable', 'Competitive'],
    },
  },
  skills: {
    heading: 'Skills',
    categories: [
      { label: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Blazor', 'EF Core', 'REST API', 'MySQL', 'PostgreSQL'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
      { label: 'Mobile', items: ['React Native'] },
      { label: 'DevOps', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux'] },
    ],
  },
  projects: {
    heading: 'Projects',
    live: 'View Live',
    confidential: 'Confidential',
    footer: "These are the projects I'm proud to show. Each one a problem solved, a deadline met. Let's build something together.",
  },
  contact: {
    heading: 'Get In Touch',
    body: "I'm open to project-based and longer-term engagements. Rate: €15–25/hr.",
    email: 'Send Email',
    whatsapp: 'WhatsApp',
  },
}

export type Translations = typeof en
export default en
