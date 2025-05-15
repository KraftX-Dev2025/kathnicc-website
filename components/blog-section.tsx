"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Color in Interiors",
    excerpt: "How different colors affect mood, perception, and behavior in your living spaces.",
    image: "/image1.jpg",
    date: "May 10, 2025",
  },
  {
    id: 2,
    title: "How to Style a Luxury Living Room",
    excerpt: "Expert tips for creating a sophisticated, inviting living space that exudes luxury.",
    image: "/image2.jpg",
    date: "April 28, 2025",
  },
  {
    id: 3,
    title: "Timeless vs. Trendy: What's Right for Your Home?",
    excerpt: "Finding the perfect balance between enduring design and contemporary trends.",
    image: "/image3.jpg",
    date: "April 15, 2025",
  },
  {
    id: 4,
    title: "Our Favorite Statement Pieces This Season",
    excerpt: "Discover the standout furniture and décor items that are making waves this season.",
    image: "/image3.jpg",
    date: "March 30, 2025",
  },
]

export default function BlogSection() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="blog" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="text-[#8B6E4E] uppercase tracking-widest text-sm font-medium">
            Blog
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif mt-3 text-[#3C3530]">
            Design Stories & Style Tips
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-0.5 bg-[#8B6E4E] mx-auto my-6"></motion.div>
          <motion.p variants={itemVariants} className="text-[#5D534B] max-w-2xl mx-auto">
            Explore our collection of articles on interior design trends, styling tips, and inspiration for your home.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(0, 3).map((post) => (
            <motion.article key={post.id} variants={itemVariants} className="group">
              <Link href="#" className="block">
                <div className="relative h-64 mb-6 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm text-[#8B6E4E] mb-2">{post.date}</div>
                <h3 className="text-xl font-serif text-[#3C3530] mb-3 group-hover:text-[#8B6E4E] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#5D534B] mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center text-[#8B6E4E] font-medium group-hover:underline">
                  Read more
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border-[#8B6E4E] text-[#8B6E4E] rounded-sm hover:bg-[#8B6E4E]/10 transition-colors"
          >
            View all articles
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
