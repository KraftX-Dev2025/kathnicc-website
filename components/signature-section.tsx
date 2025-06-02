"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function SignatureSection() {
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

  return (
    <section
      id="portfolio"
      className="bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: "url('/background-texture.webp')" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >

          {/* Left Image */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <Image
              src="/hero-image.jpg"
              alt="Signature Space"
              width={600}
              height={400}
              className="w-full h-auto rounded object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <h2 className="text-[#4e2e1e] text-4xl md:text-5xl font-serif mb-6 leading-tight">
              OUR <br />
              SIGNATURE <br />
              SPACES
            </h2>
            <p className="text-[#4e2e1e] text-base md:text-lg font-light mb-6 max-w-md">
              A curated showcase of our finest transformations – blending form, function, and luxury.
            </p>
            <div className="w-16 border-b-2 border-black"></div>
          </motion.div>

        </motion.div>
      </div>

      {/* Moodboard Image Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full mt-16"
      >
        <Image
          src="/moodboard.jpg"
          alt="Design Moodboard"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>

    </section>
  )
}
