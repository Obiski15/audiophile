"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    name: "headphones",
    image: "/images/categories/headphone",
    path: "/category/headphones",
  },
  {
    name: "speakers",
    image: "/images/categories/speaker",
    path: "/category/speakers",
  },
  {
    name: "earphones",
    image: "/images/categories/earphone",
    path: "/category/earphones",
  },
]

function CategoriesMini() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-[30px] md:grid-cols-3 md:grid-rows-1">
      {categories.map(({ path, image, name }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          className="relative h-full text-center"
        >
          <div className="bg-secondary relative mt-20 flex flex-col items-center justify-center gap-3.5 rounded-xl pt-[120px] pb-[30px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="after:bg-foreground absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 after:inset-0 after:inline-block after:h-[18px] after:w-[122px] after:blur-xl"
            >
              <Image
                src={`${image}.png`}
                className="mx-auto"
                alt={`Category ${name}`}
                height={160}
                width={120}
              />
            </motion.div>
            <h3 className="text-lg font-bold tracking-[1.29px] uppercase">
              {name}
            </h3>
            <Link href={path} className="flex items-center justify-start gap-1">
              <span className="text-[13px] font-bold uppercase opacity-50">
                shop
              </span>
              <ChevronRight className="text-primary" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default CategoriesMini
