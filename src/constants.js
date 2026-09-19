// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import dockerLogo from './assets/tech_logo/vscode.png'; // fallback
import blinkitwebsite from './assets/tech_logo/Blinkitwebsite.jpg';

// Experience Section Logo's
import Techpile from './assets/company_logo/Techpile.jpg';
import Coreshield from './assets/company_logo/coreshield.png';
import TechMahindraLogo from './assets/company_logo/techmahindra.png';

// Education Section Logo's
import College from './assets/education_logo/College.jpg';
import School from './assets/education_logo/School.jpeg';

// Project Section Logo's
import insta from './assets/work_logo/instagram.jpg';
import recipe from './assets/work_logo/RecipeApp.png';
import expensetracker from './assets/work_logo/ExpenseTracker.jpg';
import valentine from './assets/work_logo/valentine.png';
import ecommercewebsite from './assets/work_logo/ecommercewebsite.jpg';
import ImageSearchwebsite from './assets/work_logo/searchimage.png';
import carrentel from "./assets/work_logo/car rentel.png";
import aiAttendance from './assets/work_logo/AI-attendace.png';


export const SkillsInfo = [
  {
    title: 'Core Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
    ],
  },
  {
    title: 'Frameworks & Runtime',
    skills: [
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Coreshield,
    role: "Software Development Engineer (SDE)-1",
    company: "Coreshield Technologies",
    date: "August 2025 – Present",
    desc: "Lead end-to-end development of production-grade web applications using React.js and Node.js. Architect scalable REST APIs and implement OWASP Top 10 security standards including XSS prevention and secure JWT authentication. Integrated Socket.IO for real-time data sync, reducing latency by 35%. Containerized services with Docker and applied Low Level Design (LLD) principles improving maintainability and reducing bug surface by 40%. Improved page performance by 25% through code splitting, lazy loading, and bundle optimization.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "REST APIs",
      "Docker",
      "JWT Auth",
      "OWASP Security",
      "LLD",
      "Performance Optimization",
    ],
    impact: [
      { metric: "25%", label: "Performance Gain" },
      { metric: "35%", label: "Latency Reduced" },
      { metric: "40%", label: "Bug Reduction" },
    ],
  },
  {
    id: 1,
    img: TechMahindraLogo,
    role: "Software Development Intern",
    company: "Tech Mahindra",
    date: "July 2025 – November 2025",
    desc: "Contributed to enterprise web application modules using React.js and JavaScript within an Agile SDLC. Collaborated with backend teams to integrate RESTful APIs ensuring seamless data flow across service boundaries. Participated in sprint planning, code reviews, and delivered production-ready features under senior developer mentorship. Followed industry-standard coding practices and Git workflow across distributed teams.",
    skills: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "Agile/Scrum",
      "Git",
      "GitHub",
      "Code Review",
    ],
    impact: [],
  },
  {
    id: 2,
    img: Techpile,
    role: "Python Full Stack Engineer (Trainee)",
    company: "Techpile Technology Pvt. Ltd.",
    date: "July 2023 – September 2023",
    desc: "Built and maintained production Django REST framework modules and JavaScript components, increasing user engagement by 20%. Delivered 10+ features in collaboration with senior engineers following MVC architecture. Reduced bugs by 30% through systematic debugging and unit testing. Designed and integrated PostgreSQL databases with RESTful APIs covering complete CRUD workflows with data validation and error handling.",
    skills: [
      "Python",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "MVC Architecture",
      "Unit Testing",
      "JavaScript",
    ],
    impact: [
      { metric: "20%", label: "User Engagement" },
      { metric: "30%", label: "Bug Reduction" },
      { metric: "10+", label: "Features Shipped" },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: College,
    school: "M.G.Institute of Management and Technology",
    date: "August 2020 - July 2024",
    grade: "8.69 CGPA",
    desc: "Bachelor's degree in Computer Science & Engineering (AKTU). Built strong foundations in Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and Software Engineering. Applied knowledge through multiple industry-oriented projects covering full-stack development, API design, and system design principles.",
    degree: "B.Tech – Computer Science & Engineering",
  },
  {
    id: 2,
    img: School,
    school: "Shri Janki Prasad Inter College, Hardoi",
    date: "April 2019 - March 2020",
    grade: "70.02%",
    desc: "Class 12 with Physics, Chemistry, Mathematics, and Computer Science. Early exposure to programming concepts sparked interest in software engineering and problem-solving.",
    degree: "U.P. Board (XII) – PCM with Computer Science",
  },
  {
    id: 3,
    img: School,
    school: "Shri Janki Prasad Inter College, Hardoi",
    date: "April 2017 - March 2018",
    grade: "75%",
    desc: "Class 10 with Science and Computer Applications. Foundation in logical reasoning and early computing concepts.",
    degree: "U.P. Board (X) – Science with Computer Application",
  },
];

