import { MotionReveal } from '@/components/common'

const phoneUrl = 'tel:+254790102460'

export function Contact() {
  return (
    <section id="contact" className="-mt-16 scroll-mt-32 py-10" aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        <MotionReveal delay={0.08} direction="up">
          <h2 className="inline-block font-display text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
            Let&apos;s Get In Touch
          </h2>
          <div className="relative mt-3 h-[2px] w-full max-w-[220px] overflow-hidden bg-slate-600/60">
            <span className="about-underline-sweep" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-6xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Go ahead, I&apos;d love to hear from you! Whether you&apos;re interested in discussing a potential project, want to know more about my work and experience, or simply want to say hello, feel free to reach out. I&apos;m always open to new ideas, meaningful collaborations, and opportunities to build practical solutions together. Drop me a message through email, phone, WhatsApp, or social media, and I&apos;ll get back to you as soon as possible.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.16} direction="up">
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=njengahezron26@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-base text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              Write an Email
            </a>
            <span className="text-base text-slate-100">Or</span>
            <a
              href={phoneUrl}
              className="rounded-2xl border border-slate-300 px-6 py-3 text-base text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              Make a Call
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
