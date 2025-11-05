import Image from "next/image"

import Container from "../Container"
import SeeProduct from "../SeeProduct"

function Hero() {
  return (
    <Container className="bg-foreground text-background max-lg:px-0">
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center gap-10">
          <div className="absolute top-1/2 left-1/2 z-50 w-full max-w-[328px] -translate-x-1/2 -translate-y-1/2 space-y-10 text-center sm:max-w-[379px] lg:static lg:max-w-[400px] lg:translate-0 lg:text-left">
            <div className="space-y-6">
              <p className="text-sm font-normal tracking-[10px] uppercase opacity-50">
                new product
              </p>
              <h1 className="text-4xl leading-10 font-bold tracking-[2px] sm:text-[56px] sm:leading-[58px]">
                XX99 Mark II Headphones
              </h1>
              <p className="text-[15px] leading-6 font-medium tracking-normal opacity-75 lg:max-w-[350px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <SeeProduct
              className="text-[13px] font-bold tracking-[1px] uppercase"
              productId={process.env.NEXT_PUBLIC_XX99_Mark_II!}
            />
          </div>
          <div className="overflow-hidden max-sm:py-10">
            <Image
              className="max-sm:scale-150"
              src="/images/hero-headphone.png"
              alt="Hero headphone"
              width={708}
              height={630}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
