import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/icons/logo.svg"
        alt="Autophile logo"
        width={140}
        height={25}
      />
    </Link>
  )
}
