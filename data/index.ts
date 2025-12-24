export const DATA = {
  home: {
    hero: {
      name: "Tushar Kumar",
      title: "Polymathic Technologist · Systems Builder · Entrepreneur",
      subtitle:
        "I design, build, and scale systems across software, AI, design, psychology, and digital growth — from idea to execution.",
    },

    skills: {
      sectionTitle: "Domains of Capability",
      sectionDescription:
        "A multi-domain operating stack spanning technology, intelligence, design, growth, and human behavior.",
      overview: [
        {
          name: "Full-Stack Engineering",
          level: 92,
          icon: "lucide:code",
          color: "primary",
        },
        {
          name: "AI Systems & Automation",
          level: 90,
          icon: "lucide:cpu",
          color: "secondary",
        },
        {
          name: "Digital Marketing & Growth",
          level: 88,
          icon: "lucide:trending-up",
          color: "success",
        },
        {
          name: "UI/UX, Motion & Visual Design",
          level: 90,
          icon: "lucide:layout-dashboard",
          color: "warning",
        },
      ],
    },

    testimonials: {
      sectionTitle: "Outcomes & Collaboration",
      sectionDescription:
        "Results across startups, products, and growth systems",
      items: [
        {
          id: 1,
          name: "Startup Founder",
          role: "E-commerce & SaaS",
          content:
            "Built and scaled systems covering product, growth, and automation. Strong ability to think end-to-end rather than in silos.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
        {
          id: 2,
          name: "Marketing Client",
          role: "Digital Brand",
          content:
            "SEO, content, and automation pipelines dramatically reduced manual workload while improving reach and conversions.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
        },
      ],
    },
  },

  about: {
    profile: {
      name: "Tushar Kumar",
      title: "Polymathic Systems Builder",
      image: "",
      description: [
        "I operate as a multipotentialite — not by juggling interests, but by integrating them. My work spans software engineering, AI automation, digital marketing, design, psychology, and business systems.",
        "I focus on building leverage: automation over repetition, systems over hacks, insight over noise. Whether it’s an AI pipeline, a SaaS product, or a marketing engine, my approach is structural and outcome-driven.",
        "I lean strongly toward entrepreneurship. I have built and worked on multiple startups — including e-commerce ventures, digital marketing agencies, product-based businesses, and SaaS platforms — often owning both the technical and growth layers.",
      ],
    },

    education: [
      {
        title: "Self-Directed Multidisciplinary Study",
        date: "Ongoing",
        icon: "mdi:brain",
        description:
          "Independent study across mathematics, computer science, AI systems, psychology, behavioral science, marketing, and design. Focused on first-principles thinking and cross-domain synthesis rather than linear specialization.",
      },
    ],

    experience: [
      {
        title: "Founder / Entrepreneur",
        date: "Multiple ventures",
        icon: "mdi:rocket-launch",
        description:
          "Founded and operated startups across e-commerce, digital marketing agencies, SaaS platforms, and product-based businesses. Handled product architecture, growth strategy, automation, and execution.",
      },
      {
        title: "AI & Automation Engineer",
        date: "Recent",
        icon: "mdi:robot",
        description:
          "Designed AI automation pipelines using APIs, workflows, and custom logic to streamline operations, content generation, analytics, and customer interaction.",
      },
      {
        title: "Full-Stack Developer & Designer",
        date: "Ongoing",
        icon: "mdi:code-tags",
        description:
          "Built full-stack applications, dashboards, and internal tools with a focus on performance, clarity, and scalability. Combined engineering with UX, motion, and visual systems.",
      },
      {
        title: "Digital Marketer & Growth Strategist",
        date: "Ongoing",
        icon: "mdi:chart-line",
        description:
          "Worked across SEO, content systems, video funnels, branding, and conversion optimization. Designed growth systems rather than isolated campaigns.",
      },
    ],

    technologies: {
      frontend: {
        description:
          "Interactive, high-performance interfaces with strong design logic.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
        ],
      },

      backend: {
        description:
          "Scalable APIs, databases, and system logic.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Python", icon: "logos:python" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "MySQL", icon: "logos:mysql-icon" },
        ],
      },

      aiSystems: {
        description:
          "AI automation, intelligent workflows, and applied machine intelligence.",
        tools: [
          { name: "OpenAI APIs", icon: "simple-icons:openai" },
          { name: "AI Automation Pipelines", icon: "mdi:robot-outline" },
          { name: "Prompt Engineering", icon: "mdi:message-text-outline" },
        ],
      },

      digitalMarketing: {
        description:
          "Growth systems spanning SEO, content, branding, and funnels.",
        tools: [
          { name: "SEO", icon: "mdi:magnify" },
          { name: "Content Strategy", icon: "mdi:content-copy" },
          { name: "Analytics", icon: "mdi:google-analytics" },
          { name: "Funnel Design", icon: "mdi:filter" },
        ],
      },

      design: {
        description:
          "Visual systems, branding, and motion design.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Photoshop", icon: "logos:adobe-photoshop" },
          { name: "Illustrator", icon: "logos:adobe-illustrator" },
          { name: "After Effects", icon: "logos:adobe-after-effects" },
          { name: "Premiere Pro", icon: "logos:adobe-premiere" },
          { name: "Blender", icon: "logos:blender" },
        ],
      },

      psychology: {
        description:
          "Understanding human behavior, persuasion, and decision-making.",
        tools: [
          { name: "Behavioral Psychology", icon: "mdi:account-search" },
          { name: "Persuasion Systems", icon: "mdi:brain" },
          { name: "User Behavior Analysis", icon: "mdi:chart-box" },
        ],
      },
    },
  },

  projects: {
    sectionTitle: "Projects & Ventures",
    sectionDescription:
      "A mix of products, systems, startups, and experiments across domains.",
    work: [
      {
        id: 1,
        title: "AI Automation Pipelines",
        description: "End-to-end automation systems using AI APIs.",
        category: "AI Systems",
        details: "Designed and implemented automation pipelines for content generation, data processing, lead handling, and operational efficiency using AI models and workflow orchestration.",
        github: "https://github.com",
        image: "/projects/ai-automation.jpg",
        gallery: ["/projects/ai-automation-1.jpg", "/projects/ai-automation-2.jpg"],
        tech: [
          { name: "Next.js", icon: "mdi:react" },
          { name: "OpenAI", icon: "mdi:robot" },
        ],
      },
      {
        id: 2,
        title: "E-commerce Startups",
        description: "Product, growth, and operations ownership.",
        category: "Entrepreneurship",
        details: "Built and scaled e-commerce ventures handling product sourcing, branding, marketing funnels, and technical infrastructure.",
        github: "https://github.com",
        image: "/projects/ecommerce.jpg",
        gallery: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
        tech: [
          { name: "Shopify", icon: "mdi:shopify" },
          { name: "React", icon: "mdi:react" },
        ],
      },
      {
        id: 3,
        title: "SaaS & Product Platforms",
        description: "Software products with subscription and automation layers.",
        category: "SaaS",
        details: "Developed SaaS platforms combining full-stack engineering, UX design, billing systems, and growth mechanics.",
        github: "https://github.com",
        image: "/projects/saas-platform.jpg",
        gallery: ["/projects/saas-platform-1.jpg", "/projects/saas-platform-2.jpg"],
        tech: [
          { name: "TypeScript", icon: "mdi:language-typescript" },
          { name: "Stripe", icon: "mdi:credit-card" },
        ],
      },
      {
        id: 4,
        title: "Digital Marketing Agency Systems",
        description: "SEO, content, and automation-driven growth engines.",
        category: "Digital Marketing",
        details: "Created repeatable marketing systems integrating SEO, analytics, content, and automation for multiple clients and brands.",
        github: "https://github.com",
        image: "/projects/marketing-agency.jpg",
        gallery: ["/projects/marketing-agency-1.jpg", "/projects/marketing-agency-2.jpg"],
        tech: [
          { name: "Google Analytics", icon: "mdi:google-analytics" },
          { name: "SEO", icon: "mdi:magnify" },
        ],
      },
    ],
  },

  contact: {
    heading:
      "Interested in building systems, products, or businesses with depth and leverage?",
    location: {
      mapSrc: "",
      address: "",
    },
  },

  morphingTexts: {
    about: ["Polymathic", "Entrepreneurial", "Systems-Driven"],
    projects: ["Products", "Systems", "Ventures", "Experiments"],
    contact: ["Think", "Design", "Build", "Scale"],
  },

  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],

  footer: {
    name: "Tushar Kumar",
    description:
      "Building intelligent systems across technology, design, and business.",
    contact: {
      email: "tusharkumarcompanies@yahoo.com",
      phone: "+91 8954798750",
      location: "Agra, Uttar Pradesh, India 282001",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/whitehat-tushar/", icon: "mdi:github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/tusharkumar9808/", icon: "mdi:linkedin" },
      { platform: "X", url: "https://x.com/whitehat_tushar/", icon: "simple-icons:x" },
    ],
    services: [
      "Full-Stack Engineering",
      "AI Automation",
      "Digital Marketing Systems",
      "Product & Startup Strategy",
    ],
  },
} as const
