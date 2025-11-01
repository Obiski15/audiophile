import Image from "next/image"

import { formatCurrency } from "../../lib/utils"
import IncDecButton from "../cart/IncDecButton"
import { Button } from "../ui/button"
import Likes from "./Likes"

function ProductDetail() {
  return (
    <div className="space-y-[120px] lg:space-y-40">
      <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-[52] lg:gap-[125px]">
        <div className="bg-secondary shrink-0 basis-[40%] rounded-xl p-18">
          {/* todo: after shadow */}
          {/* backdrop-filter: blur(43.49250793457031px) */}
          <Image
            className="m-auto"
            src="/images/categories/earphone.png"
            alt="name"
            width={350}
            height={390}
          />
        </div>

        <div className="basis-[60%] space-y-10 self-center">
          <div className="space-y-6">
            <p className="text-sm font-normal tracking-[10px] text-[#D87D4A] uppercase">
              new product
            </p>

            <h1 className="text-4xl leading-10 font-bold tracking-[2px] uppercase sm:text-[40px] sm:leading-11">
              YX1 WIRELESS EARPHONES
            </h1>
            <p className="text-[15px] leading-6 font-medium tracking-normal opacity-75">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
          </div>

          <h3 className="text-lg font-bold tracking-[1.29px]">
            {formatCurrency(222)}
          </h3>

          <div className="flex w-fit items-center justify-start gap-4">
            <IncDecButton />
            <Button className="text-[13px] font-bold tracking-[1px] uppercase">
              see product
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-[88px] md:flex-row md:gap-[120px]">
        {/* FEATURES */}
        <div className="space-y-8 md:basis-[60%] lg:basis-[70%]">
          <h2 className="text-[32px] leading-9 font-bold tracking-[1.14px] uppercase">
            features
          </h2>
          <p className="text-[15px] leading-[25px] font-normal opacity-25">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you&apos;re taking a business call or just in
            your own personal space, the auto on/off and pause features ensure
            that you&apos;ll never miss a beat.
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        {/* IN THE BOX */}
        <div className="space-y-8 md:basis-[40%] lg:basis-[30%]">
          <h2 className="text-[32px] leading-9 font-bold tracking-[1.14px] uppercase">
            in the box
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-start gap-6 text-[15px] leading-[25px]">
              <span className="text-primary font-bold">1x</span>
              <span className="font-normal opacity-50">Headphone Unit</span>
            </li>
            <li className="flex items-center justify-start gap-6 text-[15px] leading-[25px]">
              <span className="text-primary font-bold">2x</span>
              <span className="font-normal opacity-50">
                Replacement Earcups
              </span>
            </li>
            <li className="flex items-center justify-start gap-6 text-[15px] leading-[25px]">
              <span className="text-primary font-bold">1x</span>
              <span className="font-normal opacity-50">User Manual</span>
            </li>
            <li className="flex items-center justify-start gap-6 text-[15px] leading-[25px]">
              <span className="text-primary font-bold">1x</span>
              <span className="font-normal opacity-50">
                3.5mm 5m Audio Cable
              </span>
            </li>
            <li className="flex items-center justify-start gap-6 text-[15px] leading-[25px]">
              <span className="text-primary font-bold">1x</span>
              <span className="font-normal opacity-50">Travel Bag</span>
            </li>
          </ul>
        </div>
      </div>

      {/* images */}
      <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 lg:gap-[30px]">
        <div className="relative aspect-video h-full">
          <Image
            src="/images/earphones/earphone-1.png"
            alt="earphone 1"
            className="h-full w-full object-cover"
            fill
          />
        </div>

        <div className="relative order-3 row-span-2 flex h-full items-center justify-center md:order-2">
          <Image
            src="/images/earphones/earphone-2.png"
            alt="earphone 2"
            className="h-full w-full object-cover"
            fill
          />
        </div>

        <div className="relative order-2 flex aspect-video h-full items-center justify-center md:order-3">
          <Image
            src="/images/earphones/earphone-3.png"
            alt="earphone 3"
            className="h-full w-full object-cover"
            fill
          />
        </div>
      </div>

      <Likes />
    </div>
  )
}

export default ProductDetail
