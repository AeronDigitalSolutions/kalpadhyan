import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Scan, Eye, Activity, Cpu, Sparkles, Terminal } from 'lucide-react'

// Holographic 3D Interactive Card with AR/VR Telemetry & Laser Sweep
function HolographicImageCard({ src, alt, camId, title, telemetry, accent = 'cyan' }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // 3D Parallax Tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 260, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 260, damping: 25 })

  const rotateX = useTransform(springY, [-120, 120], [10, -10])
  const rotateY = useTransform(springX, [-150, 150], [-10, 10])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const accentBorder = accent === 'orange' ? 'group-hover:border-orange-500/70' : 'group-hover:border-cyan-400/70'
  const accentGlow = accent === 'orange' ? 'group-hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]' : 'group-hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]'
  const accentBadge = accent === 'orange' ? 'bg-orange-500/20 text-orange-400 border-orange-500/40' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40'
  const dotColor = accent === 'orange' ? 'bg-orange-400' : 'bg-cyan-400'

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[260px] md:min-h-[300px] p-4 md:p-6 flex items-center justify-center overflow-hidden group cursor-pointer"
      data-cursor="hover"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000
        }}
        className={`relative w-full h-full min-h-[220px] rounded-lg overflow-hidden border border-white/15 bg-black/80 transition-all duration-500 ${accentBorder} ${accentGlow}`}
      >
        {/* The Base Photo */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92] transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
        />

        {/* AR Holographic Scanline Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />

        {/* Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

        {/* Holographic Diagonal Laser Scan Sweep on Hover */}
        <div
          className={`absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 pointer-events-none transition-transform duration-1000 ease-in-out ${
            isHovered ? 'translate-x-[200%] translate-y-[200%]' : '-translate-x-[50%] -translate-y-[50%]'
          }`}
        />

        {/* Top AR HUD Telemetry Readout */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${dotColor} animate-ping`} />
            <span className="font-mono text-[9px] tracking-widest text-white/90 uppercase font-bold">
              {camId}
            </span>
          </div>

          <div className={`px-2 py-0.5 rounded-full backdrop-blur-md border text-[8px] font-mono tracking-widest uppercase transition-all ${accentBadge}`}>
            {telemetry}
          </div>
        </div>

        {/* Center Optical Crosshair (Appears on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="relative w-16 h-16 rounded-full border border-white/30 flex items-center justify-center animate-spin-slow">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/60" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/60" />
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 h-0.5 w-2 bg-white/60" />
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-0.5 w-2 bg-white/60" />
          </div>
        </div>

        {/* Bottom Title & Specs */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col pointer-events-none">
          <span className="font-heading text-xs md:text-sm font-bold tracking-wider text-white uppercase drop-shadow-md">
            {title}
          </span>
          <div className="flex items-center justify-between mt-0.5 text-white/60 font-mono text-[9px]">
            <span>UE5 SPATIAL SIMULATION</span>
            <span className="text-white/40">120 FPS // RAYTRACED</span>
          </div>
        </div>

        {/* Futuristic Cybernetic Corner Brackets */}
        <div className={`absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/50 transition-colors ${accentBorder}`} />
        <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/50 transition-colors ${accentBorder}`} />
        <div className={`absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/50 transition-colors ${accentBorder}`} />
        <div className={`absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/50 transition-colors ${accentBorder}`} />
      </motion.div>
    </div>
  )
}

