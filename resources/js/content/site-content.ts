import mateusHeadshot from '../assets/headshot/mateus.png'
import brettHeadshot from '../assets/headshot/brett-humphreys.webp'

export type Locale = 'pt' | 'en'

export type PageKey =
  | 'home'
  | 'services'
  | 'work'
  | 'about'
  | 'team'
  | 'skills'
  | 'philosophy'
  | 'contact'

export const defaultLocale: Locale = 'pt'

const supportedLocales: Locale[] = ['pt', 'en']

type NavLink = {
  slug: string
  label: string
}

type PageMeta = {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
}

type HomeHighlight = {
  title: string
  body: string
}

type ServicePackage = {
  title: string
  idealFor: string
  timeline: string
  items: string[]
}

type CaseStudy = {
  title: string
  context: string
  challenge: string
  solution: string
  result: string
}

type TeamMember = {
  name: string
  role: string
  credentials?: string
  bio: string
  linkedin: string
  github: string
  avatar: string
}

type SkillGroup = {
  title: string
  points: string[]
}

type Principle = {
  title: string
  body: string
}

type LocalizedContent = {
  company: {
    shortName: string
    legalName: string
    email: string
    location: string
    responseWindow: string
  }
  languageSwitcher: {
    label: string
    pt: string
    en: string
  }
  navLinks: NavLink[]
  home: {
    badge: string
    title: string
    subtitle: string
    supporting: string
    primaryCta: string
    secondaryCta: string
    highlights: HomeHighlight[]
    processTitle: string
    processBody: string
    processSteps: string[]
  }
  servicesPage: {
    tag: string
    title: string
    intro: string
    packages: ServicePackage[]
    cta: string
  }
  workPage: {
    tag: string
    title: string
    intro: string
    caseStudies: CaseStudy[]
    cta: string
  }
  aboutPage: {
    tag: string
    title: string
    intro: string
    story: string[]
    pillars: HomeHighlight[]
    cta: string
  }
  teamPage: {
    tag: string
    title: string
    intro: string
    members: TeamMember[]
  }
  skillsPage: {
    tag: string
    title: string
    intro: string
    groups: SkillGroup[]
  }
  philosophyPage: {
    tag: string
    title: string
    intro: string
    principles: Principle[]
  }
  contactPage: {
    tag: string
    title: string
    intro: string
    detailsTitle: string
    nextStep: string
    formTitle: string
    submitLabel: string
    sendingLabel: string
    successMessage: string
    errorMessage: string
    validationMessage: string
    emailFallback: string
    fields: {
      name: string
      email: string
      company: string
      service: string
      budget: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      company: string
      message: string
    }
    serviceOptions: string[]
    budgetOptions: string[]
  }
  footer: {
    tagline: string
  }
  metadata: Record<PageKey, PageMeta>
}

