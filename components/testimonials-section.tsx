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
          className="text-center text-3xl md:text-6xl font-velista font-semibold text-[#4b2e1e] mb-16 uppercase tracking-wide"
        >
          CLIENT TESTIMONIALS
        </motion.h2>

        {/* Dark Brown Background Section */}
        <div className="bg-[#786755] py-16 px-6 relative overflow-visible">
          {/* Testimonial Cards */}
          <motion.div
            variants={containerVariants}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="overflow-x-auto pb-4">
              <div className="flex md:grid md:grid-cols-3 gap-8 min-w-max md:min-w-0">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-[#f9f6ef] p-8 py-32 shadow-lg min-h-[400px] flex flex-col justify-center w-80 md:w-auto flex-shrink-0"
                  >
                    <h3 className="font-velista font-normal text-[#4b2e1e] text-5xl mb-4 border-b-2 border-[#786755] pb-2 inline-block">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#4b2e1e] leading-relaxed text-lg pt-8">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-start mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">★</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Tips Section */}
          <motion.div
            variants={containerVariants}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center "
          >
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className="relative z-20 lg:left-64 left-0">
              <h3 className="font-velista font-semibold text-2xl md:text-6xl text-[#E28F51] uppercase tracking-wide mb-2 pr-6">
                DESIGN STORIES & STYLE TIPS
              </h3>
              <div className="w-full border-b-2 border-[#d87e3d] mb-6"></div>
              <p className="text-[#f9f6ef] text-base md:text-xl leading-relaxed lg:pr-64 pr-0">
                Explore our collection of articles on interior design trends, styling tips, and inspiration for your home.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div variants={itemVariants} className="flex justify-center relative">
              <div className="bg-[#f9f6ef] max-w-md relative z-10" style={{ marginBottom: '-250px' }}>
                <Image
                  src="/testimonials.webp"
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
        className="w-full bg-cover bg-center py-4 md:py-8"
        style={{ backgroundImage: "url('/background-texture.webp')" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="/moodboard.webp"
              alt="Design Moodboard"
              fill
              className="object-contain rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
