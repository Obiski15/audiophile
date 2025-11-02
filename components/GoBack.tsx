"use client"

import { useRouter } from "next/navigation"

function GoBack() {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.back()
      }}
      className="text-foreground/50 hover:text-primary cursor-pointer p-0 text-[15px] leading-[25px] font-semibold"
    >
      Go Back
    </button>
  )
}

export default GoBack
