"use client"

import { motion } from "framer-motion"

import BestAudio from "@/components/BestAudio"
import Hero from "@/components/landing/Hero"
import Products from "@/components/landing/Products"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Products />
      <BestAudio />
    </motion.div>
  )
}
