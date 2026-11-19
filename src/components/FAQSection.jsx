import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    id: 'faq-1',
    question: 'How does the design process begin?',
    answer: 'We begin with a consultation to understand your vision, requirements, timeline, & budget before developing a tailored design strategy with complete clarity and confidence.'
  },
  {
    id: 'faq-2',
    question: 'Do you handle both residential and commercial projects?',
    answer: 'Yes, we specialize in high-end private residences, luxury penthouses, flagship boutique retail, corporate headquarters, and bespoke hospitality spaces globally.'
  },
  {
    id: 'faq-3',
    question: 'Can you work with my existing furniture?',
    answer: 'Absolutely. We seamlessly integrate cherished heirloom pieces and existing designer collections into our cohesive spatial narrative, complementing them with custom-milled architectural joinery.'
  },
  {
    id: 'faq-4',
    question: 'How long does a typical project take?',
    answer: 'Timelines vary according to project scale and complexity. A full spatial concept, 3D visualization suite, and interior documentation package typically takes between 6 to 12 weeks.'
  },
  {
    id: 'faq-5',
    question: 'Do you provide 3D visualizations?',
    answer: 'Yes. Hyper-realistic 8K architectural CGI, material lighting studies, and interactive Unreal Engine 5 spatial walkthroughs are at the core of our studio practice.'
  },
  {
    id: 'faq-6',
    question: 'Can you manage the entire project?',
    answer: 'We offer turnkey architectural stewardship, coordinating closely with structural engineers, artisanal fabricators, and contractors to ensure absolute fidelity to the original design.'
  }
]

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq-1') // Default to first item open as in screenshot

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

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
            HEADER ROW: FREQUENTLY ASKED // & INQUIRIES *(KNOW BEFORE YOU START)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 mb-14 border-b border-neutral-300/80 gap-6">
          {/* Left: FREQUENTLY ASKED // */}
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
              FREQUENTLY ASKED //
            </span>
          </div>

          {/* Right: INQUIRIES *(KNOW BEFORE YOU START) */}
          <div className="flex items-baseline space-x-2 md:space-x-3 text-right">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 uppercase leading-none">
              INQUIRIES
            </h2>
            <span className="font-mono text-[10px] md:text-xs text-neutral-500 tracking-wider uppercase font-normal">
              *(KNOW BEFORE YOU START)
            </span>
          </div>
        </div>

        {/* ========================================================
            ACCORDION CONTAINER (Centered & Clean)
           ======================================================== */}
        <div className="w-full max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full rounded-xl sm:rounded-2xl transition-all duration-300 bg-white border ${
                  isOpen
                    ? 'border-neutral-300 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                    : 'border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-neutral-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)]'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  data-cursor="hover"
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans text-base sm:text-lg md:text-xl font-medium text-neutral-900 tracking-tight pr-4">
                    {faq.question}
                  </span>

                  {/* Black Circle Toggle Button with smooth icon transition */}
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 transition-transform duration-300">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </motion.div>
                  </div>
                </button>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-1">
                        <p className="font-sans text-xs sm:text-sm md:text-[15px] text-neutral-600 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
