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

export const pageSlugs: Record<PageKey, string> = {
  home: '',
  services: 'services',
  work: 'work',
  about: 'about',
  team: 'team',
  skills: 'skills',
  philosophy: 'philosophy',
  contact: 'contact',
}

// WhatsApp confirmado pelo Mateus (30/10/2026). Ainda não há link de agenda: o CTA de 30 min saiu do site.
export const contactChannels = {
  whatsappNumber: '5561992419461',
  whatsappDisplay: '+55 61 99241-9461',
  companyGithub: 'https://github.com/ForEachCodeBrasil',
  founderLinkedin: 'https://www.linkedin.com/in/mateus-galasso',
}

export const pendingMark = '[CONFIRMAR]'

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

type TerminalLine = {
  kind: 'cmd' | 'out' | 'ok'
  text: string
}

type Stat = {
  value: number
  prefix?: string
  suffix?: string
  label: string
  pending?: boolean
}

type ProcessStep = {
  title: string
  duration: string
  deliverable: string
}

type ServicePackage = {
  title: string
  idealFor: string
  timeline: string
  priceFrom: string
  items: string[]
}

type CaseMetric = {
  label: string
  value: string
}

type CaseImage = {
  src: string
  alt: string
  caption: string
  // Versão menor para o card da home.
  cardSrc?: string
  width?: number
  height?: number
}

