export interface StatHighlight {
  id: string
  icon: string
  metric: string
  title: string
  description?: string
}

export const HERO_DATA = {
  greetingBadge: '👋 Hello there...',
  name: 'Hezron Njenga.',
  role: 'Software Developer',
  headline: 'I BUILD DIGITAL SYSTEMS THAT SOLVE REAL PROBLEMS.',
  description:
    'Computer Science student at MMUST and software developer focused on engineering practical web applications, business systems, data-driven software, and workflow solutions.',
  socials: [
    { label: 'GitHub', href: 'https://github.com', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
  ],
}

export const STATS_DATA: StatHighlight[] = [
  {
    id: 'education',
    icon: 'GraduationCap',
    metric: 'MMUST CS Student',
    title: 'BSc Computer Science',
    description: 'Masinde Muliro University of Science and Technology (MMUST)',
  },
  {
    id: 'attachment',
    icon: 'Briefcase',
    metric: '12 Weeks (25 May – 14 Aug 2026)',
    title: 'Industrial Attachment',
    description: 'Maseno University eLearning Department',
  },
  {
    id: 'projects',
    icon: 'FolderCheck',
    metric: '4 Completed Systems',
    title: 'Completed Systems',
    description: 'MUGTS — Maseno University Graduate Tracer System, AgriLink-X, Missing Marks System & Filing System',
  },
]

