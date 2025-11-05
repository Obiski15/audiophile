import { Skeleton } from "../ui/skeleton"

function LoadingCategoryProducts() {
  return (
    <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-[52] lg:gap-[125px]">
      <Skeleton className="h-[400px] shrink-0 basis-[40%] rounded-xl" />
      <div className="basis-[60%] space-y-10 self-center">
        <div className="space-y-6">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  )
}

export default LoadingCategoryProducts
