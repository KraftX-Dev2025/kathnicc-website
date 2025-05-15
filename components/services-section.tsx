"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
    icon: "✦",
  },
  {
    id: 2,
    title: "Home Décor Curation",
    description:
      "From art pieces to textiles and lighting, we handpick décor that complements your space and enhances your home's character.",
    icon: "✦",
  },
  {
    id: 3,
    title: "Luxury Home Makeovers",
    description:
      "Transform your living space with full-service makeovers. We handle everything from concept to completion — including sourcing, styling, and installation — with a focus on elegance and quality.",
    icon: "✦",
  },
  {
    id: 4,
    title: "Color & Material Consultation",
    description:
      "Need help choosing the perfect palette or finishes? Our consultation service helps guide your decisions with expert insights and visual clarity.",
    icon: "✦",
  },
  {
    id: 5,
    title: "Turnkey Styling for Real Estate",
    description:
      "Selling your home? Our luxury staging service makes your property unforgettable and market-ready with elevated presentation.",
    icon: "✦",
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  return (
    <section id="services" className="py-20 md:py-32 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="text-[#8B6E4E] uppercase tracking-widest text-sm font-medium">
            What We Offer
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif mt-3 text-[#3C3530]">
            Our Services
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-0.5 bg-[#8B6E4E] mx-auto my-6"></motion.div>
          <motion.p variants={itemVariants} className="text-[#5D534B] max-w-2xl mx-auto">
            We provide comprehensive design solutions tailored to your unique style and needs. Each service is crafted
            with precision and an unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-3xl text-[#8B6E4E] mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-[#3C3530] mb-3">{service.title}</h3>
              <p className="text-[#5D534B] mb-6">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-[#8B6E4E] font-medium group-hover:underline">
                Learn more
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
