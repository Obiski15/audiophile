import Image from "next/image"

import { Button } from "../ui/button"

const likes = [
  {
    name: "xx99 mark i",
    image: "/images/categories/xx99-mark-1-headphone",
  },
  {
    name: "xx59 headphone",
    image: "/images/categories/xx59-headphone",
  },
  {
    name: "zx9 speaker",
    image: "/images/categories/zx9-speaker",
  },
]

// todo: aspect ration for images
function Likes() {
  return (
    <div className="space-y-10 md:space-y-16">
      <h2 className="text-center text-2xl leading-9 font-bold tracking-[1.14px] uppercase md:text-[32px]">
        you may also like
      </h2>

      <div className="grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 md:gap-[30px]">
        {likes.map(({ name, image }, index) => (
          <div key={index} className="h-full space-y-8 md:space-y-10">
            <div className="bg-secondary flex aspect-square items-center justify-center rounded-xl px-4 py-3 lg:px-16 lg:py-[60px]">
              <Image alt={name} src={`${image}.png`} width={150} height={195} />
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
              <h3 className="text-2xl font-bold tracking-[1.71px] uppercase">
                {name}
              </h3>
              <Button className="uppercase">see product</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Likes
