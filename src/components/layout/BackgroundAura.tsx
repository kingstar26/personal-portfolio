export function BackgroundAura() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Dark Slate Base Background matching reference screenshot */}
      <div className="absolute inset-0 bg-[var(--bg-main)]" />


      {/* Atmospheric Soft Cyan Radial Accent - Top Center/Right */}
      <div 
        className="absolute -top-40 right-1/4 w-[600px] h-[500px] rounded-full opacity-[0.07] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #38BDF8 0%, rgba(56, 189, 248, 0) 70%)'
        }}
      />

      {/* Subtle Slate Blue Glow - Left Side */}
      <div 
        className="absolute top-1/3 -left-20 w-[500px] h-[450px] rounded-full opacity-[0.06] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #1E293B 0%, rgba(30, 41, 59, 0) 70%)'
        }}
      />

      {/* Grid Pattern Layer matching screenshots */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 20%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, black 40%, transparent 85%)'
        }}
      />

      {/* Top subtle hairline highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </div>
  )
}

