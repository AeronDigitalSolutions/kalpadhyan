import React from 'react'
import {
  Building2,
  Glasses,
  Clapperboard,
  Film,
  Compass,
  Home,
  Sparkles,
  Gamepad2,
  Code2,
  Megaphone
} from 'lucide-react'

// 10 3D Revolving Cylinder Creative Technology Capabilities
const REVOLVING_CARDS = [
  {
    index: 0,
    colorCard: '34, 211, 238', // Cyan
    title: 'ARCHVIZ',
    subtitle: '3D SPACES',
    icon: <Building2 className="w-5 h-5 text-cyan-300" strokeWidth={1.75} />
  },
  {
    index: 1,
    colorCard: '56, 189, 248', // Sky Blue
    title: 'AR / VR',
    subtitle: 'IMMERSIVE',
    icon: <Glasses className="w-5 h-5 text-sky-300" strokeWidth={1.75} />
  },
  {
    index: 2,
    colorCard: '192, 132, 252', // Purple
    title: 'CGI ADS',
    subtitle: 'BRAND FILMS',
    icon: <Clapperboard className="w-5 h-5 text-purple-300" strokeWidth={1.75} />
  },
  {
    index: 3,
    colorCard: '251, 146, 60', // Orange
    title: '3D FILMS',
    subtitle: 'ANIMATION',
    icon: <Film className="w-5 h-5 text-orange-300" strokeWidth={1.75} />
  },
  {
    index: 4,
    colorCard: '163, 230, 53', // Lime
    title: '360° TOUR',
    subtitle: 'VIRTUAL',
    icon: <Compass className="w-5 h-5 text-lime-300" strokeWidth={1.75} />
  },
  {
    index: 5,
    colorCard: '248, 113, 113', // Coral Red
    title: 'REAL ESTATE',
    subtitle: 'MARKETING',
    icon: <Home className="w-5 h-5 text-rose-300" strokeWidth={1.75} />
  },
  {
    index: 6,
    colorCard: '96, 165, 250', // Blue
    title: 'AI VIDEO',
    subtitle: 'CREATION',
    icon: <Sparkles className="w-5 h-5 text-blue-300" strokeWidth={1.75} />
  },
  {
    index: 7,
    colorCard: '217, 70, 239', // Fuchsia
    title: 'GAME DEV',
    subtitle: 'INTERACTIVE',
    icon: <Gamepad2 className="w-5 h-5 text-fuchsia-300" strokeWidth={1.75} />
  },
  {
    index: 8,
    colorCard: '226, 232, 240', // Silver / White
    title: 'WEB / APP',
    subtitle: 'DEVELOPMENT',
    icon: <Code2 className="w-5 h-5 text-slate-200" strokeWidth={1.75} />
  },
  {
    index: 9,
    colorCard: '45, 212, 191', // Teal
    title: 'DIGITAL',
    subtitle: 'MARKETING',
    icon: <Megaphone className="w-5 h-5 text-teal-300" strokeWidth={1.75} />
  }
]

export default function HomeRenovationSection() {
  return (
    <section
      id="partners"
      className="relative w-full bg-[#050507] text-white overflow-hidden py-20 md:py-28 border-t border-white/[0.08] select-none"
    >
      {/* Subtle Atmospheric Lighting & Film Grain */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-b from-cyan-600/10 via-orange-500/5 to-transparent blur-[140px] pointer-events-none" />

      {/* Architectural Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-white/10 grid grid-cols-1 md:grid-cols-4">
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row: CREATIVE TECHNOLOGY // & *(2026 — BEYOND) */}
        <div className="flex flex-col pb-6 mb-8 border-b border-white/[0.12] gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white">
                CREATIVE TECHNOLOGY //
              </span>
              <span className="font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase hidden sm:inline">
                [IMMERSIVE DIGITAL EXPERIENCES]
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 font-medium">
                *(2026 — BEYOND)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-[10px] font-mono tracking-wider text-cyan-300 uppercase border border-cyan-500/20">
                EXPLORING THE FUTURE
              </span>
              <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase hidden md:inline">
                [10 CREATIVE CAPABILITIES]
              </span>
            </div>
          </div>

          {/* Subheading: KALPADHYAN — WHERE IMAGINATION BECOMES EXPERIENCE */}
          <div className="flex items-center">
            <h2 className="font-heading text-base sm:text-xl md:text-2xl font-light tracking-[0.14em] uppercase text-white/90">
              KALPADHYAN <span className="text-orange-500/80 mx-1.5">—</span> <span className="bg-gradient-to-r from-white via-white/90 to-cyan-400 bg-clip-text text-transparent font-medium">WHERE IMAGINATION BECOMES EXPERIENCE</span>
            </h2>
          </div>
        </div>

        {/* 
          ============================================================
          3D REVOLVING CYLINDRICAL CARDS (10 Creative Capabilities)
          ============================================================
        */}
        <div className="relative w-full h-[380px] md:h-[440px] flex items-center justify-center overflow-visible my-4">
          
          {/* The 3D Revolving Cylinder Ring */}
          <div
            className="animate-revolving-cards relative"
            style={{
              '--quantity': 10,
              '--w': '140px',
              '--h': '190px',
              '--translateZ': 'calc((var(--w) + var(--h)) * 1.35)',
              '--rotateX': '-12deg',
              '--perspective': '1200px',
              width: 'var(--w)',
              height: 'var(--h)',
            }}
          >
            {REVOLVING_CARDS.map((card) => (
              <div
                key={card.index}
                data-cursor="hover"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1.5px solid rgba(${card.colorCard}, 0.85)`,
                  boxShadow: `0 0 25px rgba(${card.colorCard}, 0.25), inset 0 0 20px rgba(${card.colorCard}, 0.15)`,
                  transform: `rotateY(calc((360deg / var(--quantity)) * ${card.index})) translateZ(var(--translateZ))`,
                  background: `radial-gradient(circle at top left, rgba(${card.colorCard}, 0.18) 0%, rgba(10, 12, 16, 0.88) 75%, rgba(5, 5, 7, 0.98) 100%)`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                className="flex flex-col items-center justify-between p-4 group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Top Bar: Icon + Index */}
                <div className="w-full flex items-center justify-between">
                  <div
                    className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                    style={{ color: `rgb(${card.colorCard})` }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="font-mono text-xs font-semibold tracking-wider"
                    style={{ color: `rgb(${card.colorCard})` }}
                  >
                    0{card.index + 1}
                  </span>
                </div>

                {/* Center Content: Title & Subtitle */}
                <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center space-y-1.5 w-full px-1">
                  <span className="font-heading font-bold text-sm sm:text-base tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                    {card.title}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-[0.2em] uppercase font-semibold"
                    style={{ color: `rgb(${card.colorCard})` }}
                  >
                    {card.subtitle}
                  </span>
                </div>

                {/* Bottom Capability Tag */}
                <div className="w-full flex items-center justify-between font-mono text-[8px] text-white/40 border-t border-white/10 pt-2">
                  <span className="uppercase tracking-widest text-[7.5px]">CAPABILITY</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: `rgb(${card.colorCard})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
