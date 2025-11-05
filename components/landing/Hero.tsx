"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import Container from "../Container"
import SeeProduct from "../SeeProduct"

function Hero() {
  return (
    <Container className="bg-foreground text-background max-lg:px-0">
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 z-50 w-full max-w-[328px] -translate-x-1/2 -translate-y-1/2 space-y-10 text-center sm:max-w-[379px] lg:static lg:max-w-[400px] lg:translate-0 lg:text-left"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-normal tracking-[10px] uppercase"
              >
                new product
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl leading-10 font-bold tracking-[2px] sm:text-[56px] sm:leading-[58px]"
              >
                XX99 Mark II Headphones
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[15px] leading-6 font-medium tracking-normal lg:max-w-[350px]"
              >
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <SeeProduct
                className="text-[13px] font-bold tracking-[1px] uppercase"
                productId={process.env.NEXT_PUBLIC_XX99_Mark_II!}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="overflow-hidden max-sm:py-10"
          >
            <Image
              className="max-sm:scale-150"
              src="/images/hero-headphone.png"
              alt="Hero headphone"
              width={708}
              height={630}
            />
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
