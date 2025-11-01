import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    name: "headphones",
    image: "/images/categories/headphone",
    path: "/category/headphones",
  },
  {
    name: "speakers",
    image: "/images/categories/speaker",
    path: "/category/speakers",
  },
  {
    name: "earphones",
    image: "/images/categories/earphone",
    path: "/category/earphones",
  },
]

function CategoriesMini() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-[30px] md:grid-cols-3 md:grid-rows-1">
      {categories.map(({ path, image, name }, index) => (
        <div className="relative h-full text-center" key={index}>
          {/* todo: after shadow */}
          {/* backdrop-filter: blur(43.49250793457031px) */}

          <div className="bg-secondary relative mt-20 flex flex-col items-center justify-center gap-3.5 rounded-xl pt-[120px] pb-[30px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={`${image}.png`}
                className="mx-auto"
                alt={`Category ${name}`}
                height={160}
                width={120}
              />
            </div>
            <h3 className="text-lg font-bold tracking-[1.29px] uppercase">
              {name}
            </h3>
            <Link href={path} className="flex items-center justify-start gap-1">
              <span className="text-[13px] font-bold uppercase opacity-50">
                shop
              </span>
              <ChevronRight className="text-primary" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesMini
