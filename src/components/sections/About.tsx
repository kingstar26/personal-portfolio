import { useEffect, useState } from 'react'
import { MotionReveal } from '@/components/common'
import profileImage from '@/assets/DSC_2171@1584600290.jpg'
import masenoLogo from '@/assets/logo.jpg.jpeg'
import mmustLogo from '@/assets/mmust logo.png'

const TYPEWRITER_TEXT = 'Hello World!'

const workHistory = [
  {
    company: 'Maseno University — eLearning Department',
    logo: masenoLogo,
    location: 'Kisumu City Campus',
    title: 'Industrial Attachment',
    period: 'May 2026 — August 2026',
    points: [
      'Developed and integrated features for Unit Registration and Missing Marks, supporting students, lecturers, HODs, and administrators.',
      'Worked with React, JavaScript, TypeScript, Tailwind CSS, PHP, MySQL, and REST APIs across frontend and backend development.',
      'Worked on academic data processing, including data cleaning, database preparation, marks processing, and system integration.',
      'Contributed to the Graduate Tracer System and Digital Filing System across frontend, backend, database, authentication, notifications, and system workflows.',
      'Strengthened practical experience in debugging, testing, database management, API integration, deployment preparation, teamwork, and translating institutional requirements into functional software.',
    ],
  },
  {
    company: 'Masinde Muliro University of Science and Technology (MMUST)',
    logo: mmustLogo,
    location: 'Second Year — May–August',
    title: 'Industrial Training',
    period: 'Industrial Training',
    points: [
      'Performed desktop computer disassembly, cleaning, component inspection, reassembly, and basic hardware maintenance.',
      'Installed and configured CCTV surveillance systems, routers, wireless access points, and Wi-Fi networks.',
      'Terminated and crimped Ethernet cables using RJ45 connectors and performed network connectivity troubleshooting.',
      'Used Cisco Packet Tracer for network design, configuration, IP addressing, simulation, and connectivity testing.',
      'Worked with IoT sensors and actuators, applying the concepts to the Smart Borehole Management System with IoT Integration.',
    ],
  },
]

export function About() {
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const isComplete = typedText === TYPEWRITER_TEXT
    const isEmpty = typedText === ''
    const delay = isComplete && !isDeleting ? 1200 : isEmpty && isDeleting ? 300 : isDeleting ? 60 : 100

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false)
        return
      }

      const nextValue = isDeleting
        ? TYPEWRITER_TEXT.slice(0, typedText.length - 1)
        : TYPEWRITER_TEXT.slice(0, typedText.length + 1)

      setTypedText(nextValue)
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [typedText, isDeleting])

  return (
    <section id="about" className="-mt-8 scroll-mt-32 py-8 md:py-10" aria-label="About section">
      <div className="max-w-6xl mx-auto">
        <MotionReveal delay={0.08} direction="up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none inline-block">
            About
          </h2>
          <div className="relative mt-3 h-[2px] w-full max-w-[220px] overflow-hidden bg-slate-600/60">
            <span className="about-underline-sweep" aria-hidden="true" />
          </div>
        </MotionReveal>

        <div className="mt-10 grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:gap-12">
          <div className="flex flex-col">
            <MotionReveal delay={0.12} direction="up">
              <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[#1B2B42] shadow-[0_20px_60px_rgba(15,23,42,0.35)] lg:mx-0">
                <img
                  src={profileImage}
                  alt="Hezron Njenga"
                  className="block h-[380px] w-full object-cover object-center sm:h-[500px]"
                />
              </div>
            </MotionReveal>

          </div>

          <div className="min-w-0 space-y-6">
            <MotionReveal delay={0.12} direction="up">
              <div className="font-display text-[2.3rem] sm:text-[3rem] lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-none min-h-[3.3rem]">
                {typedText}
                <span className="inline-block w-[0.1em] h-[1em] align-middle bg-white/80 ml-1" aria-hidden="true" />
              </div>
            </MotionReveal>

            <MotionReveal delay={0.16} direction="up">
              <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-medium">
                Hey there 👋, it&apos;s Hezron Njenga here, but you can call me Hezy! Pleasure.
              </p>
            </MotionReveal>

            <div className="space-y-5 pt-3 text-[1.05rem] leading-8 text-slate-200/90">
              <MotionReveal delay={0.2} direction="up">
                <p>
                  I&apos;m <span className="font-semibold text-white"></span>a Computer Science student and Software Developer passionate about designing and developing practical digital systems that solve real-world problems.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.24} direction="up">
                <p>
                  I have hands-on experience building <span className="font-semibold text-white">web and mobile applications</span>, working across frontend, backend, databases, and APIs. My development experience includes <span className="font-semibold text-white">React, TypeScript, JavaScript, Vite, Tailwind CSS, PHP, Python/Django, MySQL, Firebase, and REST APIs</span>.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.28} direction="up">
                <p>
                  Through academic projects and my Industrial Attachment at Maseno University, I have worked on real-world systems involving academic management, graduate tracking, digital records, and workflow automation. I enjoy turning requirements into functional, user-friendly software while continuously improving my skills in software development, databases, system integration, and problem solving.
                </p>
              </MotionReveal>
            </div>
          </div>
        </div>

        <MotionReveal delay={0.16} direction="up">
          <h3 id="experience" className="mt-10 scroll-mt-32 text-center font-display text-2xl sm:text-3xl font-bold italic text-white">
            Here is my work history:
          </h3>
        </MotionReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {workHistory.map((item, index) => (
            <MotionReveal key={item.company} delay={0.1 + index * 0.08} direction="up">
              <article className="h-full rounded-2xl border border-slate-700/70 bg-slate-900/30 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.22)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-sm font-bold text-cyan-400">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-white">{item.company}</p>
                    <p className="text-sm text-slate-300">{item.location}</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-base font-semibold text-slate-100">{item.title}</p>
                  <p className="text-sm text-cyan-300">{item.period}</p>
                </div>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200/85">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
