export interface Project {
  id: string
  title: { en: string; sl: string }
  description: { en: string; sl: string }
  tech: string[]
  images?: string[]
  link?: string
  confidential?: boolean
}

export const projects: Project[] = [
  {
    id: 'instantinvoice',
    title: {
      en: 'InstantInvoice - Compare & Quote SaaS',
      sl: 'InstantInvoice - SaaS za primerjavo in ponudbe',
    },
    description: {
      en: 'A compare-and-quote engine for brokers selling across many providers: rank your own suppliers and send a branded quote in seconds, on the first call. Proven on a live 11-agent telecom floor (Telekom Slovenije, Telemach, T2, A1), cutting quote time from 84s to 22s and saving €1,755/mo.',
      sl: 'Orodje za primerjavo in pripravo ponudb za posrednike, ki prodajajo izdelke več ponudnikov: razvrsti svoje ponudbe in pošlji ponudbo z lastno znamko v nekaj sekundah, že na prvem klicu. Preizkušeno v živo na 11-članski telekomski ekipi (Telekom Slovenije, Telemach, T2, A1), kjer je čas priprave ponudbe skrajšalo z 84 s na 22 s in prihranilo 1.755 €/mes.',
    },
    tech: ['C#', '.NET', 'Blazor', 'Tailwind CSS', 'EF Core', 'MySQL'],
    images: ['/images/instantinvoice.png', '/images/instantinvoice-agent.png'],
    link: 'https://instantinvoice.pages.dev/',
  },
  {
    id: 'gps-si',
    title: {
      en: 'GPS d.o.o. - Corporate Website',
      sl: 'GPS d.o.o. - Korporativna spletna stran',
    },
    description: {
      en: 'Corporate website for a Slovenian architecture and geodesy firm.',
      sl: 'Korporativna spletna stran za slovensko podjetje s področja arhitekture in geodezije.',
    },
    tech: ['WordPress', 'Elementor'],
    images: [
      '/images/gps-pool-villa.jpg',
      '/images/gps-building.jpg',
      '/images/gps-terrace.jpg',
      '/images/gps-lemon-villa.jpg',
    ],
    link: 'https://www.gps.si/',
  },
  {
    id: 'fairreplay',
    title: {
      en: 'FairReplay - VAR System',
      sl: 'FairReplay - VAR sistem',
    },
    description: {
      en: 'Affordable video replay (VAR) system for live sports match review. Developed ~90% of the Viewer app, deployed at world judo tournaments in Serbia and Hungary. Presented at IBC Trade Show 2023.',
      sl: 'Cenovno dostopen VAR sistem za analizo športnih tekem v živo. Razvil ~90 % aplikacije Viewer, nameščen na svetovnih judo tekmovanjih v Srbiji in Madžarski. Predstavljen na IBC 2023.',
    },
    tech: ['.NET', 'WinForms', 'WPF', 'Avalonia', 'SQLite'],
    images: [
      '/images/fairreplay-site.jpg',
      '/images/fairreplay-judo-tv.jpg',
      '/images/fairreplay-ibc2023.jpg',
      '/images/fairreplay-karate-hungary.jpg',
      '/images/fairreplay-judo-operator.jpg',
    ],
    link: 'https://www.fairreplay.com/',
  },
  {
    id: 'ijf-admin',
    title: {
      en: 'IJF Match Administration',
      sl: 'IJF upravljanje tekmovanj',
    },
    description: {
      en: 'Match administration system for the International Judo Federation enabling easy management of competitions and results. Built a data-comparison algorithm that reduced hours of manual work to seconds.',
      sl: 'Sistem za upravljanje tekmovanj Mednarodne judo zveze. Razvil algoritem za primerjavo podatkov, ki je ure ročnega dela skrajšal na sekunde.',
    },
    tech: ['ASP.NET Core', 'Blazor', 'EF Core', 'MySQL'],
    images: ['/images/ijf-site.jpg'],
    link: 'https://www.ijf.org/',
  },
]
