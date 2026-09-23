import { type KeyboardEvent, type MouseEvent } from 'react'
import { ExternalLink } from 'lucide-react'
import { MotionReveal } from '@/components/common'
import graduateTracerImage from '@/assets/projects/mugts-pathfinder.png'
import agriLinkImage from '@/assets/projects/Agrlink.png'
import missingMarksImage from '@/assets/projects/units registration.png'
import filingSystemImage from '@/assets/projects/filling system.jpeg'
import expenseTrackerImage from '@/assets/projects/Expense-Tracker.png'
import foodDeliveryImage from '@/assets/projects/Food-delivery.png'

const projects = [
  {
    title: 'Graduate Tracer System',
    description:
      'System that helps universities track graduates, collect employment and career information, manage tracer surveys, and generate insights for academic and institutional planning.',
    image: graduateTracerImage,
    liveUrl: 'https://maseno-pathfinder.vercel.app/',
  },
  {
    title: 'AgriLink-X',
    description:
      'Agricultural marketplace that connects farmers, buyers, and companies, helping users manage agricultural products, discover market opportunities, and streamline transactions.',
    image: agriLinkImage,
    liveUrl: 'https://agrilink-kenya.vercel.app/',
  },
  {
    title: 'Student Missing Marks & Unit Registration System',
    description:
      'Academic system that helps students register units, report missing marks, track issue resolution, and enables lecturers and administrators to manage academic records efficiently.',
    image: missingMarksImage,
    liveUrl: 'https://ecampus2.maseno.ac.ke/stars/login.php',
  },
  {
    title: 'Digital Filing System',
    description:
      'Document management system that helps organizations organize, store, retrieve, and manage digital records through a centralized filing workflow.',
    image: filingSystemImage,
    liveUrl: null,
  },
  {
    title: 'Expense Tracker',
    description:
      'A personal finance application for recording expenses, organizing spending, and tracking financial activity through a simple, user-friendly interface.',
    image: expenseTrackerImage,
    liveUrl: 'https://github.com/kingstar26/expense-tracker-app',
    actionLabel: 'View Repo',
  },
  {
    title: 'Food Delivery',
    description:
      'A food delivery platform that allows users to browse meals, manage orders, and interact with a streamlined food ordering experience.',
    image: foodDeliveryImage,
    liveUrl: 'https://github.com/kingstar26/Food-del-pro',
    actionLabel: 'View Repo',
  },
]

export function Projects() {
  const openProject = (project: (typeof projects)[number]) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleCardClick = (project: (typeof projects)[number], event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    if (target.closest('a, button')) return
    openProject(project)
  }

  const handleCardKeyDown = (project: (typeof projects)[number], event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(project)
    }
  }

  return (
    <section id="projects" className="-mt-24 scroll-mt-32 py-10" aria-label="Selected Projects">
      <div className="mx-auto max-w-6xl min-w-0">
        <MotionReveal delay={0.08} direction="up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none inline-block">
            Projects
          </h2>
          <div className="relative mt-3 h-[2px] w-full max-w-[220px] overflow-hidden bg-slate-600/60">
            <span className="about-underline-sweep" aria-hidden="true" />
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-200">
            A collection of software systems and digital solutions I&apos;ve designed and developed to solve practical, real-world problems.
          </p>
        </MotionReveal>

        <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionReveal key={project.title} delay={0.12 + index * 0.06} direction="up">
              <article
                className="group min-w-0 h-full cursor-pointer overflow-hidden rounded-xl border border-slate-700/80 bg-[#162032] transition-all duration-300 hover:scale-[1.01] hover:border-cyan-400/60 hover:shadow-[0_18px_40px_rgba(15,23,42,0.3)] focus-visible:outline-none"
                onClick={(event) => handleCardClick(project, event)}
                onKeyDown={(event) => handleCardKeyDown(project, event)}
                role="button"
                tabIndex={0}
                aria-label={`${project.title}, open project`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/15" />
                </div>

                <div className="flex flex-col p-5 transition-transform duration-300 ease-out group-hover:scale-[1.01]">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 flex-1 break-words text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{project.description}</p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        {project.actionLabel ?? 'View project'}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                        }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                      >
                        No live demo
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
