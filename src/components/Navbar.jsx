import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHoveredTop, setIsHoveredTop] = useState(false)

  // 1. Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      // True only at the very top hero section
      setIsAtTop(window.scrollY < 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 2. Detect Pointer touching the top edge of the screen
  useEffect(() => {
    const handleMouseMove = (e) => {
      // When pointer touches top edge (within 50px of top)
      if (e.clientY <= 50) {
        setIsHoveredTop(true)
      } else if (e.clientY > 90 && !isAtTop) {
        setIsHoveredTop(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isAtTop])

  // Header Visibility States
  const isVisible = isAtTop || isHoveredTop || isMenuOpen
  const isBlackHeader = !isAtTop && (isHoveredTop || isMenuOpen)

  return (
    <>
      {/* Invisible Hover Trigger Zone at the absolute top of the viewport */}
      <div
        onMouseEnter={() => setIsHoveredTop(true)}
        className="fixed top-0 left-0 w-full h-4 z-40 pointer-events-auto"
        aria-hidden="true"
      />

      {/* The Animated Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setIsHoveredTop(true)}
        onMouseLeave={() => {
          if (!isAtTop && !isMenuOpen) setIsHoveredTop(false)
        }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          isBlackHeader
            ? 'py-4 md:py-5 bg-[#050507]/95 backdrop-blur-md border-b border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.85)] pointer-events-auto'
            : 'py-6 bg-transparent pointer-events-none'
        }`}
      >
        {/* Brand Title */}
        <a
          href="#"
          data-cursor="hover"
          className={`pointer-events-auto flex items-center space-x-2 font-medium text-lg tracking-wider transition-colors ${
            isBlackHeader ? 'text-white' : 'text-white mix-blend-difference'
          }`}
        >
          <span className="font-heading tracking-[0.2em] uppercase text-sm md:text-base font-normal hover:opacity-75 transition-opacity">
            Kalpadhyan
          </span>
        </a>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-cursor="hover"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`pointer-events-auto relative w-12 h-10 flex flex-col items-end justify-center group focus:outline-none transition-colors ${
            isBlackHeader ? 'text-white' : 'text-white mix-blend-difference'
          }`}
        >
          <div className="relative w-7 h-5 flex flex-col justify-between items-end">
            {/* Top Line */}
            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: 45, y: 8, width: '28px' }
                  : { rotate: 0, y: 0, width: '28px' }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1.5px] bg-white rounded-full origin-center group-hover:scale-x-90 transition-transform"
            />

            {/* Bottom Line */}
            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: -45, y: -8, width: '28px' }
                  : { rotate: 0, y: 0, width: '28px' }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1.5px] bg-white rounded-full origin-center group-hover:scale-x-90 transition-transform"
            />
          </div>
        </button>
      </motion.header>
    </>
  )
}
