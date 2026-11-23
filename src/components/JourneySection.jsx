import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

// Words to animate as requested by Aman Gupta
const TYPEWRITER_PHRASES = [
  'Virtual Spaces',
  'Creative Solutions',
  'Immersive Experiences',
  'Digital Worlds',
  'Visual Stories'
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

  // 2. 3D Parallax Tilt for 3D Logo sculpture
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
          setTypingSpeed(2200)
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
            {/* Header & Tagline (Aman Gupta's Specification) */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2.5 text-neutral-900 font-heading text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                <span>OUR JOURNEY //</span>
              </div>
              <p className="font-mono text-xs text-neutral-700 tracking-wider uppercase leading-relaxed font-semibold">
                A CREATIVE TECHNOLOGY STUDIO TRANSFORMING IDEAS INTO IMMERSIVE DIGITAL EXPERIENCES.
              </p>
            </motion.div>

            {/* Studio Milestone Metrics (Aman Gupta's specification) */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-neutral-200">
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">STUDIO</span>
                <span className="font-heading font-bold text-sm text-neutral-950 tracking-wider">KALPADHYAN</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">SPECIALIZATION:</span>
                <span className="font-heading font-bold text-sm text-cyan-600 tracking-wide">3D / AR / VR / CGI</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">OUR APPROACH</span>
                <span className="font-heading font-bold text-sm text-neutral-950 tracking-wide">DESIGN × TECHNOLOGY</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center justify-between py-2 border-b border-neutral-200/70">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">TIMELINE</span>
                <span className="font-mono font-medium text-xs text-neutral-700 tracking-wide">2026 — BEYOND</span>
              </motion.div>
            </motion.div>

            {/* Interactive CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="#services"
                data-cursor="hover"
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-sm bg-neutral-950 text-white font-mono text-xs tracking-widest uppercase hover:bg-cyan-600 transition-all shadow-md group"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: 3D BRAND SCULPTURE + TYPEWRITER STATEMENT
             ======================================================== */}
          <motion.div
            style={{ y: rightColExitY, opacity: rightColOpacity }}
            className="lg:col-span-8 flex flex-col space-y-8 lg:space-y-12"
          >
            
            {/* 3D Kalpadhyan Brand Sculpture with Parallax & Soft Gallery Shadow */}
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
                {/* Micro Label */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase font-semibold">
                    STUDIO // KALPADHYAN
                  </span>
                </div>

                {/* Soft Architectural Floor Shadow Under the Logo */}
                <div className="absolute -bottom-3 left-4 right-4 h-8 bg-neutral-900/15 blur-xl rounded-full scale-y-50 pointer-events-none group-hover:opacity-100 opacity-70 transition-opacity" />

                {/* Official Crisp Kalpadhyan Logo Asset */}
                <img
                  src="/logo.png"
                  alt="Kalpadhyan Studio"
                  className="w-full max-w-xl h-auto object-contain filter contrast-[1.05] drop-shadow-[0_16px_28px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </motion.div>
            </motion.div>

            {/* The Statement Typography with Infinite Typewriter Feature (Aman Gupta's Exact Copy) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-neutral-900 leading-[1.3] tracking-[-0.02em]">
                We create{' '}
                <span className="relative inline-block font-medium text-neutral-950 underline decoration-cyan-500 decoration-2 underline-offset-8">
                  <span className="min-h-[1.2em]">{displayText}</span>
                  {/* Blinking Editorial Terminal Cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
                    className="inline-block ml-0.5 font-light text-cyan-600 font-mono"
                  >
                    |
                  </motion.span>
                </span>{' '}
                that transform imagination into reality through design, innovation, and technology.
              </p>

              {/* 3 Bottom Feature Labels (Aman Gupta's exact specification) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-wrap items-center gap-6 text-neutral-700 font-mono text-xs"
              >
                <span className="flex items-center space-x-1.5 group cursor-default">
                  <CheckCircle2 size={14} className="text-cyan-600 transition-transform group-hover:scale-110" />
                  <span className="tracking-wider font-semibold">CREATIVE INNOVATION</span>
                </span>
                <span className="text-neutral-300 hidden sm:inline">//</span>
                <span className="flex items-center space-x-1.5 group cursor-default">
                  <CheckCircle2 size={14} className="text-orange-600 transition-transform group-hover:scale-110" />
                  <span className="tracking-wider font-semibold">IMMERSIVE TECHNOLOGY</span>
                </span>
                <span className="text-neutral-300 hidden sm:inline">//</span>
                <span className="flex items-center space-x-1.5 group cursor-default">
                  <CheckCircle2 size={14} className="text-emerald-600 transition-transform group-hover:scale-110" />
                  <span className="tracking-wider font-semibold">VISUAL EXCELLENCE</span>
                </span>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
