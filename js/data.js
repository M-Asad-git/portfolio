// =========================================================================
// MUHAMMAD ASAD - PORTFOLIO DATA CONFIGURATION
// =========================================================================

const PORTFOLIO_DATA = {
  profile: {
    name: "Muhammad Asad",
    title: "AI & Full-Stack Developer",
    subtitles: [
      "Open for Project-Based & Part-time Work",
      "Full-Stack Web Developer & Deployer",
      "Logo & Brand Identity Designer",
      "AI Automation & Bot Builder",
      "BS AI Undergraduate @ Emerson Multan"
    ],
    location: "Multan, Pakistan",
    email: "asadpgc125@gmail.com",
    phone: "03467042119",
    whatsapp: "https://wa.me/923467042119",
    github: "https://github.com/M-Asad-git",
    az25Github: "https://github.com/az25lab",
    linkedin: "https://www.linkedin.com/in/muhammad-asad-280450387",
    status: "Available for Project-Based Contracts & Part-time Roles",
    bio: "Passionate software engineer and 3rd-semester Artificial Intelligence undergraduate at Emerson University Multan. Building client web systems at TriTechTeal, designing custom brand logos, and creating AI automation bots at AZ25 Lab. Open to project-based client work, freelance web & logo design, custom automation tools, and part-time engineering roles.",
    metrics: [
      { label: "Live Client Platforms", value: "5+" },
      { label: "AI & Automation Bots", value: "3+" },
      { label: "Design & Web Sprints", value: "Full-Lifecycle" },
      { label: "Availability", value: "Project-Based / Part-time" }
    ]
  },

  services: [
    {
      id: "web-launch",
      title: "Full Website & DNS Launch",
      icon: "globe",
      badge: "Most Popular",
      desc: "End-to-end website development from initial concept to live deployment. Includes custom domain setup, DNS records (A/CNAME/MX), SSL certificates, and hosting on Verpex, cPanel, or Vercel.",
      deliverables: [
        "Responsive, mobile-first design with modern CSS & glassmorphism",
        "Custom domain & DNS configuration (Verpex, cPanel, Cloudflare)",
        "SEO meta tags, fast loading speeds & cross-browser compatibility",
        "Contact forms & instant WhatsApp inquiry integration"
      ],
      actionText: "Inquire for Website"
    },
    {
      id: "ai-bots",
      title: "Custom AI & Scraper Bots",
      icon: "bot",
      badge: "High Efficiency",
      desc: "Autonomous automation bots and scraping pipelines tailored to monitor job boards, extract portal data, and deliver real-time Slack webhook alerts and daily email summaries.",
      deliverables: [
        "Targeted web scrapers for LinkedIn, ATS platforms & portals",
        "Slack webhook bots for real-time priority notifications",
        "Automated daily email summaries delivered via SMTP",
        "Configurable keyword, role, and criteria filters"
      ],
      actionText: "Inquire for Automation"
    },
    {
      id: "brand-redesign",
      title: "Logo Design & Web Redesign",
      icon: "palette",
      badge: "Brand Makeover",
      desc: "Transforming legacy client websites into modern, sleek digital presences complete with custom vector logos, bespoke color palettes, and typography hierarchy.",
      deliverables: [
        "Custom vector brand logo (SVG, high-res PNG & favicons)",
        "Modern dark/light UI makeover with clean typography",
        "Performance cleanup, reducing bloat & boosting speed",
        "Cohesive brand color scheme & social share graphics"
      ],
      actionText: "Inquire for Redesign"
    }
  ],

  experience: [
    {
      id: "tritechteal-dev",
      role: "Part-time Web Developer",
      company: "TriTechTeal",
      companyUrl: "https://tritechteal.com/",
      period: "2024 — Present",
      type: "Part-time Role",
      badge: "Current Role",
      description: "Promoted from Web Development Intern to Part-time Web Developer. Responsible for developing and deploying production-ready client websites, responsive platforms, and web portals across healthcare, real estate, interior design, and international commerce.",
      highlights: [
        "Architected and deployed responsive client platforms including Global eTelerad, Teleradiology Partner, A-One Real Estate & Builder, A One Source Interior, and Brightexx.",
        "Optimized frontend loading speeds, structured SEO metadata, and cross-browser responsiveness.",
        "Collaborated closely with client stakeholders to translate design concepts into fast, modern web interfaces."
      ],
      technologies: ["Next.js", "React", "JavaScript (ES6+)", "HTML5 / CSS3", "SEO & Core Web Vitals", "Git / GitHub"]
    },
    {
      id: "tritechteal-intern",
      role: "Web Development Intern",
      company: "TriTechTeal",
      companyUrl: "https://tritechteal.com/",
      period: "2023 — 2024",
      type: "Internship",
      badge: "Completed",
      description: "Gained hands-on software agency experience building accessible UI components, client landing pages, and responsive layout systems.",
      highlights: [
        "Mastered frontend fundamentals, semantic markup, modern CSS layouts, and version control workflows.",
        "Assisted senior engineers with refactoring and deploying client website enhancements."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"]
    },
    {
      id: "az25lab-ai",
      role: "AI & Software Developer",
      company: "AZ25 Lab Organization",
      companyUrl: "https://az25lab.com/",
      period: "2024 — Present",
      type: "Core Member",
      badge: "Current Role",
      description: "Researching, engineering, and launching autonomous AI agents, web scrapers, intelligent assistants, and productivity tools aimed at making people's daily work easier.",
      highlights: [
        "Engineered the autonomous Remote Job Agent scraping ATS platforms and LinkedIn with custom skill filtering, Slack bot alerts, and daily email summaries.",
        "Developing conversational AI assistants and LLM-powered productivity workflows.",
        "Built responsive productivity web applications including the AZ25 Lab Todo Suite."
      ],
      technologies: ["Python", "AI Agents", "LLM APIs", "Web Scraping", "Slack API", "SMTP Automation"]
    },
    {
      id: "emerson-degree",
      role: "BS in Artificial Intelligence",
      company: "Emerson University Multan",
      companyUrl: "",
      period: "2025 — 2029 (Expected)",
      type: "Academic Degree",
      badge: "3rd Semester",
      description: "Pursuing a Bachelor of Science in Artificial Intelligence (2025 — 2029). Studying computational theory, machine learning mathematics, data structures, and intelligent autonomous systems.",
      highlights: [
        "Focusing on Machine Learning principles, Data Structures & Algorithms, and AI agent architectures.",
        "Active contributor to student technical discussions and developer communities."
      ],
      technologies: ["AI & Machine Learning", "Python", "Data Structures", "Linear Algebra", "Object-Oriented Programming"]
    }
  ],

  skillCategories: [
    {
      category: "End-to-End Web & Deployment",
      icon: "code",
      subtitle: "Independent Full-Lifecycle Delivery",
      description: "Building production websites from scratch, setting up DNS records, SSL, and deploying live on Verpex, cPanel, and cloud hosts.",
      badges: ["HTML5 / Modern CSS3", "JavaScript (ES6+)", "React & Next.js", "DNS & Domain Setup", "Verpex / cPanel Hosting", "SEO & Speed Optimization"]
    },
    {
      category: "Logo & Brand Identity Design",
      icon: "paint",
      subtitle: "Client Branding & Vector Assets",
      description: "Crafting bespoke company logos, vector brand iconography, and cohesive color/typography systems for client websites and portals.",
      badges: ["Custom Logo Design", "Vector SVG Branding", "Brand Color Schemes", "Typography Hierarchy", "Favicons & UI Assets", "Visual Consistency"]
    },
    {
      category: "AI Automation & Agentic Workflows",
      icon: "brain",
      subtitle: "AI-Assisted Rapid Engineering",
      description: "Leveraging modern AI copilots, scraping engines, and automation scripts to build functional remote job bots and productivity assistants.",
      badges: ["Autonomous AI Agents", "Web Scraping & Parsers", "Slack Webhook Bots", "Automated Email Digests", "LLM APIs & Prompting", "Python Automation"]
    },
    {
      category: "Mobile & Application Tools",
      icon: "server",
      subtitle: "Native Apps & Productivity Suites",
      description: "Developing native iOS task managers in Swift and client-side web productivity tools with persistent local storage.",
      badges: ["Swift (iOS Native)", "UIKit & SwiftUI Basics", "LocalStorage & State", "RESTful APIs", "JSON Data Pipelines", "Event-Driven UI"]
    },
    {
      category: "Developer Tools & Collaboration",
      icon: "tools",
      subtitle: "Modern Workflow & Source Control",
      description: "Managing codebases on Git/GitHub, deploying to GitHub Pages, and actively studying BS Artificial Intelligence at Emerson University.",
      badges: ["Git & GitHub", "GitHub Pages Hosting", "VS Code & Tooling", "cPanel Management", "Command Line / Bash", "BS AI (Academic)"]
    }
  ],

  projects: [
    {
      id: "remote-job-agent",
      title: "Remote Job Agent & Bot",
      category: "ai",
      categoryLabel: "AI & Automation",
      subtitle: "Autonomous job hunter & multi-platform alert agent",
      featured: true,
      badge: "Private Repository",
      image: "assets/images/project-job-agent.svg",
      description: "An intelligent autonomous agent that scans multiple remote job boards, LinkedIn listings, and corporate ATS platforms. Matches opportunities against custom developer profiles and requirements, and broadcasts real-time alerts via Slack and daily email digests. (Codebase currently private/under active internal development).",
      impact: "Automates repetitive job searching with hourly scraping, criteria matching, Slack webhook alerts, and daily email digests.",
      features: [
        "Multi-source web scraping engine tailored for LinkedIn and modern ATS job boards",
        "Configurable profile-based filtering (roles, tech stacks, salary thresholds, remote regions)",
        "Slack webhook bot integration for instant high-priority notifications",
        "Automated daily email digests sending curated lists of new openings directly to subscribers",
        "Private internal repository engineered with modular agent architecture"
      ],
      techStack: ["Python", "AI Agents", "Web Scraping", "Slack API", "SMTP Automation", "Private Codebase"],
      githubUrl: null,
      liveUrl: null,
      stats: { "Repository": "Private / Internal", "Alerts": "Real-time Slack", "Digests": "Daily Automated" }
    },
    {
      id: "global-etelerad",
      title: "Global eTeleradiology Platform",
      category: "web",
      categoryLabel: "Healthcare Web Portal",
      subtitle: "Enterprise diagnostic teleradiology & telemedicine portal",
      featured: true,
      badge: "Live Client Website",
      image: "assets/images/project-globaletelerad.png",
      description: "A high-performance diagnostic teleradiology web portal engineered for global medical networks. Facilitates 24/7 remote radiology reporting, emergency diagnostic consultations, and clinical collaboration with high uptime.",
      impact: "Live production portal providing healthcare providers with a sleek, responsive interface to coordinate critical medical imaging interpretations.",
      features: [
        "Clean, healthcare-grade UI optimized for clinical workflows and fast responsiveness",
        "Comprehensive service breakdowns for emergency, subspecialty, and second-opinion teleradiology",
        "Interactive inquiry, quote estimation, and partnership consultation workflows",
        "Cross-device mobile and desktop optimization with high-speed asset delivery"
      ],
      techStack: ["Next.js / React", "JavaScript (ES6+)", "Responsive UI", "Healthcare IT UX", "SEO Optimization"],
      githubUrl: null,
      liveUrl: "https://globaletelerad.com/",
      stats: { "Status": "Live Online", "Industry": "Telemedicine", "Speed Score": "High Performance" }
    },
    {
      id: "telerad-partner",
      title: "Teleradiology Partner Portal",
      category: "web",
      categoryLabel: "Healthcare Web Portal",
      subtitle: "Remote diagnostic imaging and hospital partnership network",
      featured: true,
      badge: "Live Client Website",
      image: "assets/images/project-teleradpartner.png",
      description: "Enterprise web presence for remote radiology services and hospital diagnostic outsourcing. Designed with an ultra-accessible interface, detailed clinical capabilities, and quick practitioner inquiry tools.",
      impact: "Live website streamlining the onboarding of new hospital partners and medical imaging centers needing remote subspecialty coverage.",
      features: [
        "Intuitive navigation showcasing specialized modalities (MRI, CT, Ultrasound, X-Ray, Mammography)",
        "Instant inquiry & direct consultation booking for hospital administrators",
        "Fluid CSS animations, crisp typography, and high-contrast clinical design",
        "Complete mobile-first optimization and fast asset delivery"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Healthcare UI", "Performance Tuning"],
      githubUrl: null,
      liveUrl: "https://www.teleradpartner.com/",
      stats: { "Status": "Live Online", "Focus": "Clinical Partnerships", "Design": "Modern Clean" }
    },
    {
      id: "aone-source-interior",
      title: "A One Source Interior",
      category: "web",
      categoryLabel: "Creative Portfolio Web",
      subtitle: "Luxury interior design, architectural concepts & gallery",
      featured: true,
      badge: "Live Client Website",
      image: "assets/images/project-interior.png",
      description: "An elegant visual showcase and quote request portal for luxury interior architecture, residential transformations, and commercial space styling.",
      impact: "Live production website enabling prospective homeowners and corporate clients to explore project galleries and request bespoke consultations.",
      features: [
        "Immersive media galleries showcasing residential, corporate, and retail interior projects",
        "Custom design estimation request forms and quotation inquiries",
        "Ultra-smooth scroll animations, editorial typography, and high-fashion aesthetics",
        "Cross-browser performance optimization for heavy photography and visual assets"
      ],
      techStack: ["Modern CSS3", "JavaScript (ES6+)", "Interactive Galleries", "Responsive Layouts"],
      githubUrl: null,
      liveUrl: "https://aonesourceinterior.com/",
      stats: { "Status": "Live Online", "Aesthetics": "Luxury Interior", "Showcase": "Visual Portfolio" }
    },
    {
      id: "aone-real-estate",
      title: "A-One Real Estate & Builder",
      category: "web",
      categoryLabel: "Commercial Real Estate",
      subtitle: "Commercial developments, plots & builder portal",
      featured: true,
      badge: "Live Client Website",
      image: "assets/images/project-realestate.png",
      description: "Dynamic commercial real estate and construction portal highlighting ongoing development projects, premium residential plots, and building services.",
      impact: "Live website providing buyers and investors with project blueprints, plot details, and direct agent connection channels.",
      features: [
        "Categorized property showcase with location maps, feature lists, and plot inquiries",
        "Builder credentials, architectural construction timelines, and project galleries",
        "Integrated contact and appointment scheduling workflows",
        "Fast mobile loading times designed for real estate investors on the go"
      ],
      techStack: ["HTML5 / CSS3", "JavaScript", "Property Filters", "Mobile Optimization"],
      githubUrl: null,
      liveUrl: "https://aonerealestatebuilder.com/",
      stats: { "Status": "Live Online", "Category": "Property & Construction", "Features": "Listing Portal" }
    },
    {
      id: "brightexx-global",
      title: "Brightexx Global Commerce",
      category: "web",
      categoryLabel: "International Trade",
      subtitle: "Global manufacturing, export-import & B2B trading hub",
      featured: true,
      badge: "Live Client Website",
      image: "assets/images/project-brightexx.png",
      description: "International corporate presence and product catalog for Brightexx, facilitating cross-border trade, bulk supply inquiries, and commercial manufacturing partnerships.",
      impact: "Live website expanding the client's global reach with professional international business presentation and reliable customer inquiry channels.",
      features: [
        "Product catalog with detailed technical specifications and export classifications",
        "B2B quotation request forms with instant submission handling",
        "Multinational corporate styling with clean modern layout structures",
        "SEO optimization for global import/export search visibility"
      ],
      techStack: ["HTML5", "CSS3 Grid/Flexbox", "JavaScript", "B2B Catalog UX", "SEO"],
      githubUrl: null,
      liveUrl: "https://brightexx.com/",
      stats: { "Status": "Live Online", "Scope": "International B2B", "Catalog": "Multi-Category" }
    },
    {
      id: "az25lab-todo-web",
      title: "AZ25 Lab Web Todo App",
      category: "apps",
      categoryLabel: "Web Productivity App",
      subtitle: "Fast, responsive task & workflow management tool",
      featured: false,
      badge: "Private Repository",
      image: "assets/images/project-web-todo.svg",
      description: "A fast, intuitive task and workflow management web application developed for AZ25 Lab. Helps users manage daily goals, categorize priority items, and maintain steady productivity. (Private internal project).",
      impact: "Offers a lightweight, frictionless productivity interface with zero latency and instant client-side persistence.",
      features: [
        "Instant task creation, editing, status toggling, and priority tagging",
        "Filterable views (Active, Completed, Overdue, Priority levels)",
        "Persistent local state management ensuring zero data loss across sessions",
        "Clean, minimalist dark-mode-first aesthetic with smooth keyboard shortcuts"
      ],
      techStack: ["JavaScript (ES6+)", "CSS3 Glassmorphism", "LocalStorage API", "Event-Driven UI", "Private Codebase"],
      githubUrl: null,
      liveUrl: null,
      stats: { "Repository": "Private / Internal", "Latency": "Instant / 0ms", "State": "Persistent" }
    },
    {
      id: "ios-native-todo",
      title: "iOS Native Task Manager",
      category: "apps",
      categoryLabel: "Mobile iOS Application",
      subtitle: "Native Swift task management app with fluid iOS interactions",
      featured: false,
      badge: "Private Repo (iOS)",
      image: "assets/images/project-ios-todo.svg",
      description: "A native iOS application engineered in Swift, implementing Apple Human Interface Guidelines to provide smooth gesture-driven task management, local reminders, and list categorization. (Private Swift repository).",
      impact: "Demonstrates native mobile engineering and Swift development skills alongside web and AI systems.",
      features: [
        "Pure Swift native implementation with smooth 120Hz scrolling and haptic feedback",
        "Interactive swipe gestures for completion, deletion, and priority elevation",
        "Categorized list views with customizable tags and due dates",
        "Robust on-device data persistence using modern iOS storage patterns"
      ],
      techStack: ["Swift", "iOS Native SDK", "SwiftUI / UIKit", "Local Persistence", "Private Codebase"],
      githubUrl: null,
      liveUrl: null,
      stats: { "Repository": "Private Swift Repo", "Platform": "iOS Native", "Language": "Swift" }
    }
  ]
};