type CaseStudy = {
  title: string
  kind: string
  status: string
  own?: boolean
  problem: string
  solution: string
  result: string
  stack: string[]
  metrics: CaseMetric[]
  image?: CaseImage
  // Telas extras, só na página de cases.
  gallery?: CaseImage[]
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

type FaqItem = {
  q: string
  a: string
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
  channels: {
    whatsappLabel: string
    whatsappMessage: string
    whatsappHint: string
  }
  home: {
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    terminalTitle: string
    terminal: TerminalLine[]
    statsTitle: string
    stats: Stat[]
    stackTitle: string
    casesTitle: string
    casesBody: string
    casesCta: string
    highlightsTitle: string
    highlights: HomeHighlight[]
    processTitle: string
    processBody: string
    processSteps: ProcessStep[]
    processDeliverable: string
    founder: {
      tag: string
      title: string
      points: string[]
      cta: string
    }
    closing: {
      title: string
      body: string
    }
  }
  servicesPage: {
    tag: string
    title: string
    intro: string
    priceLabel: string
    priceNote: string
    packages: ServicePackage[]
    cta: string
    simulator: {
      title: string
      intro: string
      typeLabel: string
      deadlineLabel: string
      extrasLabel: string
      types: string[]
      deadlines: string[]
      extras: string[]
      resultLabel: string
      summaryIntro: string
      note: string
      cta: string
    }
    faq: {
      title: string
      items: FaqItem[]
    }
  }
  workPage: {
    tag: string
    title: string
    intro: string
    labels: {
      problem: string
      solution: string
      result: string
      stack: string
      metrics: string
    }
    ownTitle: string
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
    detailLabels: {
      email: string
      location: string
      responseTime: string
    }
    quickTitle: string
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
    elsewhere: string
  }
  metadata: Record<PageKey, PageMeta>
}

const founderBio = {
  pt: 'Engenheiro de software sênior há mais de 20 anos, com PHP e Laravel no centro. Trabalha com pagamentos e fintech (Stripe, inclusive Stripe Connect, assinaturas e repasses), infraestrutura na AWS e IA aplicada a processos operacionais, com LLMs integrados a sistemas em produção. Desenha a arquitetura e escreve o código de cada entrega.',
  en: 'Senior software engineer with 20+ years of experience, centered on PHP and Laravel. Works on payments and fintech (Stripe, including Stripe Connect, subscriptions and payouts), AWS infrastructure, and AI applied to operations, with LLMs wired into production systems. Designs the architecture and writes the code for every delivery.',
}

const content: Record<Locale, LocalizedContent> = {
  pt: {
    company: {
      shortName: 'ForEachCode',
      legalName: 'ForEachCode Software Studio',
      email: 'foreachcode@foreachcode.net',
      location: 'Atendimento remoto',
      responseWindow: 'Em até 1 dia útil',
    },
    languageSwitcher: {
      label: 'Idioma',
      pt: 'PT',
      en: 'EN',
    },
    navLinks: [
      { slug: '', label: 'Início' },
      { slug: 'services', label: 'Serviços' },
      { slug: 'work', label: 'Cases' },
      { slug: 'about', label: 'Sobre' },
      { slug: 'team', label: 'Time' },
      { slug: 'contact', label: 'Contato' },
    ],
    channels: {
      whatsappLabel: 'Chamar no WhatsApp',
      whatsappMessage: 'Olá! Vim pelo site da ForEachCode e quero falar sobre um projeto.',
      whatsappHint: 'Sem compromisso: você conta o problema e eu digo se faz sentido seguir.',
    },
    home: {
      badge: 'Software para SaaS B2B e PMEs',
      title: 'Projetos de software com escopo fechado e entrega previsível.',
      subtitle: 'Liderança técnica sênior e execução direta, com especialidade em pagamentos, Laravel e AWS. Da descoberta ao deploy, com prioridade, prazo e custo claros.',
      primaryCta: 'Pedir diagnóstico',
      secondaryCta: 'Ver cases',
      terminalTitle: 'foreachcode — projeto',
      terminal: [
        { kind: 'cmd', text: 'foreachcode diagnose --projeto seu-saas' },
        { kind: 'out', text: 'lendo contexto, restrições e prazo…' },
        { kind: 'ok', text: 'riscos mapeados · escopo dividido em fases' },
        { kind: 'cmd', text: 'foreachcode plan --entregas quinzenais' },
        { kind: 'out', text: 'fase 1 discovery · fase 2 build · fase 3 handoff' },
        { kind: 'ok', text: 'roadmap com prazo por fase' },
        { kind: 'cmd', text: 'php artisan test --parallel' },
        { kind: 'ok', text: 'testes passando · cobertura nos fluxos críticos' },
        { kind: 'cmd', text: 'foreachcode deploy --producao' },
        { kind: 'ok', text: 'em produção · monitorado · documentado' },
      ],
      statsTitle: 'Em números',
      stats: [
        { value: 20, suffix: '+', label: 'anos de experiência com software' },
        { value: 5, label: 'cases com código real: 2 de clientes e 3 produtos próprios' },
        { value: 1, label: 'dia útil para responder um contato' },
        { value: 2, label: 'idiomas de atendimento: português e inglês' },
      ],
      stackTitle: 'Stack do dia a dia',
      casesTitle: 'Projetos com código de verdade',
      casesBody: 'Projetos em que eu escrevi a maior parte do código. Os de clientes aparecem sem nome.',
      casesCta: 'Ver os 5 cases',
      highlightsTitle: 'Como o trabalho é conduzido, do primeiro dia à produção.',
      highlights: [
        {
          title: 'Escopo fechado por fases',
          body: 'Planejamento com entregas quinzenais, riscos explícitos e decisões técnicas documentadas.',
        },
        {
          title: 'Execução sênior ponta a ponta',
          body: 'Sem repasse para time júnior: quem desenha a solução também implementa e acompanha a produção.',
        },
        {
          title: 'Qualidade orientada à operação',
          body: 'Observabilidade, testes e padrões de manutenção para o produto evoluir sem retrabalho constante.',
        },
      ],
      processTitle: 'Processo de entrega',
      processBody: 'Quatro etapas, cada uma com prazo e um entregável que você recebe na mão.',
      processDeliverable: 'Entregável',
      processSteps: [
        { title: 'Diagnóstico técnico', duration: 'Conversa curta + resposta em 1 dia útil', deliverable: 'Leitura do problema e recomendação de caminho' },
        { title: 'Escopo e plano de entrega', duration: '1 a 3 semanas', deliverable: 'Arquitetura, riscos e roadmap por fase' },
        { title: 'Implementação iterativa', duration: '4 a 12 semanas', deliverable: 'Entregas quinzenais em ambiente de homologação' },
        { title: 'Handoff e evolução assistida', duration: 'Contínuo', deliverable: 'Documentação, monitoramento e suporte pós-entrega' },
      ],
      founder: {
        tag: 'Quem conduz o projeto',
        title: 'Mateus Galasso, fundador',
        points: ['Pagamentos e Stripe', 'AWS', 'IA em produção', 'Laravel + Vue'],
        cta: 'Conhecer o time',
      },
      closing: {
        title: 'Tem um projeto travado ou um prazo apertado?',
        body: 'Conte o contexto. Em até 1 dia útil você recebe uma leitura técnica e o próximo passo.',
      },
    },
    servicesPage: {
      tag: 'Serviços',
      title: 'Pacotes para destravar o produto com previsibilidade.',
      intro: 'Cada pacote tem objetivo, escopo e prazo estimado para você decidir rápido.',
      priceLabel: 'Investimento',
      priceNote: 'O valor depende do escopo e sai depois da conversa inicial.',
      packages: [
        {
          title: 'Discovery + Arquitetura',
          idealFor: 'Para produtos com gargalos técnicos, backlog desorganizado ou decisões travadas.',
          timeline: 'Prazo médio: 1 a 3 semanas',
          priceFrom: 'Sob consulta',
          items: [
            'Diagnóstico de arquitetura e riscos',
            'Roadmap técnico priorizado por impacto',
            'Plano de execução com tradeoffs explícitos',
          ],
        },
        {
          title: 'Build de Módulo ou Produto',
          idealFor: 'Para features críticas, MVP B2B ou modernização de fluxos internos.',
          timeline: 'Prazo médio: 4 a 12 semanas',
          priceFrom: 'Sob consulta',
          items: [
            'Backend, frontend e integrações em um único fluxo',
            'Entregas incrementais com checkpoint de negócio',
            'Documentação técnica e padrão de qualidade para manutenção',
          ],
        },
        {
          title: 'Modernização e Escala',
          idealFor: 'Para sistemas legados com alto custo de mudança e risco de operação.',
          timeline: 'Prazo médio: 6 a 16 semanas',
          priceFrom: 'Sob consulta',
          items: [
            'Refatoração guiada por risco e impacto',
            'Melhoria de performance e confiabilidade',
            'Apoio em deploy, monitoramento e evolução contínua',
          ],
        },
      ],
      cta: 'Pedir diagnóstico',
      simulator: {
        title: 'Monte o escopo',
        intro: 'Marque o que o projeto envolve. O resumo sai pronto para mandar no WhatsApp.',
        typeLabel: 'Tipo de projeto',
        deadlineLabel: 'Prazo',
        extrasLabel: 'O projeto envolve',
        types: ['Consultoria técnica pontual', 'Discovery + Arquitetura', 'Build de Módulo ou Produto', 'Modernização e Escala'],
        deadlines: ['Flexível', 'Normal (2 a 3 meses)', 'Urgente (menos de 4 semanas)'],
        extras: ['Pagamentos (Stripe, assinaturas, repasses)', 'IA ou LLM em produção', 'App mobile ou API', 'Painel administrativo', 'Integração com sistema externo', 'Migração de sistema legado'],
        resultLabel: 'Resumo do escopo',
        summaryIntro: 'Olá! Vim pelo site da ForEachCode. Meu escopo:',
        note: 'Sem preço automático: o valor sai da conversa, de acordo com o escopo.',
        cta: 'Enviar resumo no WhatsApp',
      },
      faq: {
        title: 'Perguntas frequentes',
        items: [
          {
            q: 'Vocês emitem nota fiscal como PJ?',
            a: 'Sim. A contratação é como pessoa jurídica, com nota fiscal de serviço.',
          },
          {
            q: 'Atendem empresas de fora do Brasil e cobram em dólar?',
            a: 'Sim. Para clientes no exterior, o contrato pode ser em USD, com pagamento por transferência internacional.',
          },
          {
            q: 'Assinam NDA antes de conhecer o projeto?',
            a: 'Sim. Se você preferir, assinamos o NDA antes da conversa técnica.',
          },
          {
            q: 'Existe garantia depois da entrega?',
            a: 'Defeitos encontrados em até 30 dias após a entrega de cada fase são corrigidos sem custo.',
          },
          {
            q: 'Quem escreve o código?',
            a: 'Quem desenha a solução também implementa. Não há repasse para time júnior.',
          },
        ],
      },
    },
    workPage: {
      tag: 'Cases',
      title: 'Problema, solução e resultado.',
      intro: 'Dois projetos de clientes e três produtos próprios. Os números dos produtos saem do código de cada repositório, não de estimativa.',
      labels: {
        problem: 'Problema',
        solution: 'Solução',
        result: 'O que eu fiz',
        stack: 'Stack',
        metrics: 'Do repositório',
      },
      ownTitle: 'Produtos próprios',
      caseStudies: [
        {
          title: 'Synopay',
          kind: 'PDV cashless com pulseira RFID para eventos e hospitalidade',
          status: 'Cliente · em produção',
          problem: 'Bares, festivais e resorts precisavam vender sem dinheiro e sem cartão na fila: o cliente paga encostando a pulseira, e o operador precisa ver pedido, saldo e cozinha em tempo real.',
          solution: 'Plataforma Laravel com PDV web, pulseira RFID com saldo, painel de cozinha e grade de pedidos em tempo real (Reverb), admin em Filament, API para o leitor móvel e pagamentos via Square, Stripe e CardKnox.',
          result: 'Desenvolvedor principal: arquitetura, PDV, fluxo da pulseira, integrações de pagamento, reservas de spa e integração com o sistema de hotel (Opera), além do deploy no Laravel Cloud.',
          stack: ['Laravel', 'Filament', 'Livewire', 'Octane', 'Reverb', 'Postgres', 'Stripe', 'Square'],
          metrics: [],
          image: {
            src: '/images/cases/synopay-pos.webp',
            cardSrc: '/images/cases/synopay-pos-card.webp',
            width: 1600,
            height: 1112,
            alt: 'Tela do PDV da Synopay com a grade de produtos e um pedido de três itens no carrinho',
            caption: 'Tela real do PDV. O nome do local e o do operador foram borrados.',
          },
          gallery: [
            {
              src: '/images/cases/synopay-rfid.webp',
              width: 1600,
              height: 1112,
              alt: 'Janela de pagamento por pulseira RFID esperando a leitura da pulseira',
              caption: 'Pagamento do pedido pela pulseira RFID.',
            },
          ],
        },
        {
          title: 'Backend de app social',
          kind: 'Chat em tempo real e assinaturas nas lojas de apps',
          status: 'Cliente',
          problem: 'Um app social precisava de login por telefone, combinação por localização, conversas com tempo limitado e assinaturas pagas pela App Store e pelo Google Play, tudo com notificação em tempo real.',
          solution: 'API Laravel com mensagens em tempo real (Reverb), filas no Horizon, validação de compras da Apple e do Google, push via Firebase, SMS e painel administrativo em Filament.',
          result: 'Autor da maior parte do backend: modelagem, API do app, assinaturas nas duas lojas, notificações e painel de operação.',
          stack: ['Laravel', 'Octane', 'Reverb', 'Horizon', 'Filament', 'Firebase', 'App Store API'],
          metrics: [],
        },
        {
          title: 'Carrinho Inteligente',
          kind: 'Comparador de preços de supermercado',
          status: 'Produto próprio · em desenvolvimento',
          own: true,
          problem: 'Quem faz compra do mês não sabe em qual mercado a lista inteira sai mais barata, nem se vale dividir a compra entre duas lojas.',
          solution: 'Lista de compras que compara as lojas e mostra a compra mais barata em um mercado só ou dividida. Os preços vêm de nota fiscal (NFC-e), foto de etiqueta e encarte, lidos com IA, além de coletores de redes de atacado e varejo.',
          result: 'Produto do zero: modelagem com Postgres/PostGIS, leitura de preços com Gemini via Prism, coletores por rede, cobrança recorrente e painel administrativo.',
          stack: ['Laravel', 'Inertia', 'Vue 3', 'PostGIS', 'Prism', 'Gemini', 'Filament'],
          metrics: [
            { label: 'Início do projeto', value: '2025' },
            { label: 'Preços lidos de nota, foto e encarte', value: 'IA' },
          ],
          image: {
            src: '/images/cases/carrinho-inteligente.webp',
            alt: 'Tela da lista de compras com quatro itens e o ranking de onde comprar mais barato',
            caption: 'Tela real do app em desenvolvimento, com dados de teste.',
          },
        },
        {
          title: 'Lycento',
          kind: 'Plataforma de pagamentos e licenciamento de software',
          status: 'Produto próprio · pausado',
          own: true,
          problem: 'Vender software com cobrança única ou assinatura e emitir licenças validadas por API exigia juntar várias ferramentas soltas.',
          solution: 'Plataforma multi-tenant no estilo Paddle/Lemon Squeezy: o vendedor cadastra produto e preço, recebe por Pix, cartão ou assinatura, e a API ativa e valida a licença por dispositivo.',
          result: 'Arquitetura e implementação: painel do vendedor, portal do cliente, API de licenças com SDKs em JavaScript e Rust, e checkout com Stripe e AbacatePay.',
          stack: ['Laravel 12', 'Inertia', 'Vue 3', 'Stripe', 'AbacatePay', 'Rust SDK'],
          metrics: [],
        },
        {
          title: 'DevGen',
          kind: 'Gerador de dados de teste offline, open source',
          status: 'Produto próprio · open source (MIT)',
          own: true,
          problem: 'Desenvolvedores perdem tempo criando à mão CPF, CNPJ, RG e outros dados válidos para testar sistemas.',
          solution: 'App desktop para macOS que gera dados brasileiros válidos sem internet: pessoas, empresas, documentos e veículos, com exportação para uso em teste.',
          result: 'Do zero ao 1.0: app Tauri com núcleo em Rust, interface em Vue, CI com testes e build assinado para macOS.',
          stack: ['Rust', 'Tauri 2', 'Vue 3', 'TypeScript'],
          metrics: [],
        },
      ],
      cta: 'Quero este tipo de resultado',
    },
    aboutPage: {
      tag: 'Sobre',
      title: 'Time enxuto, sênior e orientado à execução.',
      intro: 'A ForEachCode atua como parceiro técnico de empresas que precisam avançar sem inflar a estrutura.',
      story: [
        'A empresa nasceu para resolver um problema comum em times de produto: muita reunião e pouca entrega de impacto.',
        'Nosso modelo privilegia clareza de escopo, comunicação direta e responsabilidade pelo comportamento em produção.',
        'Atuamos remotamente com empresas no Brasil e no exterior, com foco em contextos B2B e operações com restrição real de prazo.',
      ],
      pillars: [
        {
          title: 'Sem burocracia desnecessária',
          body: 'Decisões rápidas, com base em risco, impacto e capacidade real de entrega.',
        },
        {
          title: 'Tecnologia a serviço do negócio',
          body: 'Stack e arquitetura escolhidas pelo problema a resolver, não por tendência.',
        },
        {
          title: 'Compromisso com resultado',
          body: 'O trabalho não para no merge: acompanhamos release, métricas e estabilidade depois da entrega.',
        },
      ],
      cta: 'Falar com a ForEachCode',
    },
    teamPage: {
      tag: 'Time',
      title: 'Liderança técnica com responsabilidade ponta a ponta.',
      intro: 'A execução é liderada por Mateus Galasso e Brett Humphreys, combinando estratégia de produto e engenharia aplicada.',
      members: [
        {
          name: 'Mateus Galasso',
          role: 'Fundador',
          bio: founderBio.pt,
          linkedin: contactChannels.founderLinkedin,
          github: 'https://github.com/mateusgalasso',
          avatar: mateusHeadshot,
        },
        {
          name: 'Brett Humphreys',
          role: 'Senior Full Cycle Developer',
          credentials: 'Veteran-owned · TS/SCI cleared',
          bio: 'Major reformado do Exército dos EUA e engenheiro de software sênior. Lidera arquitetura de frontend e produto em campo; constrói com Vue, Flutter e Go. Membro do conselho da Homeland Security Foundation of America. Mais de 20 anos de liderança e entrega, do comando a aplicações em produção.',
          linkedin: 'https://www.linkedin.com/in/humphreysbrett/',
          github: 'https://github.com/radiancelux',
          avatar: brettHeadshot,
        },
      ],
    },
    skillsPage: {
      tag: 'Stack',
      title: 'Capacidade técnica para construir, estabilizar e escalar.',
      intro: 'Escolhemos ferramentas pela manutenção, pela performance e pela aderência ao contexto do cliente.',
      groups: [
        {
          title: 'Frontend',
          points: [
            'Vue 3 + TypeScript com arquitetura de componentes escalável',
            'Interfaces responsivas com foco em clareza de uso',
            'Performance e acessibilidade como requisitos de entrega',
          ],
        },
        {
          title: 'Backend',
          points: [
            'Laravel para APIs, jobs assíncronos e integrações',
            'Modelagem de dados orientada à evolução do produto',
            'Padrões de erro, logs e testes para confiabilidade operacional',
          ],
        },
        {
          title: 'Cloud e DevOps',
          points: [
            'Ambientes em contêiner e pipelines de release',
            'Monitoramento e observabilidade orientados a incidentes',
            'Experiência com AWS, Azure e DigitalOcean',
          ],
        },
      ],
    },
    philosophyPage: {
      tag: 'Filosofia',
      title: 'Princípios que sustentam uma entrega previsível.',
      intro: 'Menos improviso e mais clareza para transformar escopo em software funcionando.',
      principles: [
        {
          title: 'Contexto antes de código',
          body: 'Toda iniciativa começa por objetivos, restrições e critério de sucesso.',
        },
        {
          title: 'Incrementos pequenos, risco menor',
          body: 'Entregas em ciclos curtos para validar a direção com frequência.',
        },
        {
          title: 'Tradeoffs explícitos',
          body: 'Custo, complexidade e prazo são discutidos antes de decidir o caminho técnico.',
        },
        {
          title: 'Qualidade que suporta crescimento',
          body: 'Arquitetura e padrões que reduzem retrabalho nas evoluções futuras.',
        },
      ],
    },
    contactPage: {
      tag: 'Contato',
      title: 'Receba um diagnóstico técnico inicial do seu projeto.',
      intro: 'Preencha o formulário com contexto, desafio e objetivo. Respondemos com o próximo passo prático.',
      detailsTitle: 'Detalhes de contato',
      detailLabels: {
        email: 'E-mail',
        location: 'Localização',
        responseTime: 'Tempo de resposta',
      },
      quickTitle: 'Prefere conversar direto?',
      nextStep: 'Depois do envio, retornamos com uma avaliação inicial e uma sugestão de abordagem em até 1 dia útil.',
      formTitle: 'Formulário de diagnóstico',
      submitLabel: 'Enviar diagnóstico',
      sendingLabel: 'Enviando…',
      successMessage: 'Mensagem recebida. Vamos retornar com os próximos passos o mais rápido possível.',
      errorMessage: 'Não foi possível enviar agora. Tente novamente em alguns minutos.',
      validationMessage: 'Revise os campos destacados e tente novamente.',
      emailFallback: 'Prefere e-mail direto? Envie para',
      fields: {
        name: 'Nome',
        email: 'E-mail',
        company: 'Empresa',
        service: 'Tipo de serviço',
        budget: 'Prazo desejado',
        message: 'Contexto do projeto',
      },
      placeholders: {
        name: 'Seu nome completo',
        email: 'voce@empresa.com',
        company: 'Nome da empresa (opcional)',
        message: 'Descreva o problema, o objetivo e o prazo esperado.',
      },
      serviceOptions: ['Discovery + Arquitetura', 'Build de Módulo/Produto', 'Modernização e Escala', 'Consultoria técnica pontual'],
      budgetOptions: ['A definir', 'Flexível', 'Normal (2 a 3 meses)', 'Urgente (menos de 4 semanas)'],
    },
    footer: {
      tagline: 'Projetos B2B com clareza de escopo, execução sênior e entrega consistente.',
      elsewhere: 'Em outros lugares',
    },
    metadata: {
      home: {
        title: 'ForEachCode | Desenvolvimento de software B2B',
        description: 'Projetos de software para SaaS B2B e PMEs com escopo fechado, execução sênior e entrega previsível. Pagamentos, Laravel e AWS.',
        ogTitle: 'ForEachCode | Desenvolvimento de software B2B',
        ogDescription: 'Produtos web, APIs e modernização de sistemas com foco em resultado de negócio.',
      },
      services: {
        title: 'Serviços e pacotes | ForEachCode',
        description: 'Pacotes de discovery, build e modernização com prazo estimado, montagem de escopo pelo WhatsApp e perguntas frequentes.',
        ogTitle: 'Serviços de engenharia | ForEachCode',
        ogDescription: 'Escopo fechado, entregas incrementais e suporte técnico sênior para produtos B2B.',
      },
      work: {
        title: 'Cases | ForEachCode',
        description: 'Cases com código real: Synopay (PDV cashless com RFID), backend de app social com assinaturas, comparador de preços com IA, plataforma de licenças e app em Rust.',
        ogTitle: 'Cases de software B2B | ForEachCode',
        ogDescription: 'Como resolvemos desafios de arquitetura, operação e escala.',
      },
      about: {
        title: 'Sobre | ForEachCode',
        description: 'Conheça a ForEachCode: time sênior, execução direta e foco em resultado de negócio.',
        ogTitle: 'Sobre a ForEachCode',
        ogDescription: 'Parceiro técnico para empresas que precisam de entrega com clareza e responsabilidade.',
      },
      team: {
        title: 'Time | ForEachCode',
        description: 'Liderança técnica sênior com responsabilidade ponta a ponta: pagamentos, AWS, IA e frontend.',
        ogTitle: 'Time sênior | ForEachCode',
        ogDescription: 'Quem lidera a arquitetura, a implementação e o handoff dos projetos.',
      },
      skills: {
        title: 'Stack técnico | ForEachCode',
        description: 'Capacidades técnicas em frontend, backend, cloud e DevOps para produtos digitais.',
        ogTitle: 'Stack técnico | ForEachCode',
        ogDescription: 'Ferramentas e práticas para construir software robusto e evolutivo.',
      },
      philosophy: {
        title: 'Filosofia | ForEachCode',
        description: 'Princípios de trabalho para reduzir risco e aumentar a previsibilidade em software.',
        ogTitle: 'Filosofia de entrega | ForEachCode',
        ogDescription: 'Decisões técnicas transparentes e execução orientada a valor.',
      },
      contact: {
        title: 'Contato | ForEachCode',
        description: 'Envie seu contexto ou chame no WhatsApp para receber um diagnóstico técnico inicial em até 1 dia útil.',
        ogTitle: 'Contato | ForEachCode',
        ogDescription: 'Comece a conversa sobre seu projeto com foco em escopo, prazo e resultado.',
      },
    },
  },
  en: {
    company: {
      shortName: 'ForEachCode',
      legalName: 'ForEachCode Software Studio',
      email: 'foreachcode@foreachcode.net',
      location: 'Remote',
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
      { slug: 'team', label: 'Team' },
      { slug: 'contact', label: 'Contact' },
    ],
    channels: {
      whatsappLabel: 'Message on WhatsApp',
      whatsappMessage: 'Hi! I found ForEachCode on the website and would like to talk about a project.',
      whatsappHint: 'No commitment: tell me the problem and I will say whether it makes sense to move forward.',
    },
    home: {
      badge: 'Software delivery for B2B SaaS and SMEs',
      title: 'Fixed-scope software projects with predictable delivery.',
      subtitle: 'Senior technical leadership and hands-on execution, specialized in payments, Laravel and AWS. From discovery to deployment, with clear priorities, timelines and cost.',
      primaryCta: 'Request a diagnosis',
      secondaryCta: 'View case studies',
      terminalTitle: 'foreachcode — project',
      terminal: [
        { kind: 'cmd', text: 'foreachcode diagnose --project your-saas' },
        { kind: 'out', text: 'reading context, constraints and deadline…' },
        { kind: 'ok', text: 'risks mapped · scope split into phases' },
        { kind: 'cmd', text: 'foreachcode plan --releases biweekly' },
        { kind: 'out', text: 'phase 1 discovery · phase 2 build · phase 3 handoff' },
        { kind: 'ok', text: 'roadmap with timeline per phase' },
        { kind: 'cmd', text: 'php artisan test --parallel' },
        { kind: 'ok', text: 'tests passing · critical flows covered' },
        { kind: 'cmd', text: 'foreachcode deploy --production' },
        { kind: 'ok', text: 'live · monitored · documented' },
      ],
      statsTitle: 'By the numbers',
      stats: [
        { value: 20, suffix: '+', label: 'years building software' },
        { value: 5, label: 'case studies backed by real code: 2 client projects, 3 own products' },
        { value: 1, label: 'business day to reply to a request' },
        { value: 2, label: 'working languages: English and Portuguese' },
      ],
      stackTitle: 'Everyday stack',
      casesTitle: 'Projects with real code behind them',
      casesBody: 'Projects where I wrote most of the code. Client projects are shown without names.',
      casesCta: 'See all 5 case studies',
      highlightsTitle: 'How the work runs, from day one to production.',
      highlights: [
        {
          title: 'Phased fixed scope',
          body: 'Work is planned in short increments with explicit risks and documented technical decisions.',
        },
        {
          title: 'Senior end-to-end execution',
          body: 'No handoff to junior teams: the same person who designs the solution drives implementation.',
        },
        {
          title: 'Operational quality first',
          body: 'Observability, testing and maintainable standards so the product can evolve safely.',
        },
      ],
      processTitle: 'Delivery workflow',
      processBody: 'Four steps, each with a timeline and a deliverable you can hold.',
      processDeliverable: 'Deliverable',
      processSteps: [
        { title: 'Technical diagnosis', duration: 'Short call + reply within 1 business day', deliverable: 'Problem read-out and recommended path' },
        { title: 'Scope and delivery plan', duration: '1 to 3 weeks', deliverable: 'Architecture, risks and roadmap with cost per phase' },
        { title: 'Iterative implementation', duration: '4 to 12 weeks', deliverable: 'Biweekly releases to a staging environment' },
        { title: 'Handoff and assisted evolution', duration: 'Ongoing', deliverable: 'Documentation, monitoring and post-launch support' },
      ],
      founder: {
        tag: 'Who runs your project',
        title: 'Mateus Galasso, founder',
        points: ['Payments & Stripe', 'AWS', 'AI in production', 'Laravel + Vue'],
        cta: 'Meet the team',
      },
      closing: {
        title: 'Stuck project or tight deadline?',
        body: 'Share the context. Within one business day you get a technical read-out and the next step.',
      },
    },
    servicesPage: {
      tag: 'Services',
      title: 'Delivery packages designed for momentum.',
      intro: 'Each package has a clear objective, practical scope and expected timeline so decisions stay fast.',
      priceLabel: 'Investment',
      priceNote: 'Pricing depends on scope and comes after the first conversation.',
      packages: [
        {
          title: 'Discovery + Architecture',
          idealFor: 'For teams facing technical bottlenecks, unclear priorities or uncertain solution direction.',
          timeline: 'Typical timeline: 1 to 3 weeks',
          priceFrom: 'On request',
          items: [
            'Architecture and risk diagnosis',
            'Prioritized technical roadmap',
            'Execution plan with explicit tradeoffs',
          ],
        },
        {
          title: 'Module or Product Build',
          idealFor: 'For critical product features, early-stage B2B MVPs or internal workflow modernization.',
          timeline: 'Typical timeline: 4 to 12 weeks',
          priceFrom: 'On request',
          items: [
            'Backend, frontend and integrations in one flow',
            'Incremental releases tied to business checkpoints',
            'Technical documentation and a quality baseline for long-term ownership',
          ],
        },
        {
          title: 'Modernization and Scale',
          idealFor: 'For legacy systems with high change cost and operational risk.',
          timeline: 'Typical timeline: 6 to 16 weeks',
          priceFrom: 'On request',
          items: [
            'Risk-driven refactoring',
            'Performance and reliability improvements',
            'Support for deployment, monitoring and continuous evolution',
          ],
        },
      ],
      cta: 'Request a diagnosis',
      simulator: {
        title: 'Shape your scope',
        intro: 'Tick what the project involves. The summary is ready to send on WhatsApp.',
        typeLabel: 'Project type',
        deadlineLabel: 'Timeline',
        extrasLabel: 'The project involves',
        types: ['One-off technical consulting', 'Discovery + Architecture', 'Module or Product Build', 'Modernization and Scale'],
        deadlines: ['Flexible', 'Normal (2 to 3 months)', 'Urgent (under 4 weeks)'],
        extras: ['Payments (Stripe, subscriptions, payouts)', 'AI or LLMs in production', 'Mobile app or API', 'Admin panel', 'Third-party integration', 'Legacy system migration'],
        resultLabel: 'Scope summary',
        summaryIntro: 'Hi! I found ForEachCode on the website. My scope:',
        note: 'No automatic price: pricing comes from the conversation, based on scope.',
        cta: 'Send summary on WhatsApp',
      },
      faq: {
        title: 'Frequently asked questions',
        items: [
          {
            q: 'Can you invoice as a company?',
            a: 'Yes. We contract as a legal entity and issue a service invoice.',
          },
          {
            q: 'Do you work with companies outside Brazil and bill in USD?',
            a: 'Yes. Clients abroad can sign in USD and pay by international wire transfer.',
          },
          {
            q: 'Will you sign an NDA before seeing the project?',
            a: 'Yes. If you prefer, we sign the NDA before the technical conversation.',
          },
          {
            q: 'Is there a warranty after delivery?',
            a: 'Defects found within 30 days after each phase is delivered are fixed at no cost.',
          },
          {
            q: 'Who writes the code?',
            a: 'The person who designs the solution also implements it. Nothing is handed off to a junior team.',
          },
        ],
      },
    },
    workPage: {
      tag: 'Work',
      title: 'Problem, solution, result.',
      intro: 'Two client projects and three own products. The product numbers come from each repository\'s code, not estimates.',
      labels: {
        problem: 'Problem',
        solution: 'Solution',
        result: 'What I did',
        stack: 'Stack',
        metrics: 'From the repo',
      },
      ownTitle: 'Own products',
      caseStudies: [
        {
          title: 'Synopay',
          kind: 'Cashless RFID-wristband POS for events and hospitality',
          status: 'Client · in production',
          problem: 'Bars, festivals and resorts needed to sell without cash or cards slowing the line: guests pay with a tap of their wristband, and staff need orders, balances and the kitchen in real time.',
          solution: 'A Laravel platform with a web POS, RFID wristbands with stored balance, a real-time kitchen display and order grid (Reverb), a Filament admin, an API for the mobile reader, and payments through Square, Stripe and CardKnox.',
          result: 'Lead developer: architecture, POS, wristband flow, payment integrations, spa booking and the hotel system (Opera) integration, plus deployment on Laravel Cloud.',
          stack: ['Laravel', 'Filament', 'Livewire', 'Octane', 'Reverb', 'Postgres', 'Stripe', 'Square'],
          metrics: [],
          image: {
            src: '/images/cases/synopay-pos.webp',
            cardSrc: '/images/cases/synopay-pos-card.webp',
            width: 1600,
            height: 1112,
            alt: 'Synopay POS screen with the product grid and a three-item order in the cart',
            caption: 'Real POS screen. The venue and operator names are blurred.',
          },
          gallery: [
            {
              src: '/images/cases/synopay-rfid.webp',
              width: 1600,
              height: 1112,
              alt: 'RFID wristband payment dialog waiting for a wristband scan',
              caption: 'Paying the order with the RFID wristband.',
            },
          ],
        },
        {
          title: 'Social app backend',
          kind: 'Real-time chat and app store subscriptions',
          status: 'Client',
          problem: 'A social app needed phone sign-in, location-based matching, time-limited chats and paid subscriptions on both the App Store and Google Play, all with real-time notifications.',
          solution: 'A Laravel API with real-time messaging (Reverb), Horizon queues, Apple and Google purchase validation, Firebase push, SMS and a Filament admin panel.',
          result: 'Wrote most of the backend: data model, app API, subscriptions on both stores, notifications and the operations panel.',
          stack: ['Laravel', 'Octane', 'Reverb', 'Horizon', 'Filament', 'Firebase', 'App Store API'],
          metrics: [],
        },
        {
          title: 'Carrinho Inteligente',
          kind: 'Grocery price comparison',
          status: 'Own product · in development',
          own: true,
          problem: 'People doing their monthly grocery run cannot tell which store makes the whole list cheapest, or whether splitting it across two stores pays off.',
          solution: 'A shopping list that compares stores and shows the cheapest run in a single store or split across two. Prices come from tax receipts (NFC-e), shelf-label photos and flyers read with AI, plus scrapers for wholesale and retail chains.',
          result: 'Built from scratch: Postgres/PostGIS data model, AI price reading with Gemini through Prism, per-chain scrapers, recurring billing and an admin panel.',
          stack: ['Laravel', 'Inertia', 'Vue 3', 'PostGIS', 'Prism', 'Gemini', 'Filament'],
          metrics: [
            { label: 'Project started', value: '2025' },
            { label: 'Prices read from receipts, photos and flyers', value: 'AI' },
          ],
          image: {
            src: '/images/cases/carrinho-inteligente.webp',
            alt: 'Shopping list screen with four items and a ranking of the cheapest stores',
            caption: 'Real screen from the app in development, with test data.',
          },
        },
        {
          title: 'Lycento',
          kind: 'Payments and software licensing platform',
          status: 'Own product · paused',
          own: true,
          problem: 'Selling software through one-time payments or subscriptions and issuing API-validated licenses meant stitching together several separate tools.',
          solution: 'A multi-tenant platform in the style of Paddle/Lemon Squeezy: vendors set up products and pricing, get paid by Pix, card or subscription, and the API activates and validates licenses per device.',
          result: 'Architecture and implementation: vendor panel, customer portal, license API with JavaScript and Rust SDKs, and checkout with Stripe and AbacatePay.',
          stack: ['Laravel 12', 'Inertia', 'Vue 3', 'Stripe', 'AbacatePay', 'Rust SDK'],
          metrics: [],
        },
        {
          title: 'DevGen',
          kind: 'Offline test-data generator, open source',
          status: 'Own product · open source (MIT)',
          own: true,
          problem: 'Developers waste time hand-crafting valid Brazilian IDs (CPF, CNPJ, RG) and other data to test their systems.',
          solution: 'A macOS desktop app that generates valid Brazilian data offline: people, companies, documents and vehicles, ready to export for testing.',
          result: 'Zero to 1.0: a Tauri app with a Rust core, a Vue interface, CI with tests and a signed macOS build.',
          stack: ['Rust', 'Tauri 2', 'Vue 3', 'TypeScript'],
          metrics: [],
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
        'Our operating model emphasizes scope clarity, direct communication and accountability for production behavior.',
        'We work remotely with companies in Brazil and abroad, especially in B2B contexts where timelines and constraints are real.',
      ],
      pillars: [
        {
          title: 'Low-bureaucracy execution',
          body: 'Decisions are made quickly based on risk, impact and realistic delivery capacity.',
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
      intro: 'Delivery is led by Mateus Galasso and Brett Humphreys, combining product strategy and hands-on engineering.',
      members: [
        {
          name: 'Mateus Galasso',
          role: 'Founder',
          bio: founderBio.en,
          linkedin: contactChannels.founderLinkedin,
          github: 'https://github.com/mateusgalasso',
          avatar: mateusHeadshot,
        },
        {
          name: 'Brett Humphreys',
          role: 'Senior Full Cycle Developer',
          credentials: 'Veteran-owned · TS/SCI cleared',
          bio: 'Retired Army Major and senior software engineer. Leads frontend architecture and product in the wild; builds with Vue, Flutter and Go. Board member at Homeland Security Foundation of America. 20+ years of leadership and delivery, from command to production apps.',
          linkedin: 'https://www.linkedin.com/in/humphreysbrett/',
          github: 'https://github.com/radiancelux',
          avatar: brettHeadshot,
        },
      ],
    },
    skillsPage: {
      tag: 'Stack',
      title: 'Technical capability to build, stabilize and scale.',
      intro: 'Tooling decisions are guided by maintainability, performance and fit with business constraints.',
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
            'Laravel APIs, async jobs and system integrations',
            'Data modeling aligned with long-term product evolution',
            'Error handling, logging and testing for operational reliability',
          ],
        },
        {
          title: 'Cloud and DevOps',
          points: [
            'Containerized environments and release pipelines',
            'Monitoring and observability for incident response',
            'Hands-on experience with AWS, Azure and DigitalOcean',
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
          body: 'Every initiative starts with goals, constraints and a clear definition of success.',
        },
        {
          title: 'Small increments reduce risk',
          body: 'Short cycles keep progress visible and validate direction early.',
        },
        {
          title: 'Tradeoffs are explicit',
          body: 'Cost, complexity and timeline are discussed before any technical commitment.',
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
      intro: 'Share your context, constraints and expected outcomes. We reply with the most practical next step.',
      detailsTitle: 'Contact details',
      detailLabels: {
        email: 'Email',
        location: 'Location',
        responseTime: 'Response time',
      },
      quickTitle: 'Prefer to talk directly?',
      nextStep: 'After submission, you receive an initial assessment and a suggested approach within one business day.',
      formTitle: 'Project diagnosis form',
      submitLabel: 'Submit diagnosis',
      sendingLabel: 'Submitting…',
      successMessage: 'Message received. We will reach out soon with recommended next steps.',
      errorMessage: 'Unable to submit right now. Please try again in a few minutes.',
      validationMessage: 'Please review the highlighted fields and submit again.',
      emailFallback: 'Prefer direct email? Reach us at',
      fields: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        service: 'Service type',
        budget: 'Desired timeline',
        message: 'Project context',
      },
      placeholders: {
        name: 'Your full name',
        email: 'you@company.com',
        company: 'Company name (optional)',
        message: 'Describe the challenge, expected outcome and timeline.',
      },
      serviceOptions: ['Discovery + Architecture', 'Module/Product Build', 'Modernization and Scale', 'Targeted technical consulting'],
      budgetOptions: ['Undecided', 'Flexible', 'Normal (2 to 3 months)', 'Urgent (under 4 weeks)'],
    },
    footer: {
      tagline: 'B2B software projects with scope clarity, senior execution and consistent delivery.',
      elsewhere: 'Elsewhere',
    },
    metadata: {
      home: {
        title: 'ForEachCode | B2B Software Development Studio',
        description: 'Fixed-scope software projects for B2B SaaS and SMEs with senior execution and predictable delivery. Payments, Laravel and AWS.',
        ogTitle: 'ForEachCode | B2B Software Development',
        ogDescription: 'Web products, APIs and modernization work focused on measurable business outcomes.',
      },
      services: {
        title: 'Services and packages | ForEachCode',
        description: 'Discovery, build and modernization packages with timelines, a WhatsApp scope builder and FAQ.',
        ogTitle: 'Engineering services | ForEachCode',
        ogDescription: 'Fixed scope, incremental releases and senior technical ownership.',
      },
      work: {
        title: 'Work | ForEachCode',
        description: 'Case studies backed by real code: Synopay (a cashless RFID POS), a social app backend with subscriptions, an AI price comparison app, a licensing platform and a Rust app.',
        ogTitle: 'Case studies | ForEachCode',
        ogDescription: 'How ForEachCode solves architecture and delivery challenges in B2B software.',
      },
      about: {
        title: 'About | ForEachCode',
        description: 'Lean senior software studio focused on scope clarity, execution and accountability.',
        ogTitle: 'About ForEachCode',
        ogDescription: 'Technical partner for product teams that need speed and reliability.',
      },
      team: {
        title: 'Team | ForEachCode',
        description: 'Senior technical leadership with end-to-end accountability: payments, AWS, AI and frontend.',
        ogTitle: 'Team | ForEachCode',
        ogDescription: 'Who leads architecture, implementation and production handoff.',
      },
      skills: {
        title: 'Technical stack | ForEachCode',
        description: 'Frontend, backend, cloud and DevOps capabilities for modern product delivery.',
        ogTitle: 'Technical stack | ForEachCode',
        ogDescription: 'Technologies and practices used to build maintainable software systems.',
      },
      philosophy: {
        title: 'Principles | ForEachCode',
        description: 'Delivery principles built to reduce risk and improve software predictability.',
        ogTitle: 'Delivery principles | ForEachCode',
        ogDescription: 'Clear decision-making and transparent engineering tradeoffs.',
      },
      contact: {
        title: 'Contact | ForEachCode',
        description: 'Share your project context or message us on WhatsApp to get an initial technical diagnosis within one business day.',
        ogTitle: 'Contact ForEachCode',
        ogDescription: 'Start your project conversation with practical next steps.',
      },
    },
  },
}

export function whatsappHref(locale: Locale): string | null {
  if (contactChannels.whatsappNumber === '') {
    return null
  }

  const text = encodeURIComponent(content[locale].channels.whatsappMessage)

  return `https://wa.me/${contactChannels.whatsappNumber}?text=${text}`
}

// Link do WhatsApp com uma mensagem própria (ex.: resumo do escopo montado em Serviços).
export function whatsappMessageHref(message: string): string {
  return `https://wa.me/${contactChannels.whatsappNumber}?text=${encodeURIComponent(message)}`
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
