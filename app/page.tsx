import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import FloatingCards from "@/components/floating-cards"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#F8F5F2]">
      <Navbar />

      <HeroSection />

      <div className="relative">
        <FloatingCards />
        <AboutSection />
      </div>

      <ServicesSection />

      <PortfolioSection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />

      <Footer />
    </main>
  )
}
