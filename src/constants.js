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
import zepto from './assets/work_logo/10MinZepto.jpg';
import heartcare from './assets/work_logo/Hearcare.jpg';
import ImageSearchwebsite from './assets/work_logo/searchimage.png';

import passwordmanager from './assets/work_logo/Passwordmanager.jpg';
import carrentel from "./assets/work_logo/car rentel.png";


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
    id: 0,
    title: "BlinkBasket – Grocery Delivery Platform",
    description:
      "Engineered a full-stack, production-ready grocery delivery platform using the MERN stack. Implemented secure JWT authentication, role-based access control, real-time cart management, and a scalable REST API layer. Designed MongoDB schemas with efficient indexing for high-throughput product queries. Integrated payment flow and real-time order status updates, delivering a sub-200ms API response time.",
    image: blinkitwebsite,
    tags: ["MERN Stack", "REST APIs", "JWT Auth", "MongoDB", "Real-Time", "Scalable Architecture"],
    github: {
      frontend: "https://github.com/AnweshaBhatt475/BlinkBasket.git",
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
      frontend: "https://github.com/AnweshaBhatt475/BlinkBasket.git",
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
    title: "10-Min Zepto – Rapid Delivery Engine",
    description:
      "Architected a quick-commerce delivery platform with Python/Django backend, integrating real-time inventory management, location-based logistics, and order processing pipeline. Designed relational database schema in MySQL for product catalog, order lifecycle, and delivery tracking. Built REST APIs consumed by the frontend with sub-100ms response benchmarks.",
    image: zepto,
    tags: ["Python", "Django", "MySQL", "REST APIs", "Real-Time Inventory", "Location Services"],
    github: "https://github.com/Sakshi123-tech/blinkit",
    webapp: "https://codingmasterweb.in/",
    impact: "Quick-commerce engine with real-time inventory sync and order tracking",
  },
  {
    id: 4,
    title: "HeartCare – Healthcare Management System",
    description:
      "Built a comprehensive healthcare platform enabling appointment scheduling, patient health tracking, and doctor consultation workflows. Backend engineered with Django REST framework and MySQL, featuring secure patient data handling, CRUD operations for medical records, and emergency alert systems. Implemented role-based access for doctors, patients, and admins.",
    image: heartcare,
    tags: ["Python", "Django", "MySQL", "RBAC", "Healthcare APIs", "Secure Data"],
    github: "https://github.com/Sakshi123-tech/healthcare",
    webapp: "https://imagsearch.netlify.app/",
    impact: "Multi-role healthcare system with secure patient data and appointment engine",
  },
  {
    id: 5,
    title: "Password Manager – Secure Vault",
    description:
      "Designed and implemented a client-side encrypted password vault using React.js. Implemented AES encryption for credential storage, secure key management, and a clean credential retrieval interface. Focused on security-first architecture ensuring zero plaintext credential exposure in storage or transport layers.",
    image: passwordmanager,
    tags: ["React.js", "AES Encryption", "Security", "Local Storage", "Secure Auth"],
    github: "https://github.com/Sakshi123-tech/password-manager",
    webapp: "https://removeyourbg.netlify.app/",
    impact: "Security-first credential vault with client-side AES encryption",
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