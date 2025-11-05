import { Skeleton } from "../ui/skeleton"

function LoadingProduct() {
  return (
    <div className="space-y-[120px] lg:space-y-40">
      <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-[52] lg:gap-[125px]">
        <Skeleton className="h-[400px] shrink-0 basis-[40%] rounded-xl" />
        <div className="basis-[60%] space-y-10 self-center">
          <div className="space-y-6">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
          <Skeleton className="h-6 w-24" />
          <div className="flex w-fit items-center justify-start gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-[88px] md:flex-row md:gap-[120px]">
        <div className="space-y-8 md:basis-[60%] lg:basis-[70%]">
          <Skeleton className="h-8 w-32" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <div className="space-y-8 md:basis-[40%] lg:basis-[30%]">
          <Skeleton className="h-8 w-32" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 lg:gap-[30px]">
        <Skeleton className="aspect-video h-full" />
        <Skeleton className="order-3 row-span-2 h-full md:order-2" />
        <Skeleton className="order-2 aspect-video h-full md:order-3" />
      </div>

      <div className="space-y-10 md:space-y-16">
        <Skeleton className="mx-auto h-8 w-64" />
        <div className="grid grid-cols-1 grid-rows-3 gap-14 md:grid-cols-3 md:grid-rows-1 md:gap-[30px]">
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
        </div>
      </div>
    </div>
  )
}

export default LoadingProduct
