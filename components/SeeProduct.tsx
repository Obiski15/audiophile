"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "./ui/button"

type Props = {
  children?: ReactNode
  className?: string
  productId: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
}

function SeeProduct({ children, className, productId, variant }: Props) {
  const router = useRouter()

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={variant}
        className={cn("uppercase", className)}
        onClick={() => router.push(`/products/${productId}`)}
      >
        {children ?? "see product"}
      </Button>
    </motion.div>
  )
}

export default SeeProduct
