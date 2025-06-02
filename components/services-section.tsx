"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

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
      transition: { duration: 0.2 },
    },
  }

  const services = [
    {
      id: 1,
      title: "INTERIOR DESIGN",
      image: "/service1.jpeg",
      hasOverlay: true,
      description: "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
      isActive: false
    },
    {
      id: 2,
      title: "HOME DÉCOR CURATION",
      image: "/service1.jpeg",
      hasOverlay: true,
      description: "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
      isActive: true
    },
    {
      id: 3,
      title: "LUXURY HOME MAKEOVERS",
      image: "/service1.jpeg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 4,
      title: "COLOR &\nMATERIAL CONSULTATION",
      image: "/service1.jpeg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 5,
      title: "TURNKEY STYLING FOR RENTALS",
      image: "/service1.jpeg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 6,
      title: "SPACE PLANNING\n& LAYOUT",
      image: "/service1.jpeg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 7,
      title: "CUSTOM FURNITURE\nDESIGN",
      image: "/service1.jpeg",
      hasOverlay: false,
      description: "",
      isActive: false
    }
  ]

  return (
    <section
      id="services"
      className="bg-cover bg-center min-h-screen flex items-center "
      style={{ backgroundImage: "url('/background-texture.webp')" }}
    >
      <div className="w-full ml-4 md:ml-44">
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
            <div className="overflow-x-auto pb-8">
              <div className="flex gap-6 min-w-max">
                {services.map((service) => (
                  <div key={service.id} className="flex-shrink-0">
                    <div className="relative w-64 h-80 overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      {service.hasOverlay && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-white/60 text-[#4e2e1e] text-xs p-4 backdrop-blur-sm">
                          <p className="text-left text-sm font-bold">{service.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="text-left mt-4 w-48">
                      <p className="text-[#4e2e1e] font-serif text-2xl font-semibold ">
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
