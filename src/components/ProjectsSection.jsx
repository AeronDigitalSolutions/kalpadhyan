import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Pause } from 'lucide-react'

const PROJECTS = [
  {
    id: 'modern-luxury-residence',
    title: 'MODERN LUXURY RESIDENCE',
    location: 'New York, USA',
    year: '( 2026 )',
    category: 'RESIDENTIAL ARCHITECTURE',
    image: '/project-1.jpg',
    tag: 'LAKEFRONT PAVILION'
  },
  {
    id: 'executive-office-workspace',
    title: 'Executive Office Workspace',
    location: 'Los Angeles, USA',
    year: '( 2026 )',
    category: 'COMMERCIAL HEADQUARTERS',
    image: '/project-2.jpg',
    tag: 'CANTILEVER TERRACE'
  },
  {
    id: 'boutique-cafe-interior',
    title: 'Boutique Café Interior',
    location: 'Chicago, USA',
    year: '( 2026 )',
    category: 'HOSPITALITY & ATRIUM',
    image: '/project-3.jpg',
    tag: 'ZEN LIGHT COURT'
  },
  {
    id: 'alpine-sunken-lounge',
    title: 'Alpine Sunken Lounge',
    location: 'Zurich, Switzerland',
    year: '( 2026 )',
    category: 'BIOPHILIC RETREAT',
    image: '/project-4.jpg',
    tag: 'PERIMETER GLOW PIT'
  },
  {
    id: 'winter-fireplace-pavilion',
    title: 'Winter Fireplace Pavilion',
    location: 'Kyoto, Japan',
    year: '( 2026 )',
    category: 'PRIVATE VILLA',
    image: '/project-5.jpg',
    tag: 'SNOW VIEW SANCTUARY'
  }
]

// Duplicate list to achieve a seamless, glitch-free infinite loop
const INFINITE_PROJECTS = [...PROJECTS, ...PROJECTS]

export default function ProjectsSection() {
  const [isManualPaused, setIsManualPaused] = useState(false)

  return (
    <section
      id="projects"
      className="relative w-full bg-[#f6f5f0] text-neutral-900 py-24 md:py-36 overflow-hidden select-none border-t border-neutral-300"
    >
      {/* Subtle tactile paper grain */}
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ========================================================
            HEADER ROW: OUR BEST WORK // & PROJECTS *(COMPLETED DESIGNS)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 mb-10 border-b border-neutral-300/80 gap-6">
          {/* Left: OUR BEST WORK // */}
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-950 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
              OUR BEST WORK //
            </span>
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase hidden sm:inline">
              [ARCHITECTURAL PORTFOLIO]
            </span>
          </div>

          {/* Right: PROJECTS *(COMPLETED DESIGNS) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 uppercase leading-none">
              PROJECTS
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-neutral-500 tracking-wider uppercase font-normal">
              *(COMPLETED DESIGNS)
            </span>
          </div>
        </div>

        {/* Status & Control Row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs tracking-widest text-neutral-600 uppercase font-medium">
              SELECTED WORKS [01 — 05]
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <span className="hidden sm:inline-block font-mono text-[11px] tracking-wider text-neutral-500 uppercase">
              INFINITE STREAM // HOVER ANY IMAGE TO PAUSE
            </span>
          </div>

          {/* Manual Play/Pause Toggle Switch */}
          <button
            onClick={() => setIsManualPaused(!isManualPaused)}
            data-cursor="hover"
            aria-label={isManualPaused ? "Resume infinite scroll" : "Pause infinite scroll"}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-neutral-300 bg-white/60 hover:bg-white text-neutral-800 font-mono text-[10px] tracking-widest uppercase transition-all shadow-sm"
          >
            {isManualPaused ? (
              <>
                <Play size={11} className="text-emerald-600 fill-emerald-600" />
                <span>RESUME</span>
              </>
            ) : (
              <>
                <Pause size={11} className="text-orange-600 fill-orange-600" />
                <span>PAUSE</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* ========================================================
          FULL-WIDTH INFINITE TRAIN MARQUEE TRACK (Right to Left)
          - Seamless loop: [...PROJECTS, ...PROJECTS]
          - Hovering over any card immediately freezes the train
         ======================================================== */}
      <div className="relative w-full overflow-hidden py-4 cursor-pointer">
        <div
          className={`animate-train-loop flex items-start space-x-6 md:space-x-8 ${
            isManualPaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {INFINITE_PROJECTS.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[380px] group transition-transform duration-300 hover:-translate-y-1"
              data-cursor="hover"
            >
              {/* 1. TOP METADATA ROW: Location on left, Year on right */}
              <div className="flex items-center justify-between pb-3 text-neutral-600 font-mono text-xs md:text-sm border-b border-neutral-300/70 mb-4">
                <span className="font-sans font-medium text-neutral-800 truncate pr-2">
                  {project.location}
                </span>
                <span className="text-neutral-500 font-mono text-xs shrink-0">
                  {project.year}
                </span>
              </div>

              {/* 2. CENTER IMAGE CARD */}
              <div className="relative w-full aspect-[4/4.3] rounded-lg overflow-hidden bg-neutral-200 border border-neutral-300/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Hover Gradient & Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-white">
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                      {project.tag}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-white" />
                    </span>
                  </div>
                </div>

                {/* Corner Frame Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* 3. BOTTOM TITLE ROW */}
              <div className="pt-4 flex flex-col">
                <h3 className="font-heading text-base md:text-lg font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors uppercase leading-snug truncate">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase mt-1">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
