"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "./ui/button"

function SeeProduct({
  children,
  className,
  productId,
  variant,
}: {
  children?: ReactNode
  className?: string
  productId: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
}) {
  const router = useRouter()

  return (
    <Button
      variant={variant}
      className={cn("uppercase", className)}
      onClick={() => router.push(`/products/${productId}`)}
    >
      {children ?? "see product"}
    </Button>
  )
}

export default SeeProduct
