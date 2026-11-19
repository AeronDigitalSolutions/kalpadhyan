import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Layers, Box } from 'lucide-react'

export default function NextSectionPreview() {
  return (
    <section className="relative w-full min-h-screen bg-[#070708] text-white px-6 md:px-16 py-32 flex flex-col justify-center border-t border-white/10 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-white/10 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10" />
          <div />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center space-x-3 text-orange-400 font-mono text-xs tracking-[0.25em] uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
          <span>SECTION 02 / IMMERSIVE SPATIAL DESIGN</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl text-white/95 mb-12">
          We sculpt <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-cyan-400 font-normal">unreal worlds</span> into visceral architectural reality.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/15">
          <div className="p-6 rounded-sm glass-panel border border-white/10 hover:border-orange-500/40 transition-colors group">
            <Layers className="text-orange-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-heading text-lg tracking-wider mb-2">NEURAL LIGHTING</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Global illumination tuned with physical ray bounces and cinematic atmospheric depth.
            </p>
          </div>

          <div className="p-6 rounded-sm glass-panel border border-white/10 hover:border-cyan-400/40 transition-colors group">
            <Box className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-heading text-lg tracking-wider mb-2">SPATIAL RIGOR</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Architecturally faithful 3D geometry designed to evoke scale, stillness and luxury.
            </p>
          </div>

          <div className="p-6 rounded-sm glass-panel border border-white/10 hover:border-white/40 transition-colors group">
            <Sparkles className="text-amber-300 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-heading text-lg tracking-wider mb-2">FLUID MOTION</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Butter-smooth 60fps micro-interactions, inertial scrolling and Framer-grade aesthetics.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between text-white/40 font-mono text-xs border-b border-white/10 pb-6">
          <span>KALPADHYAN STUDIO © 2026</span>
          <span className="flex items-center space-x-2">
            <span>SCROLL TO EXPLORE NEXT SECTION</span>
            <ArrowDown size={14} className="animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  )
}
