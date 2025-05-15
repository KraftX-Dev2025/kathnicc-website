"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Modern Minimalist Penthouse",
    location: "NYC",
    image: "/image1.jpg",
  },
  {
    id: 2,
    title: "Bohemian Luxe Villa",
    location: "Goa",
    image: "/image2.jpg",
  },
  {
    id: 3,
    title: "Classic Glamour Living Room",
    location: "London",
    image: "/image3.jpg",
  },
  {
    id: 4,
    title: "Art-Deco Inspired Makeover",
    location: "Dubai",
    image: "/image1.jpg",
  },
  {
    id: 5,
    title: "Contemporary Coastal Retreat",
    location: "Miami",
    image: "/image2.jpg",
  },
  {
    id: 6,
    title: "Scandinavian Inspired Loft",
    location: "Stockholm",
    image: "/image3.jpg",
  },
]

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      })

      // Update active index based on scroll position
      const newIndex = Math.round(scrollTo / clientWidth)
      setActiveIndex(Math.max(0, Math.min(newIndex, portfolioItems.length - 1)))
    }
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="text-[#8B6E4E] uppercase tracking-widest text-sm font-medium">
            Portfolio
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-[#3C3530] text-3xl md:text-4xl font-serif mt-3">
            Our Signature Spaces
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-0.5 bg-[#8B6E4E] mx-auto my-6"></motion.div>
          <motion.p variants={itemVariants} className="text-[#5D534B] max-w-2xl mx-auto">
            A curated showcase of our finest transformations — blending form, function, and luxury.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="overflow-hidden"
          >
            <div
              ref={sliderRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {portfolioItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] snap-center"
                >
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-serif">{item.title}</h3>
                      <p className="text-white/80">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#3C3530] rounded-full p-2 shadow-md z-10 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#3C3530] rounded-full p-2 shadow-md z-10 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({
                      left: index * sliderRef.current.clientWidth,
                      behavior: "smooth",
                    })
                    setActiveIndex(index)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? "bg-[#8B6E4E] w-6" : "bg-[#D9C5B3]"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
