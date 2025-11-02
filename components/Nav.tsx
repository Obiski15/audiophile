import Link from "next/link"

import { cn } from "@/lib/utils"

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "headphones",
    path: "/category/headphones",
  },
  {
    name: "speakers",
    path: "/category/speakers",
  },
  {
    name: "earphones",
    path: "/category/earphones",
  },
]

function Nav({ className }: { className?: string }) {
  return (
    <nav>
      <ul
        className={cn(
          "flex items-center justify-between gap-[34px] text-[13px] leading-6 font-bold tracking-[2px] uppercase",
          className
        )}
      >
        {links.map(({ name, path }, index) => (
          <li key={index} className="hover:text-primary uppercase">
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
