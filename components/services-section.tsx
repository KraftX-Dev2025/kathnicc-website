"use client"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedService, setSelectedService] = useState<number | null>(null)

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
      transition: { duration: 0.2 },
    },
  }

  const services = [
    {
      id: 1,
      title: "HOME DÉCOR CURATION",
      image: "/services/home-decor.webp",
      hasOverlay: true,
      description: "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
      isActive: true
    },
    {
      id: 2,
      title: "INTERIOR DESIGN",
      image: "/services/interior-design.webp",
      hasOverlay: true,
      description: "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
      isActive: false
    },



    {
      id: 3,
      title: "TURNKEY STYLING FOR RENTALS",
      image: "/services/trunky-style.webp",
      hasOverlay: true,
      description: "Selling your home? Our luxury staging service makes your property unforgettable and market-ready with elevated presentation.",
      isActive: false
    },
    {
      id: 4,
      title: "LUXURY HOME MAKEOVERS",
      image: "/services/luxury-design.webp",
      hasOverlay: true,
      description: "Transform your living space with full-service makeovers. We handle everything from concept to completion — including sourcing, styling, and installation — with a focus on elegance and quality.",
      isActive: false
    },
    {
      id: 5,
      title: "SPACE PLANNING\n& LAYOUT",
      image: "/services/space-planing.webp",
      hasOverlay: true,
      description: "Expert space planning and layout design to maximize functionality and flow. We create spaces that are not only beautiful but also practical for everyday living.",
      isActive: false
    },
    {
      id: 6,
      title: "COLOR &\nMATERIAL CONSULTATION",
      image: "/services/color-material.webp",
      hasOverlay: true,
      description: "Transform your living space with full-service makeovers. We handle everything from concept to completion — including sourcing, styling, and installation — with a focus on elegance and quality.",
      isActive: false
    },
    {
      id: 7,
      title: "CUSTOM FURNITURE\nDESIGN",
      image: "/services/custom-furniture.webp",
      hasOverlay: true,
      description: "Bespoke furniture solutions tailored to your space and style. We collaborate with skilled artisans to create unique pieces that elevate your interior.",
      isActive: false
    }
  ]

  return (
    <section
      id="services"
      className="bg-cover bg-center min-h-screen flex items-center "
      style={{ backgroundImage: "url('/background-texture.webp')" }}
    >
      <div className="w-full ml-4 md:ml-44 mr-12 md:mr-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-left text-4xl md:text-7xl text-[#4e2e1e] font-velista mb-12 tracking-wide"
          >
            OUR SERVICES
          </motion.h2>

          {/* Scrollable Service Cards */}
          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-x-auto pb-8 pr-16">
              <div className="flex gap-6 min-w-max pr-16">
                {services.map((service) => (
                  <div key={service.id} className="flex-shrink-0">
                    <div
                      className="relative w-64 h-80 overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Click indicator */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>

                      {/* Overlay that appears on click */}
                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 bg-white/95 text-[#4e2e1e] p-6 backdrop-blur-sm flex flex-col justify-center"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedService(null)
                            }}
                            className="absolute top-4 right-4 w-8 h-8 bg-[#4e2e1e]/10 hover:bg-[#4e2e1e]/20 rounded-full flex items-center justify-center transition-colors"
                          >
                            <span className="text-lg font-bold">×</span>
                          </button>
                          <h3 className="text-lg font-bold mb-3 text-[#4e2e1e]">{service.title}</h3>
                          <p className="text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                      )}
                    </div>
                    <div className="text-left mt-4 w-48">
                      <p className="text-[#4e2e1e] font-serif text-2xl font-semibold">
                        {service.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(78, 46, 30, 0.1);
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(78, 46, 30, 0.3);
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(78, 46, 30, 0.5);
        }
      `}</style>
    </section>
  )
}
