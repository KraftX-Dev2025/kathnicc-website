"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  MessageSquare
} from "lucide-react"
import { FaPinterestP } from "react-icons/fa6";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormState({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="text-[#8B6E4E] uppercase tracking-widest text-sm font-medium">
            Get In Touch
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif mt-3 text-[#3C3530]">
            Let's design your dream space
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-0.5 bg-[#8B6E4E] mx-auto my-6"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-serif text-[#3C3530] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-[#8B6E4E] mr-4" size={20} />
                  <span className="text-[#5D534B]">+91-8767834926</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#8B6E4E] mr-4" size={20} />
                  <span className="text-[#5D534B]">hello@kathnicc.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[#8B6E4E] mr-4" size={20} />
                  <span className="text-[#5D534B]">Studio: Mumbai, Available Globally</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-[#8B6E4E] mr-4" size={20} />
                  <span className="text-[#5D534B]">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-serif text-[#3C3530] mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#8B6E4E] flex items-center justify-center text-white hover:bg-[#7A5F43] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#8B6E4E] flex items-center justify-center text-white hover:bg-[#7A5F43] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#8B6E4E] flex items-center justify-center text-white hover:bg-[#7A5F43] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#8B6E4E] flex items-center justify-center text-white hover:bg-[#7A5F43] transition-colors"
                  aria-label="Pinterest"
                >
                  <FaPinterestP size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#8B6E4E] flex items-center justify-center text-white hover:bg-[#7A5F43] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-serif text-[#3C3530] mb-6">Send us a message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#5D534B] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#D9C5B3] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#8B6E4E]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#5D534B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#D9C5B3] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#8B6E4E]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#5D534B] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#D9C5B3] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#8B6E4E]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#5D534B] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-[#D9C5B3] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#8B6E4E]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#8B6E4E] text-white rounded-sm hover:bg-[#7A5F43] transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}