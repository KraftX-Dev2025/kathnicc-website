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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[500px]">
            <motion.div variants={itemVariants} className="absolute top-0 left-0 w-[70%] h-[70%] z-10">
              <Image
                src="/image3.jpg"
                alt="Interior design"
                fill
                className="object-cover rounded-md shadow-lg"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="absolute bottom-0 right-0 w-[60%] h-[60%] z-20">
              <Image
                src="/image2.jpg"
                alt="Interior detail"
                fill
                className="object-cover rounded-md shadow-lg"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="absolute top-[60%] left-[10%] w-16 h-16 rounded-full bg-[#D9C5B3] z-0"
            />
            <motion.div
              variants={itemVariants}
              className="absolute top-[20%] right-[5%] w-24 h-24 rounded-full bg-[#8B6E4E]/10 z-0"
            />
          </div>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.span
              variants={itemVariants}
              className="text-[#8B6E4E] uppercase tracking-widest text-sm font-medium"
            >
              <Image src={"/kathnicc_no_bg.webp"} alt="Logo" width={400} height={400} className="inline-block mr-2" />
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-[#3C3530]">
              Your Story, Your Space — <br />
              <span className="text-[#8B6E4E]">Beautifully</span> Told
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#5D534B]">
              At Kathnicc, we believe that your home is your sanctuary. Our design philosophy is rooted in storytelling
              — every texture, every color, every layout is chosen to reflect who you are.
            </motion.p>
            <motion.p variants={itemVariants} className="text-[#5D534B]">
              With a passion for elegance, function, and personalized design, we specialize in:
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-3">
              <motion.li variants={itemVariants} className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6E4E]"></span>
                <span className="text-[#5D534B]">High-end interior design</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6E4E]"></span>
                <span className="text-[#5D534B]">Bespoke home décor</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6E4E]"></span>
                <span className="text-[#5D534B]">Luxury home transformations</span>
              </motion.li>
            </motion.ul>
            <motion.p variants={itemVariants} className="text-[#5D534B]">
              Whether it's a single room refresh or a full home redesign, we infuse every project with soul,
              sophistication, and meticulous attention to detail.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
