import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/signature-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#F8F5F2]">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialsSection />

      <ContactSection />

      {/* <Footer /> */}
    </main>
  )
}
