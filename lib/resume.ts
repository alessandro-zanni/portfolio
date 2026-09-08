// Single source of truth for the portfolio. Mirrors CV-2026-07-20-EN.pdf.

export type Job = {
  role: string
  company: string
  location: string
  period: string
  blurb?: string
  bullets: string[]
  stack?: string[]
}

export type Project = {
  title: string
  subtitle: string
  bullets: string[]
  stack?: string[]
}

export type Link = {
  label: string
  href: string
  handle: string
}

// TODO(alessandro): GitHub URL is not in the CV — set your real profile here.
const GITHUB_URL = "https://github.com/alessandrozanni"

export const profile = {
  name: "Alessandro Zanni",
  title: "Full Stack Software Engineer",
  subtitle: "AI & Conversational Systems Specialist",
  location: "Barcelona, Spain",
  email: "azanni098@gmail.com",
  phone: "+39 333 743 4909",
  pitch:
    "Full Stack Software Engineer with 6+ years across web development and AI-powered systems. Currently at Heres, specializing in Generative AI and LLM integrations — designing conversational AI architectures, managing multi-channel chatbot platforms, and building scalable backend systems. Expert in React, Node.js, TypeScript, and cloud infrastructure (AWS, PostgreSQL). Comfortable moving between deep system design and cross-functional collaboration with product and non-technical stakeholders.",
  cv: "/alessandro-zanni-cv.pdf",
}

export const links: Link[] = [
  { label: "email", href: `mailto:${profile.email}`, handle: profile.email },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/alessandro-zanni-320262147",
    handle: "in/alessandro-zanni",
  },
  { label: "github", href: GITHUB_URL, handle: GITHUB_URL.replace("https://", "") },
]

