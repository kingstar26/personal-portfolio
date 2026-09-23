import { GraduationCap, Briefcase, FolderCheck, Code2 } from 'lucide-react'
import { STATS_DATA } from '@/data'
import { MotionReveal } from '@/components/common'

const ICON_MAP = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  FolderCheck: FolderCheck,
  Code2: Code2,
}

export function Stats() {
  return (
    <section id="stats" className="py-6" aria-label="Key Highlights and Stats">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATS_DATA.map((stat, index) => {
          const IconComponent = ICON_MAP[stat.icon as keyof typeof ICON_MAP] || Code2

          return (
            <MotionReveal key={stat.id} delay={index * 0.1} direction="up">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#162032] border border-[#28364B] hover:border-cyan-500/50 transition-all duration-300 text-center flex flex-col items-center justify-center group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#28364B] flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>
                <p className="text-xs font-mono font-semibold text-cyan-400 tracking-wider mb-2 uppercase">
                  {stat.metric}
                </p>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-2">
                  {stat.title}
                </h3>
                {stat.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                    {stat.description}
                  </p>
                )}
              </div>
            </MotionReveal>
          )
        })}
      </div>
    </section>
  )
}

