import React from 'react'

// 10 3D Revolving Cylinder Partner Cards
const REVOLVING_CARDS = [
  {
    index: 0,
    colorCard: '142, 249, 252',
    name: 'amwell',
    category: 'Digital Health Spaces',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-2">
        <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span className="font-heading font-bold text-sm tracking-tight text-white uppercase">amwell</span>
      </div>
    )
  },
  {
    index: 1,
    colorCard: '142, 252, 204',
    name: 'CLEAR',
    category: 'Biometric Access',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-2">
        <svg className="w-6 h-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="12" cy="20" r="1.5" />
          <circle cx="4" cy="12" r="1.5" />
          <circle cx="20" cy="12" r="1.5" />
          <circle cx="6.34" cy="6.34" r="1.5" />
          <circle cx="17.66" cy="17.66" r="1.5" />
        </svg>
        <span className="font-heading font-black text-sm tracking-[0.2em] text-white">CLEAR</span>
      </div>
    )
  },
  {
    index: 2,
    colorCard: '142, 252, 157',
    name: 'prismic',
    category: 'Spatial CMS',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-2">
        <svg className="w-6 h-6 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <span className="font-heading font-semibold text-sm tracking-normal text-white lowercase">prismic</span>
      </div>
    )
  },
  {
    index: 3,
    colorCard: '215, 252, 142',
    name: 'POLIFORM',
    category: 'Italian Furniture',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="font-heading font-light text-base tracking-[0.22em] text-white uppercase">POLIFORM</span>
        <span className="font-mono text-[8px] text-white/50 tracking-widest uppercase">MILANO</span>
      </div>
    )
  },
  {
    index: 4,
    colorCard: '252, 252, 142',
    name: 'HORMONE HEALTH',
    category: 'Retreat Spaces',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1 text-center">
        <svg className="w-5 h-5 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 9 9" />
        </svg>
        <span className="font-heading font-bold text-[10px] tracking-wider text-white uppercase leading-none">Hormone Health</span>
      </div>
    )
  },
  {
    index: 5,
    colorCard: '252, 208, 142',
    name: 'VITRA',
    category: 'Iconic Chairs',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="font-heading font-bold text-lg tracking-[0.25em] text-amber-300 uppercase">vitra.</span>
      </div>
    )
  },
  {
    index: 6,
    colorCard: '252, 142, 142',
    name: 'B&B ITALIA',
    category: 'Modern Living',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="font-heading font-bold text-sm tracking-[0.2em] text-rose-300 uppercase">B&B ITALIA</span>
      </div>
    )
  },
  {
    index: 7,
    colorCard: '252, 142, 239',
    name: 'HERMAN MILLER',
    category: 'Ergonomic Craft',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="font-heading font-medium text-xs tracking-[0.2em] text-fuchsia-300 uppercase">Herman Miller</span>
      </div>
    )
  },
  {
    index: 8,
    colorCard: '204, 142, 252',
    name: 'BANG & OLUFSEN',
    category: 'Acoustic Design',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="font-heading font-bold text-xs tracking-[0.2em] text-purple-300 uppercase">B&O SOUND</span>
      </div>
    )
  },
  {
    index: 9,
    colorCard: '142, 202, 252',
    name: 'FOSTER + PARTNERS',
    category: 'Master Architecture',
    logo: (
      <div className="flex flex-col items-center justify-center space-y-1 text-center">
        <span className="font-heading font-medium text-[11px] tracking-[0.18em] text-sky-300 uppercase">FOSTER + PARTNERS</span>
      </div>
    )
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
        {/* Header Row: CREATIVE TECHNOLOGY // & *(2014 - 2026) */}
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

            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 font-medium">
                *(2014 — 2026)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono tracking-wider text-white/80 uppercase border border-white/10">
                ACTIVE ROSTER
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
          3D REVOLVING CYLINDRICAL CARDS (Exact mathematics & animation)
          ============================================================
        */}
        <div className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center overflow-visible my-4">
          
          {/* The 3D Revolving Cylinder Ring */}
          <div
            className="animate-revolving-cards relative"
            style={{
              '--quantity': 10,
              '--w': '130px',
              '--h': '180px',
              '--translateZ': 'calc((var(--w) + var(--h)) * 1.35)',
              '--rotateX': '-13deg',
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
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: `1.5px solid rgba(${card.colorCard}, 0.85)`,
                  boxShadow: `0 0 25px rgba(${card.colorCard}, 0.25), inset 0 0 20px rgba(${card.colorCard}, 0.15)`,
                  transform: `rotateY(calc((360deg / var(--quantity)) * ${card.index})) translateZ(var(--translateZ))`,
                  background: `radial-gradient(circle, rgba(${card.colorCard}, 0.15) 0%, rgba(10, 12, 16, 0.85) 75%, rgba(5, 5, 7, 0.95) 100%)`,
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
                className="flex flex-col items-center justify-between p-4 group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Top Index Marker */}
                <div className="w-full flex items-center justify-between font-mono text-[9px] text-white/40">
                  <span>0{card.index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `rgb(${card.colorCard})` }} />
                </div>

                {/* Brand Logo in Center */}
                <div className="relative z-10 my-auto text-center">
                  {card.logo}
                </div>

                {/* Bottom Category Tag */}
                <span className="font-mono text-[8px] tracking-wider text-white/50 uppercase text-center truncate w-full">
                  {card.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
