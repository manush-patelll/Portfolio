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
  linkedin: "https://linkedin.com/in/manush-pat-6b6033256", // adjusted from short user link
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
      "JavaScript",
      "TypeScript",
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
      "REST APIs",
      "JWT Authentication",
      "Role-Based Authorization",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
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
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman"],
  },
];

export const projects: Project[] = [
  {
    title: "CineSphere – Movie Ticket Booking Platform",
    duration: "January 2025 – April 2025",
    overview:
      "CineSphere is a full-stack movie ticket booking platform developed using the MERN stack. The application allows users to browse movies, select seats, book tickets, make secure payments, and manage bookings through an intuitive interface.",
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
