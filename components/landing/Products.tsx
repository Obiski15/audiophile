import Image from "next/image"

import CategoriesMini from "../categories/CategoriesMini"
import Container from "../Container"
import SeeProduct from "../SeeProduct"

function Products() {
  return (
    <Container className="pt-10 md:pt-24 lg:pt-[120px]">
      <div className="space-y-[120px] md:space-y-24 lg:space-y-[168px]">
        <CategoriesMini />

        <div className="space-y-12 text-center lg:text-left">
          <div className="bg-primary text-background flex flex-col items-center justify-center gap-8 overflow-hidden rounded-xl bg-[url('/icons/oval.svg')] bg-cover bg-center bg-no-repeat px-6 pt-[52px] pb-16 lg:flex-row lg:gap-[125px] lg:px-24">
            <div className="lg:translate-y-[20%]">
              <Image
                className="mx-auto"
                src="/images/zx9-speaker.png"
                alt="ZX9 Speaker"
                width={410}
                height={493}
              />
            </div>

            <div className="space-y-10 lg:max-w-[350px]">
              <div className="space-y-6">
                <p className="text-sm font-normal tracking-[10px] text-[#D87D4A] uppercase">
                  new product
                </p>

                <h1 className="text-4xl leading-10 font-bold tracking-[2px] uppercase sm:text-[40px] sm:leading-11">
                  ZX9 SPEAKER
                </h1>
                <p className="text-[15px] leading-6 font-medium tracking-normal opacity-75">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
              </div>

              <SeeProduct
                variant="secondary"
                className="text-[13px] font-bold tracking-[1px] uppercase"
                productId={process.env.NEXT_PUBLIC_ZX9_SPEAKER!}
              />
            </div>
          </div>

          <div className="bg-[url('/images/zx7-speaker.png')] bg-cover bg-center bg-no-repeat">
            <div className="h-full rounded-xl py-24 pl-6 md:pl-14 lg:pl-[95px]">
              <div className="space-y-8 uppercase">
                <h3 className="text-[28px] font-bold tracking-[2px] uppercase">
                  ZX7 SPEAKER
                </h3>
                <SeeProduct
                  productId={process.env.NEXT_PUBLIC_ZX7_SPEAKER!}
                  variant="outline"
                  className="bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2 justify-between gap-5 md:grid-cols-2 md:grid-rows-1">
            <div className="h-full rounded-xl bg-[url('/images/yx1-earphone.png')] bg-cover bg-center bg-no-repeat"></div>

            <div className="bg-secondary h-full rounded-xl py-10 sm:pl-6 md:py-[100px] md:pl-10 lg:pl-24">
              <div className="space-y-8 uppercase">
                <h3 className="text-[28px] font-bold tracking-[2px]">
                  yx1 earphone
                </h3>

                <SeeProduct
                  productId={process.env.NEXT_PUBLIC_YX1_EARPHONE!}
                  variant="outline"
                >
                  see product
                </SeeProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Products
