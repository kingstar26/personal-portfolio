import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { MessageCircle, Quote } from 'lucide-react'
import { MotionReveal } from '@/components/common'

const testimonialImages = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const testimonials = [
  {
    name: 'Nelson Etubuli',
    role: 'Web Programmer',
    organization: 'Maseno University - eCampus',
    phone: '0737295438',
    initials: 'N',
    testimonial:
      'Hezron is a dedicated and enthusiastic developer who is always willing to learn and take on new challenges. During the time I worked with him, I was impressed by his ability to understand technical requirements, solve problems, and turn ideas into functional solutions. He pays attention to detail, takes feedback positively, and consistently works towards improving his skills. His commitment to learning and software development makes him a valuable person to work with.',
  },
  {
    name: 'Peter Kiprotich',
    role: 'eLearning Support Specialist',
    organization: 'Maseno University - eCampus',
    phone: '0722458142',
    initials: 'PK',
    testimonial:
      'Hezron demonstrated a strong willingness to learn and contribute throughout his time with us. He was able to adapt to different tasks, work well with others, and approach technical challenges with patience and determination. I particularly appreciated his ability to take what he had learned and apply it to practical systems and day-to-day challenges. Hezron is hardworking, cooperative, and has great potential as he continues to grow in the software development field.',
  },
  {
    name: 'Charles Nguthu',
    role: 'Software Engineer',
    organization: '',
    phone: '0712207734',
    initials: 'CN',
    testimonial:
      'Hezron has a genuine passion for building software and solving real-world problems through technology. What stands out is his willingness to explore different technologies, understand how systems work as a whole, and continuously improve his implementation. He approaches development with curiosity, persistence, and a strong desire to produce meaningful results. With continued experience and exposure to larger projects, I believe he has a solid foundation for growing into a capable software engineer.',
  },
]

const getImageFor = (name: string) => {
  const firstName = name.split(' ')[0].toLowerCase()
  const entry = Object.entries(testimonialImages).find(([path]) => path.toLowerCase().includes(firstName))
  return entry?.[1]
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const hoverAdvanceRef = useRef(false)
  const isInView = useInView(sectionRef, { once: false, margin: '-20% 0px -20% 0px' })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const rotation = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 20000)

    return () => window.clearInterval(rotation)
  }, [activeIndex, isInView])

  const activeTestimonial = testimonials[activeIndex]
  const image = useMemo(() => getImageFor(activeTestimonial.name), [activeTestimonial.name])
  const avatarClassName = activeTestimonial.name === 'Charles Nguthu'
    ? 'aspect-square h-36 w-36 min-h-36 min-w-36'
    : 'h-24 w-24'
  const imageClassName = activeTestimonial.name === 'Charles Nguthu'
    ? 'h-full w-full object-cover object-top'
    : 'h-full w-full object-cover'
  const whatsappUrl = `https://wa.me/254${activeTestimonial.phone.slice(1)}`

  const showNextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const handleCardMouseEnter = () => {
    if (hoverAdvanceRef.current) return
    hoverAdvanceRef.current = true
    showNextTestimonial()
  }

  const handleCardMouseLeave = () => {
    hoverAdvanceRef.current = false
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % testimonials.length)
    if (event.key === 'ArrowLeft') setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="-mt-16 scroll-mt-32 py-10"
      aria-label="Testimonials"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal delay={0.08} direction="up">
          <h2 className="inline-block font-display text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
            Testimonials
          </h2>
          <div className="relative mt-3 h-[2px] w-full max-w-[220px] overflow-hidden bg-slate-600/60">
            <span className="about-underline-sweep" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Welcome to my testimonials section! Here, you&apos;ll find a collection of kind words and positive feedback from my past clients, colleagues, and supervisors. I take great pride in my work and it&apos;s always a pleasure to hear that it&apos;s making a real difference. Through these testimonials, you will get a glimpse of my skills and experiences and how I have helped others in the past. I hope they will give you a better understanding of my abilities and the level of service I provide.
          </p>
        </MotionReveal>

        <div
          className="relative mt-10 h-[600px] overflow-hidden rounded-2xl border border-slate-500/80 bg-[#192334] px-3 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.24)] sm:h-[500px] sm:px-10 sm:py-10 lg:h-[430px] lg:px-16"
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
          onClick={showNextTestimonial}
        >
          <Quote className="absolute left-6 top-8 h-12 w-12 fill-slate-100 text-slate-100/90 sm:left-10 sm:top-10" aria-hidden="true" />

          <AnimatePresence initial={false} mode="sync" custom={activeIndex}>
            <motion.article
              key={activeTestimonial.name}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0 flex h-full w-full min-w-0 flex-col items-center justify-center overflow-y-auto break-words px-4 py-10 text-center sm:px-10 lg:px-16"
            >
              <div className={`group relative mb-4 overflow-hidden rounded-full border-2 border-cyan-400/70 bg-slate-800 shadow-[0_0_0_6px_rgba(56,189,248,0.08)] transition-transform duration-300 hover:scale-105 ${avatarClassName}`}>
                {image ? (
                  <img src={image} alt={activeTestimonial.name} className={imageClassName} />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-display text-4xl font-bold text-cyan-300" aria-label={`${activeTestimonial.name} avatar`}>
                    {activeTestimonial.initials}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl font-semibold text-white">{activeTestimonial.name}</h3>
              <p className="mt-2 max-w-full break-words text-sm text-slate-200 sm:text-base">
                <span className="font-semibold text-white">{activeTestimonial.role}</span>
                {activeTestimonial.organization && <span> | {activeTestimonial.organization}</span>}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="mt-2 inline-flex items-center gap-2 text-base font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <MessageCircle className="h-4 w-4" />
                +254 {activeTestimonial.phone.slice(1)}
              </a>
              <p className="mt-6 max-w-5xl break-words text-sm leading-6 text-slate-200 sm:text-lg sm:leading-8">
                “{activeTestimonial.testimonial}”
              </p>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex justify-center gap-2" aria-label="Testimonial navigation">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-500 hover:bg-slate-300'}`}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
