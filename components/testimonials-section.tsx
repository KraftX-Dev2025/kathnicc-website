"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const testimonials = [
    {
      name: "RHEA M. MUMBAI",
      text: "Kathnicc turned our home into a work of art. Every corner tells a story."
    },
    {
      name: "ARJUN S. DELHI",
      text: "The attention to detail and personalized approach exceeded our expectations completely."
    },
    {
      name: "PRIYA K. BANGALORE",
      text: "Our space feels luxurious yet comfortable. Truly exceptional interior design work."
    }
  ]

  return (
    <section
      id="testimonials"
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/background-texture.webp')" }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-4xl font-serif text-[#4b2e1e] mb-16 uppercase tracking-wide"
        >
          CLIENT TESTIMONIALS
        </motion.h2>

        {/* Dark Brown Background Section */}
        <div className="bg-[#7c624d] py-16 px-6 relative overflow-visible">
          {/* Testimonial Cards */}
          <motion.div
            variants={containerVariants}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#f9f6ef] p-8 shadow-lg min-h-[400px] flex flex-col justify-start"
              >
                <h3 className="font-serif font-bold text-[#4b2e1e] text-lg mb-4 border-b-2 border-[#4b2e1e] pb-2 inline-block">
                  {testimonial.name}
                </h3>
                <p className="text-[#4b2e1e] leading-relaxed text-base flex-1">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Design Tips Section */}
          <motion.div
            variants={containerVariants}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text */}
            <motion.div variants={itemVariants}>
              <h3 className="font-serif text-2xl md:text-3xl text-[#d87e3d] uppercase tracking-wide mb-2">
                DESIGN STORIES & STYLE TIPS
              </h3>
              <div className="w-20 border-b-2 border-[#d87e3d] mb-6"></div>
              <p className="text-[#f9f6ef] text-base md:text-lg leading-relaxed">
                Explore our collection of articles on interior design trends, styling tips, and inspiration for your home.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div variants={itemVariants} className="flex justify-center relative">
              <div className="bg-[#f9f6ef] p-6 max-w-md relative z-10" style={{ marginBottom: '-250px' }}>
                <Image
                  src="/design-tips-interior.jpg"
                  alt="Interior Design Inspiration"
                  width={400}
                  height={800}
                  className="w-full h-[700px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="h-[250px]"></div>
      </motion.div>

      {/* Full-screen Moodboard Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/background-texture.webp')" }}
      >
        <div className="flex items-center justify-center h-full p-8">
          <div className="relative w-full max-w-4xl h-full">
            <Image
              src="/moodboard.webp"
              alt="Design Moodboard"
              fill
              className="object-cover object-center rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
