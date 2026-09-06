export interface Project {
  title: string;
  duration: string;
  overview: string;
  features: string[];
  techStack: string[];
  deployment: {
    frontend: string;
    backend: string;
    database: string;
  };
  learnings: string[];
  liveLink?: string;
  githubLink?: string;
  /** "professional" = work project, "personal" = side/portfolio project */
  category?: "professional" | "personal";
  /** Headline bullet-point callouts shown prominently on the card */
  highlights?: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  coursework?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const personalInfo = {
  name: "Manush Patel",
  role: "Software Engineer Trainee | Full-Stack Developer",
  headline:
    "Software Engineer Trainee @ Aspire SoftServ | Full-Stack Developer | MERN Stack | AWS | Docker | CI/CD",
  location: "Ahmedabad, Gujarat, India",
  email: "manushpo7@gmail.com",
  linkedin: "https://www.linkedin.com/in/manush-patel-6b6033256/", // adjusted from short user link
  github: "https://github.com/manush-patelll",
  leetcode: "https://leetcode.com/manush_patel",
  summary:
    "I am a Software Engineer Trainee at Aspire SoftServ and a final-year Information Technology student at Ganpat University. My primary expertise lies in Full-Stack Development using React.js, Node.js, Express.js, and MongoDB. Alongside application development, I am actively exploring cloud computing, Docker, CI/CD pipelines, AWS services, and production-grade deployment practices. I enjoy solving complex problems, designing efficient backend systems, building scalable applications, and continuously improving my software engineering skills through real-world projects and hands-on learning.",
  about:
    "I am passionate about software development and problem-solving. I enjoy creating full-stack web applications that solve real-world problems and provide excellent user experiences. Currently, I am working as a Software Engineer Trainee at Aspire SoftServ, where I gain practical industry experience in modern software development workflows, collaborative development, cloud technologies, and scalable application design. Outside of development, I continuously improve my knowledge of algorithms, system design, DevOps practices, cloud computing, and emerging technologies.",
  tagline:
    "Building scalable web applications with modern technologies while continuously learning cloud, DevOps, and software engineering best practices.",
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Trainee",
    company: "Aspire SoftServ",
    duration: "February 2026 – Present",
    location: "Ahmedabad, Gujarat, India",
    type: "On-site",
    responsibilities: [
      "Developing and maintaining full-stack web applications.",
      "Building reusable frontend components using React.js.",
      "Designing and consuming REST APIs.",
      "Working with backend services and databases.",
      "Collaborating using Git and GitLab workflows.",
      "Learning and implementing AWS services.",
      "Working with Docker containers.",
      "Understanding CI/CD workflows and deployment processes.",
      "Participating in Agile software development practices.",
      "Debugging and resolving production issues.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Redux & Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "WebSockets (Socket.io)",
      "Firebase",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Authorization",
    ],
  },
  {
    category: "Databases & Caching",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker & Docker Compose",
      "CI/CD (GitHub Actions)",
      "Load Balancing & Clustering",
      "Linux",
      "Nginx",
    ],
  },
  {
    category: "Testing & Best Practices",
    skills: [
      "Testing (Jest, React Testing Library)",
      "Performance Optimization",
      "Security Best Practices",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C"],
  },
  {
    category: "Computer Science Fundamentals",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git & GitHub",
      "GitLab",
      "VS Code",
      "Codex",
      "GitHub Copilot",
      "Claude Code",
      "Postman",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Enterprise Library Management System",
    duration: "February 2026 – Present",
    category: "professional",
    overview:
      "An enterprise-grade library management system built at Aspire SoftServ with 40+ feature modules covering books, authors, magazines, publication houses, and HR operations. Developed with a production-ready tech stack including Next.js 15, TypeScript, MySQL, Sequelize, and AG Grid.",
    highlights: [
      "A library management system with 40+ feature modules (books, authors, magazines, publication houses, HR operations)",
      "Delivered multi-step JWT login flow and 40+ REST API endpoints",
      "Built custom AG Grid with right-click context menus, record locking/unlocking & keyboard shortcuts",
      "Optimized work-reports filter API to run 3× faster through query restructuring",
      "Implemented HR Operations modules (Leave, Work Reports, Employee records) with RBAC",
    ],
    features: [
      "Multi-step JWT Authentication",
      "40+ REST API Endpoints",
      "Books & Authors Module",
      "Magazines & Publications",
      "HR Operations (Leave Management)",
      "Work Reports",
      "Employee Records",
      "Role-Based Access Control",
      "Record Locking / Unlocking",
      "Custom AG Grid + Context Menus",
      "Keyboard Shortcuts",
      "Recursive Nested Forms",
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Redux Toolkit",
      "JWT",
      "AG Grid",
      "Docker",
      "GitLab CI/CD",
    ],
    deployment: {
      frontend: "Internal / GitLab CI",
      backend: "Docker + Node.js",
      database: "MySQL",
    },
    learnings: [
      "Enterprise Architecture",
      "Performance Optimization",
      "Complex Form Design",
      "Role-Based Authorization",
      "API Design at Scale",
      "AG Grid Customization",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "ShopSphere – Full-Stack E-Commerce Platform",
    duration: "2026",
    category: "professional",
    overview:
      "A production-grade full-stack e-commerce platform featuring cursor-based pagination, real-time order notifications, background job queues, JWT dual-token auth with RBAC, Redis-backed rate limiting, and a full CI/CD pipeline.",
    highlights: [
      "Designed cursor-based pagination with dynamic SQL filters + useInfiniteQuery on the client",
      "JWT dual-token auth (httpOnly cookies) with RBAC and Redis-backed tiered rate limiting",
      "Real-time order notifications via Socket.IO with JWT-authenticated handshakes & per-user rooms",
      "BullMQ background job queues for order confirmation and OTP emails",
      "Full CI/CD: GitHub Actions (lint, type-check, tests) + Dockerized multi-service stack",
    ],
    features: [
      "Cursor-Based Pagination",
      "JWT Dual-Token Auth",
      "RBAC Authorization",
      "Redis Rate Limiting",
      "Real-Time Notifications (Socket.IO)",
      "BullMQ Job Queues",
      "OTP Email System",
      "GitHub Actions CI/CD",
      "Dockerized Multi-Service Stack",
      "Nginx Reverse Proxy",
      "Health Checks",
      "pgAdmin",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "BullMQ",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    deployment: {
      frontend: "Docker + Nginx",
      backend: "Docker + Node.js",
      database: "PostgreSQL + Redis",
    },
    learnings: [
      "Cursor-Based Pagination",
      "Real-Time Architecture",
      "Background Job Queues",
      "Redis Caching & Rate Limiting",
      "CI/CD Automation",
      "Dockerized Microservices",
    ],
  },
  {
    title: "ConnectUs – Online Collaborative Platform",
    duration: "2024",
    category: "personal",
    overview:
      "A full-stack real-time collaboration tool built with Next.js and Node.js, featuring Socket.IO-powered chat, audio/video calls, TLDraw live collaborative whiteboarding, and secure Clerk authentication with third-party logins.",
    highlights: [
      "Built real-time chat and audio/video calls with Socket.IO",
      "Integrated TLDraw for live collaborative whiteboarding",
      "Implemented Clerk authentication with Google & GitHub OAuth and RBAC",
    ],
    features: [
      "Real-Time Chat (Socket.IO)",
      "Audio / Video Calls",
      "Live Collaborative Whiteboard (TLDraw)",
      "Clerk Authentication",
      "Google & GitHub OAuth",
      "Role-Based Access Control",
      "PostgreSQL Data Persistence",
      "Responsive UI",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.IO",
      "TLDraw",
      "Clerk",
      "TypeScript",
    ],
    deployment: {
      frontend: "Vercel",
      backend: "Node.js / Express",
      database: "PostgreSQL",
    },
    learnings: [
      "Real-Time Communication",
      "WebRTC & Audio/Video",
      "Collaborative Canvas (TLDraw)",
      "OAuth & Clerk Integration",
      "Full-Stack Next.js",
      "PostgreSQL Schema Design",
    ],
    githubLink: "https://github.com/manush-patelll",
  },
  {
    title: "CineSphere – Movie Ticket Booking Platform",
    duration: "January 2025 – April 2025",
    category: "personal",
    overview:
      "CineSphere is a full-stack movie ticket booking platform developed using the MERN stack. The application allows users to browse movies, select seats, book tickets, make secure payments, and manage bookings through an intuitive interface.",
    highlights: [
      "Full MERN stack with JWT auth and role-based authorization",
      "Interactive seat-selection UI and Razorpay payment integration",
      "Admin Dashboard for movie and booking management",
      "Deployed on Vercel + Render + MongoDB Atlas",
    ],
    features: [
      "JWT-based Authentication",
      "Role-Based Authorization (Admin/User)",
      "Interactive Seat Selection",
      "Razorpay Payment Integration",
      "Admin Dashboard",
      "Movie Management",
      "Showtime Management",
      "Booking History",
      "Responsive Design",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Razorpay",
      "Vercel",
      "Render",
    ],
    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "MongoDB Atlas",
    },
    learnings: [
      "Authentication and Authorization",
      "Payment Gateway Integration",
      "REST API Development",
      "Database Design",
      "Production Deployment",
      "Full-Stack Architecture",
    ],
    githubLink:
      "https://github.com/manush-patelll/CineSphere-movie-ticket-booking",
    liveLink: "https://cine-sphere-movie-ticket-booking.vercel.app/",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "Ganpat University",
    duration: "September 2022 – June 2026",
    grade: "8.11/10 CGPA",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution:
      "P. R. Patel Sarvodaya Vidhyalaya and B. M. Patel Higher Secondary School",
    duration: "June 2021 – May 2022",
    grade: "`75%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution:
      "P. R. Patel Sarvodaya Vidhyalaya and B. M. Patel Higher Secondary School",
    duration: "June 2019 – May 2020",
    grade: "75%",
  },
];

export const certifications: Certification[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "April 2026",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM",
    date: "August 2025",
  },
];

export const achievements: string[] = [
  "Built and deployed a complete MERN Stack application.",
  "Successfully integrated Razorpay payment gateway.",
  "Working professionally as a Software Engineer Trainee.",
  "Experience with AWS, Docker, and CI/CD practices.",
  "Strong foundation in Data Structures and Algorithms.",
  "Experience building scalable full-stack applications.",
];

export const currentlyLearning: {
  topic: string;
  details: string;
  progress: number;
}[] = [
  {
    topic: "AWS Cloud Services",
    details: "EC2, S3, RDS, IAM, and Serverless architectures",
    progress: 65,
  },
  {
    topic: "Docker & Containerization",
    details: "Containerizing MERN apps and multi-container orchestration",
    progress: 75,
  },
  {
    topic: "GitHub Actions & CI/CD Pipelines",
    details: "Automating builds, testing, and deployments",
    progress: 60,
  },
  {
    topic: "Nginx & Reverse Proxies",
    details: "Load balancing, SSL setup, and static file hosting",
    progress: 50,
  },
  {
    topic: "System Design",
    details: "High availability, scalability, caching, and database scaling",
    progress: 55,
  },
  {
    topic: "Microservices Fundamentals",
    details: "Decoupled service communication and APIs",
    progress: 40,
  },
];
