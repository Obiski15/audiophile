"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { useIsMd } from "@/hooks/useMediaQuery"

import { Button } from "../ui/button"

const categories = {
  speakers: [
    {
      id: "zx9-speakers",
      image: "/images/categories/zx9-speaker",
      name: "ZX9 SPEAKER",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      id: "zx7-speakers",
      image: "/images/categories/zx7-speaker",
      name: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  ],

  headphones: [
    {
      id: "xx99-mark-2-headphones",
      image: "/images/categories/xx99-mark-2-headphone",
      name: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      id: "xx99-mark-1-headphones",
      image: "/images/categories/xx99-mark-1-headphone",
      name: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      id: "xx59-headphones",
      image: "/images/categories/xx59-headphone",
      name: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ],
  earphones: [
    {
      id: "yx1-earphones",
      image: "/images/categories/yx1-wireless-earphone",
      name: "YX1 Wireless Earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ],
}

function CategoriesLarge({ categoryName }: { categoryName: string }) {
  const isMd = useIsMd()

  return (
    <div className="space-y-[120px] lg:space-y-40">
      {categories[categoryName as keyof typeof categories]?.map(
        ({ image, description, name, id }, index) => (
          <div
            key={id}
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
                src={`${image}.png`}
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
                {index === 0 && (
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
              <Button className="text-[13px] font-bold tracking-[1px] uppercase">
                see product
              </Button>
            </div>
          </div>
        )
      ) ?? <div>category not found</div>}
    </div>
  )
}

export default CategoriesLarge
