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
      image: "/service1.jpg",
      hasOverlay: true,
      description: "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
      isActive: false
    },
    {
      id: 2,
      title: "HOME DÉCOR CURATION",
      image: "/service2.jpg",
      hasOverlay: true,
      description: "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
      isActive: true
    },
    {
      id: 3,
      title: "LUXURY HOME MAKEOVERS",
      image: "/service3.jpg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 4,
      title: "COLOR &\nMATERIAL CONSULTATION",
      image: "/service4.jpg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 5,
      title: "TURNKEY STYLING FOR RENTALS",
      image: "/service5.jpg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 6,
      title: "SPACE PLANNING\n& LAYOUT",
      image: "/service6.jpg",
      hasOverlay: false,
      description: "",
      isActive: false
    },
    {
      id: 7,
      title: "CUSTOM FURNITURE\nDESIGN",
      image: "/service7.jpg",
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
            className="text-left text-4xl md:text-5xl text-[#4e2e1e] font-serif mb-12 tracking-wide"
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
                        <div className="absolute inset-0 bg-[#4e2e1e]/80 text-white text-sm p-4 flex items-center justify-center text-center">
                          {service.description}
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-[#4e2e1e] font-serif text-sm whitespace-pre-line">
                        {service.title}
                      </p>
                      {service.isActive && (
                        <div className="w-12 border-b-2 border-black mt-1 mx-auto"></div>
                      )}
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
