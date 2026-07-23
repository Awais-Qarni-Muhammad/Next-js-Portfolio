export const profile = {
  name: "Muhammad Awais Qarni",
  title: "Senior .NET Backend Developer & Full-Stack Engineer",
  tagline:
    "Building enterprise-grade backend systems and full-stack applications — currently researching post-quantum cryptography at the intersection of software engineering and quantum computing.",
  location: "Germany",
  availability: "Open to fully remote roles worldwide",
  email: "official.qarni@gmail.com",
  phone: "+49 1573 6723815",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary:
    "Senior .NET Backend Developer and SQL Database Engineer with 5+ years of experience building enterprise-grade systems. Specialized in ASP.NET Core, C#, SQL Server optimization, and Azure cloud services. Proven track record delivering production systems for large organizations including the Pakistan Air Force. Currently pursuing an MSc in High Performance Computing & Quantum Computing at Technische Hochschule Deggendorf, Germany.",
};

export const skills = [
  {
    category: "Languages",
    items: ["C#", "T-SQL", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frameworks",
    items: [
      "ASP.NET Core",
      ".NET 6/7/8",
      "Angular",
      "AngularJS",
      "React",
      "Next.js",
      "Node.js",
      "Flask",
    ],
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "Git", "GitHub", "CI/CD Pipelines"],
  },
  {
    category: "Architecture",
    items: [
      "RESTful APIs",
      "CQRS",
      "Clean Architecture",
      "Dependency Injection",
      "Microservices",
    ],
  },
  {
    category: "Other",
    items: [
      "Redux",
      "Sass",
      "Material UI",
      "jQuery",
      "AI/ML Integration",
      "Unit & Integration Testing",
    ],
  },
];

export const experience = [
  {
    role: ".NET Backend Developer",
    company: "Genesis Engineering",
    location: "Islamabad, Pakistan (Remote)",
    period: "April 2024 – September 2025",
    points: [
      "Designed and delivered scalable .NET backend systems using ASP.NET Core and C#, achieving a 92% performance rating across production deployments.",
      "Optimized SQL Server and PostgreSQL databases through advanced stored procedures and query tuning, improving scalability by 88%.",
      "Refactored legacy codebase to clean architecture patterns, increasing backend durability and maintainability by 90%.",
      "Integrated RESTful APIs and collaborated with cross-functional teams to deliver production-ready solutions with 89% reliability.",
    ],
    stack: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "PostgreSQL",
      "REST APIs",
      "React",
      "Redux",
      "Sass",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Pakistan Air Force",
    location: "Islamabad, Pakistan",
    period: "January 2023 – March 2024",
    points: [
      "Developed scalable full-stack enterprise solutions using AngularJS and .NET frameworks, achieving 91% full-stack efficiency.",
      "Designed and integrated RESTful APIs for clean, efficient inter-system communication with 94% integration success rate.",
      "Optimized mission-critical databases using advanced SQL queries and stored procedures, achieving 90% query performance improvement.",
      "Applied AI/ML models to extract insights from complex medical datasets with 93% accuracy in data science tasks.",
      "Contributed to autonomous systems with real-time data processing and AI-driven automation logic.",
    ],
    stack: ["AngularJS", ".NET", "REST APIs", "SQL Server", "AI/ML", "Python"],
  },
  {
    role: "Full Stack Developer",
    company: "Online Shopping Platform",
    location: "Remote",
    period: "December 2022 – July 2023",
    points: [
      "Built scalable full-stack e-commerce applications using the MERN stack (MongoDB, Express, React, Node.js), achieving 90% performance benchmarks.",
      "Developed responsive, user-friendly UIs with Material UI, HTML, and jQuery, rated 92% for UI quality.",
      "Managed and evolved e-commerce platforms with real-time performance monitoring and version control via GitHub.",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Material UI",
      "jQuery",
    ],
  },
  {
    role: ".NET & SQL Developer Trainee",
    company: "Bitsol Technologies",
    location: "Rawalpindi, Pakistan",
    period: "October 2022 – March 2023",
    points: [
      "Built robust backend systems using ASP.NET Core and RESTful API architecture with 91% delivery quality.",
      "Designed and optimized SQL Server databases including stored procedures, indexing strategies, and schema design.",
      "Applied unit and integration testing frameworks to ensure production-ready, reliable .NET solutions with 92% test coverage.",
    ],
    stack: ["ASP.NET Core", "C#", "SQL Server", "REST APIs", "Unit Testing"],
  },
  {
    role: "Front End Developer Intern",
    company: "Teciga IT Services Pvt Ltd.",
    location: "Pakistan",
    period: "February 2020 – January 2021",
    points: [
      "Developed and practised core .NET and C# concepts including abstraction, encapsulation, inheritance, and polymorphism with 91% proficiency.",
      "Built small-scale backend modules using ASP.NET applying object-oriented design principles.",
      "Collaborated with senior developers on clean architecture and code structure best practices.",
    ],
    stack: ["C#", "ASP.NET", "OOP", "HTML", "CSS"],
  },
];

