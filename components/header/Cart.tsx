import { ShoppingCart } from "lucide-react"

import IncDecButton from "../cart/IncDecButton"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

function Cart() {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <ShoppingCart />
      </PopoverTrigger>
      <PopoverContent className="mt-10 mr-10 border-none p-6">
        <div className="space-y-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold tracking-[1.29px]">CART (3)</h3>
              <button className="cursor-pointer text-[15px] leading-[25px] font-normal opacity-50 hover:underline">
                Remove all
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-start gap-4">
                <div className="bg-secondary size-16 shrink-0 rounded-xl">
                  <p>image 40</p>
                </div>

                <div className="flex flex-1 items-center justify-between gap-1">
                  <div className="max-w-20 leading-[25px] font-bold">
                    <p className="overflow-hidden text-[15px] text-ellipsis whitespace-nowrap uppercase">
                      nameName emsnssnsnss
                    </p>
                    <p className="text-sm opacity-50">$333</p>
                  </div>

                  <IncDecButton />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-[15px] leading-[25px] font-normal">Total</h3>
              <h3 className="font-lg font-bold">$3333</h3>
            </div>
          </div>

          <Button className="w-full">Checkout</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Cart
