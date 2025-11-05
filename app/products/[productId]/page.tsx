"use client"

import { use } from "react"
import { motion } from "framer-motion"

import BestAudio from "@/components/BestAudio"
import CategoriesMini from "@/components/categories/CategoriesMini"
import Container from "@/components/Container"
import GoBack from "@/components/GoBack"
import ProductDetail from "@/components/products/ProductDetail"

interface Props {
  params: Promise<{ productId: string }>
}

export default function ProductDetailsPage({ params }: Props) {
  const { productId } = use(params)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="pt:4 space-y-6 md:pt-8 lg:space-y-14 lg:pt-20">
        <GoBack />

        <div className="space-y-[120px] lg:space-y-40">
          <ProductDetail productId={productId} />
          <CategoriesMini />
        </div>
      </Container>

      <BestAudio />
    </motion.div>
  )
}
