import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    id: 'lucas-bennett',
    firstName: 'LUCAS',
    lastName: 'BENNETT',
    fullName: 'LUCAS BENNETT',
    role: 'SENIOR INTERIOR DESIGNER',
    specialty: 'Residential & Timber Sanctuaries',
    experience: '12+ YEARS EXPERIENCE',
    bio: 'Crafting bespoke residential sanctuaries combining organic solid timber, hand-finished stone, and spatial stillness.',
    portrait: '/expert-1.jpg',
    thumb: '/expert-1.jpg',
    useCustomWood: true,
    woodLeft: '/wood-lucas.png',
    woodRight: '/wood-bennett.png',
    accentColor: '#f97316'
  },
  {
    id: 'elena-rostova',
    firstName: 'ELENA',
    lastName: 'ROSTOVA',
    fullName: 'ELENA ROSTOVA',
    role: 'PRINCIPAL SPATIAL ARCHITECT',
    specialty: 'Monolithic Geometry & Daylight',
    experience: '15+ YEARS EXPERIENCE',
    bio: 'Directing monolithic spatial volumes, daylight choreography, and progressive mass-timber structural frameworks.',
    portrait: '/expert-2.jpg',
    thumb: '/expert-2.jpg',
    useCustomWood: false,
    accentColor: '#0ea5e9'
  },
  {
    id: 'marcus-vance',
    firstName: 'MARCUS',
    lastName: 'VANCE',
    fullName: 'MARCUS VANCE',
    role: 'MATERIALS & CRAFT DIRECTOR',
    specialty: 'Tactile Joinery & Acoustic Stone',
    experience: '14+ YEARS EXPERIENCE',
    bio: 'Curating tactile natural surfaces, custom acoustic timber joinery, and rare artisanal stone finishing.',
    portrait: '/expert-3.jpg',
    thumb: '/expert-3.jpg',
    useCustomWood: false,
    accentColor: '#eab308'
  },
  {
    id: 'sofia-chen',
    firstName: 'SOFIA',
    lastName: 'CHEN',
    fullName: 'SOFIA CHEN',
    role: 'BIOPHILIC ENVIRONMENT LEAD',
    specialty: 'Regenerative Botanical Atriums',
    experience: '10+ YEARS EXPERIENCE',
    bio: 'Harmonizing living botanical architecture, climate-responsive light atriums, and tranquil regenerative spaces.',
    portrait: '/expert-4.jpg',
    thumb: '/expert-4.jpg',
    useCustomWood: false,
    accentColor: '#10b981'
  },
  {
    id: 'julian-thorne',
    firstName: 'JULIAN',
    lastName: 'THORNE',
    fullName: 'JULIAN THORNE',
    role: 'SPATIAL VISUALIZATION DIRECTOR',
    specialty: 'Real-time UE5 Digital Twins',
    experience: '11+ YEARS EXPERIENCE',
    bio: 'Architect of photorealistic digital twins, real-time Unreal Engine 5 spatial walkthroughs, and evocative lighting.',
    portrait: '/expert-5.jpg',
    thumb: '/expert-5.jpg',
    useCustomWood: false,
    accentColor: '#8b5cf6'
  }
]

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0) // Default to Lucas Bennett
  const [isPaused, setIsPaused] = useState(false)
  const activeMember = TEAM_MEMBERS[activeIndex]

  // Auto-switch profile every 2.5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isPaused, activeIndex])

  return (
    <section
      id="experts"
      className="relative w-full min-h-screen bg-[#f7f6f2] text-neutral-900 py-24 md:py-36 overflow-hidden select-none border-t border-neutral-300/80"
    >
      {/* Subtle paper grain & tactile architectural backdrop */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-multiply" />

      {/* Architectural Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-neutral-300/80 grid grid-cols-1 md:grid-cols-4">
          <div className="border-r border-neutral-300/70 h-full" />
          <div className="border-r border-neutral-300/70 h-full" />
          <div className="border-r border-neutral-300/70 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between">
        
        {/* ========================================================
            HEADER ROW: MEET OUR TEAM // & EXPERTS *(INTERIOR SPECIALISTS)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 mb-10 border-b border-neutral-300/80 gap-6">
          {/* Left: MEET OUR TEAM // */}
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-950 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
              MEET OUR TEAM //
            </span>
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase hidden sm:inline">
              [PRACTICE DIRECTORS]
            </span>
          </div>

          {/* Right: EXPERTS *(INTERIOR SPECIALISTS) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 uppercase leading-none">
              EXPERTS
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-neutral-500 tracking-wider uppercase font-normal">
              *(INTERIOR SPECIALISTS)
            </span>
          </div>
        </div>

        {/* ========================================================
            CENTER STAGE: 3D WOODEN / SCULPTED NAME + EDITORIAL CARD + LAST NAME
           ======================================================== */}
        <div className="relative w-full my-auto py-4 md:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* LEFT: FIRST NAME */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.firstName}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center cursor-default"
              >
                {activeMember.useCustomWood ? (
                  <img
                    src={activeMember.woodLeft}
                    alt={activeMember.firstName}
                    className="max-h-20 sm:max-h-24 md:max-h-28 w-auto object-contain filter drop-shadow-[0_12px_22px_rgba(40,25,15,0.22)]"
                  />
                ) : (
                  <div className="text-center lg:text-right">
                    <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
                      {activeMember.firstName}
                    </span>
                    <span className="block font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mt-1">
                      PARTNER // 0{activeIndex + 1}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER: THE EDITORIAL PORTRAIT CARD (Matching Screenshot with Optical Face Focus Box) */}
          <div className="w-full lg:w-auto flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative w-[300px] sm:w-[350px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300/80 shadow-[0_30px_70px_rgba(0,0,0,0.18)] group"
                data-cursor="hover"
              >
                {/* Background Full Portrait (Softly atmospheric depth) */}
                <img
                  src={activeMember.portrait}
                  alt={activeMember.fullName}
                  className="w-full h-full object-cover object-[center_15%] filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient Cinematic Shadow Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/35 pointer-events-none" />

                {/* Optical Viewfinder Face Box (Signature architectural design detail) */}
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[130px] sm:w-[150px] h-[160px] sm:h-[180px] rounded-xl border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-none flex flex-col justify-between p-2">
                  <div className="w-full flex justify-between">
                    <span className="w-1.5 h-1.5 border-t border-l border-white" />
                    <span className="w-1.5 h-1.5 border-t border-r border-white" />
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="w-1.5 h-1.5 border-b border-l border-white" />
                    <span className="w-1.5 h-1.5 border-b border-r border-white" />
                  </div>
                </div>

                {/* Overlaid Editorial Micro-Typography */}
                
                {/* Top-Left: Name */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="font-heading text-xs md:text-sm font-bold tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {activeMember.fullName}
                  </span>
                </div>

                {/* Right / Mid-Right: Experience */}
                <div className="absolute top-[42%] right-5 z-10 text-right">
                  <span className="inline-block px-2 py-1 rounded bg-black/40 backdrop-blur-md border border-white/20 font-mono text-[9px] md:text-[10px] tracking-wider text-white uppercase font-medium">
                    {activeMember.experience}
                  </span>
                </div>

                {/* Bottom Details: Role & Bio */}
                <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col items-start">
                  <span className="font-heading text-xs md:text-sm font-bold tracking-[0.16em] text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {activeMember.role}
                  </span>
                  <span className="font-mono text-[9px] tracking-wider text-white/80 uppercase mt-1 leading-relaxed line-clamp-2">
                    {activeMember.bio}
                  </span>
                </div>

                {/* Corner Framing Brackets */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white/60 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: LAST NAME */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.lastName}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center cursor-default"
              >
                {activeMember.useCustomWood ? (
                  <img
                    src={activeMember.woodRight}
                    alt={activeMember.lastName}
                    className="max-h-20 sm:max-h-24 md:max-h-28 w-auto object-contain filter drop-shadow-[0_12px_22px_rgba(40,25,15,0.22)]"
                  />
                ) : (
                  <div className="text-center lg:text-left">
                    <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
                      {activeMember.lastName}
                    </span>
                    <span className="block font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mt-1">
                      {activeMember.specialty}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ========================================================
            BOTTOM ROW: 5 LUXURY HORIZONTAL TEAM PROFILE CARDS
            Clear photos, clear orientation, no cut-off heads!
           ======================================================== */}
        <div className="pt-8 border-t border-neutral-300/80 flex flex-col items-center justify-center">
          
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full flex items-center justify-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto py-3 no-scrollbar"
          >
            {TEAM_MEMBERS.map((member, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={member.id}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                  data-cursor="hover"
                  aria-label={`Select ${member.fullName}`}
                  className={`group relative flex items-center rounded-xl overflow-hidden transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-neutral-950 text-white shadow-xl ring-2 ring-neutral-950 scale-105'
                      : 'bg-white text-neutral-800 hover:bg-neutral-100 hover:scale-102 border border-neutral-300/90 shadow-sm'
                  } p-1.5 sm:p-2 pr-3 sm:pr-4 space-x-2.5 sm:space-x-3.5`}
                >
                  {/* Portrait Avatar with Crystal Clear Face Framing */}
                  <div className="relative w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 rounded-lg overflow-hidden shrink-0 bg-neutral-200">
                    <img
                      src={member.thumb}
                      alt={member.fullName}
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Active Indicator Ring */}
                    {isActive && (
                      <div className="absolute inset-0 border-2 border-white/60 rounded-lg pointer-events-none" />
                    )}
                  </div>

                  {/* Profile Details (Name, Role, Index) */}
                  <div className="flex flex-col text-left justify-center pr-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="font-mono text-[9px] opacity-50">
                        0{index + 1}
                      </span>
                      <span className="font-heading text-xs sm:text-sm font-bold tracking-wider uppercase truncate max-w-[100px] sm:max-w-[120px]">
                        {member.firstName} {member.lastName.charAt(0)}.
                      </span>
                    </div>
                    <span className={`font-mono text-[9px] sm:text-[10px] tracking-tight uppercase truncate max-w-[105px] sm:max-w-[130px] mt-0.5 ${
                      isActive ? 'text-white/70' : 'text-neutral-500'
                    }`}>
                      {member.role.split(' ')[0]} Specialist
                    </span>
                  </div>

                  {/* Active Status Dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 animate-pulse ml-1" />
                  )}

                  {/* 2.5s Auto-advance Progress Line on Active Card */}
                  {isActive && !isPaused && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2.5, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-[2px] bg-orange-500 pointer-events-none"
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="mt-3 flex items-center space-x-2 text-neutral-400 font-mono text-[10px] tracking-widest uppercase">
            <span>SELECT A DIRECTOR • AUTO-ADVANCING EVERY 2.5S • HOVER TO PAUSE</span>
          </div>

        </div>

      </div>
    </section>
  )
}
