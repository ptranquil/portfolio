export const SITE = {
  name: 'Prashant Dwivedi',
  title: 'Software Engineer · Backend & Full Stack',
  email: 'prashant.dwivedi.45678@gmail.com',
  github: 'https://github.com/ptranquil',
  linkedin: 'https://linkedin.com/in/prashantpdwivedi',
  resumeUrl: '/portfolio/resume.pdf',
  collaborationMessage:
    'Open to senior engineering roles, enterprise platform work, and collaborations on scalable cloud-native systems.',
} as const

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'system-design', label: 'Engineering' },
  { id: 'contact', label: 'Contact' },
] as const

export const ROTATING_TITLES = [
  'Software Engineer',
  'Backend Engineer',
  'Full Stack Developer',
  'Cloud & Distributed Systems Engineer',
  'Node.js Developer',
] as const

export const HERO_TAGLINE = 'Senior full stack & backend engineering'
export const HERO_INTRO =
  'Building scalable cloud-native applications, distributed systems, and enterprise-grade backend architectures.'
export const HERO_INTRO_ALT =
  'Focused on scalable backend systems, cloud infrastructure, event-driven architecture, and high-performance applications.'

export const HERO_TECH_ICONS = [
  'Node.js',
  'TypeScript',
  'AWS',
  'Angular',
  'PostgreSQL',
  'Redis',
  'Docker',
] as const

export const STATS = [
  { label: 'Years in Production', value: 5, suffix: '+' },
  { label: 'Enterprise Engagements', value: 3, suffix: '' },
  { label: 'Cloud Platforms', value: 2, suffix: '' },
  { label: 'Stack Domains', value: 4, suffix: '' },
] as const

export const ABOUT_PILLARS = [
  {
    label: 'Enterprise Systems',
    desc: 'Modular platforms for large-scale client ecosystems and internal business applications.',
  },
  {
    label: 'Cloud-Native Delivery',
    desc: 'AWS, GCP/Firebase, serverless patterns, and multi-environment CI/CD pipelines.',
  },
  {
    label: 'API-First Architecture',
    desc: 'REST & GraphQL services designed for scalability, security, and cross-team integration.',
  },
  {
    label: 'AI-Assisted Engineering',
    desc: 'Cursor + Claude for development, review, testing, and docs — engineer-owned quality gates.',
  },
] as const

export const AI_ENGINEERING = {
  title: 'AI-Assisted Engineering',
  subtitle:
    'Human-in-the-loop workflow on the enterprise workforce & operations platform — accelerating delivery without compromising review, security, or production standards.',
  tools: ['Cursor', 'Claude'] as const,
  practices: [
    {
      area: 'Development',
      description:
        'Module scaffolding, API handlers, Angular/Ionic/React components, refactors, and boilerplate across the full stack.',
    },
    {
      area: 'Code review',
      description:
        'Pre-PR passes for edge cases, auth patterns, and consistency with team conventions — final approval always human.',
    },
    {
      area: 'Testing',
      description:
        'Cypress and unit test drafts, coverage ideas, and integration scenarios for Firebase, SQL, and GraphQL flows.',
    },
    {
      area: 'Documentation',
      description:
        'API notes, handoff docs, and internal runbooks — verified before sharing with cross-functional teams.',
    },
    {
      area: 'Debugging',
      description:
        'Faster root-cause analysis on sync issues, cloud integrations, and cross-platform defects.',
    },
  ],
  outcomes: [
    'Faster iteration on enterprise modules across web and mobile',
    'Shorter PR cycles with fewer post-review revision rounds',
    'More consistent patterns across APIs, auth flows, and shared services',
    'Quicker debugging on data sync and cloud integration issues',
    'Better test and documentation coverage with less manual overhead',
  ],
  guardrails:
    'No confidential client data in prompts · all AI output reviewed, tested, and owned by the engineer before merge.',
} as const

