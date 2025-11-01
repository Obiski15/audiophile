import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import Container from "./Container"
import Logo from "./Logo"
import Nav from "./Nav"

const icons = [
  {
    name: "facebook",
    path: "/icons/facebook",
    url: "#",
  },
  {
    name: "twitter",
    path: "/icons/twitter",
    url: "#",
  },
  {
    name: "instagram",
    path: "/icons/instagram",
    url: "#",
  },
]

export default function Footer() {
  const date = new Date()

  return (
    <Container className="bg-foreground text-background mt-24 pt-[75px] pb-12">
      <div className="space-y-14 text-center md:text-left">
        <div className="space-y-9">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <Logo />
            <Nav className="flex-col md:flex-row" />
          </div>

          <div className="flex items-center justify-between gap-4 md:items-end">
            <p className="text-[15px] leading-6 font-medium tracking-normal opacity-50 md:max-w-[540px]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>

            <Socials className="max-md:hidden" />
          </div>
        </div>

        <p className="text-[15px] leading-6 font-bold tracking-normal opacity-50">
          Copyright {date.getFullYear()}. All Rights Reserved
        </p>
        <Socials className="mx-auto w-fit md:hidden" />
      </div>
    </Container>
  )
}

function Socials({ className }: { className?: string }) {
  return (
    <ul className={cn(`flex items-center justify-start gap-4`, className)}>
      {icons.map(({ path, name }, index) => (
        <li className="shrink-0" key={index}>
          <Link href="#">
            <Image src={`${path}.svg`} alt={name} width={24} height={24} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
