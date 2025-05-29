"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury interior"
          fill
          className="object-cover opacity-80 shadow-xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F2]/90 to-[#F8F5F2]/60" />
      </div>

      <div className="container mx-auto px-6 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <span className="text-[#8B6E4E] uppercase tracking-widest text-sm font-medium">Welcome to Kathnicc</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mt-4 text-[#3C3530]">
                Luxury Living, <br />
                <span className="text-[#8B6E4E]">Thoughtfully</span> Designed
              </h1>
              <p className="mt-6 text-lg text-[#5D534B] max-w-lg">
                Elevate your space with Kathnicc — where interior design meets artistry and refined living. From curated
                home décor to full-scale luxury makeovers, we craft timeless interiors that reflect your lifestyle,
                taste, and story.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#portfolio"
                  className="px-8 py-3 bg-[#8B6E4E] text-white rounded-sm hover:bg-[#7A5F43] transition-colors inline-flex items-center justify-center"
                >
                  View Our Portfolio
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-3 border border-[#8B6E4E] text-[#8B6E4E] rounded-sm hover:bg-[#8B6E4E]/10 transition-colors inline-flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[80%] h-[80%] z-10"
            >
              <Image
                src="/image1.jpg"
                alt="Luxury living room"
                fill
                className="object-cover rounded-md shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-[60%] h-[60%] z-20"
              ref={parallaxRef}
            >
              <Image
                src="/image2.jpg"
                alt="Interior detail"
                fill
                className="object-cover rounded-md shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-[#D9C5B3] z-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-[10%] right-[15%] w-16 h-16 rounded-full bg-[#8B6E4E]/20 z-0"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Link href="#about" className="text-[#8B6E4E] flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-[#8B6E4E] rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-[#8B6E4E] rounded-full" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
