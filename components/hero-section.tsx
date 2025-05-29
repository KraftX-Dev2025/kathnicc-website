"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row overflow-hidden"
      style={{
        minHeight: "calc(100vh - 5rem)",
        height: "calc(100vh - 5rem)",
        marginTop: "5rem",
      }}
    >
      {/* Left Side - Full Height Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full lg:w-1/2 h-1/2 lg:h-full"
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
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Right Side - Content */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center bg-[#F8F5F2] overflow-hidden pt-0 lg:pt-28">
        {/* Texture Background */}
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/texture-bg.jpg"
            alt="Background texture"
            fill
            className="object-cover"
            quality={50}
          />
        </div>
        {/* Logo at top left */}
        <div className="absolute top-20 left-36 z-20">
          <Image src={"/kathnicc_no_bg.webp"} alt="Logo" width={200} height={200} />
        </div>
        {/* Decorative Line */}
        <div className="w-[36rem] h-[2px] bg-[#8b6d4eac] rounded-full absolute top-44 left-36 z-30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative text-center px-6 lg:px-12 max-w-full z-10"
        >
          {/* Text Block */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['poppins'] text-[#8B6E4E] leading-tight font-semibold text-left">
            LUXURY LIVING,
            <span className="block text-[#8B6E4E] mt-4">THOUGHTFULLY
            </span>
            <span className=" relative text-black font-['Adelia'] top-6 right-4 text-8xl font-normal">Designed</span>
          </h1>

          <p className="mt-16 text-lg text-black font-['Roboto'] leading-relaxed text-left">
            Elevate your space with Kathnicc —
          </p>
          <p className=" text-lg text-black font-['Roboto'] leading-relaxed text-left">
            where interior design meets artistry and refined living.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex justify-start mt-12">
            <Link
              href="#portfolio"
              className="mt-8 inline-flex items-center justify-start px-4 py-2 bg-[#8B6E4E] text-white font-['Roboto'] font-medium rounded-sm hover:bg-[#7A5F43] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Work
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}