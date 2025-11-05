"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useQuery } from "convex/react"
import { motion } from "framer-motion"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"

import { Button } from "../ui/button"

function Likes({ productId }: { productId: string }) {
  const products = useQuery(api.products.getProducts, {
    id: productId as Id<"products">,
    limit: 3,
  })
  const router = useRouter()

  if (!products || !products.length) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-10 md:space-y-16"
    >
      <h2 className="text-center text-2xl leading-9 font-bold tracking-[1.14px] uppercase md:text-[32px]">
        you may also like
      </h2>

      <div className="grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 md:gap-[30px]">
        {products.map(({ _id, name, image }, index) => (
          <motion.div
            key={_id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="h-full space-y-8 md:space-y-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary flex aspect-square items-center justify-center rounded-xl px-4 py-3 lg:px-16 lg:py-[60px]"
            >
              <Image alt={name} src={image} width={150} height={195} />
            </motion.div>

            <div className="flex flex-col items-center justify-center gap-8">
              <h3 className="max-w-[95%] overflow-hidden text-2xl font-bold tracking-[1.71px] text-ellipsis whitespace-nowrap uppercase">
                {name}
              </h3>
              <Button
                onClick={() => router.push(`/products/${_id}`)}
                className="uppercase"
              >
                see product
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Likes
