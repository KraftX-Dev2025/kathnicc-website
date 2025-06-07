"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function SignatureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Carousel state and images
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const carouselImages = [
    "/signature/signature-1.webp",
    "/signature/signature-2.webp",
    "/signature/signature-3.webp",
    "/signature/signature-4.webp",
    "/signature/signature-5.webp",
    "/signature/signature-6.webp",
    "/signature/signature-7.webp",
    "/signature/signature-8.webp",
  ]

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

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

          {/* Left Image Carousel */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-lg h-[700px] rounded-lg overflow-hidden shadow-lg mx-auto">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <Image
                    src={image}
                    alt={`Signature Space ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                      ? 'bg-white'
                      : 'bg-white/50 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            </div>
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
            <div className="w-full border-b-4 border-[#6b4e37]"></div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  )
}
