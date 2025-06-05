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
          src="/hero-image.webp"
          alt="Luxury interior"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>

      {/* Floating Content Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end px-2 sm:px-4 md:px-8 lg:px-16 pb-44 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="bg-white/60 backdrop-blur-sm shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/4 mx-2 sm:mx-4 md:mx-8 lg:mx-0 lg:mr-20 h-auto lg:h-full flex flex-col justify-start"
        >
          {/* Logo */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <Image src={"/k-logo.webp"} alt="Logo" width={80} height={80} className="w-20 h-20 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-24 lg:h-24" />
          </div>

          {/* Text Block */}
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-2xl font-velista text-black/70 leading-tight font-semibold text-center">
            LUXURY LIVING THOUGHTFULLY
          </h1>
          {/* Decorative Line */}
          {/* <span className="h-[2px] bg-[#8B6E4E] mb-6 w-2/3 md:w-[65%] mx-auto" /> */}
          <span className="relative -ml-4 text-[#8C4F23] font-adelia mt-2 text-2xl sm:text-3xl md:text-5xl font-normal text-center block">Designed</span>

          {/* Text Block matching the image */}
          <div className="mt-8 sm:mt-12 md:mt-14 w-full flex items-center flex-col justify-center px-2 sm:px-4 md:px-4 md:ml-2">
            <p className="text-sm sm:text-base md:text-md 2xl:text-md  text-[#3C3530] font-aceh leading-snug text-left w-full">
              Elevate your space with Kathanicc–<br />
              where interior design meets artistry and refined living
            </p>
            <div className="w-full h-[2px] bg-[#8B6E4E] rounded-full my-4 sm:my-6" />
            <p className="text-sm sm:text-base md:text-md 2xl:text-md text-[#3C3530] font-aceh leading-snug text-left w-full">
              From curated home décor to full-scale luxury makeovers, we craft timeless interiors that reflect your lifestyle, taste, and story.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Centered Bottom Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
        <button className="px-3 py-2 text-lg bg-white text-[#8B6E4E] font-velista font-bold shadow-lg border border-[#8B6E4E] hover:bg-[#f8f5f2] transition-all duration-200 mb-8 sm:mb-0">
          BOOK A CONSULTATION
        </button>
      </div>
      {/* Tagline below button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
        <span className="text-white font-velista tracking-wide whitespace-normal text-lg font-bold text-center px-2">
          HOME DECOR - LUXURY INTERIOR - SPACE PLANNING
        </span>
      </div>

    </section>
  )
}