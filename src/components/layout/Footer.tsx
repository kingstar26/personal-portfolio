export function Footer() {
  const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())

  return (
    <footer className="relative z-10 border-t border-slate-700/70 bg-[#161F2E] px-4 py-8 text-center text-sm text-slate-300 sm:px-6">
      <p>
        Built with passion by <span className="font-semibold text-white">Hezron Njenga</span> | Thanks for stopping by! 👋 Have a good {currentDay}!
      </p>
    </footer>
  )
}
