"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useQuery } from "convex/react"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"

import { Button } from "../ui/button"

function Likes({ productId }: { productId: string }) {
  const products = useQuery(api.products.getProducts, {
    id: productId as Id<"products">,
    limit: 3,
  })
  const router = useRouter()

  if (!products || !products.length) return null

  return (
    <div className="space-y-10 md:space-y-16">
      <h2 className="text-center text-2xl leading-9 font-bold tracking-[1.14px] uppercase md:text-[32px]">
        you may also like
      </h2>

      <div className="grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 md:gap-[30px]">
        {products.map(({ _id, name, image }) => (
          <div key={_id} className="h-full space-y-8 md:space-y-10">
            <div className="bg-secondary flex aspect-square items-center justify-center rounded-xl px-4 py-3 lg:px-16 lg:py-[60px]">
              <Image alt={name} src={image} width={150} height={195} />
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
              <h3 className="max-w-[95%] overflow-hidden text-2xl font-bold tracking-[1.71px] text-ellipsis whitespace-nowrap uppercase">
                {name}
              </h3>
              <Button
                onClick={() => router.push(`/products/${_id}`)}
                className="uppercase"
              >
                see product
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Likes
