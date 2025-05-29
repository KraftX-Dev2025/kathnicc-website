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
import { contactFormFields, contactInfo, socialLinks } from "@/lib/constants"

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
      transition: { duration: 0.4 },
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

  // Render contact information item
  const renderContactItem = (contact: typeof contactInfo[0]) => {
    const IconComponent = contact.icon
    return (
      <div key={contact.label} className="flex items-center">
        <IconComponent className="text-[#8B6E4E] mr-4" size={20} />
        <span className="text-[#5D534B]">{contact.text}</span>
      </div>
    )
  }

  // Render social media link
  const renderSocialLink = (social: typeof socialLinks[0]) => {
    const IconComponent = social.icon
    return (
      <a
        key={social.label}
        href={social.href}
        className="w-10 h-10 rounded-full bg-[#8B6E4E] flex items-center justify-center text-white hover:bg-[#7A5F43] transition-colors"
        aria-label={social.label}
      >
        <IconComponent size={18} />
      </a>
    )
  }

  // Render form field
  const renderFormField = (field: typeof contactFormFields[0]) => {
    const baseClasses = "w-full px-4 py-2 border border-[#D9C5B3] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#8B6E4E]"
    return (
      <div key={field.name}>
        <label htmlFor={field.name} className="block text-[#5D534B] mb-2">
          {field.label}
        </label>
        {field.type === "textarea" ? (
          <textarea
            id={field.name}
            name={field.name}
            value={formState[field.name as keyof typeof formState]}
            onChange={handleChange}
            required={field.required}
            rows={field.rows}
            placeholder={field.placeholder}
            className={baseClasses}
          />
        ) : (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formState[field.name as keyof typeof formState]}
            onChange={handleChange}
            required={field.required}
            placeholder={field.placeholder}
            className={baseClasses}
          />
        )}
      </div>
    )
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
                {contactInfo.map(renderContactItem)}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-serif text-[#3C3530] mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map(renderSocialLink)}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-serif text-[#3C3530] mb-6">Send us a message</h3>
              <div className="space-y-4">
                {contactFormFields.map(renderFormField)}
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