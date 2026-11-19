import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const SLIDES = [
  {
    id: 'residential-interior',
    leftWord: 'Residential',
    rightWord: 'Interior',
    video: '/whatwedeliver.mp4',
    description: 'Timeless, functional homes crafted with exceptional quality for comfortable modern living.'
  },
  {
    id: 'commercial-interior',
    leftWord: 'Commercial',
    rightWord: 'Interior',
    video: '/whatwedeliver2.mp4',
    description: 'High-impact retail, boutique hospitality, and luxury enterprise spaces engineered for brand distinction.'
  },
  {
    id: 'space-planning',
    leftWord: 'Space',
    rightWord: 'Planning',
    video: '/whatwedeliver3.mp4',
    description: 'Parametric spatial flow optimizing human circulation, natural ventilation, and biophilic architectural lighting.'
  },
  {
    id: 'architectural-vis',
    leftWord: 'Architectural',
    rightWord: 'Visualization',
    video: '/whatwedeliver4.mp4',
    description: 'Photorealistic CGI lighting studies, digital twins, and cinematic walkthroughs before ground is broken.'
  },
  {
    id: 'turnkey-execution',
    leftWord: 'Turnkey',
    rightWord: 'Execution',
    video: '/whatwedeliver5.mp4',
    description: 'Comprehensive end-to-end craft stewardship ensuring absolute material purity from blueprint to handover.'
  }
]

export default function ServicesStackSection() {
  const sectionRef = useRef(null)

  // Track overall scroll progress of the entire 5-slide section
  // 0.0 to 0.8 = Slides 1 to 5 overlapping and stacking
  // 0.8 to 1.0 = Slide 5 exiting the screen into the Process section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  // The single header stays pinned (y: 0) during slides 1 to 5,
  // and then slides UP smoothly with Slide 5 as it exits!
  const headerY = useTransform(scrollYProgress, [0.8, 1.0], ['0%', '-130%'])
  const headerOpacity = useTransform(scrollYProgress, [0.8, 0.96], [1, 0])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050507]">
      {/* 
        ============================================================
        THE ONE & ONLY HEADER (z-50)
        - Pinned at top-0 across slides 1, 2, 3, 4, 5 (NO duplicates ever)
        - When Slide 5 scrolls out, this header slides UP with Slide 5!
        ============================================================
      */}
      <div className="sticky top-0 z-50 h-0 overflow-visible pointer-events-none w-full">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="w-full flex items-start justify-between py-10 md:py-14 px-8 md:px-16 pointer-events-auto"
        >
          {/* Left: WHAT WE DELIVER // */}
          <div className="flex items-center space-x-2 pt-1">
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-white uppercase drop-shadow-md">
              WHAT WE DELIVER //
            </span>
          </div>

          {/* Right: SERVICES *(CREATIVE SOLUTIONS) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-none drop-shadow-md">
              SERVICES
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-white/70 tracking-wider uppercase font-normal drop-shadow-sm">
              *(CREATIVE SOLUTIONS)
            </span>
          </div>
        </motion.div>
      </div>

      {/* 
        ============================================================
        5 OVERLAPPING STACKING SLIDES
        None of the slides contain duplicate headers!
        ============================================================
      */}
      {SLIDES.map((slide, index) => {
        const isLastSlide = index === SLIDES.length - 1

        return (
          <div
            key={slide.id}
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10 + index,
            }}
            className="w-full h-screen min-h-[680px] bg-[#070709] text-white overflow-hidden flex flex-col justify-between py-10 md:py-14 px-8 md:px-16 select-none"
          >
            {/* 1. VISIBLE BLURRED BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter blur-[10px] scale-105 brightness-[0.55] contrast-[1.05]"
                src={slide.video}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* 2. TOP SPACER (Reserves exact height for the single pinned header) */}
            <div className="relative z-10 w-full h-16 md:h-20" />

            {/* 3. CENTER STAGE: LEFT WORD + FLOATING CENTER VIDEO + RIGHT WORD */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center my-auto w-full">
              <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
                
                {/* Horizontal Composition Row */}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14">
                  
                  {/* Left Word (e.g. "Residential", "Commercial", "Space") */}
                  <div className="md:w-1/3 flex justify-center md:justify-end text-center md:text-right">
                    <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-[-0.02em] drop-shadow-xl">
                      {slide.leftWord}
                    </h3>
                  </div>

                  {/* Center Video Frame with Subtle Hairline Border */}
                  <div
                    className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] aspect-[16/10] rounded-none overflow-hidden border border-white/25 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.85)] group cursor-pointer"
                    data-cursor="hover"
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={slide.video}
                    />
                  </div>

                  {/* Right Word (e.g. "Interior", "Planning", "Visualization") */}
                  <div className="md:w-1/3 flex justify-center md:justify-start text-center md:text-left">
                    <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-[-0.02em] drop-shadow-xl">
                      {slide.rightWord}
                    </h3>
                  </div>

                </div>

                {/* Subtitle Under Center Video with the Signature ■■■■ Markers */}
                <div className="mt-8 md:mt-10 max-w-xl text-center px-4">
                  <div className="flex items-center justify-center space-x-3 text-white/40 font-mono text-xs">
                    <span className="text-white/30 text-[10px] tracking-widest shrink-0">■■■■</span>
                    <p className="text-white/85 font-sans text-xs md:text-sm font-light leading-relaxed">
                      {slide.description}
                    </p>
                    <span className="text-white/30 text-[10px] tracking-widest shrink-0">■■■■</span>
                  </div>
                </div>

                {/* On the Last Slide: Premium Architectural Call to Action */}
                {isLastSlide && (
                  <div className="mt-8 flex items-center justify-center pointer-events-auto">
                    <a
                      href="#contact"
                      data-cursor="hover"
                      className="inline-flex items-center space-x-3 px-6 py-3 rounded-sm bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-white/90 transition-all shadow-2xl group"
                    >
                      <span>START A COMMISSION WITH US</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}

              </div>
            </div>

            {/* 4. BOTTOM BAR: Slide counter & Practice tag */}
            <div className="relative z-20 w-full flex items-center justify-between text-white/40 font-mono text-[10px] md:text-xs">
              <span className="tracking-widest uppercase">
                PRACTICE 0{index + 1} // 05
              </span>
              <span className="tracking-widest uppercase">
                KALPADHYAN ARCHITECTURAL STUDIO
              </span>
            </div>
          </div>
        )
      })}
    </section>
  )
}