export const projects = [
  {
    id: 'attendance',
    title: "AI-Powered Smart Attendance & Access Management System",
    description: "Production-deployed full-stack attendance and access management platform designed to automate employee onboarding, role-based access control, kiosk operations, facial-recognition attendance, reporting, and administrative workflows.",
    image: aiAttendance,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.IO", "Face-api.js", "Nodemailer", "Tailwind CSS", "Docker", "Vercel", "Render", "MongoDB Atlas"],
    github: "https://github.com/Sakshi123-tech/attendance-marker",
    webapp: "https://attendance-marker-tawny.vercel.app/login",
    impact: "Production Deployed",
    documentation: "https://docs.google.com/document/d/1K35awCvTibkX04KvUKGISaLsuSEDysHuh5vDwIZd4q0/edit?tab=t.0#heading=h.6fekl5x5v875",
    documentationSectionLink: "https://drive.google.com/file/d/1QSkWMfDaLNcWz_U3E26rrnc4UFi-a5JI/view",
    demoVideo: "https://drive.google.com/file/d/1io5MLvRuRZ0GKLIjIF26JqAPqgkrfJCW/view?t=129.04",
    detailed: true,
    keyFeatures: [
      { title: "Secure Authentication", desc: "JWT-based authentication using HttpOnly cookies with backend token verification." },
      { title: "Role-Based Access Control", desc: "Five supported roles: SUPER_ADMIN, ADMIN, HR, EMPLOYEE, KIOSK. Authorization is enforced at the backend level." },
      { title: "Employee Management", desc: "Role-controlled employee creation, management, activation and deactivation." },
      { title: "Employee Onboarding", desc: "Email-based employee onboarding and account setup workflow." },
      { title: "Face Registration", desc: "Facial-recognition registration as part of the attendance workflow." },
      { title: "Kiosk Management", desc: "Registered kiosk/device validation using kiosk identity and authentication credentials." },
      { title: "Attendance Management", desc: "Kiosk-based attendance marking with validation and duplicate-attendance prevention." },
      { title: "Real-Time Updates", desc: "Socket.IO-based real-time application updates and notifications." },
      { title: "Reporting", desc: "Attendance statistics and scheduled attendance reporting workflows." },
      { title: "Audit & System Logging", desc: "Logging of important administrative and system activities." }
    ],
    architecture: {
      flow: ["React.js Frontend", "Express.js REST API", "Authentication / Authorization Middleware", "Controllers", "Services / Business Logic", "Mongoose", "MongoDB"],
      supporting: ["Socket.IO", "Cron Jobs", "Email Service", "Kiosk Authentication"]
    },
    security: ["JWT Authentication", "HttpOnly Cookies", "Secure Cookies in Production", "SameSite Cookie Protection", "Backend Authentication Middleware", "Role-Based Authorization", "CORS", "Helmet Security Headers", "Rate Limiting", "Input Validation", "Kiosk Authentication", "Account Activation Checks", "Centralized Error Handling"],
    highlights: [
      "Modular Node.js / Express backend architecture designed to support future scalability.",
      "REST API design",
      "JWT authentication",
      "Backend-enforced RBAC",
      "MongoDB / Mongoose data modeling",
      "Socket.IO real-time communication",
      "Kiosk/device validation",
      "Scheduled backend jobs",
      "Centralized error handling",
      "API rate limiting",
      "Docker / Docker Compose development environment",
      "Production deployment"
    ],
    challenges: [
      { title: "Production Authentication", desc: "Handling authentication between a separately deployed Vercel frontend and Render backend using secure cookies, CORS, HTTPS and credentials." },
      { title: "Backend Authorization", desc: "Enforcing authorization at the API level rather than relying only on frontend route protection." },
      { title: "Kiosk Security", desc: "Adding device-level validation to control access to kiosk functionality." },
      { title: "Real-Time Communication", desc: "Using Socket.IO to provide live application updates without relying entirely on manual page refreshes." }
    ],
    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "MongoDB Atlas",
      development: "Docker / Docker Compose"
    }
  },
  {
    id: 0,
    title: "BlinkBasket – Grocery Delivery Platform",
    description:
      "Engineered a full-stack, production-ready grocery delivery platform using the MERN stack. Implemented secure JWT authentication, role-based access control, real-time cart management, and a scalable REST API layer. Designed MongoDB schemas with efficient indexing for high-throughput product queries. Integrated payment flow and real-time order status updates, delivering a sub-200ms API response time.",
    image: blinkitwebsite,
    tags: ["MERN Stack", "REST APIs", "JWT Auth", "MongoDB", "Real-Time", "Scalable Architecture"],
    github: {
      frontend: "https://github.com/Sakshi123-tech/blinkitfullstackfrontend",
      backend: "https://github.com/Sakshi123-tech/binkitFullstackBackend",
    },
    webapp: "https://blinkitgrocerywebsite.onrender.com/",
    impact: "Production-deployed, real-time order platform with secure auth and scalable APIs",
  },
  {
    id: 1,
    title: "Car Rental Platform",
    description:
      "Built a full-featured vehicle rental system with MERN stack featuring user authentication, vehicle browsing with filters, booking management, and admin dashboard. Engineered RESTful APIs for fleet management and reservation workflows. Implemented secure session handling and real-time availability checks to prevent double bookings.",
    image: carrentel,
    tags: ["MERN Stack", "REST APIs", "Admin Dashboard", "Booking System", "Auth"],
    github: {
      frontend: "https://github.com/Sakshi123-tech/car_rentel_frontend_code",
      backend: "https://github.com/Sakshi123-tech?tab=repositories",
    },
    webapp: "https://carrentel-7fto.onrender.com/",
    impact: "Full-stack booking system with conflict-free reservation and admin controls",
  },
  {
    id: 2,
    title: "Instagram Clone – Social Platform",
    description:
      "Developed a feature-rich social media application with full authentication, post creation, like/comment systems, and user following. Built a RESTful API backend with Node.js and Express, handling media uploads, feed algorithms, and real-time notifications. Designed for horizontal scalability with efficient MongoDB query patterns.",
    image: insta,
    tags: ["React.js", "Node.js", "REST APIs", "MongoDB", "Auth", "Media Upload"],
    github: "https://github.com/Sakshi123-tech/Insta_backend_code",
    webapp: "https://instagram-website-j8gw.onrender.com/",
    impact: "Full-stack social platform with real-time feed, auth, and media management",
  },
  {
    id: 3,
    title: "Image Search Engine & Gallery",
    description:
      "Engineered a responsive image search and discovery platform integrating Unsplash REST APIs. Built with React.js featuring real-time debounce search, dynamic masonry image layout, modal previews, and high-resolution asset downloads.",
    image: ImageSearchwebsite,
    tags: ["React.js", "REST APIs", "Unsplash API", "Responsive UI", "Async State"],
    github: "https://github.com/Sakshi123-tech?tab=repositories",
    webapp: "https://imagsearch.netlify.app/",
    impact: "High-resolution media search engine with real-time API queries and responsive grid",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    description:
      "Engineered a dynamic e-commerce platform with product catalog management, cart system, and checkout flow. Built reusable React component architecture with Redux for global state management. Implemented API integration for product data, filter/search functionality, and order management workflow.",
    image: ecommercewebsite,
    tags: ["React.js", "Redux", "REST APIs", "Cart Management", "State Architecture"],
    github: "https://github.com/Sakshi123-tech/Ecommerceusingreact",
    webapp: "https://dazzling-shortbread-3d3f4d.netlify.app/",
    impact: "Scalable e-commerce UI with Redux state management and API integration",
  },
];

