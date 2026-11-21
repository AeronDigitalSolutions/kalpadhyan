import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function FooterSection() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative w-full bg-[#050507] text-white overflow-hidden select-none border-t border-white/[0.12]">
      
      {/* 1. ATMOSPHERIC CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="Kalpadhyan Architectural Atmosphere"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2] blur-[1px]"
        />
        {/* Deep Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-[#050507]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-transparent to-[#050507]/90" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      {/* 2. TRANSLUCENT ALL-WHITE KALPADHYAN LOGO WATERMARK (Replacing INTERIO STUDIOS) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo-white.png"
          alt="Kalpadhyan Watermark"
          className="w-[85%] max-w-[950px] h-auto object-contain opacity-[0.14] select-none filter contrast-125"
        />
      </div>

      {/* 3. VERTICAL ARCHITECTURAL GRID GUIDES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-white/[0.08] grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-white/[0.08] h-full" />
          <div className="border-r border-white/[0.08] h-full" />
          <div className="border-r border-white/[0.08] h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 flex flex-col justify-between min-h-[560px] md:min-h-[640px]">
        
        {/* ========================================================
            STAGGERED ARCHITECTURAL NAVIGATION GRID BOXES (Matching Screenshot)
           ======================================================== */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
          
          {/* Box 1: ABOUT (Col 1, higher) */}
          <div className="flex flex-col justify-start md:pt-4">
            <a
              href="#"
              data-cursor="hover"
              className="group relative p-5 md:p-6 border border-white/[0.12] bg-[#070709]/60 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300 rounded-none flex items-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[10px] text-white/30 group-hover:text-orange-400 transition-colors">■■</span>
              <span className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-white/90 group-hover:text-white uppercase transition-colors">
                ABOUT
              </span>
              <span className="font-mono text-[10px] text-white/30 group-hover:text-orange-400 transition-colors">■■</span>
            </a>
          </div>

          {/* Box 2: PROJECT (Col 2, stepped lower) */}
          <div className="flex flex-col justify-start md:pt-20">
            <a
              href="#project"
              data-cursor="hover"
              className="group relative p-5 md:p-6 border border-white/[0.12] bg-[#070709]/60 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300 rounded-none flex items-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[10px] text-white/30 group-hover:text-cyan-400 transition-colors">■■</span>
              <span className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-white/90 group-hover:text-white uppercase transition-colors">
                PROJECT
              </span>
              <span className="font-mono text-[10px] text-white/30 group-hover:text-cyan-400 transition-colors">■■</span>
            </a>
          </div>

          {/* Box 3: BLOG (Col 3, stepped higher) */}
          <div className="flex flex-col justify-start md:pt-8">
            <a
              href="#blog"
              data-cursor="hover"
              className="group relative p-5 md:p-6 border border-white/[0.12] bg-[#070709]/60 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300 rounded-none flex items-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[10px] text-white/30 group-hover:text-amber-400 transition-colors">■■</span>
              <span className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-white/90 group-hover:text-white uppercase transition-colors">
                BLOG
              </span>
              <span className="font-mono text-[10px] text-white/30 group-hover:text-amber-400 transition-colors">■■</span>
            </a>
          </div>

          {/* Box 4: CONTACT (Col 4, stepped lower) */}
          <div className="flex flex-col justify-start md:pt-24">
            <a
              href="#contact"
              data-cursor="hover"
              className="group relative p-5 md:p-6 border border-white/[0.12] bg-[#070709]/60 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300 rounded-none flex items-center justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[10px] text-white/30 group-hover:text-emerald-400 transition-colors">■■</span>
              <span className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-white/90 group-hover:text-white uppercase transition-colors">
                CONTACT
              </span>
              <span className="font-mono text-[10px] text-white/30 group-hover:text-emerald-400 transition-colors">■■</span>
            </a>
          </div>

        </div>

        {/* ========================================================
            BOTTOM MULTI-CELL ARCHITECTURAL FOOTER GRID (Matching Screenshot)
           ======================================================== */}
        <div className="w-full border-t border-white/[0.12] pt-6 flex flex-col space-y-4">
          
          {/* Row 1: Copyright on left, Privacy Policy on right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-white/60">
            <div className="flex items-center space-x-3">
              <span>© 2026 ALL RIGHTS RESERVED.</span>
              <span className="text-white/30 font-mono text-[10px]">■</span>
            </div>

            <div className="flex items-center space-x-3">
              <a href="#" data-cursor="hover" className="hover:text-white transition-colors">
                PRIVACY POLICY
              </a>
              <span className="text-white/30 font-mono text-[10px]">■■</span>
            </div>
          </div>

          {/* Row 2: Terms & Conditions on left, Socials + Back to Top on right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-white/60 border-t border-white/[0.08] pt-4">
            <div className="flex items-center space-x-3">
              <a href="#" data-cursor="hover" className="hover:text-white transition-colors">
                TERMS & CONDITIONS
              </a>
              <span className="text-white/30 font-mono text-[10px]">■■■</span>
            </div>

            <div className="flex items-center space-x-6 sm:space-x-8">
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" data-cursor="hover" className="hover:text-white transition-colors">
                  INSTAGRAM
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" data-cursor="hover" className="hover:text-white transition-colors">
                  FACEBOOK
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" data-cursor="hover" className="hover:text-white transition-colors">
                  TWITTER
                </a>
                <span className="text-white/30 font-mono text-[10px]">■■■■</span>
              </div>

              {/* Scroll to Top Trigger */}
              <button
                onClick={scrollToTop}
                data-cursor="hover"
                title="Return to top of page"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all shrink-0"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
