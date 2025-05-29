"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Full Screen Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-screen h-screen"
      >
        <Image
          src="/hero-image.jpg"
          alt="Luxury interior"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Floating Content Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end px-4 lg:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-white/70 backdrop-blur-sm shadow-2xl p-8 lg:p-12 max-w-lg lg:max-w-xl w-1/4 mx-4 lg:mx-0 lg:mr-8 h-full flex flex-col justify-start"
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image src={"/k-logo.webp"} alt="Logo" width={150} height={150} className="lg:w-32 lg:h-32" />
          </div>

          {/* Text Block */}
          <h1 className="text-2xl font-['VELISTA'] text-black/70 leading-tight font-semibold text-center">
            LUXURY LIVING THOUGHTFULLY
          </h1>
          {/* Decorative Line */}
          <div className="h-[2px] bg-[#8C4F23] rounded-full mb-8 w-[55%] mx-auto" />
          <span className="relative bottom-4 text-[#8C4F23] font-adelia mt-2 text-5xl font-normal">Designed</span>

          {/* Text Block matching the image */}
          <div className="mt-12 w-full flex items-center flex-col justify-center px-10">
            <p className="text-lg font-semibold text-[#3C3530] font-aceh leading-snug text-left">
              Elevate your space with Kathanicc –<br />
              where interior design meets artistry and refined living
            </p>
            <div className="w-full h-[2px] bg-[#8B6E4E] rounded-full my-6" />
            <p className="text-[17px] text-[#3C3530] font-aceh leading-snug text-left">
              From curated home décor to full-scale luxury makeovers, we craft timeless interiors that reflect your lifestyle, taste, and story.
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  )
}