const content: Record<Locale, LocalizedContent> = {
  pt: {
    company: {
      shortName: 'ForEachCode',
      legalName: 'ForEachCode Software Studio',
      email: 'foreachcode@foreachcode.net',
      location: 'Sao Paulo, Brazil',
      responseWindow: 'Em ate 1 dia util',
    },
    languageSwitcher: {
      label: 'Idioma',
      pt: 'PT',
      en: 'EN',
    },
    navLinks: [
      { slug: '', label: 'Inicio' },
      { slug: 'services', label: 'Servicos' },
      { slug: 'work', label: 'Cases' },
      { slug: 'about', label: 'Sobre' },
      { slug: 'contact', label: 'Contato' },
    ],
    home: {
      badge: 'Software para SaaS B2B e PMEs',
      title: 'Projetos de software com escopo fechado e entrega previsivel.',
      subtitle: 'Lideranca tecnica senior, execucao direta e foco em resultado de negocio.',
      supporting: 'Da descoberta ao deploy: arquitetura, desenvolvimento e handoff com clareza de prioridade, prazo e custo.',
      primaryCta: 'Iniciar diagnostico',
      secondaryCta: 'Ver cases',
      highlights: [
        {
          title: 'Escopo fechado por fases',
          body: 'Planejamento com entregas quinzenais, riscos explicitos e decisoes tecnicas documentadas.',
        },
        {
          title: 'Execucao senior ponta a ponta',
          body: 'Sem repasse para time junior: quem desenha a solucao tambem implementa e acompanha producao.',
        },
        {
          title: 'Qualidade orientada a operacao',
          body: 'Observabilidade, testes e padroes de manutencao para o produto evoluir sem retrabalho constante.',
        },
      ],
      processTitle: 'Processo de entrega',
      processBody: 'Um fluxo simples para reduzir ambiguidade, acelerar decisao e manter previsibilidade durante a execucao.',
      processSteps: ['Diagnostico tecnico', 'Escopo e plano de entrega', 'Implementacao iterativa', 'Handoff e evolucao assistida'],
    },
    servicesPage: {
      tag: 'Servicos',
      title: 'Pacotes para destravar produto com previsibilidade.',
      intro: 'Cada pacote tem objetivo claro, escopo objetivo e prazo estimado para voce decidir rapido.',
      packages: [
        {
          title: 'Discovery + Arquitetura',
          idealFor: 'Ideal para produtos com gargalos tecnicos, backlog desorganizado ou decisoes bloqueadas.',
          timeline: 'Prazo medio: 1-3 semanas',
          items: [
            'Diagnostico de arquitetura e riscos',
            'Roadmap tecnico priorizado por impacto',
            'Plano de execucao com tradeoffs explicitos',
          ],
        },
        {
          title: 'Build de Modulo ou Produto',
          idealFor: 'Ideal para novas features criticas, MVP B2B ou modernizacao de fluxos internos.',
          timeline: 'Prazo medio: 4-12 semanas',
          items: [
            'Backend, frontend e integracoes em um unico fluxo',
            'Entregas incrementais com checkpoint de negocio',
            'Documentacao tecnica e padrao de qualidade para manutencao',
          ],
        },
        {
          title: 'Modernizacao e Escala',
          idealFor: 'Ideal para sistemas legados com alto custo de mudanca e risco de operacao.',
          timeline: 'Prazo medio: 6-16 semanas',
          items: [
            'Refatoracao guiada por risco e impacto',
            'Melhoria de performance e confiabilidade',
            'Apoio em deploy, monitoramento e evolucao continua',
          ],
        },
      ],
      cta: 'Solicitar diagnostico',
    },
    workPage: {
      tag: 'Cases',
      title: 'Resultados de projetos anonimizados.',
      intro: 'Exemplos reais de problemas resolvidos para empresas B2B sem expor dados sensiveis de clientes.',
      caseStudies: [
        {
          title: 'Portal operacional para SaaS de logistica',
          context: 'Empresa em fase de crescimento com operacao manual e pouca visibilidade.',
          challenge: 'Processos criticos em planilhas e alto tempo de resposta para o time de atendimento.',
          solution: 'Construimos painel web com fluxo de aprovacao, trilha de auditoria e API para integracoes internas.',
          result: 'Reducao de 40% no tempo medio de operacao e melhora de previsibilidade no suporte.',
        },
        {
          title: 'Modernizacao de API em plataforma B2B',
          context: 'Produto com base legada e falhas recorrentes em picos de uso.',
          challenge: 'Endpoints sem contratos claros e incidentes frequentes apos releases.',
          solution: 'Redesenho incremental da arquitetura, contratos de API, observabilidade e testes de regressao.',
          result: 'Queda de incidentes em producao e aumento de confianca nas entregas quinzenais.',
        },
        {
          title: 'Fluxo comercial interno para PME',
          context: 'Time comercial dependia de ferramentas desconectadas.',
          challenge: 'Perda de contexto entre leads, propostas e fechamento de contrato.',
          solution: 'Aplicacao web com pipeline unificado, automacao de tarefas e relatorios de performance.',
          result: 'Melhor visibilidade do funil e ciclo de venda mais curto com operacao padronizada.',
        },
      ],
      cta: 'Quero este tipo de resultado',
    },
    aboutPage: {
      tag: 'Sobre',
      title: 'Time enxuto, senior e orientado a execucao.',
      intro: 'A ForEachCode opera como parceiro tecnico para empresas que precisam avancar sem inflar estrutura.',
      story: [
        'A empresa nasceu para resolver um problema comum em times de produto: muita reuniao, pouca entrega de impacto.',
        'Nosso modelo privilegia clareza de escopo, comunicacao direta e responsabilidade sobre o comportamento em producao.',
        'Atuamos remotamente com empresas no Brasil e no exterior, com foco em contextos B2B e operacoes com restricao real de prazo.',
      ],
      pillars: [
        {
          title: 'Sem burocracia desnecessaria',
          body: 'Decisoes rapidas com base em risco, impacto e capacidade real de entrega.',
        },
        {
          title: 'Tecnologia a servico do negocio',
          body: 'Stack e arquitetura escolhidas pelo problema que precisa ser resolvido, nao por tendencia.',
        },
        {
          title: 'Compromisso com resultado',
          body: 'Nao paramos no merge: acompanhamos release, metricas e estabilidade apos entrega.',
        },
      ],
      cta: 'Falar com a ForEachCode',
    },
    teamPage: {
      tag: 'Time',
      title: 'Lideranca tecnica com responsabilidade ponta a ponta.',
      intro: 'A execucao e liderada por Brett Humphreys e Mateus Galasso, combinando estrategia de produto e engenharia aplicada.',
      members: [
        {
          name: 'Brett Humphreys',
          role: 'Founder',
          credentials: 'Veteran-owned · TS/SCI cleared',
          bio: 'Major reformado do Exercito e engenheiro de software senior. Lidera arquitetura frontend e produto em campo; constroi com Vue, Flutter e Go. Membro do conselho da Homeland Security Foundation of America. Mais de 20 anos de lideranca e entrega, do comando a aplicacoes em producao.',
          linkedin: 'https://www.linkedin.com/in/humphreysbrett/',
          github: 'https://github.com/radiancelux',
          avatar: brettHeadshot,
        },
        {
          name: 'Mateus Galasso',
          role: 'Senior Full Cycle Developer',
          bio: '20+ anos em tecnologia com foco em PHP, Laravel, Vue, DevOps e cloud. Atua na definicao tecnica e na execucao direta de entregas para produtos web e sistemas internos.',
          linkedin: 'https://www.linkedin.com/in/mateus-galasso',
          github: 'https://github.com/mateusgalasso',
          avatar: mateusHeadshot,
        },
      ],
    },
    skillsPage: {
      tag: 'Stack',
      title: 'Capacidade tecnica para construir, estabilizar e escalar.',
      intro: 'Selecionamos ferramentas com base em manutencao, performance e aderencia ao contexto do cliente.',
      groups: [
        {
          title: 'Frontend',
          points: [
            'Vue 3 + TypeScript com arquitetura de componentes escalavel',
            'Interfaces responsivas com foco em clareza de uso',
            'Performance e acessibilidade como requisitos de entrega',
          ],
        },
        {
          title: 'Backend',
          points: [
            'Laravel para APIs, jobs assincromos e integracoes',
            'Modelagem de dados orientada a evolucao de produto',
            'Padroes de erro, logs e testes para confiabilidade operacional',
          ],
        },
        {
          title: 'Cloud e DevOps',
          points: [
            'Ambientes containerizados e pipelines de release',
            'Monitoramento e observabilidade orientados a incidentes',
            'Experiencia com AWS, Azure e DigitalOcean',
          ],
        },
      ],
    },
    philosophyPage: {
      tag: 'Filosofia',
      title: 'Principios que sustentam entrega previsivel.',
      intro: 'Menos improviso e mais clareza para transformar escopo em software funcional.',
      principles: [
        {
          title: 'Contexto antes de codigo',
          body: 'Toda iniciativa comeca por objetivos, restricoes e criterio de sucesso.',
        },
        {
          title: 'Incrementos pequenos, risco menor',
          body: 'Entregas em ciclos curtos para validar direcao com frequencia.',
        },
        {
          title: 'Tradeoffs explicitos',
          body: 'Custo, complexidade e prazo sao discutidos antes de decidir caminho tecnico.',
        },
        {
          title: 'Qualidade que suporta crescimento',
          body: 'Arquitetura e padroes para reduzir retrabalho em evolucoes futuras.',
        },
      ],
    },
    contactPage: {
      tag: 'Contato',
      title: 'Receba um diagnostico tecnico inicial do seu projeto.',
      intro: 'Preencha o formulario com contexto, desafio e objetivo. Respondemos com o proximo passo pratico.',
      detailsTitle: 'Detalhes de contato',
      nextStep: 'Depois do envio, retornamos com avaliacao inicial e sugestao de abordagem em ate 1 dia util.',
      formTitle: 'Formulario de diagnostico',
      submitLabel: 'Enviar diagnostico',
      sendingLabel: 'Enviando...',
      successMessage: 'Mensagem recebida. Vamos retornar com os proximos passos o mais rapido possivel.',
      errorMessage: 'Nao foi possivel enviar agora. Tente novamente em alguns minutos.',
      validationMessage: 'Revise os campos destacados e tente novamente.',
      emailFallback: 'Prefere email direto? Envie para',
      fields: {
        name: 'Nome',
        email: 'Email',
        company: 'Empresa',
        service: 'Tipo de servico',
        budget: 'Faixa de investimento',
        message: 'Contexto do projeto',
      },
      placeholders: {
        name: 'Seu nome completo',
        email: 'voce@empresa.com',
        company: 'Nome da empresa (opcional)',
        message: 'Descreva problema, objetivo e prazo esperado.',
      },
      serviceOptions: ['Discovery + Arquitetura', 'Build de Modulo/Produto', 'Modernizacao e Escala', 'Consultoria tecnica pontual'],
      budgetOptions: ['A definir', 'R$ 10k - R$ 25k', 'R$ 25k - R$ 60k', 'R$ 60k+'],
    },
    footer: {
      tagline: 'Projetos B2B com clareza de escopo, execucao senior e entrega consistente.',
    },
    metadata: {
      home: {
        title: 'ForEachCode | Desenvolvimento de Software B2B',
        description: 'Projetos de software para SaaS B2B e PMEs com escopo fechado, execucao senior e entrega previsivel.',
        ogTitle: 'ForEachCode | Desenvolvimento de Software B2B',
        ogDescription: 'Construcao de produtos web, APIs e modernizacao de sistemas com foco em resultado de negocio.',
      },
      services: {
        title: 'Servicos | ForEachCode',
        description: 'Pacotes de discovery, build e modernizacao para empresas que precisam acelerar produto com previsibilidade.',
        ogTitle: 'Servicos de Engenharia | ForEachCode',
        ogDescription: 'Escopo fechado, entregas incrementais e suporte tecnico senior para produtos B2B.',
      },
      work: {
        title: 'Cases | ForEachCode',
        description: 'Cases anonimizados com problema, solucao e resultado em projetos de software B2B.',
        ogTitle: 'Cases de Software B2B | ForEachCode',
        ogDescription: 'Veja como resolvemos desafios de arquitetura, operacao e escalabilidade.',
      },
      about: {
        title: 'Sobre | ForEachCode',
        description: 'Conheca a ForEachCode: time senior, execucao direta e foco em resultado de negocio.',
        ogTitle: 'Sobre a ForEachCode',
        ogDescription: 'Parceiro tecnico para empresas que precisam de entrega com clareza e responsabilidade.',
      },
      team: {
        title: 'Time | ForEachCode',
        description: 'Lideranca tecnica senior com responsabilidade ponta a ponta na entrega.',
        ogTitle: 'Time Senior | ForEachCode',
        ogDescription: 'Conheca quem lidera arquitetura, implementacao e handoff dos projetos.',
      },
      skills: {
        title: 'Stack Tecnico | ForEachCode',
        description: 'Capacidades tecnicas em frontend, backend, cloud e devops para produtos digitais.',
        ogTitle: 'Stack Tecnico | ForEachCode',
        ogDescription: 'Ferramentas e praticas para construir software robusto e evolutivo.',
      },
      philosophy: {
        title: 'Filosofia | ForEachCode',
        description: 'Principios de trabalho para reduzir risco e aumentar previsibilidade em software.',
        ogTitle: 'Filosofia de Entrega | ForEachCode',
        ogDescription: 'Decisoes tecnicas transparentes e execucao orientada a valor.',
      },
      contact: {
        title: 'Contato | ForEachCode',
        description: 'Envie seu contexto e receba um diagnostico tecnico inicial para seu projeto.',
        ogTitle: 'Contato | ForEachCode',
        ogDescription: 'Inicie uma conversa de projeto com foco em escopo, prazo e resultado.',
      },
    },
  },
  en: {
    company: {
      shortName: 'ForEachCode',
      legalName: 'ForEachCode Software Studio',
      email: 'foreachcode@foreachcode.net',
      location: 'Sao Paulo, Brazil',
      responseWindow: 'Within one business day',
    },
    languageSwitcher: {
      label: 'Language',
      pt: 'PT',
      en: 'EN',
    },
    navLinks: [
      { slug: '', label: 'Home' },
      { slug: 'services', label: 'Services' },
      { slug: 'work', label: 'Work' },
      { slug: 'about', label: 'About' },
      { slug: 'contact', label: 'Contact' },
    ],
    home: {
      badge: 'Software delivery for B2B SaaS and SMEs',
      title: 'Fixed-scope software projects with predictable delivery.',
      subtitle: 'Senior technical leadership, hands-on execution, and business outcome focus.',
      supporting: 'From discovery to deployment: architecture, implementation, and handoff with clear priorities, timelines, and constraints.',
      primaryCta: 'Start project diagnosis',
      secondaryCta: 'View case studies',
      highlights: [
        {
          title: 'Phased fixed scope',
          body: 'Work is planned in short increments with explicit risks and technical decisions documented.',
        },
        {
          title: 'Senior end-to-end execution',
          body: 'No handoff to junior teams: the same person who designs the solution drives implementation.',
        },
        {
          title: 'Operational quality first',
          body: 'Observability, testing, and maintainable standards so the product can evolve safely.',
        },
      ],
      processTitle: 'Delivery workflow',
      processBody: 'A simple process to remove ambiguity, speed up decisions, and keep execution predictable.',
      processSteps: ['Technical diagnosis', 'Scope and delivery plan', 'Iterative implementation', 'Handoff and assisted evolution'],
    },
    servicesPage: {
      tag: 'Services',
      title: 'Delivery packages designed for momentum.',
      intro: 'Each package has a clear objective, practical scope, and expected timeline so decision-making stays fast.',
      packages: [
        {
          title: 'Discovery + Architecture',
          idealFor: 'Best for teams facing technical bottlenecks, unclear priorities, or uncertain solution direction.',
          timeline: 'Typical timeline: 1-3 weeks',
          items: [
            'Architecture and risk diagnosis',
            'Prioritized technical roadmap',
            'Execution plan with explicit tradeoffs',
          ],
        },
        {
          title: 'Module or Product Build',
          idealFor: 'Best for critical product features, early-stage B2B MVPs, or internal workflow modernization.',
          timeline: 'Typical timeline: 4-12 weeks',
          items: [
            'Backend, frontend, and integrations in one flow',
            'Incremental releases tied to business checkpoints',
            'Technical documentation and quality baseline for long-term ownership',
          ],
        },
        {
          title: 'Modernization and Scale',
          idealFor: 'Best for legacy systems with high change cost and operational risk.',
          timeline: 'Typical timeline: 6-16 weeks',
          items: [
            'Risk-driven refactoring',
            'Performance and reliability improvements',
            'Support for deployment, monitoring, and continuous evolution',
          ],
        },
      ],
      cta: 'Request diagnosis',
    },
    workPage: {
      tag: 'Work',
      title: 'Anonymized case studies with measurable impact.',
      intro: 'Real project examples structured as context, challenge, solution, and outcome.',
      caseStudies: [
        {
          title: 'Operations portal for logistics SaaS',
          context: 'Growth-stage company running key workflows manually.',
          challenge: 'Critical operations were spread across spreadsheets and support response time kept increasing.',
          solution: 'We built a web portal with approval flow, audit trail, and internal API integrations.',
          result: '40% reduction in average operational processing time and better support predictability.',
        },
        {
          title: 'API modernization for B2B platform',
          context: 'Legacy product with recurring failures during traffic peaks.',
          challenge: 'Endpoints lacked clear contracts and releases frequently introduced incidents.',
          solution: 'Incremental architecture redesign with API contracts, observability, and regression coverage.',
          result: 'Fewer production incidents and higher confidence in biweekly releases.',
        },
        {
          title: 'Internal commercial workflow for SME',
          context: 'Sales team relied on disconnected tools for lead and proposal management.',
          challenge: 'Pipeline context was lost between stages and decision-making was slow.',
          solution: 'We delivered a unified web app with workflow automation and performance dashboards.',
          result: 'Improved funnel visibility and shorter sales cycle through standardized operations.',
        },
      ],
      cta: 'I need this outcome',
    },
    aboutPage: {
      tag: 'About',
      title: 'Lean senior team focused on execution.',
      intro: 'ForEachCode works as a technical partner for companies that need momentum without unnecessary overhead.',
      story: [
        'The studio was created to solve a frequent product problem: too much alignment, not enough meaningful delivery.',
        'Our operating model emphasizes scope clarity, direct communication, and accountability for production behavior.',
        'We work remotely with companies in Brazil and abroad, especially in B2B contexts where timelines and constraints are real.',
      ],
      pillars: [
        {
          title: 'Low-bureaucracy execution',
          body: 'Decisions are made quickly based on risk, impact, and realistic delivery capacity.',
        },
        {
          title: 'Technology serving business',
          body: 'Stack and architecture choices follow business constraints, not trends.',
        },
        {
          title: 'Outcome ownership',
          body: 'Work does not end at merge: we support release quality and post-launch stability.',
        },
      ],
      cta: 'Talk to ForEachCode',
    },
    teamPage: {
      tag: 'Team',
      title: 'Senior leadership with end-to-end accountability.',
      intro: 'Delivery is led by Brett Humphreys and Mateus Galasso, combining product strategy and hands-on engineering execution.',
      members: [
        {
          name: 'Brett Humphreys',
          role: 'Founder',
          credentials: 'Veteran-owned · TS/SCI cleared',
          bio: 'Retired Army Major and senior software engineer. Leads frontend architecture and product in the wild; builds with Vue, Flutter, and Go. Board member at Homeland Security Foundation of America. 20+ years of leadership and delivery from command to production apps.',
          linkedin: 'https://www.linkedin.com/in/humphreysbrett/',
          github: 'https://github.com/radiancelux',
          avatar: brettHeadshot,
        },
        {
          name: 'Mateus Galasso',
          role: 'Senior Full Cycle Developer',
          bio: '20+ years in software with focus on PHP, Laravel, Vue, DevOps, and cloud delivery. Drives architecture and implementation for web products and internal systems.',
          linkedin: 'https://www.linkedin.com/in/mateus-galasso',
          github: 'https://github.com/mateusgalasso',
          avatar: mateusHeadshot,
        },
      ],
    },
    skillsPage: {
      tag: 'Stack',
      title: 'Technical capability to build, stabilize, and scale.',
      intro: 'Tooling decisions are guided by maintainability, performance, and fit with business constraints.',
      groups: [
        {
          title: 'Frontend',
          points: [
            'Vue 3 + TypeScript with scalable component architecture',
            'Responsive interfaces focused on clarity and speed',
            'Accessibility and performance as delivery requirements',
          ],
        },
        {
          title: 'Backend',
          points: [
            'Laravel APIs, async jobs, and system integrations',
            'Data modeling aligned with long-term product evolution',
            'Error handling, logging, and testing for operational reliability',
          ],
        },
        {
          title: 'Cloud and DevOps',
          points: [
            'Containerized environments and release pipelines',
            'Monitoring and observability for incident response',
            'Hands-on experience with AWS, Azure, and DigitalOcean',
          ],
        },
      ],
    },
    philosophyPage: {
      tag: 'Principles',
      title: 'How we keep delivery predictable.',
      intro: 'Less improvisation, more clarity to turn scope into software with confidence.',
      principles: [
        {
          title: 'Context before code',
          body: 'Every initiative starts with goals, constraints, and a clear success definition.',
        },
        {
          title: 'Small increments reduce risk',
          body: 'Short cycles keep progress visible and direction validated early.',
        },
        {
          title: 'Tradeoffs are explicit',
          body: 'Cost, complexity, and timeline are discussed before technical commitment.',
        },
        {
          title: 'Quality supports growth',
          body: 'Architecture and standards are designed for future change, not one-off delivery.',
        },
      ],
    },
    contactPage: {
      tag: 'Contact',
      title: 'Get an initial technical diagnosis for your project.',
      intro: 'Share your context, constraints, and expected outcomes. We reply with the most practical next step.',
      detailsTitle: 'Contact details',
      nextStep: 'After submission, you receive an initial assessment and a suggested approach within one business day.',
      formTitle: 'Project diagnosis form',
      submitLabel: 'Submit diagnosis',
      sendingLabel: 'Submitting...',
      successMessage: 'Message received. We will reach out soon with recommended next steps.',
      errorMessage: 'Unable to submit right now. Please try again in a few minutes.',
      validationMessage: 'Please review the highlighted fields and submit again.',
      emailFallback: 'Prefer direct email? Reach us at',
      fields: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        service: 'Service type',
        budget: 'Budget range',
        message: 'Project context',
      },
      placeholders: {
        name: 'Your full name',
        email: 'you@company.com',
        company: 'Company name (optional)',
        message: 'Describe the challenge, expected outcome, and timeline.',
      },
      serviceOptions: ['Discovery + Architecture', 'Module/Product Build', 'Modernization and Scale', 'Targeted technical consulting'],
      budgetOptions: ['Undecided', '$2k - $5k', '$5k - $12k', '$12k+'],
    },
    footer: {
      tagline: 'B2B software projects with scope clarity, senior execution, and consistent delivery.',
    },
    metadata: {
      home: {
        title: 'ForEachCode | B2B Software Development Studio',
        description: 'Fixed-scope software projects for B2B SaaS and SMEs with senior execution and predictable delivery.',
        ogTitle: 'ForEachCode | B2B Software Development',
        ogDescription: 'Web products, APIs, and modernization work focused on measurable business outcomes.',
      },
      services: {
        title: 'Services | ForEachCode',
        description: 'Discovery, build, and modernization packages for teams that need reliable product momentum.',
        ogTitle: 'Engineering Services | ForEachCode',
        ogDescription: 'Fixed scope, incremental releases, and senior technical ownership.',
      },
      work: {
        title: 'Work | ForEachCode',
        description: 'Anonymized case studies with context, challenge, solution, and outcomes.',
        ogTitle: 'Case Studies | ForEachCode',
        ogDescription: 'How ForEachCode solves architecture and delivery challenges in B2B software.',
      },
      about: {
        title: 'About | ForEachCode',
        description: 'Lean senior software studio focused on scope clarity, execution, and accountability.',
        ogTitle: 'About ForEachCode',
        ogDescription: 'Technical partner for product teams that need speed and reliability.',
      },
      team: {
        title: 'Team | ForEachCode',
        description: 'Senior technical leadership with end-to-end project accountability.',
        ogTitle: 'Team | ForEachCode',
        ogDescription: 'Who leads architecture, implementation, and production handoff.',
      },
      skills: {
        title: 'Technical Stack | ForEachCode',
        description: 'Frontend, backend, cloud, and devops capabilities for modern product delivery.',
        ogTitle: 'Technical Stack | ForEachCode',
        ogDescription: 'Technologies and practices used to build maintainable software systems.',
      },
      philosophy: {
        title: 'Principles | ForEachCode',
        description: 'Delivery principles built to reduce risk and improve software predictability.',
        ogTitle: 'Delivery Principles | ForEachCode',
        ogDescription: 'Clear decision-making and transparent engineering tradeoffs.',
      },
      contact: {
        title: 'Contact | ForEachCode',
        description: 'Share your project context and receive an initial technical diagnosis.',
        ogTitle: 'Contact ForEachCode',
        ogDescription: 'Start your project conversation with practical next steps.',
      },
    },
  },
}

export function resolveLocale(value: unknown): Locale {
  if (typeof value === 'string' && supportedLocales.includes(value as Locale)) {
    return value as Locale
  }

  if (Array.isArray(value) && typeof value[0] === 'string' && supportedLocales.includes(value[0] as Locale)) {
    return value[0] as Locale
  }

  return defaultLocale
}

export function getLocalizedContent(locale: Locale): LocalizedContent {
  return content[locale]
}

export function getPageMeta(locale: Locale, pageKey: PageKey): PageMeta {
  return content[locale].metadata[pageKey]
}

export function buildLocalizedPath(locale: Locale, slug: string): string {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '')

  if (cleanSlug.length === 0) {
    return `/${locale}`
  }

  return `/${locale}/${cleanSlug}`
}

export function switchLocalePath(path: string, targetLocale: Locale): string {
  const withoutLocale = path.replace(/^\/(pt|en)(?=\/|$)/, '')
  const cleanPath = withoutLocale.replace(/^\/+|\/+$/g, '')

  return buildLocalizedPath(targetLocale, cleanPath)
}