export const experience: Job[] = [
  {
    role: "Software Engineer — Generative AI & LLM Integration",
    company: "Heres s.r.l.",
    location: "Bologna, Italy",
    period: "08/2021 – Present",
    blurb:
      "Leading AI-driven platform specializing in custom AI agents, conversational AI systems, and business automation.",
    bullets: [
      "Generative AI & LLM Development — designed and implemented integrations with large language models and AI frameworks, enhancing chatbot intelligence and conversational capabilities",
      "Conversational AI Architecture — architected and maintained scalable chatbot management systems handling real-time conversations across multiple channels (Telegram, WhatsApp, Facebook Messenger, Zendesk)",
      "Real-time Communication — implemented Socket.IO-based messaging infrastructure for end-to-end encrypted conversations and notification systems (PubNub)",
      "Enterprise Integrations — developed and maintained connectors and plugins for third-party APIs and internal systems, enabling seamless channel integration",
      "Full-stack Development — built React-based management consoles and Node.js backend services for AI agent orchestration",
      "Alexa Smart Properties Project — developed a management console for senior care facilities using Amazon Alexa devices (AWS partnership)",
      "Database Architecture — designed and optimized relational (MySQL, PostgreSQL) and non-relational (Firebase) database solutions for conversational data",
    ],
    stack: [
      "TypeScript",
      "React",
      "Vue.js",
      "Node.js",
      "Express",
      "Socket.IO",
      "AWS",
      "Firebase",
      "SQL",
      "REST APIs",
    ],
  },
  {
    role: "Frontend Developer — E-commerce & Web Applications",
    company: "SpotView S.r.l.",
    location: "Bologna, Italy",
    period: "09/2023 – 12/2024",
    blurb: "Headless e-commerce development for major retail clients.",
    bullets: [
      "Headless E-commerce Development — built responsive frontend applications for high-traffic e-commerce platforms (Tigotà, Pinalli)",
      "Component Architecture — developed reusable UI component libraries and maintained code quality across multiple projects",
      "Performance Optimization — implemented Next.js and React best practices for optimal page load times and SEO",
      "Custom Applications — developed and deployed custom web applications meeting specific business requirements",
    ],
    stack: ["TypeScript", "React", "Next.js", "HTML5", "Sass", "CSS3"],
  },
  {
    role: "Frontend Developer",
    company: "ICT-GROUP s.r.l.",
    location: "Reggio Emilia, Italy",
    period: "12/2020 – 07/2021",
    blurb: "Enterprise software and mobile application development.",
    bullets: [
      "Enterprise Systems Integration — integrated modules and added functionalities to company management systems (EGGS Next, EGGS HR)",
      "Cross-platform Mobile Development — developed iOS and Android applications using the Ionic Framework",
      "Authentication Systems — implemented Single Sign-On (SSO) integration for secure user authentication",
      "Client Requirements Analysis — evaluated and analyzed client requests, translating them into technical implementations",
    ],
    stack: ["TypeScript", "Angular", "Ionic", "HTML5", "CSS3", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Studio il Granello s.c.s.",
    location: "Correggio, Italy",
    period: "04/2018 – 12/2020",
    blurb: "Custom web development and digital solutions.",
    bullets: [
      "Full-stack Web Development — designed and developed 15+ complete website solutions from backend to frontend",
      "Web Customization — implemented UX enhancements and integrated custom functionalities with existing systems",
      "Business Applications — developed management systems and specialized software for diverse client requirements",
      "Mobile Applications — created iOS and Android applications (Ionic Framework)",
      "Client Relations — maintained direct communication with clients to understand needs and deliver tailored solutions",
    ],
    stack: ["PHP", "Vanilla JS", "Vue.js", "Angular", "Ionic", "HTML5", "CSS3", "SQL"],
  },
  {
    role: "Trainee Graphic Designer",
    company: "Graffo grafica adesiva s.n.c.",
    location: "Arceto di Scandiano, Italy",
    period: "11/2017 – 04/2018",
    blurb: "Print and digital design services.",
    bullets: [
      "Graphic Production — managed print design workflow including cutting, covering, and assembly",
      "Digital Design — created vector graphics and retouched images using Adobe Creative Suite (Illustrator, Photoshop)",
      "On-site Installation — coordinated installation of large-format graphics for commercial and residential projects",
    ],
  },
]

export const projects: Project[] = [
  {
    title: "CRM Platform for Electrical Materials Distributor",
    subtitle:
      "Custom business management system for offer and client management (B2B sales operations platform)",
    bullets: [
      "Built a modern web application enabling the sales team to manage client offers, quotations, and business workflows",
      "Full-stack development spanning responsive frontend (Next.js), backend APIs, and database architecture",
      "Integrated authentication and real-time data synchronization for concurrent user operations",
      "Deployed to production on Vercel with zero-downtime deployments",
    ],
    stack: ["Next.js", "React", "Node.js", "Supabase", "PostgreSQL", "Vercel", "TypeScript"],
  },
  {
    title: "Freelance Web Solutions",
    subtitle: "Responsive corporate and portfolio websites for multiple B2B and B2C clients",
    bullets: [
      "3+ production websites with custom integrations and SEO optimization",
      "Focus on responsive design, performance, and user experience",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "various backend frameworks"],
  },
  {
    title: "Infrastructure & Self-Hosting",
    subtitle: "Self-hosted solutions and DevOps infrastructure for personal projects and client systems",
    bullets: [
      "Docker containerization and orchestration for microservices and development environments",
      "Linux/Ubuntu server administration, system management, and deployment automation",
      "Self-hosted infrastructure setup and maintenance (monitoring, backups, security)",
      "CI/CD pipeline configuration and automated deployment workflows",
    ],
    stack: ["Docker", "Docker Compose", "Linux/Ubuntu", "CI/CD", "deployment automation"],
  },
]

export const education = [
  {
    title: "Academy Diploma in Advertising Graphics",
    school: "Scuola Internazionale di Comics",
    location: "Reggio Emilia, Italy",
    period: "10/2017 – 07/2018",
    note: "Specialized in visual communication, branding, typography, and graphic design principles (EQF Level 6).",
  },
  {
    title: "High School Diploma in Computer Science & Telecommunications",
    school: "I.I.S. Blaise Pascal",
    location: "Reggio Emilia, Italy",
    period: "09/2012 – 07/2017",
    note: "Technical degree with focus on computer science and information technology (EQF Level 5).",
  },
]

export const skills: { group: string; items: string }[] = [
  {
    group: "languages_frameworks",
    items: "JavaScript/TypeScript, React, Next.js, Vue.js, Angular, Node.js, Express",
  },
  { group: "databases", items: "PostgreSQL, MySQL, Firebase, MongoDB" },
  {
    group: "ai_conversational",
    items:
      "LLM integration, Generative AI frameworks, Conversational AI & chatbot development, N8N workflow automation",
  },
  { group: "realtime_cloud", items: "Socket.IO, PubNub, AWS, Vercel, Supabase, Docker" },
  {
    group: "design",
    items:
      "Adobe Creative Suite (Photoshop, Illustrator), UI/UX principles, responsive & mobile-first design",
  },
  { group: "tools_practices", items: "Git/GitHub, VS Code, JetBrains IDEs, Agile/Scrum" },
]

export const languages = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "B2" },
]