export const SKILL_CATEGORIES = {
  Backend: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'REST APIs', 'GraphQL'],
  Frontend: ['Angular', 'Ionic', 'React.js', 'TypeScript'],
  'Cloud & DevOps': ['AWS', 'GCP / Firebase', 'Docker', 'GitHub Actions', 'CI/CD', 'Firebase CLI'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'DynamoDB', 'Redis', 'BigQuery'],
  'Architecture & Systems': [
    'Microservices',
    'Event-Driven Architecture',
    'Distributed Systems',
    'Queue Systems',
    'Scalable API Design',
    'System Design',
  ],
  'Testing & Quality': ['Cypress', 'Jasmine', 'Karma', 'Unit Testing', 'Performance Optimization'],
} as const

export const PROJECTS = [
  {
    id: 'enterprise-platform',
    name: 'Enterprise Workforce & Operations Platform',
    tagline: 'Modular enterprise ecosystem · web & mobile',
    description:
      'Scalable enterprise applications spanning workforce operations, reporting systems, cloud integrations, and unified mobile/web modules — built for large-scale client ecosystems without exposing confidential client details.',
    tech: [
      'Angular',
      'Ionic',
      'React',
      'Node.js',
      'TypeScript',
      'Firebase',
      'Firestore',
      'BigQuery',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
      'GCP',
    ],
    features: [
      'API-driven modular architecture across enterprise domains',
      'Enterprise data synchronization & reporting workflows',
      'Secure authentication and authorization flows',
      'Mobile + web ecosystem with shared backend services',
      'Multi-environment deployments & CI/CD automation',
      'Cloud integrations across AWS and GCP/Firebase',
      'AI-assisted delivery with Cursor & Claude — development, review, tests, docs, debugging',
    ],
    architecture: [
      'Modular frontend (Angular / Ionic / React) → Node.js API layer',
      'Firestore & PostgreSQL for operational + relational data',
      'BigQuery for analytics & reporting pipelines',
      'Redis caching · Dockerized services · GitHub Actions CI/CD',
    ],
    challenges: [
      'Coordinating data consistency across Firebase, SQL, and analytics stores',
      'Designing secure RBAC-ready modules for enterprise user hierarchies',
      'Optimizing cross-platform performance for web and mobile clients',
    ],
    scale: 'Enterprise multi-module platform · cross-team delivery',
    gradient: 'from-indigo-500/25 via-violet-500/15 to-transparent',
    accent: '#818cf8',
    featured: true,
  },
  {
    id: 'serverless-migration',
    name: 'AWS Serverless Migration System',
    tagline: 'EC2 → Lambda production migration',
    description:
      'Migrated a production Node.js application from EC2 infrastructure to AWS Serverless — improving deployment velocity, scalability, and infrastructure efficiency.',
    tech: ['Node.js', 'AWS Lambda', 'API Gateway', 'Docker', 'ECR', 'CloudWatch', 'DynamoDB'],
    features: [
      'Lambda-based compute with API Gateway routing',
      'Docker + ECR container deployment pipeline',
      'CloudWatch monitoring & operational dashboards',
      'Reduced infrastructure costs & improved elasticity',
      'Faster, repeatable serverless deployments',
    ],
    architecture: [
      'API Gateway → Lambda functions → DynamoDB persistence',
      'Container images via ECR · environment-isolated stages',
      'CloudWatch logs, metrics, and alerting integration',
    ],
    challenges: [
      'Refactoring monolithic EC2 services into stateless Lambda units',
      'Maintaining backward-compatible APIs during phased migration',
      'Establishing observability parity with prior EC2 operations',
    ],
    scale: 'Production traffic · cost-optimized serverless footprint',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accent: '#22d3ee',
    featured: false,
  },
  {
    id: 'ondc-logistics',
    name: 'ONDC Logistics Platform',
    tagline: 'Order lifecycle · Beckn protocol integrations',
    description:
      'Logistics and order lifecycle management platform using ONDC and Beckn protocol integrations with queue-based distributed processing.',
    tech: ['Node.js', 'Express.js', 'RabbitMQ', 'Redis', 'Docker', 'MySQL', 'React.js'],
    features: [
      'Automated order lifecycle tracking end-to-end',
      'Queue-based async processing for operational workflows',
      'API integrations across logistics network participants',
      'Reduced manual errors through distributed automation',
    ],
    architecture: [
      'React dashboard → Express APIs → RabbitMQ task queues',
      'Redis for session & short-lived coordination state',
      'MySQL for transactional order & logistics records',
    ],
    challenges: [
      'Mapping Beckn/ONDC protocol flows to reliable internal state machines',
      'Handling retries and idempotency across external network callbacks',
    ],
    scale: 'High-volume order events · queue-orchestrated workers',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accent: '#34d399',
    featured: false,
  },
  {
    id: 'fleet-dashboard',
    name: 'Real-Time Tracking Dashboard',
    tagline: 'Industrial fleet conversion operations',
    description:
      'Real-time tracking and operational dashboard for industrial fleet conversion workflows — improving visibility, billing automation, and field efficiency.',
    tech: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Docker'],
    features: [
      'Live status tracking across conversion workflows',
      'Billing automation tied to operational milestones',
      'Data visualization for operations leadership',
      'Redis-backed caching for dashboard performance',
    ],
    architecture: [
      'React + TypeScript SPA → Node.js real-time API layer',
      'MongoDB for operational documents · Redis for hot paths',
      'Dockerized deployment for consistent environments',
    ],
    challenges: [
      'Sub-second dashboard updates across distributed field operations',
      'Aligning billing rules with dynamic workflow state transitions',
    ],
    scale: 'Real-time ops dashboard · multi-workflow tracking',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accent: '#fbbf24',
    featured: false,
  },
  {
    id: 'shopify-payments',
    name: 'Shopify Payment Application',
    tagline: 'Custom payment & refund workflows',
    description:
      'Custom Shopify payment integration platform enabling seamless payment flows, refund handling, and secure transaction processing within the Shopify ecosystem.',
    tech: ['PHP', 'Java', 'Shopify APIs', 'GraphQL', 'AWS EC2'],
    features: [
      'Shopify ecosystem payment integration',
      'GraphQL-driven merchant configuration APIs',
      'Secure transaction & refund workflow handling',
      'AWS EC2 hosted services for payment orchestration',
    ],
    architecture: [
      'Shopify App → GraphQL Admin API → payment service layer',
      'PHP/Java services on EC2 for transaction processing',
      'Audit-safe refund and settlement flows',
    ],
    challenges: [
      'Ensuring PCI-aware patterns within Shopify extension constraints',
      'Coordinating multi-language services for payment edge cases',
    ],
    scale: 'Merchant payment flows · Shopify App ecosystem',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    accent: '#fb7185',
    featured: false,
  },
] as const

export const EXPERIENCE = [
  {
    period: 'Jul 2025 — Present',
    role: 'Software Engineer',
    company: 'Rigved Infotech',
    current: true,
    featured: true,
    summary:
      'Building enterprise-grade applications for large-scale client ecosystems — internal business platforms, scalable application modules, and cloud-native integrations across web and mobile.',
    highlights: [
      'Enterprise-grade application development with modular architecture',
      'Scalable frontend + backend systems (Angular, Ionic, React, Node.js)',
      'API-driven design · REST & GraphQL · cross-team collaboration',
      'Cloud integrations on AWS & GCP/Firebase · Firestore · BigQuery',
      'Enterprise data synchronization, reporting systems, and analytics',
      'Authentication & authorization flows for secure enterprise access',
      'Performance optimization · multi-environment deployments · CI/CD',
      'Cursor + Claude across development, pre-PR review, testing, documentation, and debugging',
      'Human-in-the-loop: AI accelerates delivery; engineer owns review, tests, and production sign-off',
    ],
    achievements: [
      'Delivering production modules across enterprise workforce & operations domains',
      'Faster module iteration and PR turnaround on the enterprise platform',
      'Fewer post-review fix cycles through AI-assisted pre-PR quality passes',
      'Improving deployment reliability through GitHub Actions automation',
      'Supporting unified mobile + web ecosystems on shared backend services',
    ],
    techStack: [
      'Angular',
      'Ionic',
      'React',
      'Node.js',
      'TypeScript',
      'Firebase',
      'Firestore',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Docker',
      'AWS',
      'GCP',
      'BigQuery',
      'GitHub Actions',
      'Cypress',
      'REST',
      'GraphQL',
      'Cursor',
      'Claude',
    ],
  },
  {
    period: 'Feb 2024 — Jun 2025',
    role: 'Software Developer',
    company: 'Route Mobile Limited',
    current: false,
    featured: false,
    summary:
      'Microservices and AWS infrastructure engineering — serverless migration, RBAC, API optimization, and production observability.',
    highlights: [
      'Microservices architecture on AWS (Lambda, API Gateway, DynamoDB)',
      'Serverless migration from EC2 — Docker & ECR deployment pipelines',
      'RBAC systems and API security hardening',
      'CloudWatch monitoring and operational dashboards',
      'API performance tuning and request processing optimization',
    ],
    achievements: [
      'Reduced infrastructure costs through serverless elasticity',
      'Improved scalability and reduced end-to-end latency',
      'Enhanced observability and faster incident response',
    ],
    techStack: [
      'Node.js',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Docker',
      'ECR',
      'CloudWatch',
      'TypeScript',
    ],
  },
  {
    period: 'Apr 2021 — Jan 2024',
    role: 'Software Engineer',
    company: 'Synergy Technology Services Pvt Ltd',
    current: false,
    featured: false,
    summary:
      'API-centric backend systems and full stack delivery — microservices, database optimization, and client project leadership.',
    highlights: [
      'API-centric backend systems and microservices development',
      'Full stack delivery with database optimization & query tuning',
      'Client project leadership and cross-functional collaboration',
      'High availability systems and performance-focused engineering',
    ],
    achievements: [
      'Led delivery on multiple client-facing enterprise modules',
      'Improved query performance and backend response times',
      'Established reusable patterns for scalable API design',
    ],
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'React.js', 'TypeScript'],
  },
] as const

export const ENGINEERING_PRINCIPLES = [
  {
    title: 'Distributed Systems Thinking',
    description:
      'Design services for failure, partition tolerance, and independent scaling — not as a monolith that happens to run in the cloud.',
  },
  {
    title: 'Scalability-First Engineering',
    description:
      'Stateless APIs, horizontal worker pools, caching layers, and data stores chosen for access patterns — not convenience.',
  },
  {
    title: 'Event-Driven Architecture',
    description:
      'Decouple producers and consumers with queues and async workflows for resilience, elasticity, and clear domain boundaries.',
  },
  {
    title: 'Cloud-Native Operations',
    description:
      'Infrastructure as repeatable pipelines — CI/CD, observability, and environment parity from development to production.',
  },
  {
    title: 'Clean Modular Architecture',
    description:
      'Bounded modules, contract-first APIs, and separation of concerns that survive team growth and requirement change.',
  },
  {
    title: 'Production-Grade Mindset',
    description:
      'Security, monitoring, performance, and maintainability are part of the first design — not post-launch additions.',
  },
  {
    title: 'AI-Assisted, Engineer-Owned',
    description:
      'Cursor and Claude speed up scaffolding, review, and debugging — production quality stays with the engineer through tests, PR review, and secure prompt discipline.',
  },
] as const

export const ARCHITECTURE_FLOWS = [
  {
    id: 'enterprise-api',
    title: 'Enterprise API Flow',
    nodes: ['Client', 'Gateway', 'Services', 'Cache', 'Data'],
    description:
      'Modular API gateway routing to domain services with Redis caching and polyglot persistence (SQL + NoSQL + analytics).',
  },
  {
    id: 'event-driven',
    title: 'Event-Driven Pipeline',
    nodes: ['Producer', 'Broker', 'Workers', 'Processor', 'Store'],
    description:
      'Queue-based decoupling for async workflows — retries, dead-letter handling, and horizontally scaled consumers.',
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native Deploy',
    nodes: ['CI/CD', 'Build', 'Registry', 'Runtime', 'Monitor'],
    description:
      'Automated pipelines from commit to containerized or serverless runtime with integrated observability.',
  },
] as const
