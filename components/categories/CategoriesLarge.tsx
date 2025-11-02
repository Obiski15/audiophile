"use client"

import Image from "next/image"
import { useQuery } from "convex/react"

import { cn } from "@/lib/utils"
import { useIsMd } from "@/hooks/useMediaQuery"

import { api } from "../../convex/_generated/api"
import SeeProduct from "../SeeProduct"

function CategoriesLarge({ categoryName }: { categoryName: string }) {
  const products = useQuery(api.products.getCategoryProducts, {
    category: categoryName,
  })

  const isMd = useIsMd()

  if (!products) return "Loading..."

  if (!products.length) return <div>Category not found</div>

  return (
    <div className="space-y-[120px] lg:space-y-40">
      {products.map(({ description, new: isNew, _id, image, name }, index) => (
        <div
          key={_id}
          className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-[52] lg:gap-[125px]"
        >
          <div
            className={cn(
              "bg-secondary after:bg-foreground relative shrink-0 basis-[40%] rounded-xl p-18 after:absolute after:inset-0 after:top-[85%] after:mx-auto after:inline-block after:h-[18px] after:w-[122px] after:blur-xl",
              isMd && (index % 2 === 0 ? "order-1" : "order-2")
            )}
          >
            <Image
              className="m-auto"
              src={image}
              alt={name}
              width={350}
              height={390}
            />
          </div>

          <div
            className={cn(
              "basis-[60%] space-y-10 self-center text-center md:text-left",
              isMd && (index % 2 === 0 ? "order-2" : "order-1")
            )}
          >
            <div className="space-y-6">
              {isNew && (
                <p className="text-sm font-normal tracking-[10px] text-[#D87D4A] uppercase">
                  new product
                </p>
              )}
              <h1 className="text-4xl leading-10 font-bold tracking-[2px] uppercase sm:text-[40px] sm:leading-11">
                {name}
              </h1>
              <p className="text-[15px] leading-6 font-medium tracking-normal opacity-75">
                {description}
              </p>
            </div>
            <SeeProduct
              productId={_id}
              className="text-[13px] font-bold tracking-[1px] uppercase"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesLarge
