"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useQuery } from "convex/react"

import { cn } from "@/lib/utils"
import { useIsMd } from "@/hooks/useMediaQuery"

import { api } from "../../convex/_generated/api"
import { Button } from "../ui/button"

function CategoriesLarge({ categoryName }: { categoryName: string }) {
  const products = useQuery(api.products.getCategoryProducts, {
    category: categoryName,
  })
  const router = useRouter()

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
              "bg-secondary shrink-0 basis-[40%] rounded-xl p-18",
              isMd && (index % 2 === 0 ? "order-1" : "order-2")
            )}
          >
            {/* todo: after shadow*/}
            {/* backdrop-filter: blur(43.49250793457031px) */}
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
            <Button
              onClick={() => {
                router.push(`/products/${_id}`)
              }}
              className="text-[13px] font-bold tracking-[1px] uppercase"
            >
              see product
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesLarge
