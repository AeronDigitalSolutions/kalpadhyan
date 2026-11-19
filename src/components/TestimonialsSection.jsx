import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 'alexander-wright',
    clientName: 'Alexander Wright',
    clientTitle: 'Private Residence Commission, Tribeca, New York',
    project: 'MODERN LUXURY RESIDENCE',
    quote: '...transformed our ideas into a timeless interior with remarkable creativity and precision. Every moment of the experience felt effortless & topnotch.',
    image: '/testimonial-1.jpg',
    rating: '5.0 / 5.0'
  },
  {
    id: 'camille-laurent',
    clientName: 'Camille Laurent',
    clientTitle: 'Creative Director, Maison Laurent, Paris',
    project: 'ALPINE SUNKEN LOUNGE',
    quote: 'The spatial stillness and fidelity of Kalpadhyan’s computational lighting exceeded all expectations. Our clients are completely immersed the second they step into the space.',
    image: '/testimonial-2.jpg',
    rating: '5.0 / 5.0'
  },
  {
    id: 'kaito-tanaka',
    clientName: 'Kaito Tanaka',
    clientTitle: 'Managing Partner, Tanaka Capital, Tokyo',
    project: 'EXECUTIVE WORKSPACE & ATRIUM',
    quote: 'Uncompromising craft, razor-sharp architectural rigor, and an intuitive mastery of organic materials. Kalpadhyan sets a new benchmark for high-end digital architecture.',
    image: '/testimonial-3.jpg',
    rating: '5.0 / 5.0'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = TESTIMONIALS[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative w-full min-h-screen bg-[#f6f5f0] text-neutral-900 py-24 md:py-36 overflow-hidden select-none border-t border-neutral-300">
      
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between">
        
        {/* ========================================================
            HEADER ROW: WHAT CLIENTS SAY // & TESTIMONIALS *(WORDS OF TRUST)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 mb-16 border-b border-neutral-300/80 gap-6">
          {/* Left: WHAT CLIENTS SAY // */}
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
              WHAT CLIENTS SAY //
            </span>
          </div>

          {/* Right: TESTIMONIALS *(WORDS OF TRUST) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 uppercase leading-none">
              TESTIMONIALS
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-neutral-500 tracking-wider uppercase font-normal">
              *(WORDS OF TRUST)
            </span>
          </div>
        </div>

        {/* ========================================================
            MAIN BODY: PORTRAIT CARD (LEFT) + EDITORIAL QUOTE (RIGHT)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto py-4">
          
          {/* LEFT: Client Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-[0_25px_60px_rgba(0,0,0,0.14)] group"
                data-cursor="hover"
              >
                <img
                  src={current.image}
                  alt={current.clientName}
                  className="w-full h-full object-cover object-[center_20%] filter contrast-[1.04] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Overlay with Verified Client Pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-neutral-950/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <div className="flex flex-col">
                    <span className="font-heading text-xs sm:text-sm font-bold tracking-wider uppercase drop-shadow-md">
                      {current.clientName}
                    </span>
                    <span className="font-mono text-[9px] text-white/80 tracking-widest uppercase mt-0.5">
                      {current.project}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[9px] font-mono tracking-widest uppercase text-white font-medium">
                    {current.rating}
                  </span>
                </div>

                {/* Corner Frame Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Editorial Quote & Navigation Controls */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-10">
            
            {/* The Quote */}
            <div className="min-h-[180px] md:min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-neutral-900 leading-[1.3] tracking-[-0.02em] max-w-3xl">
                    "{current.quote}"
                  </blockquote>

                  {/* Client Bio & Commission Details */}
                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-neutral-300/80 pt-6">
                    <div>
                      <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-neutral-900">
                        {current.clientName}
                      </h4>
                      <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-0.5">
                        {current.clientTitle}
                      </p>
                    </div>

                    <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                      REVIEW 0{currentIndex + 1} // 0{TESTIMONIALS.length}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Row with Navigation Arrows */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={handlePrev}
                data-cursor="hover"
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all shadow-md group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNext}
                data-cursor="hover"
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all shadow-md group"
              >
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