export const achievements = [
  {
    id: 0,
    icon: "🚀",
    title: "35% Latency Reduction",
    description: "Integrated Socket.IO real-time sync at Coreshield Technologies, reducing data synchronization latency by 35% across production systems.",
    category: "Performance Engineering",
  },
  {
    id: 1,
    icon: "⚡",
    title: "25% Page Performance Boost",
    description: "Implemented code splitting, lazy loading, and bundle optimization strategies resulting in 25% faster page load times in production.",
    category: "Optimization",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Enterprise Security Implementation",
    description: "Implemented OWASP Top 10 security practices including XSS prevention, secure JWT authentication, and input sanitization across production apps.",
    category: "Security Engineering",
  },
  {
    id: 3,
    icon: "📦",
    title: "30% Bug Reduction",
    description: "Applied systematic debugging, unit testing, and code review processes that reduced production bugs by 30% during internship at Techpile.",
    category: "Code Quality",
  },
  {
    id: 4,
    icon: "🏗️",
    title: "LLD & Clean Architecture",
    description: "Applied Low Level Design (LLD) principles for modular, maintainable component architecture that reduced coupling by 40% across the codebase.",
    category: "System Design",
  },
  {
    id: 5,
    icon: "📊",
    title: "8.69 CGPA – B.Tech CSE",
    description: "Graduated with distinction from M.G.I.M.T. (AKTU) with 8.69 CGPA in Computer Science & Engineering, excelling in DSA, OS, DBMS, and Networks.",
    category: "Academic Excellence",
  },
];