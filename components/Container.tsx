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
    <div className={cn("px-6 md:px-10 lg:px-20", className)}>{children}</div>
  )
}

export default Container
