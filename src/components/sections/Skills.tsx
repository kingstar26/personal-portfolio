import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDjango,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiXampp,
} from 'react-icons/si'
import { MotionReveal } from '@/components/common'

type Skill = {
  name: string
  icon: IconType
  color: string
}

const skills: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Django', icon: SiDjango, color: '#44B78B' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git & GitHub', icon: SiGit, color: '#F05032' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
  { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
]

export function Skills() {
  return (
    <section id="skills" className="-mt-16 scroll-mt-32 py-10" aria-label="Skills">
      <div className="mx-auto max-w-6xl">
        <MotionReveal delay={0.08} direction="up">
          <h2 className="inline-block font-display text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
            Skills
          </h2>
          <div className="relative mt-3 h-[2px] w-full max-w-[220px] overflow-hidden bg-slate-600/60">
            <span className="about-underline-sweep" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Throughout my development journey, I have gained practical and professional experience working with the following programming languages, frameworks, and development tools.
          </p>
        </MotionReveal>

        <div className="mt-8 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <MotionReveal key={skill.name} delay={0.1 + index * 0.04} direction="up">
                <article className="group flex h-full min-h-[124px] flex-col items-center justify-between rounded-lg border border-slate-600/80 bg-slate-900/20 p-3 text-center transition-all duration-300 ease-out hover:scale-[1.02] hover:border-cyan-400/70 hover:bg-slate-800/40 hover:shadow-[0_14px_30px_rgba(15,23,42,0.28)]">
                  {skill.name === 'Git & GitHub' ? (
                    <div className="flex h-13 items-center gap-2 text-3xl" aria-label="Git and GitHub logos">
                      <SiGit style={{ color: skill.color }} />
                      <SiGithub className="text-slate-100" />
                    </div>
                  ) : (
                    <Icon className="h-13 w-13 transition-transform duration-300 ease-out group-hover:scale-105" style={{ color: skill.color }} aria-hidden="true" />
                  )}
                  <h3 className="mt-3 text-sm font-semibold text-slate-100 sm:text-base">{skill.name}</h3>
                </article>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
