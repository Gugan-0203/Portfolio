import { portfolio } from '../data/portfolio'

// ── About ─────────────────────────────────────────────────────────────
export const getAboutContent = () => ({
  type: 'about',
  title: 'About Me',
  data: portfolio,
})

// ── Experience ────────────────────────────────────────────────────────
export const getExperienceContent = () => ({
  type: 'experience',
  title: 'Work Experience',
  data: portfolio.experiences,
})

// ── Skills ────────────────────────────────────────────────────────────
export const getSkillsContent = () => ({
  type: 'skills',
  title: 'Technical Skills',
  data: portfolio.skills,
  radar: portfolio.coreSkills,
})

// ── Projects ──────────────────────────────────────────────────────────
export const getProjectsContent = () => ({
  type: 'projects',
  title: 'Projects',
  data: portfolio.projects,
})

// ── Education ─────────────────────────────────────────────────────────
export const getEducationContent = () => ({
  type: 'education',
  title: 'Education',
  data: portfolio.education,
  languages: portfolio.languages,
})

// ── Contact ───────────────────────────────────────────────────────────
export const getContactContent = () => ({
  type: 'contact',
  title: 'Contact Info',
  data: portfolio,
})

// ── Generic fallback ──────────────────────────────────────────────────
export const getFallbackContent = () => ({
  type: 'fallback',
  title: 'Navigation',
  data: null,
})

// ── Scrum / Agile special ─────────────────────────────────────────────
export const getScrumContent = () => ({
  type: 'scrum',
  title: 'Scrum Master',
  data: portfolio.experiences[1],
})

// ── Availability ──────────────────────────────────────────────────────
export const getAvailabilityContent = () => ({
  type: 'availability',
  title: 'Availability',
  data: portfolio,
})

// ── ROUTER ────────────────────────────────────────────────────────────
export function routeQuery(query) {
  const q = query.toLowerCase()

  if (['about', 'who', 'yourself', 'background', 'summary', 'introduce', 'tell me about gugan'].some(k => q.includes(k)))
    return getAboutContent()

  if (['experience', 'work', 'job', 'career', 'history', 'company', 'companies', 'role', 'employment'].some(k => q.includes(k)))
    return getExperienceContent()

  if (['skill', 'tech', 'stack', 'technolog', 'language', 'framework', 'speciali', 'proficient', 'expert', 'react', 'typescript', 'next.js', 'socket', 'websocket', 'what can'].some(k => q.includes(k)))
    return getSkillsContent()

  if (['project', 'built', 'portfolio', 'work sample', 'app', 'product', 'gravitus', 'cipherbizz', 'iat', 'auction', 'crm', 'crypto', 'ai image'].some(k => q.includes(k)))
    return getProjectsContent()

  if (['education', 'degree', 'college', 'university', 'study', 'academic', 'school', 'vsb', 'engineering'].some(k => q.includes(k)))
    return getEducationContent()

  if (['contact', 'reach', 'email', 'phone', 'linkedin', 'connect', 'message', 'call'].some(k => q.includes(k)))
    return getContactContent()

  if (['hire', 'available', 'open to', 'opportunity', 'job offer', 'freelance'].some(k => q.includes(k)))
    return getAvailabilityContent()

  if (['scrum', 'agile', 'master', 'sprint', 'ceremony', 'retrospective', 'standups'].some(k => q.includes(k)))
    return getScrumContent()

  return getFallbackContent()
}
