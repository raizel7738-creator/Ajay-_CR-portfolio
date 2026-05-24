import type { Project, Skill, Experience } from "../types"

export const fallbackProjects: Project[] = [
  {
    _id: "1",
    title: "YouTube Clone",
    description: "A full-stack video sharing platform with admin upload, browsing, search, and playback features.",
    points: [
      "Built video sharing platform where admin uploads videos shown on homepage",
      "Implemented browsing, search, and video playback functionality",
      "Integrated REST APIs for dynamic content rendering",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    github: "https://github.com/raizel7738-creator/youtube-clone-react",
    featured: true,
    order: 1,
  },
  {
    _id: "2",
    title: "Netflix Clone",
    description: "A Netflix-inspired streaming UI with dynamic carousels and TMDB API integration.",
    points: [
      "Created Netflix-like UI with dynamic movie carousels and hero banner",
      "Fetched and rendered live movie data from TMDB API",
      "Built fully responsive layout",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    github: "https://github.com/raizel7738-creator/netflix-clone-react",
    featured: true,
    order: 2,
  },
  {
    _id: "3",
    title: "Quiz App with Code Runner",
    description: "A full-stack quiz app with coding challenges and real-time multi-language execution via Judge0 API.",
    points: [
      "Developed quiz app with coding challenges and real-time code execution",
      "Integrated Judge0 API for multi-language code running",
      "Built admin panel for question management",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Judge0 API"],
    github: "https://github.com/raizel7738-creator",
    featured: true,
    order: 3,
  },
]

export const fallbackSkills: Skill[] = [
  { _id: "1", name: "HTML5",      category: "Frontend", level: 95 },
  { _id: "2", name: "CSS3",       category: "Frontend", level: 90 },
  { _id: "3", name: "JavaScript", category: "Language", level: 88 },
  { _id: "4", name: "React.js",   category: "Frontend", level: 85 },
  { _id: "5", name: "Bootstrap",  category: "Frontend", level: 82 },
  { _id: "6", name: "Node.js",    category: "Backend",  level: 80 },
  { _id: "7", name: "Express.js", category: "Backend",  level: 80 },
  { _id: "8", name: "MongoDB",    category: "Database", level: 78 },
  { _id: "9", name: "REST APIs",  category: "Backend",  level: 82 },
  { _id: "10", name: "Git",       category: "Tools",    level: 78 },
  { _id: "11", name: "VS Code",   category: "Tools",    level: 90 },
]

export const fallbackExperience: Experience[] = [
  {
    _id: "1",
    role: "MERN Stack Developer Trainee",
    company: "GALTech School Of Technology PVT Ltd",
    duration: "May 2025 – September 2025",
    points: [
      "Completed hands-on training in full-stack development using MongoDB, Express.js, React.js and Node.js",
      "Worked on real-world projects covering frontend design, REST API integration, and backend development",
    ],
    type: "work",
  },
  {
    _id: "2",
    role: "Diploma in Computer Engineering",
    company: "K. Karunakaran Memorial Model Polytechnic College, Kallettumkara",
    duration: "2023 – 2025",
    points: [
      "Completed Diploma under IHRD board",
      "NSS Volunteer 2023",
      "Focused on computer engineering fundamentals",
    ],
    type: "education",
  },
]
