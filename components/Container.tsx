import { ReactNode } from "react"

import { cn } from "@/lib/utils"

function Container({
  className,
  children,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("px-6 sm:px-10 lg:px-40", className)}>{children}</div>
  )
}

export default Container
