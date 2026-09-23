import { useState, useEffect, type MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import type { NavigationItem } from '@/types'
import { useTheme } from '@/hooks'

const NAV_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const MOBILE_NAV_ITEMS: NavigationItem[] = [
  ...NAV_ITEMS.slice(0, 2),
  { label: 'Experience', href: '#experience' },
  ...NAV_ITEMS.slice(2),
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Handle clicking nav link
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
    window.history.pushState(null, '', href)

    const scrollToTarget = () => {
      const target = document.getElementById(sectionId)
      if (!target) return

      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      })
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
      window.setTimeout(scrollToTarget, 260)
      return
    }

    scrollToTarget()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#161F2E]/90 backdrop-blur-md border-b border-[#243248] shadow-md py-3.5'
          : 'bg-transparent py-5'
      }`}
    >

      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Screenshot Brand Mark: { Hezron } */}
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="group flex shrink-0 items-center gap-1.5 rounded-lg px-1.5 py-1 transition-opacity focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Hezron Njenga — Developer Portfolio"
        >
          <span className="font-mono text-xl font-bold text-cyan-400">{'{'}</span>
          <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Hezron
          </span>
          <span className="font-mono text-xl font-bold text-cyan-400">{'}'}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`relative text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-cyan-400" />
            ) : (
              <Sun className="w-4 h-4 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-cyan-400 bg-slate-900 border border-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#0F172A]/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-1 mb-6">
              {MOBILE_NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-cyan-950/40 text-white border border-cyan-500/40'
                        : 'text-white hover:text-cyan-300 hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                )
              })}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

