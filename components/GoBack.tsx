"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

function GoBack() {
  const router = useRouter()

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: -5 }}
      onClick={() => {
        router.back()
      }}
      className="text-foreground/50 hover:text-primary cursor-pointer p-0 text-[15px] leading-[25px] font-semibold"
    >
      Go Back
    </motion.button>
  )
}

export default GoBack
