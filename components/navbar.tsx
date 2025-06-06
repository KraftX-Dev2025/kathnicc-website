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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/60 py-2 shadow-sm backdrop-blur-sm" : "bg-transparent py-4"
        }`}
    >
      <div className="container mt-4 px-6 flex justify-between items-center">
        {/* <Link href="/" className="flex font-serif tracking-tight text-[#8B6E4E]">
          <div className="relative h-12 w-32 rounded-md transition-all duration-300">
            <Image
              src="/kathnicc_no_bg.webp"
              alt="Kathnicc Logo"
              fill
              className="object-fill"
            />
          </div>
        </Link> */}

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-[#8B6E4E] transition-colors text-xl uppercase tracking-wider ${scrolled ? "text-[#8B6E4E]" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            href="#contact"
            className="ml-4 px-6 py-2 bg-[#8B6E4E] text-white rounded-sm hover:bg-[#7A5F43] transition-colors text-sm uppercase tracking-wider"
          >
            Book Now
          </Link> */}
        </nav>

        <button className={`md:hidden ml-auto focus:outline-none ${scrolled ? "text-[#8B6E4E]" : "text-white"}`} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-2xl z-[100] flex flex-col p-6 md:hidden"
          >
            <button
              className="self-end mb-6 text-[#5D534B] focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#5D534B] hover:text-[#8B6E4E] transition-colors text-lg font-aceh uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 px-6 py-2 bg-[#8B6E4E] text-white text-center rounded-full hover:bg-[#7A5F43] transition-colors text-base uppercase tracking-wider font-aceh"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
