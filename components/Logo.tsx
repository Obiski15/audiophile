"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Logo() {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/icons/logo.svg"
          alt="Autophile logo"
          width={140}
          height={25}
        />
      </motion.div>
    </Link>
  )
}
