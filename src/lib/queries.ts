// GROQ is Sanity's query language — like SQL but for Sanity

export const projectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    points,
    tech,
    github,
    live,
    image,
    featured,
    order
  }
`

export const skillsQuery = `
  *[_type == "skill"] | order(level desc) {
    _id,
    name,
    category,
    level
  }
`

export const experienceQuery = `
  *[_type == "experience"] | order(order asc) {
    _id,
    role,
    company,
    duration,
    points,
    type
  }
`

export const personalQuery = `
  *[_type == "personal"][0] {
    _id,
    name,
    title,
    tagline,
    bio,
    email,
    phone,
    github,
    linkedin,
    location,
    available
  }
`
