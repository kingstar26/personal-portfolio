import { useEffect, useState, type MouseEvent } from 'react'
import { MessageCircle, Download } from 'lucide-react'
import { MotionReveal } from '@/components/common'
import profileImage from '@/assets/DSC_2171@1584600290.jpg'

const TITLES = ['Software Developer', 'Full-Stack Developer', 'Web Developer', 'App Developer']

export function Hero() {
  const handleCvClick = (e: MouseEvent) => {
    e.preventDefault()
    window.open('/Personal%20CV.pdf', '_blank', 'noopener,noreferrer')
  }

  const whatsappMessage = `Hello there 👋

You’ve reached Hezron. Welcome! How can I help you today? 😊`
  const whatsappUrl = `https://wa.me/254790102460?text=${encodeURIComponent(whatsappMessage)}`

  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = TITLES[currentIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentTitle.slice(0, displayText.length + 1)
        setDisplayText(nextText)

        if (nextText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
        return
      }

      const nextText = currentTitle.slice(0, displayText.length - 1)
      setDisplayText(nextText)

      if (nextText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % TITLES.length)
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, displayText, isDeleting])

  return (
    <section
      id="home"
      className="relative -mb-12 flex flex-col justify-center py-10 lg:py-16 overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="min-w-0 space-y-3 text-left lg:col-span-5">
          <MotionReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2B3A52] bg-[#1A2436] text-xs text-slate-300 font-medium shadow-sm">
              <span className="text-lg">👋</span>
              <span className="text-base sm:text-lg">Hello there...</span>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2} className="pt-3">
            <div className="space-y-2">
              <span className="text-2xl sm:text-3xl font-normal text-white block tracking-wide">I&apos;m</span>
              <h1 className="font-display text-[2.4rem] sm:text-[3.1rem] lg:text-[3.6rem] font-extrabold tracking-tight text-white leading-none">
                Hezron Njenga.
              </h1>
              <div className="flex items-center gap-2 min-h-[2.5rem] text-lg sm:text-xl text-white font-medium tracking-wide">
                <span className="inline-block min-w-[12rem] sm:min-w-[15rem] text-cyan-400">
                  {displayText}
                </span>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/kingstar26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-[#1A2436] transition-colors border border-[#2B3A52] bg-[#142233]"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1EjDYQH4Lc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-[#1A2436] transition-colors border border-[#2B3A52] bg-[#142233]"
                aria-label="Facebook Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.558 1.587-1.558h1.698V2.897c-.294-.039-1.305-.126-2.479-.126-2.451 0-4.13 1.497-4.13 4.246v2.367H7.332v3.209h2.764v8.196h3.301z" />
                </svg>
              </a>
              <a
                href="https://x.com/kingsta40959230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-[#1A2436] transition-colors border border-[#2B3A52] bg-[#142233]"
                aria-label="Twitter Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.189 9.458 12.505h-7.406l-5.795-7.64-6.606 7.64H.02l8.54-9.75L.165 1.153h7.594l5.243 6.932 6.099-6.932zm-1.291 19.673h2.039L7.083 2.787H4.937l12.673 18.039z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ki.ng_star26?stkn=MW52OGltMjMxNDUxaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-[#1A2436] transition-colors border border-[#2B3A52] bg-[#142233]"
                aria-label="Instagram Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.694-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0 1.802c-3.161 0-3.519.012-4.75.068-2.435.111-3.5 1.221-3.611 3.611-.056 1.23-.068 1.588-.068 4.75s.012 3.519.068 4.75c.111 2.39 1.176 3.5 3.611 3.611 1.231.056 1.589.068 4.75.068s3.519-.012 4.75-.068c2.39-.111 3.5-1.221 3.611-3.611.056-1.231.068-1.589.068-4.75s-.012-3.519-.068-4.75c-.111-2.39-1.221-3.5-3.611-3.611-1.231-.056-1.589-.068-4.75-.068zm0 3.7a5.335 5.335 0 110 10.67 5.335 5.335 0 010-10.67zm0 1.8A3.535 3.535 0 1012 15.535 3.535 3.535 0 0012 7.663zm5.675-3.111a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
            </div>
          </MotionReveal>
        </div>

        <div className="flex justify-center py-2 lg:col-span-4 lg:my-0 lg:py-0">
          <MotionReveal direction="up" delay={0.25}>
            <div className="relative flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-[#36506C] bg-[#2B3F5F] shadow-[0_0_80px_rgba(56,123,255,0.12)] sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]">
                <img
                  src={profileImage}
                  alt="Hezron Njenga"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_58%)]" />
                <div className="absolute inset-5 rounded-full border border-white/5" />
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="flex flex-col items-start justify-center gap-3.5 lg:col-span-3 lg:items-end">
          <MotionReveal direction="up" delay={0.3}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-500/70 hover:border-cyan-400 text-sm font-medium text-slate-200 hover:text-cyan-400 bg-transparent transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span>Lets talk</span>
            </a>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.35}>
            <button
              type="button"
              onClick={handleCvClick}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-500/70 hover:border-cyan-400 text-sm font-medium text-slate-200 hover:text-cyan-400 bg-transparent transition-all duration-200 shadow-sm"
              aria-label="Download CV"
            >
              <span>Download my CV</span>
              <Download className="w-4 h-4 text-cyan-400" />
            </button>
          </MotionReveal>
        </div>
      </div>

      <MotionReveal direction="up" delay={0.4}>
        <div className="mt-14 pt-8 border-t border-[#243248] text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-calibre text-2xl sm:text-3xl font-bold tracking-tight text-white">
            I BUILD DIGITAL SYSTEMS THAT SOLVE REAL PROBLEMS.
          </h2>
          <p className="font-calibre text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">
            Computer Science student at MMUST and software developer focused on engineering practical web applications, business systems, data-driven software, and workflow solutions.
          </p>
        </div>
      </MotionReveal>
    </section>
  )
}
