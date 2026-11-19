import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, ArrowUpRight, Sparkles, Clock, Globe2, ShieldCheck, Mail } from 'lucide-react'

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    details: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
  }

  return (
    <section
      id="consultation"
      className="relative w-full min-h-screen bg-[#050507] text-white py-24 md:py-36 px-6 md:px-14 overflow-hidden select-none border-t border-white/[0.08]"
    >
      {/* 1. ATMOSPHERIC ARCHITECTURAL STUDIO BACKDROP (Clean & Free of Watermarks) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Ambient Studio Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/5 blur-[180px] rounded-full" />
        
        {/* Ambient Film Grain */}
        <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />
      </div>

      {/* 2. ARCHITECTURAL DRAFTING GRID & COORDINATE CROSSHAIRS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="w-full h-full max-w-7xl mx-auto border-x border-white/[0.08] grid grid-cols-1 md:grid-cols-2">
          <div className="border-r border-white/[0.08] h-full relative">
            <span className="absolute top-12 -right-1.5 text-white/40 font-mono text-[10px]">+</span>
            <span className="absolute bottom-12 -right-1.5 text-white/40 font-mono text-[10px]">+</span>
          </div>
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* ========================================================
            HEADER ROW: START YOUR JOURNEY // & CONSULTATION *(PROJECT INQUIRY)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 mb-14 md:mb-16 border-b border-white/[0.12] gap-6">
          {/* Left: START YOUR JOURNEY // */}
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-white uppercase">
              START YOUR JOURNEY //
            </span>
            <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase hidden sm:inline">
              [COMMISSION DISCOVERY]
            </span>
          </div>

          {/* Right: CONSULTATION *(PROJECT INQUIRY) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              CONSULTATION
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-white/50 tracking-wider uppercase font-normal">
              *(PROJECT INQUIRY)
            </span>
          </div>
        </div>

        {/* ========================================================
            SPLIT LAYOUT: STUDIO BRIEFING (LEFT) + BOOKING FORM (RIGHT)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-auto">
          
          {/* LEFT COLUMN: Architectural Studio Commission Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-orange-400 uppercase font-medium">
                PRACTICE COLLABORATION
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase mt-2 leading-tight">
                Frame your future with spatial rigor.
              </h3>
              <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed mt-4">
                We accept a strictly curated roster of private residential commissions, high-impact commercial environments, and CGI digital twin projects each year to guarantee uncompromising material excellence.
              </p>
            </div>

            {/* 3 Practice Pillars */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3.5">
                <span className="font-mono text-xs text-white/40 pt-0.5">01 //</span>
                <div>
                  <h4 className="font-heading text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
                    Bespoke Spatial Architecture
                  </h4>
                  <p className="font-mono text-[10px] text-white/50 tracking-wider uppercase mt-0.5">
                    Private sanctuaries, natural solid timber, and daylight choreography.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <span className="font-mono text-xs text-white/40 pt-0.5">02 //</span>
                <div>
                  <h4 className="font-heading text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
                    Real-time CGI & Spatial Twins
                  </h4>
                  <p className="font-mono text-[10px] text-white/50 tracking-wider uppercase mt-0.5">
                    Unreal Engine 5 walkthroughs & immersive spatial computing before build.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <span className="font-mono text-xs text-white/40 pt-0.5">03 //</span>
                <div>
                  <h4 className="font-heading text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
                    Turnkey Craft Stewardship
                  </h4>
                  <p className="font-mono text-[10px] text-white/50 tracking-wider uppercase mt-0.5">
                    Full architectural stewardship from blueprints to artisanal handover.
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Availability & Global Hubs Card */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] tracking-widest text-white uppercase font-medium">
                    ACTIVE ROSTER
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                  Q2 — Q3 2026
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08] font-mono text-[10px]">
                <div>
                  <span className="text-white/40 uppercase block">DIRECT INQUIRIES</span>
                  <a
                    href="mailto:concierge@kalpadhyan.com"
                    className="text-white hover:text-orange-400 transition-colors uppercase mt-0.5 block truncate"
                  >
                    concierge@kalpadhyan.com
                  </a>
                </div>
                <div>
                  <span className="text-white/40 uppercase block">STUDIO LOCATIONS</span>
                  <span className="text-white/90 uppercase mt-0.5 block">
                    NEW DELHI • NYC • MILAN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Luxury Project Inquiry Form */}
          <div className="lg:col-span-7 relative w-full">
            <div className="p-7 sm:p-9 md:p-10 rounded-2xl bg-[#0a0b0f]/80 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field 1: Your Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-white/80 tracking-wider uppercase font-medium">
                    YOUR NAME <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name or entity"
                    data-cursor="text"
                    className="w-full px-4 py-3.5 rounded-lg bg-white/[0.04] border border-white/[0.12] focus:border-white/50 focus:bg-white/[0.07] text-white font-sans text-sm placeholder:text-white/30 transition-all outline-none"
                  />
                </div>

                {/* Field 2: Email Address */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-white/80 tracking-wider uppercase font-medium">
                    EMAIL ADDRESS <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    data-cursor="text"
                    className="w-full px-4 py-3.5 rounded-lg bg-white/[0.04] border border-white/[0.12] focus:border-white/50 focus:bg-white/[0.07] text-white font-sans text-sm placeholder:text-white/30 transition-all outline-none"
                  />
                </div>

                {/* Field 3: Project Typology */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-white/80 tracking-wider uppercase font-medium">
                    PROJECT TYPOLOGY
                  </label>
                  <div className="relative">
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      data-cursor="hover"
                      className="w-full px-4 py-3.5 rounded-lg bg-[#0e1015] border border-white/[0.12] focus:border-white/50 text-white font-sans text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-white/30 bg-[#0e1015]">Select project scope...</option>
                      <option value="residential" className="bg-[#0e1015]">Bespoke Residential Architecture & Interior</option>
                      <option value="commercial" className="bg-[#0e1015]">Commercial Flagship & Retail Experience</option>
                      <option value="3d-vis" className="bg-[#0e1015]">Photorealistic 3D CGI & Unreal Engine 5 Twins</option>
                      <option value="turnkey" className="bg-[#0e1015]">Turnkey Architectural Execution & Joinery</option>
                      <option value="ar-vr" className="bg-[#0e1015]">Spatial Computing (Apple Vision Pro / WebGL)</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Field 4: Project Budget */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-white/80 tracking-wider uppercase font-medium">
                    ESTIMATED INVESTMENT RANGE
                  </label>
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      data-cursor="hover"
                      className="w-full px-4 py-3.5 rounded-lg bg-[#0e1015] border border-white/[0.12] focus:border-white/50 text-white font-sans text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-white/30 bg-[#0e1015]">Select anticipated investment...</option>
                      <option value="50-100k" className="bg-[#0e1015]">$50,000 — $100,000 USD</option>
                      <option value="100-250k" className="bg-[#0e1015]">$100,000 — $250,000 USD</option>
                      <option value="250-500k" className="bg-[#0e1015]">$250,000 — $500,000 USD</option>
                      <option value="500k+" className="bg-[#0e1015]">$500,000+ USD / Private Sanctuary Commission</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Field 5: Project Details */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-white/80 tracking-wider uppercase font-medium">
                    PROJECT VISION & GOALS
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Outline your architectural site, spatial ambitions, and target timeline..."
                    data-cursor="text"
                    className="w-full px-4 py-3.5 rounded-lg bg-white/[0.04] border border-white/[0.12] focus:border-white/50 focus:bg-white/[0.07] text-white font-sans text-sm placeholder:text-white/30 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Row & Confirmation Feedback */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    data-cursor="hover"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-neutral-950 font-mono text-xs tracking-widest uppercase font-semibold transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>TRANSMIT COMMISSION INQUIRY</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-2 text-emerald-400 font-mono text-xs"
                    >
                      <Check size={15} />
                      <span>INQUIRY LOGGED // RESPONSE WITHIN 24H</span>
                    </motion.div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
