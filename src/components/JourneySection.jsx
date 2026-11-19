import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const TYPEWRITER_PHRASES = [
  'elegant interiors',
  'timeless sanctuaries',
  'bespoke spaces',
  'cinematic architecture'
]

export default function JourneySection() {
  const containerRef = useRef(null)

  // 1. Scroll-linked Parallax & Exit Transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Smooth scroll exit kinematics
  const leftColExitY = useTransform(scrollYProgress, [0.65, 0.95], [0, -60])
  const leftColOpacity = useTransform(scrollYProgress, [0.75, 0.96], [1, 0.15])
  const rightColExitY = useTransform(scrollYProgress, [0.65, 0.95], [0, -75])
  const rightColOpacity = useTransform(scrollYProgress, [0.75, 0.96], [1, 0.15])

  // 2. 3D Parallax Tilt for 3D Wood INTERIO sculpture
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 220 })
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 220 })

  const rotateX = useTransform(smoothMouseY, [-200, 200], [7, -7])
  const rotateY = useTransform(smoothMouseX, [-400, 400], [-9, 9])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // 3. Infinite Typewriter + Backspace Loop
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        setTypingSpeed(85)

        if (displayText.length + 1 === currentPhrase.length) {
          // Pause at end of completed phrase before deleting
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        // Backspacing
        setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        setTypingSpeed(45)

        if (displayText.length === 0) {
          // Finished deleting, brief pause then next phrase
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length)
          setTypingSpeed(400)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, phraseIndex, typingSpeed])

  // 4. Staggered Entrance Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -35, y: 15 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative w-full bg-[#fbfbfa] text-neutral-900 overflow-hidden py-24 md:py-36 border-t border-neutral-200/80 select-none"
    >
      {/* Architectural Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-neutral-200/70 grid grid-cols-1 md:grid-cols-4">
          <div className="border-r border-neutral-200/70 h-full" />
          <div className="border-r border-neutral-200/70 h-full" />
          <div className="border-r border-neutral-200/70 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ========================================================
              LEFT COLUMN: Entrance Stagger + Scroll Exit Drift
             ======================================================== */}
          <motion.div
            style={{ y: leftColExitY, opacity: leftColOpacity }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-8"
          >
            {/* Header & Tagline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2.5 text-neutral-900 font-heading text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-neutral-950 animate-pulse" />
                <span>OUR JOURNEY //</span>
              </div>
              <p className="font-mono text-xs text-neutral-500 tracking-wider uppercase leading-relaxed max-w-xs">
                Rooted in natural materials, architectural precision, and computational spatial art.
              </p>
            </motion.div>

            {/* Studio Milestone Metrics (Staggered rows) */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-neutral-200">
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">STUDIO FOUNDED</span>
                <span className="font-heading font-bold text-sm text-neutral-900 tracking-wide">2014 / NEW DELHI</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">COMPLETED WORKS</span>
                <span className="font-heading font-bold text-sm text-neutral-900 tracking-wide">240+ PROJECTS</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">SPATIAL RIGOR</span>
                <span className="font-heading font-bold text-sm text-neutral-900 tracking-wide">100% BESPOKE CRAFT</span>
              </motion.div>
            </motion.div>

            {/* Interactive CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="#consultation"
                data-cursor="hover"
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-sm bg-neutral-950 text-white font-mono text-xs tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-md group"
              >
                <span>EXPLORE STUDIO HERITAGE</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: 3D WOOD SCULPTURE + TYPEWRITER STATEMENT
             ======================================================== */}
          <motion.div
            style={{ y: rightColExitY, opacity: rightColOpacity }}
            className="lg:col-span-8 flex flex-col space-y-8 lg:space-y-12"
          >
            
            {/* 3D Wooden INTERIO Sculpture with Parallax & Soft Gallery Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full flex items-center justify-start cursor-pointer group py-2"
              data-cursor="hover"
            >
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformPerspective: 1000
                }}
                className="relative w-full max-w-2xl"
              >
                {/* Soft Architectural Floor Shadow Under the Wood Letters */}
                <div className="absolute -bottom-3 left-4 right-4 h-8 bg-neutral-900/15 blur-xl rounded-full scale-y-50 pointer-events-none group-hover:opacity-100 opacity-70 transition-opacity" />

                {/* 3D Wooden INTERIO Asset */}
                <img
                  src="/interio-wood.png"
                  alt="INTERIO - Sculpted Organic Woodcraft"
                  className="w-full h-auto object-contain filter contrast-[1.08] brightness-[1.02] drop-shadow-[0_18px_26px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </motion.div>
            </motion.div>

            {/* The Statement Typography with Infinite Typewriter Feature */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-neutral-900 leading-[1.3] tracking-[-0.02em]">
                <span className="block mb-1 sm:mb-2">
                  Creates{' '}
                  <span className="relative inline-block font-medium text-neutral-950 underline decoration-neutral-400 decoration-1 underline-offset-8">
                    <span className="min-h-[1.2em]">{displayText}</span>
                    {/* Blinking Editorial Terminal Cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
                      className="inline-block ml-0.5 font-light text-orange-600 font-mono"
                    >
                      |
                    </motion.span>
                  </span>
                </span>
                that combine timeless design, and everyday functionality, exceptional craftsmanship with lasting quality and excellence.
              </p>

              {/* Architectural Sub-notes (Staggered Entrance) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-wrap items-center gap-6 text-neutral-600 font-mono text-xs"
              >
                <span className="flex items-center space-x-1.5 group cursor-default">
                  <CheckCircle2 size={14} className="text-orange-600 transition-transform group-hover:scale-110" />
                  <span className="tracking-wider">NATURAL SOLID TIMBER</span>
                </span>
                <span className="flex items-center space-x-1.5 group cursor-default">
                  <CheckCircle2 size={14} className="text-cyan-600 transition-transform group-hover:scale-110" />
                  <span className="tracking-wider">SUSTAINABLY HARVESTED</span>
                </span>
                <span className="flex items-center space-x-1.5 group cursor-default">
                  <CheckCircle2 size={14} className="text-amber-600 transition-transform group-hover:scale-110" />
                  <span className="tracking-wider">PRECISION SPATIAL MILLING</span>
                </span>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
