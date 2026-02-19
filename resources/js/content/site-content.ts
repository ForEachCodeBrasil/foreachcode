import mateusHeadshot from '../assets/headshot/mateus.png'

export const company = {
  shortName: 'ForEachDev',
  legalName: 'ForEachDev Software Studio',
  email: 'foreachdev@foreachdev.com',
  location: 'Sao Paulo, Brazil',
  responseWindow: 'Within one business day',
  heroTagline: 'Engineering-first digital products for teams that need real delivery.',
}

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/team', label: 'Team' },
  { path: '/skills', label: 'Skills' },
  { path: '/philosophy', label: 'Philosophy' },
  { path: '/contact', label: 'Contact' },
]

export const homeHighlights = [
  {
    title: 'Product Delivery',
    body: 'From idea to production: scoped, prioritized, and shipped with clean execution.',
  },
  {
    title: 'Engineering Quality',
    body: 'Maintainable architecture, measurable quality, and pragmatic technical decisions.',
  },
  {
    title: 'Senior Guidance',
    body: 'Hands-on execution with technical leadership aligned to business constraints.',
  },
]

export const services = [
  {
    title: 'Web Platforms',
    body: 'High-performance web products, dashboards, portals, and internal tools with strong DX and maintainability.',
  },
  {
    title: 'Mobile Apps',
    body: 'Cross-platform or native mobile apps designed for reliable releases and long-term evolution.',
  },
  {
    title: 'Backend & APIs',
    body: 'Scalable services, integrations, and APIs with clear contracts, observability, and production resilience.',
  },
  {
    title: 'Team Augmentation',
    body: 'Senior engineering support for teams that need extra execution power on critical initiatives.',
  },
  {
    title: 'Technical Discovery',
    body: 'Architecture review, product roadmap design, and risk mapping before heavy implementation.',
  },
  {
    title: 'Compliance-Aware Builds',
    body: 'Delivery under policy, legal, or process constraints without sacrificing usability and speed.',
  },
]

export const team = [
  {
    name: 'Mateus Galasso',
    role: 'Senior Full Cycle Developer',
    bio: 'Senior Full Cycle Developer with 20+ years of IT industry experience. Skilled in PHP, Python, HTML5, CSS, Laravel, VueJS, Docker, DevOps, and cloud platforms (AWS, Azure, Digital Ocean). Strong technical understanding with excellent communication skills and commitment to continuous learning.',
    linkedin: 'https://www.linkedin.com/in/mateus-galasso',
    github: 'https://github.com/mateusgalasso',
    avatar: mateusHeadshot,
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    points: [
      'Vue 3, TypeScript, design systems, and responsive interfaces',
      'Performance-oriented component architecture and code splitting',
      'Accessibility-first implementation with maintainable Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    points: [
      'Laravel APIs, queues, automations, and service integrations',
      'Relational data modeling with clean application boundaries',
      'Testing, logging, and production-focused error handling',
    ],
  },
  {
    title: 'Cloud & DevOps',
    points: [
      'Dockerized environments and deployment pipelines',
      'Release workflows with monitoring-ready application behavior',
      'Cloud services integration across AWS, Azure, and DigitalOcean',
    ],
  },
  {
    title: 'Ways of Working',
    points: [
      'Async-first communication with transparent progress updates',
      'Structured planning and iterative, testable delivery',
      'Collaboration across product, engineering, and business stakeholders',
    ],
  },
]

export const principles = [
  {
    title: 'Build with clarity',
    body: 'Every initiative starts with explicit context, constraints, and expected outcomes.',
  },
  {
    title: 'Prefer maintainability over hype',
    body: 'We optimize for solutions teams can evolve safely after launch.',
  },
  {
    title: 'Ship in tight loops',
    body: 'Small increments reduce risk and keep momentum visible for everyone involved.',
  },
  {
    title: 'Make tradeoffs explicit',
    body: 'We expose cost, complexity, and impact before committing to a technical direction.',
  },
  {
    title: 'Respect product constraints',
    body: 'Compliance, deadlines, and budget shape engineering decisions from day one.',
  },
  {
    title: 'Own outcomes',
    body: 'Responsibility does not end at merge; delivery includes behavior in production.',
  },
]
