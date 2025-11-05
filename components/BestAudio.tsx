"use client"

import { motion } from "framer-motion"

import Container from "./Container"

function BestAudio() {
  return (
    <Container className="pt-[120px]">
      <div className="grid grid-cols-1 grid-rows-2 items-center justify-between gap-10 text-center md:gap-16 lg:grid-cols-2 lg:grid-rows-1 lg:gap-[125px] lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 mx-auto space-y-8 md:max-w-[573px] lg:order-1"
        >
          <h1 className="text-[28px] leading-11 font-bold tracking-[1.43px] uppercase lg:text-[40px]">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="text-[15px] leading-[25px] opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 h-full min-h-[300px] rounded-xl bg-[url('/images/man.png')] bg-cover bg-center bg-no-repeat grayscale-100 lg:order-2"
        ></motion.div>
      </div>
    </Container>
  )
}

export default BestAudio