export default function ProcessSection() {
  const containerRef = useRef(null)
  const [hoveredCell, setHoveredCell] = useState(null)

  // Scroll Parallax & Exit Kinematics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Dystopian Cybernetic Exit Kinematics (Glides up and smoothly de-resolves)
  const matrixY = useTransform(scrollYProgress, [0.65, 0.95], [0, -85])
  const matrixOpacity = useTransform(scrollYProgress, [0.75, 0.98], [1, 0.15])
  const matrixScale = useTransform(scrollYProgress, [0.75, 0.98], [1, 0.96])

  // Staggered Entrance Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  }

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 35 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#060608] text-white py-24 md:py-36 px-6 md:px-14 overflow-hidden select-none border-t border-white/[0.08]"
    >
      {/* 1. ATMOSPHERIC AR/VR NEON AMBIENCE & SCAN GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Spatial Neon Volumetric Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[160px] animate-pulse-slow" />
        
        {/* Cyberpunk Scanlines & Film Grain */}
        <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] opacity-60" />
      </div>

      {/* 2. ARCHITECTURAL AR COORDINATES & CROSSHAIR TELEMETRY */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-white/[0.08] grid grid-cols-1 md:grid-cols-3">
          <div className="border-r border-white/[0.08] h-full relative">
            <span className="absolute top-12 -right-1 text-cyan-400 font-mono text-[9px]">+</span>
            <span className="absolute bottom-12 -right-1 text-cyan-400 font-mono text-[9px]">+</span>
          </div>
          <div className="border-r border-white/[0.08] h-full relative">
            <span className="absolute top-12 -right-1 text-orange-400 font-mono text-[9px]">+</span>
            <span className="absolute bottom-12 -right-1 text-orange-400 font-mono text-[9px]">+</span>
          </div>
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between h-full">
        
        {/* ========================================================
            3. SECTION HEADER: HOW WE WORK // & PROCESS *(BEHIND THE DESIGN)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between pb-10 md:pb-14 border-b border-white/10 gap-6"
        >
          {/* Left: HOW WE WORK // */}
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-white uppercase">
              HOW WE WORK //
            </span>
            <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase hidden sm:inline">
              [SPATIAL PIPELINE PROTOCOL]
            </span>
          </div>

          {/* Right: PROCESS *(BEHIND THE DESIGN) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              PROCESS
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-white/50 tracking-wider uppercase font-normal">
              *(BEHIND THE DESIGN)
            </span>
          </div>
        </motion.div>

        {/* ========================================================
            4. THE 3x2 AR/VR ARCHITECTURAL MATRIX GRID
            - Staggered futuristic entrance
            - Scroll exit kinematics
            - Cybernetic hover glow on every cell
           ======================================================== */}
        <motion.div
          style={{ y: matrixY, opacity: matrixOpacity, scale: matrixScale }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-10 w-full mt-10 border border-white/[0.14] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.14] bg-[#07070a]/90 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] rounded-sm overflow-hidden"
        >
          
          {/* ================= ROW 1 ================= */}
          
          {/* Row 1, Col 1: Image 1 (Sunken Circular Lounge Firepit) */}
          <motion.div variants={cellVariants} className="border-b border-white/[0.14]">
            <HolographicImageCard
              src="/process-1.jpg"
              alt="Architectural Sunken Firepit Lounge"
              camId="CAM 01 // ORTHO"
              title="Sunken Fireplace Sanctuary"
              telemetry="LIVE SCAN // 4K"
              accent="orange"
            />
          </motion.div>

          {/* Row 1, Col 2: Step 01 (Discovery & Consultation) */}
          <motion.div
            variants={cellVariants}
            onMouseEnter={() => setHoveredCell('step-1')}
            onMouseLeave={() => setHoveredCell(null)}
            className="relative p-7 md:p-9 min-h-[260px] md:min-h-[300px] flex flex-col justify-center border-b border-white/[0.14] transition-all duration-300 hover:bg-white/[0.04] group cursor-default"
            data-cursor="hover"
          >
            {/* Top Glowing AR Laser Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-400 to-transparent transition-opacity duration-300 ${
                hoveredCell === 'step-1' ? 'opacity-100 shadow-[0_0_15px_rgba(249,115,22,0.8)]' : 'opacity-0'
              }`}
            />
            
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs md:text-sm text-orange-400 tracking-widest font-semibold uppercase flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span>//Step 01</span>
              </span>
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                PHASE_01
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-orange-300 transition-colors">
              Discovery & Consultation
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed max-w-sm font-light">
              Understanding your vision, lifestyle, & architectural ambitions to calibrate the perfect foundation.
            </p>
          </motion.div>

          {/* Row 1, Col 3: Step 02 (Concept & Design) */}
          <motion.div
            variants={cellVariants}
            onMouseEnter={() => setHoveredCell('step-2')}
            onMouseLeave={() => setHoveredCell(null)}
            className="relative p-7 md:p-9 min-h-[260px] md:min-h-[300px] flex flex-col justify-center border-b border-white/[0.14] transition-all duration-300 hover:bg-white/[0.04] group cursor-default"
            data-cursor="hover"
          >
            {/* Top Glowing AR Laser Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-opacity duration-300 ${
                hoveredCell === 'step-2' ? 'opacity-100 shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'opacity-0'
              }`}
            />
            
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs md:text-sm text-cyan-400 tracking-widest font-semibold uppercase flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>//Step 02</span>
              </span>
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                PHASE_02
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
              Concept & Design
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed max-w-sm font-light">
              Creating tailored parametric concepts, daylight orientation layouts, & material selections for your space.
            </p>
          </motion.div>

          {/* ================= ROW 2 ================= */}
          
          {/* Row 2, Col 1: Step 03 (Visualization & Planning) */}
          <motion.div
            variants={cellVariants}
            onMouseEnter={() => setHoveredCell('step-3')}
            onMouseLeave={() => setHoveredCell(null)}
            className="relative p-7 md:p-9 min-h-[260px] md:min-h-[300px] flex flex-col justify-center transition-all duration-300 hover:bg-white/[0.04] group cursor-default"
            data-cursor="hover"
          >
            {/* Top Glowing AR Laser Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-orange-500 to-transparent transition-opacity duration-300 ${
                hoveredCell === 'step-3' ? 'opacity-100 shadow-[0_0_15px_rgba(251,191,36,0.8)]' : 'opacity-0'
              }`}
            />
            
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs md:text-sm text-amber-400 tracking-widest font-semibold uppercase flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>//Step 03</span>
              </span>
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                PHASE_03
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
              Visualization & Planning
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed max-w-sm font-light">
              Photorealistic 3D Unreal Engine 5 simulations & spatial twin drawings to inspect every junction detail before construction.
            </p>
          </motion.div>

          {/* Row 2, Col 2: Step 04 (Execution & Handover) */}
          <motion.div
            variants={cellVariants}
            onMouseEnter={() => setHoveredCell('step-4')}
            onMouseLeave={() => setHoveredCell(null)}
            className="relative p-7 md:p-9 min-h-[260px] md:min-h-[300px] flex flex-col justify-center transition-all duration-300 hover:bg-white/[0.04] group cursor-default"
            data-cursor="hover"
          >
            {/* Top Glowing AR Laser Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-500 to-transparent transition-opacity duration-300 ${
                hoveredCell === 'step-4' ? 'opacity-100 shadow-[0_0_15px_rgba(52,211,153,0.8)]' : 'opacity-0'
              }`}
            />
            
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs md:text-sm text-emerald-400 tracking-widest font-semibold uppercase flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>//Step 04</span>
              </span>
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                PHASE_04
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors">
              Execution & Handover
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed max-w-sm font-light">
              Master joinery craft stewardship, precision timber milling, and meticulous styling for a flawless final space.
            </p>
          </motion.div>

          {/* Row 2, Col 3: Image 2 (Winter Snow Fireplace Living Room) */}
          <motion.div variants={cellVariants}>
            <HolographicImageCard
              src="/process-2.jpg"
              alt="Architectural Winter Living Room with Fireplace"
              camId="CAM 02 // PAN"
              title="Winter Hearth Living Pavilion"
              telemetry="HDR BIOPHILIC // 8K"
              accent="cyan"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
