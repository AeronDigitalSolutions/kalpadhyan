import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'

const SERVICES = [
  {
    id: 'arch-vis',
    title: 'ARCHITECTURAL VISUALIZATION',
    tag: '■■',
    subtitle: 'Photorealistic Spaces',
    description: 'Transforming blueprints into cinematic hyper-real environments before construction.'
  },
  {
    id: '3d-anim',
    title: '3D ANIMATION',
    tag: '■■',
    subtitle: 'Cinematic Flow',
    description: 'Dynamic camera paths, high-fidelity cloth/fluid physics, and evocative spatial narratives.'
  },
  {
    id: 'ar-vr',
    title: 'AR/VR EXPERIENCES',
    tag: '■■',
    subtitle: 'Spatial Computing',
    description: 'Real-time Unreal Engine 5 walkthroughs for Apple Vision Pro, Meta Quest & WebGL.'
  },
  {
    id: 'cgi-ads',
    title: 'CGI ADVERTISING',
    tag: '■■■■',
    subtitle: 'Product & Brand Impact',
    description: 'Avant-garde CGI campaigns, surreal luxury compositions, and visual direction.'
  }
]

// Randomized / distinct shutter delays and durations for the 4 architectural columns
const SHUTTER_CONFIGS = [
  { id: 0, delay: 0.35, duration: 1.25, ease: [0.77, 0, 0.175, 1] }, // Col 1: opens 2nd
  { id: 1, delay: 0.60, duration: 1.35, ease: [0.83, 0, 0.17, 1] },  // Col 2: opens 4th
  { id: 2, delay: 0.15, duration: 1.15, ease: [0.76, 0, 0.24, 1] },  // Col 3: opens 1st (abrupt)
  { id: 3, delay: 0.42, duration: 1.25, ease: [0.86, 0, 0.07, 1] }   // Col 4: opens 3rd
]

