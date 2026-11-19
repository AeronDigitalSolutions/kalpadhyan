import React, { useState } from 'react'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import MenuOverlay from './components/MenuOverlay'
import HeroSection from './components/HeroSection'
import HomeRenovationSection from './components/HomeRenovationSection'
import JourneySection from './components/JourneySection'
import ServicesStackSection from './components/ServicesStackSection'
import ProcessSection from './components/ProcessSection'
import ProjectsSection from './components/ProjectsSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ConsultationSection from './components/ConsultationSection'
import JournalSection from './components/JournalSection'
import FooterSection from './components/FooterSection'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050506] text-white selection:bg-orange-500 selection:text-white">
        {/* Buttery Fluid Magnetic Cursor */}
        <CustomCursor />

        {/* Global Navigation Bar */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Staggered Fullscreen Architectural Menu Overlay */}
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        {/* Main Content Area */}
        <main className="relative z-10">
          {/* Section 01: Hero Section */}
          <HeroSection onOpenMenu={() => setIsMenuOpen(true)} />

          {/* Section 02: Home Renovation // 3D Revolving Cylinder Partner Cards */}
          <HomeRenovationSection />

          {/* Section 03: Our Journey & 3D Wood Interio Section (White Background) */}
          <JourneySection />

          {/* Section 04: What We Deliver // Services Stacking Slides */}
          <ServicesStackSection />

          {/* Section 04: How We Work // Process Grid */}
          <ProcessSection />

          {/* Section 05: Our Best Work // Projects Carousel */}
          <ProjectsSection />

          {/* Section 06: Meet Our Team // Experts Slider */}
          <TeamSection />

          {/* Section 07: What Clients Say // Testimonials Slider */}
          <TestimonialsSection />

          {/* Section 08: Frequently Asked // Inquiries Accordion */}
          <FAQSection />

          {/* Section 09: Start Your Journey // Consultation Booking */}
          <ConsultationSection />

          {/* Section 10: Expert Insights // Journal Articles */}
          <JournalSection />

          {/* Section 11: Architectural Footer */}
          <FooterSection />
        </main>
      </div>
    </SmoothScroll>
  )
}
