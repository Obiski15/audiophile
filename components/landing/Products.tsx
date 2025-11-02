import Image from "next/image"

import CategoriesMini from "../categories/CategoriesMini"
import Container from "../Container"
import { Button } from "../ui/button"

function Products() {
  return (
    <Container className="pt-10 md:pt-24 lg:pt-[120px]">
      <div className="space-y-[120px] md:space-y-24 lg:space-y-[168px]">
        <CategoriesMini />

        <div className="space-y-12">
          <div className="bg-primary text-background flex items-center justify-center gap-[125px] overflow-hidden bg-[url('/icons/oval.svg')] bg-cover bg-left bg-no-repeat px-24 pt-24">
            <div className="border-2">
              <Image
                src="/images/zx9-speaker.png"
                alt="ZX9 Speaker"
                width={410}
                height={493}
              />
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-sm font-normal tracking-[10px] text-[#D87D4A] uppercase">
                  new product
                </p>

                <h1 className="text-4xl leading-10 font-bold tracking-[2px] uppercase sm:text-[40px] sm:leading-11">
                  YX1 WIRELESS EARPHONES
                </h1>
                <p className="text-[15px] leading-6 font-medium tracking-normal opacity-75">
                  Tailor your listening experience with bespoke dynamic drivers
                  from the new YX1 Wireless Earphones. Enjoy incredible
                  high-fidelity sound even in noisy environments with its active
                  noise cancellation feature.
                </p>
              </div>

              <Button
                variant="secondary"
                className="text-[13px] font-bold tracking-[1px] uppercase"
              >
                see product
              </Button>
            </div>
          </div>

          <div className="bg-[url('/images/zx7-speaker.png')] bg-cover bg-center bg-no-repeat">
            <div className="h-full rounded-xl py-[100px] pl-[95px]">
              <div className="space-y-8 uppercase">
                <h3 className="text-[28px] font-bold tracking-[2px] uppercase">
                  yx1 earphone
                </h3>
                <Button variant="outline" className="bg-transparent">
                  see product
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2 justify-between gap-5 md:grid-cols-2 md:grid-rows-1">
            <div className="h-full rounded-xl bg-[url('/images/yx1-earphone.png')] bg-cover bg-center bg-no-repeat"></div>

            <div className="bg-secondary h-full rounded-xl py-[100px] pl-[95px]">
              <div className="space-y-8 uppercase">
                <h3 className="text-[28px] font-bold tracking-[2px]">
                  yx1 earphone
                </h3>
                <Button variant="outline">see product</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Products
