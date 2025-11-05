"use client"

import { motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"

import { useCart } from "@/hooks/useCart"

function IncDecButton({ productId }: { productId: string }) {
  const { removeFromCart, cartItems, incQuantity } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary flex items-center justify-between gap-3 p-1.5"
    >
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          removeFromCart(productId)
        }}
        className="hover:text-primary cursor-pointer opacity-25 hover:opacity-100"
      >
        <Minus size={16} />
      </motion.button>

      <motion.p
        key={cartItems.find(item => item._id === productId)?.quantity}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="text-[13px] font-bold tracking-[1px]"
      >
        {cartItems.find(item => item._id === productId)?.quantity ?? 0}
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          incQuantity(productId)
        }}
        className="hover:text-primary cursor-pointer opacity-25 hover:opacity-100"
      >
        <Plus size={16} />
      </motion.button>
    </motion.div>
  )
}

export default IncDecButton