export const education = [
  {
    degree: "MSc in High Performance Computing & Quantum Computing",
    institution: "Technische Hochschule Deggendorf",
    location: "Deggendorf, Bavaria, Germany",
    period: "2024 – Present",
    note: "Thesis: Benchmarking post-quantum cryptographic algorithms",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Engineering and Technology, Taxila",
    location: "Pakistan",
    period: "September 2018 – August 2022",
    note: "",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: "In Development" | "Archived" | "Completed" | "Planned";
  frontend: string;
  backend: string;
  database: string;
  highlights: string[];
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "pqc-benchmark",
    title: "Post-Quantum Cryptography Benchmark Suite",
    description:
      "A research-grade tool that benchmarks lattice-based post-quantum algorithms (Kyber, Dilithium) against classical RSA/ECC — measuring key generation, signing, and verification performance across parameter sets. Built alongside my MSc thesis work.",
    status: "In Development",
    frontend: "Next.js",
    backend: "Python (FastAPI)",
    database: "PostgreSQL",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",
    highlights: [
      "Runs live benchmarks against liboqs algorithm implementations",
      "Visualizes throughput, latency, and key-size trade-offs",
      "Exports comparison reports for research use",
    ],
  },
  {
    slug: "clinic-booking-saas",
    title: "Clinic Appointment Booking SaaS",
    
    description:
      "A multi-tenant appointment booking platform for clinics — patient scheduling, doctor availability, and admin dashboards, designed for the Pakistan healthcare market.",
    status: "Completed",
    frontend: "Angular",
    backend: "ASP.NET Core",
    database: "SQL Server",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",
    highlights: [
      "Multi-tenant architecture with per-clinic data isolation",
      "JWT authentication with role-based access (admin, doctor, patient)",
      "Conflict-free scheduling engine with cascading appointment rules",
    ],
  },
  {
    slug: "medical-insights-dashboard",
    title: "AI Medical Data Insights Dashboard",
    description:
      "A dashboard that applies ML models to structured medical datasets to surface trends and anomalies, inspired by data-science work on mission-critical health records.",
    status: "Completed",
    frontend: "React",
    backend: "Python (Flask)",
    database: "PostgreSQL",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "ML-driven anomaly detection on patient data trends",
      "Interactive charts for cohort-level insights",
      "Role-gated views for clinical vs administrative users",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full storefront-to-checkout e-commerce build with an admin panel for catalog and order management.",
    status: "Completed",
    frontend: "Next.js",
    backend: "Node.js (Express)",
    database: "MongoDB",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "Cart, checkout, and order-tracking flows",
      "Admin panel for product and inventory management",
      "Server-rendered product pages for SEO",
    ],
  },
  {
    slug: "warehouse-management",
    title: "Inventory & Warehouse Management System",
    description:
      "A backend-heavy system for tracking stock levels, warehouse locations, and shipment reconciliation with reporting for operations teams.",
    status: "Completed",
    frontend: "Angular",
    backend: "ASP.NET Core",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    database: "SQL Server",
    highlights: [
      "Real-time stock-level tracking with low-stock alerts",
      "Stored-procedure-driven reporting for reconciliation",
      "Barcode-ready SKU lookup workflow",
    ],
  },
  {
    slug: "smart-home-iot",
    title: "Smart Home IoT Dashboard",
    description:
      "A real-time smart home control dashboard — live thermostat drift, motion/door sensor events, and automation rules, pushed from an ASP.NET Core + SignalR backend to a glass-UI frontend over WebSockets.",
    status: "In Development",
    frontend: "Next.js",
    backend: "ASP.NET Core (SignalR)",
    database: "SQL Server",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/smart-home-iot-suite",
    highlights: [
      "Real-time device state pushed live over WebSockets (SignalR)",
      "Background service simulates sensor drift and evaluates automation rules",
      "Toggle lights and thermostats with changes reflected instantly",
    ],
  },
  {
    slug: "realtime-collab",
    title: "Real-Time Collaboration & Chat App",
    description:
      "A team messaging tool with live presence, channels, and threaded conversations, built to explore real-time architecture patterns.",
    status: "Completed",
    frontend: "React",
    backend: "Node.js (Express + Socket.IO)",
    database: "MongoDB",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "WebSocket-based live messaging and presence indicators",
      "Threaded replies and channel-based organization",
      "Optimistic UI updates for instant message feedback",
    ],
  },
  {
    slug: "hr-management",
    title: "HR & Employee Management System",
    description:
      "An internal tool for managing employee records, leave requests, and role-based permissions across departments.",
    status: "Completed",
    frontend: "Angular",
    backend: "ASP.NET Core",
    database: "SQL Server",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "Leave-request workflow with manager approval chains",
      "Role-based access control across departments",
      "Audit-logged record changes for compliance",
    ],
  },
  {
    slug: "food-ordering",
    title: "Food Ordering Platform",
    description:
      "A restaurant ordering platform with live menus, order tracking, and an admin dashboard — built on the same concept as a KFC Pakistan-style ordering site.",
    status: "Completed",
    frontend: "Next.js",
    backend: "Node.js (Express)",
    database: "MongoDB",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "Dynamic menu with combo/deal configuration",
      "Live order-status tracking for customers",
      "Admin dashboard for daily order volume",
    ],
  },
  {
    slug: "product-analytics",
    title: "Product Analytics Dashboard",
    description:
      "A metrics dashboard that pulls product and sales data into exportable, filterable reports for business stakeholders.",
    status: "Completed",
    frontend: "React",
    backend: "Python (FastAPI)",
    database: "MySQL",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "Filterable charts across time range, category, and region",
      "CSV/PDF export for stakeholder reporting",
      "Query-optimized aggregation for large datasets",
    ],
  },
  {
    slug: "freelance-marketplace",
    title: "Freelance Job Marketplace",
    description:
      "A mini Upwork-style marketplace connecting clients and freelancers, with job postings, proposals, and in-platform messaging.",
    status: "Completed",
    frontend: "Next.js",
    backend: "ASP.NET Core",
    database: "SQL Server",
    repoUrl: "https://github.com/Awais-Qarni-Muhammad/clinic-booking-suite",

    highlights: [
      "Job posting and proposal-bidding workflow",
      "In-platform messaging between clients and freelancers",
      "Escrow-style milestone tracking (simulated)",
    ],
  },
];
