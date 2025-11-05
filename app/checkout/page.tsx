"use client"

import { motion } from "framer-motion"

import Checkout from "@/components/checkout/Checkout"
import Container from "@/components/Container"

function CheckoutPage() {
  return (
    <Container className="bg-secondary -mb-24 pt-4 pb-24 md:pt-12 md:pb-32 lg:pt-20 lg:pb-[140px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Checkout />
      </motion.div>
    </Container>
  )
}

export default CheckoutPage
