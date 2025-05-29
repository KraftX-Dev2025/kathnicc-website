"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { navLinks } from "@/lib/constants"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" : "bg-white/90 py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex font-serif tracking-tight text-[#8B6E4E]">
         <div className="relative h-12 w-32 rounded-md transition-all duration-300">
            <Image
              src="/kathnicc_no_bg.webp"
              alt="Kathnicc Logo"
              fill
              className="object-fill" 
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#5D534B] hover:text-[#8B6E4E] transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 px-6 py-2 bg-[#8B6E4E] text-white rounded-sm hover:bg-[#7A5F43] transition-colors text-sm uppercase tracking-wider"
          >
            Book Now
          </Link>
        </nav>

        <button className="md:hidden text-[#5D534B] focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#5D534B] hover:text-[#8B6E4E] transition-colors py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="px-6 py-2 bg-[#8B6E4E] text-white text-center rounded-sm hover:bg-[#7A5F43] transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
