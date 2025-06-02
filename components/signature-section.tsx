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
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >

          {/* Left Image */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <Image
              src="/hero-image.jpg"
              alt="Signature Space"
              width={500}
              height={900}
              className="w-full max-w-lg h-[700px] rounded-lg object-cover shadow-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-[#6b4e37] text-5xl md:text-8xl font-velista mb-8 leading-tight tracking-wide font-semibold">
              OUR<br />
              SIGNATURE<br />
              SPACES
            </h2>
            <p className="text-[#6b4e37] text-lg md:text-2xl font-light mb-8 max-w-sm leading-relaxed">
              A curated showcase of our finest transformations –<br />
              blending form,<br />
              function, and luxury.
            </p>
            <div className="w-full border-b-2 border-[#6b4e37]"></div>
          </motion.div>

        </motion.div>
      </div>

      {/* Remove moodboard section for cleaner look */}
    </section>
  )
}
