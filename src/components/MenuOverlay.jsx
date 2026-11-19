import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const MENU_ITEMS = [
  {
    id: 'about',
    title: 'ABOUT',
    category: 'STUDIO PHILOSOPHY',
    video: '/whatwedeliver3.mp4',
    tag: 'SPATIAL COMPUTING & R&D',
    desc: 'Crafting hyper-realistic spatial narratives, parametric structures & real-time digital worlds.'
  },
  {
    id: 'project',
    title: 'PROJECT',
    category: 'SELECTED WORKS',
    video: '/whatwedeliver2.mp4',
    tag: 'COMMERCIAL ATRIUMS & LIVING',
    desc: 'Award-winning architectural visualization, CGI masterplans, and immersive interior tours.'
  },
  {
    id: 'blog',
    title: 'BLOG',
    category: 'INSIGHTS & TECH',
    video: '/whatwedeliver4.mp4',
    tag: 'FUTURE OF REAL-TIME 3D',
    desc: 'Exploring Unreal Engine 5, neural ray-tracing, photogrammetry and virtual production.'
  },
  {
    id: 'contact',
    title: 'CONTACT',
    category: 'COLLABORATIONS',
    video: '/whatwedeliver5.mp4',
    tag: 'GLOBAL COMMISSIONS',
    desc: 'Inquire for turnkey interior execution, commercial CGI, or interactive VR applications.'
  }
]

export default function MenuOverlay({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(1) // Default to 'PROJECT'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-[#050506] flex flex-col pt-24 pb-8 px-6 md:px-12 select-none overflow-hidden"
        >
          {/* Subtle architectural grid lines inside menu */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full border-x border-white/10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
              <div className="border-r border-white/5 h-full" />
              <div className="border-r border-white/5 h-full" />
              <div className="border-r border-white/5 h-full" />
              <div className="h-full" />
            </div>
          </div>

          <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-16 my-auto">
            
            {/* Left Column: Menu Links */}
            <div className="w-full md:w-1/2 flex flex-col justify-center border-t border-b md:border-b-0 border-white/15 divide-y divide-white/15">
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    onClose()
                  }}
                  className="group relative py-6 md:py-8 cursor-pointer flex items-center justify-between transition-all duration-300"
                  data-cursor="hover"
                >
                  {/* Active highlight glow behind text */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent transition-opacity duration-300 ${
                      activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="relative flex items-center space-x-6">
                    <span className="font-mono text-xs text-white/30 tracking-widest">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-sans text-2xl md:text-4xl font-normal tracking-[0.15em] transition-all duration-300 ${
                        activeIndex === index
                          ? 'text-white translate-x-3'
                          : 'text-white/60 group-hover:text-white group-hover:translate-x-2'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div className="relative flex items-center space-x-3 text-white/40 group-hover:text-white transition-colors">
                    <span className="hidden sm:inline font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.category}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className={`transition-transform duration-300 ${
                        activeIndex === index
                          ? 'rotate-0 text-orange-400'
                          : '-rotate-45 text-white/30 group-hover:text-white group-hover:rotate-0'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Live Cinematic Video Preview (No static screenshots!) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full aspect-[16/10] max-h-[460px] rounded-none overflow-hidden border border-white/20 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] group"
              >
                {/* Live Video with smooth transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08]"
                      src={MENU_ITEMS[activeIndex].video}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Corner Status Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-widest text-white/90 uppercase">
                    FEATURED ARCHITECTURAL WORK
                  </span>
                </div>

                {/* Bottom Studio Info Overlay */}
                <div className="absolute bottom-5 left-6 right-6 z-10 flex flex-col items-start justify-end text-left pointer-events-none">
                  <p className="font-heading text-lg md:text-xl font-bold tracking-wider text-white drop-shadow-md">
                    {MENU_ITEMS[activeIndex].tag}
                  </p>
                  <p className="font-mono text-[10px] tracking-wider text-white/70 uppercase mt-1 max-w-md leading-relaxed">
                    {MENU_ITEMS[activeIndex].desc}
                  </p>
                </div>

                {/* Framing Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/60 pointer-events-none" />
              </motion.div>

              {/* Quick Contact Footer in Menu */}
              <div className="w-full mt-6 flex items-center justify-between text-white/40 font-mono text-xs">
                <span>EST. 2026 / NEW DELHI</span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  INFO@KALPADHYAN.COM
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
