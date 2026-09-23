import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { BackgroundAura } from './BackgroundAura'
import { Footer } from './Footer'
import { ChatWidget } from './ChatWidget'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* Background Aura */}
      <BackgroundAura />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}

