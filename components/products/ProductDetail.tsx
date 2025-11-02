"use client"

import Image from "next/image"
import { useQuery } from "convex/react"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"

import { formatCurrency } from "../../lib/utils"
import IncDecButton from "../cart/IncDecButton"
import { Button } from "../ui/button"
import Likes from "./Likes"

function ProductDetail({ productId }: { productId: string }) {
  const product = useQuery(api.products.getProduct, {
    id: productId as Id<"products">,
  })

  if (!product) return <div>loading</div>

  return (
    <div className="space-y-[120px] lg:space-y-40">
      <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-[52] lg:gap-[125px]">
        <div className="bg-secondary shrink-0 basis-[40%] rounded-xl p-18">
          {/* todo: after shadow */}
          {/* backdrop-filter: blur(43.49250793457031px) */}
          <Image
            className="m-auto"
            src={product.image}
            alt="name"
            width={350}
            height={390}
          />
        </div>

        <div className="basis-[60%] space-y-10 self-center">
          <div className="space-y-6">
            {product.new && (
              <p className="text-sm font-normal tracking-[10px] text-[#D87D4A] uppercase">
                new product
              </p>
            )}

            <h1 className="text-4xl leading-10 font-bold tracking-[2px] uppercase sm:text-[40px] sm:leading-11">
              {product.name}
            </h1>
            <p className="text-[15px] leading-6 font-medium tracking-normal opacity-75">
              {product.description}
            </p>
          </div>

          <h3 className="text-lg font-bold tracking-[1.29px]">
            {formatCurrency(product.price)}
          </h3>

          <div className="flex w-fit items-center justify-start gap-4">
            <IncDecButton />
            <Button className="text-[13px] font-bold tracking-[1px] uppercase">
              add to cart
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
            {product.features[0]}
            <br />
            <br />
            {product.features[1]}
          </p>
        </div>

        {/* IN THE BOX */}
        <div className="space-y-8 md:basis-[40%] lg:basis-[30%]">
          <h2 className="text-[32px] leading-9 font-bold tracking-[1.14px] uppercase">
            in the box
          </h2>
          <ul className="space-y-2">
            {product.includes.map(({ quantity, item }) => (
              <li
                key={item}
                className="flex items-center justify-start gap-6 text-[15px] leading-[25px]"
              >
                <span className="text-primary font-bold">{quantity}x</span>
                <span className="font-normal opacity-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* images */}
      <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 lg:gap-[30px]">
        <div className="relative aspect-video h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full rounded-xl object-cover"
            fill
          />
        </div>

        <div className="relative order-3 row-span-2 flex h-full items-center justify-center md:order-2">
          <Image
            src={product.images[1]}
            alt={product.name}
            className="h-full w-full rounded-xl object-cover"
            fill
          />
        </div>

        <div className="relative order-2 flex aspect-video h-full items-center justify-center md:order-3">
          <Image
            src={product.images[2]}
            alt={product.name}
            className="h-full w-full rounded-xl object-cover"
            fill
          />
        </div>
      </div>

      <Likes productId={product._id} />
    </div>
  )
}

export default ProductDetail
