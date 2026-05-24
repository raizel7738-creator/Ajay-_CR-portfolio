// All interfaces used across the portfolio

export interface Project {
  _id: string
  title: string
  description: string
  points: string[]
  tech: string[]
  github: string
  live?: string
  image?: {
    asset: {
      _ref: string
    }
  }
  featured: boolean
  order: number
}

export interface Skill {
  _id: string
  name: string
  category: "Frontend" | "Backend" | "Database" | "Language" | "Tools"
  level: number
}

export interface Experience {
  _id: string
  role: string
  company: string
  duration: string
  points: string[]
  type: "work" | "education"
}

export interface Personal {
  _id: string
  name: string
  title: string
  tagline: string
  bio: string
  email: string
  phone: string
  github: string
  linkedin?: string
  location: string
  available: boolean
}

export type SkillCategory = "All" | "Frontend" | "Backend" | "Database" | "Language" | "Tools"
