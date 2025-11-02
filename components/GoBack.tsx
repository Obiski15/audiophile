"use client"

import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

function GoBack() {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.back()
      }}
      variant="link"
      className="text-foreground cursor-pointer p-0 text-[15px] leading-[25px] opacity-50"
    >
      Go Back
    </Button>
  )
}

export default GoBack
