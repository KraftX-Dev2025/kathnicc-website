"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const furnitureItems = [
  {
    id: 1,
    name: "Modern Sofa",
    image: "/image1.jpg",
  },
  {
    id: 2,
    name: "Accent Chair",
    image: "/image2.jpg",
  },
  {
    id: 3,
    name: "Coffee Table",
    image: "/image3.jpg",
  },
  {
    id: 4,
    name: "Floor Lamp",
    image: "/image1.jpg",
  },
  {
    id: 5,
    name: "Decorative Vase",
    image: "/image2.jpg",
  },
]

export default function FloatingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Create transform values at the top level of the component
  // Card 1
  const card1X = useTransform(scrollYProgress, [0, 1], [50, -50])
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [5, -5])

  // Card 2
  const card2X = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  // Card 3
  const card3X = useTransform(scrollYProgress, [0, 1], [150, -150])
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [5, -5])

  // Card 4
  const card4X = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const card4Rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  // Card 5
  const card5X = useTransform(scrollYProgress, [0, 1], [250, -250])
  const card5Rotate = useTransform(scrollYProgress, [0, 1], [5, -5])

  // Array of transform values to use in the component
  const cardTransforms = [
    { x: card1X, rotate: card1Rotate },
    { x: card2X, rotate: card2Rotate },
    { x: card3X, rotate: card3Rotate },
    { x: card4X, rotate: card4Rotate },
    { x: card5X, rotate: card5Rotate },
  ]

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {furnitureItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute w-64 h-80 rounded-lg shadow-xl bg-white overflow-hidden"
          style={{
            x: cardTransforms[index].x,
            rotate: cardTransforms[index].rotate,
            left: `${index * 20 + 10}%`,
            top: `${(index % 3) * 25 + 20}%`,
            opacity: 0.8,
          }}
        >
          <div className="relative w-full h-full">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4">
              <h3 className="text-[#3C3530] font-serif">{item.name}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
