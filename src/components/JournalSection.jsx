import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ARTICLES = [
  {
    id: 'luxury-interior-design-trends',
    date: 'JUN 25, 2026',
    category: 'RESIDENTIAL TRENDS',
    readTime: '4 MIN READ',
    title: 'Luxury Interior Design Trends for Modern Homes',
    description: 'An exploration of architectural stillness, integrated timber acoustic slats, and subterranean recessed hearths.',
    image: '/journal-1.jpg'
  },
  {
    id: 'functional-living-spaces',
    date: 'JUN 15, 2026',
    category: 'BIOPHILIC SPACES',
    readTime: '6 MIN READ',
    title: 'How to Create Functional Living Spaces Style',
    description: 'Blending indoor pools, natural stone textures, and ambient water features with everyday domestic circulation.',
    image: '/journal-2.jpg'
  },
  {
    id: 'choosing-perfect-materials',
    date: 'July 10, 2026',
    category: 'MATERIALITY & CRAFT',
    readTime: '5 MIN READ',
    title: 'Choosing Perfect Materials for a Timeless Interior',
    description: 'Selecting patinated bronzes, rough-hewn volcanic rock, and sustainably harvested mass timber for lifelong durability.',
    image: '/journal-3.jpg'
  }
]

export default function JournalSection() {
  return (
    <section className="relative w-full bg-[#f6f5f0] text-neutral-900 py-24 md:py-36 overflow-hidden select-none border-t border-neutral-300">
      
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
            HEADER ROW: EXPERT INSIGHTS // & JOURNAL *(DESIGN CONVERSATIONS)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 mb-14 border-b border-neutral-300/80 gap-6">
          {/* Left: EXPERT INSIGHTS // */}
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
              EXPERT INSIGHTS //
            </span>
          </div>

          {/* Right: JOURNAL *(DESIGN CONVERSATIONS) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 uppercase leading-none">
              JOURNAL
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-neutral-500 tracking-wider uppercase font-normal">
              *(DESIGN CONVERSATIONS)
            </span>
          </div>
        </div>

        {/* ========================================================
            3-COLUMN EDITORIAL ARTICLE CARDS
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col cursor-pointer"
              data-cursor="hover"
            >
              {/* Image Frame with Rounded Corners */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-200 border border-neutral-300/70 shadow-[0_8px_25px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-500 mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                  <span className="font-mono text-[9px] tracking-widest uppercase">
                    {article.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-white" />
                  </span>
                </div>

                {/* Corner Frame Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Date Metadata */}
              <div className="flex items-center justify-between text-neutral-500 font-mono text-xs mb-2.5">
                <span className="uppercase tracking-wider">
                  {article.date}
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400">
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
