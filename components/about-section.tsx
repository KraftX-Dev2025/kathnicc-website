"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="about" className="relative flex items-start justify-center min-h-screen py-12 md:py-20 p-6">
      {/* Background texture */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/background-texture.webp"
          alt="Background texture"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      {/* Content positioned within symbol design */}
      <div className="relative z-20 max-w-3xl w-full px-12 py-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-4">
            <Image src="/kathnicc_no_bg.webp" alt="Kathnicc Logo" width={260} height={180} className="mx-auto object-contain" />
            <div className="w-1/3 h-[3px] bg-[#8b5e3c] mx-auto mt-6 "></div>
          </motion.div>

          {/* Tagline */}
          <motion.h2 variants={itemVariants} className="text-[#8b5e3c] text-xs md:text-2xl uppercase tracking-widest mt-8 font-medium">
            Your Story, Your Space — Beautifully Told
          </motion.h2>

          {/* Main Description */}
          <motion.p variants={itemVariants} className="text-[#3b3b3b] text-sm md:text-xl leading-relaxed mt-6 sm:px-24 px">
            At Kathnicc, we believe that your home is your sanctuary. Our design philosophy is rooted in storytelling —
            every texture, every color, every layout is chosen to reflect who you are.
          </motion.p>

          {/* Highlight Line */}
          <motion.p variants={itemVariants} className="text-[#a25a2d] italic text-xs md:text-xl mt-6">
            With a passion for elegance, function, and personalized design, we specialize in:
          </motion.p>

          {/* Services List */}
          <motion.div variants={itemVariants} className="font-semibold text-[#1f1f1f] text-sm md:text-xl leading-relaxed mt-6 space-y-1">
            <p>Bespoke home décor</p>
            <p>High-end interior design</p>
            <p>Luxury home transformations</p>
          </motion.div>

          {/* Footer Paragraph */}
          <motion.p variants={itemVariants} className="text-[#333333] text-xs md:text-xl leading-relaxed mt-6">
            Whether it's a single room refresh or a full home redesign, we infuse every project with soul, sophistication,
            and meticulous attention to detail.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom repeating image strip */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-10">
        <div
          className="w-full h-full bg-repeat-x"
          style={{ backgroundImage: "url('/about-symbol.webp')", backgroundSize: 'auto 100%' }}
        ></div>
      </div>
    </section>
  )
}