export default function HeroSection({ onOpenMenu }) {
  const [hoveredTab, setHoveredTab] = useState(null)
  const [revealKey, setRevealKey] = useState(0) // allows replaying reveal
  const containerRef = useRef(null)

  // 3D Parallax Tilt for Logo
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 200 })
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 200 })

  const rotateX = useTransform(smoothMouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-12, 12])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[720px] bg-[#050506] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. BACKGROUND LAYER: Fullscreen Looping Video (z-0) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] saturate-[1.1]"
          src="/whatwedeliver.mp4"
        />

        {/* Ambient Film Vignette & Shadow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-[#050506]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050506]/60 via-transparent to-[#050506]/60" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Subtle Film Grain Overlay */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-30 mix-blend-overlay" />
      </div>

      {/* 2. 4-COLUMN SHUTTER CURTAIN REVEAL (z-10: Behind Logo and UI, purely over the video) */}
      <div key={revealKey} className="absolute inset-0 z-10 pointer-events-none grid grid-cols-1 md:grid-cols-4">
        {SHUTTER_CONFIGS.map((col) => (
          <div key={col.id} className="relative h-full w-full overflow-hidden">
            {/* Top Shutter: slides from center upwards */}
            <motion.div
              initial={{ y: '0%' }}
              animate={{ y: '-100%' }}
              transition={{
                delay: col.delay,
                duration: col.duration,
                ease: col.ease
              }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#050506] flex flex-col justify-end"
            >
              {/* Parting hairline light edge at center boundary */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            </motion.div>

            {/* Bottom Shutter: slides from center downwards */}
            <motion.div
              initial={{ y: '0%' }}
              animate={{ y: '100%' }}
              transition={{
                delay: col.delay,
                duration: col.duration,
                ease: col.ease
              }}
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050506] flex flex-col justify-start"
            >
              {/* Parting hairline light edge at center boundary */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* 3. ARCHITECTURAL GRID OVERLAY (z-20: Always visible lines) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Top Horizontal Hairline (below header) */}
        <div className="absolute top-[88px] left-0 right-0 h-[1px] bg-white/[0.12]" />

        {/* Bottom Horizontal Hairline (above bottom service bar) */}
        <div className="absolute bottom-[72px] md:bottom-[76px] left-0 right-0 h-[1px] bg-white/[0.12]" />

        {/* Vertical Grid Columns matching the exact 4-panel division */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 max-w-full">
          {/* Col 1 Line */}
          <div className="border-r border-white/[0.10] h-full relative">
            <span className="absolute top-[84px] -right-[5px] text-[10px] text-white/40 font-mono">+</span>
            <span className="absolute bottom-[70px] -right-[5px] text-[10px] text-white/40 font-mono">+</span>
          </div>
          {/* Col 2 Line */}
          <div className="border-r border-white/[0.10] h-full relative hidden md:block">
            <span className="absolute top-[84px] -right-[5px] text-[10px] text-white/40 font-mono">+</span>
            <span className="absolute bottom-[70px] -right-[5px] text-[10px] text-white/40 font-mono">+</span>
          </div>
          {/* Col 3 Line */}
          <div className="border-r border-white/[0.10] h-full relative hidden md:block">
            <span className="absolute top-[84px] -right-[5px] text-[10px] text-white/40 font-mono">+</span>
            <span className="absolute bottom-[70px] -right-[5px] text-[10px] text-white/40 font-mono">+</span>
          </div>
          {/* Col 4 Line */}
          <div className="h-full relative hidden md:block" />
        </div>
      </div>

      {/* Replay Shutter Animation Pill (z-30) */}
      <div className="absolute top-24 right-6 md:right-12 z-30 pointer-events-auto">
        <button
          onClick={() => setRevealKey(prev => prev + 1)}
          data-cursor="hover"
          title="Replay opening shutter animation"
          className="flex items-center space-x-1.5 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest text-white/40 hover:text-white glass-panel border border-white/10 hover:border-white/30 transition-all"
        >
          <RotateCcw size={11} className="transition-transform group-hover:-rotate-90" />
          <span>REPLAY REVEAL</span>
        </button>
      </div>

      {/* 4. ALWAYS VISIBLE HERO CONTENT (z-30: Positioned ABOVE the shutters) */}
      <div className="relative z-30 flex-1 flex flex-col justify-center items-center px-4 md:px-12 w-full max-w-7xl mx-auto pointer-events-none">
        
        {/* Main Composition Container */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* ALWAYS VISIBLE FLOATING BADGE (Above Logo on Left) */}
          <div className="w-full max-w-4xl flex justify-start mb-3 md:mb-5 pl-2 md:pl-0 pointer-events-auto">
            <div
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-sm glass-panel border border-white/15 shadow-2xl backdrop-blur-md group hover:border-white/35 transition-all cursor-default"
              data-cursor="hover"
            >
              <span className="flex items-center space-x-1 text-[#22d3ee] font-mono text-[10px] tracking-wider">
                <span className="inline-block w-1.5 h-1.5 bg-[#22d3ee] rounded-xs animate-pulse" />
                <span className="inline-block w-1.5 h-1.5 bg-[#f97316] rounded-xs" />
              </span>
              <span className="font-mono text-[11px] md:text-xs text-white/95 font-medium tracking-[0.18em] uppercase">
                CREATING IMMERSIVE DIGITAL EXPERIENCES
              </span>
              <span className="flex items-center space-x-1 text-[#f97316] font-mono text-[10px] tracking-wider">
                <span className="inline-block w-1.5 h-1.5 bg-[#f97316] rounded-xs" />
                <span className="inline-block w-1.5 h-1.5 bg-[#22d3ee] rounded-xs animate-pulse" />
              </span>
            </div>
          </div>

          {/* ALWAYS VISIBLE CENTER HERO LOGO (With 3D Parallax) */}
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformPerspective: 1000
            }}
            className="relative max-w-4xl w-full flex flex-col items-center justify-center cursor-pointer group pointer-events-auto"
            data-cursor="hover"
          >
            {/* Subtle Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/15 to-transparent blur-[60px] rounded-full scale-110 pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-700" />

            {/* Crisp Original HD Kalpadhyan Logo */}
            <img
              src="/logo.png"
              alt="Kalpadhyan - Frame the Future"
              className="w-[90%] md:w-[75%] max-w-[820px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* ALWAYS VISIBLE STUDIO & LABS TAGLINE */}
            <div className="mt-4 flex items-center space-x-4 text-white/60 font-mono text-[10px] tracking-[0.25em] uppercase">
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>STUDIO & LABS</span>
              </span>
              <span>/</span>
              <span>NEXT-GEN SPATIAL ARCHITECTURE</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 5. ALWAYS VISIBLE BOTTOM SERVICE GRID TABS (z-30) */}
      <div className="relative z-30 w-full border-t border-white/[0.12] bg-[#050506]/85 backdrop-blur-md pointer-events-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {SERVICES.map((service) => {
            const isHovered = hoveredTab === service.id
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredTab(service.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative py-4 md:py-5 px-5 md:px-6 cursor-pointer group transition-all duration-300 overflow-hidden"
                data-cursor="hover"
              >
                {/* Hover Background Accent Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-orange-500/15 via-white/[0.03] to-transparent transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Top Glowing Indicator Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-cyan-400 transition-all duration-300 ${
                    isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-heading text-xs md:text-[13px] tracking-[0.14em] text-white/80 group-hover:text-white font-medium transition-colors">
                    {service.title}
                  </span>

                  <span className="font-mono text-[11px] text-white/40 group-hover:text-orange-400 transition-colors ml-2 shrink-0">
                    {service.tag}
                  </span>
                </div>

                {/* Interactive Tooltip Description on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-[10px] text-white/50 tracking-wide leading-relaxed overflow-hidden"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
