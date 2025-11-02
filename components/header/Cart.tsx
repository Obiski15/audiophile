"use client"

import { useRef } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { PopoverClose } from "@radix-ui/react-popover"
import { ShoppingCart } from "lucide-react"

import { formatCurrency } from "@/lib/utils"
import { useCart } from "@/hooks/useCart"

import IncDecButton from "../cart/IncDecButton"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

function Cart() {
  const closePopoverRef = useRef<HTMLButtonElement | null>(null)
  const { cartItems, clearCart, totalPrice } = useCart()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <ShoppingCart />
      </PopoverTrigger>
      <PopoverClose ref={closePopoverRef}></PopoverClose>
      <PopoverContent className="mt-10 mr-10 border-none p-6">
        <div className="space-y-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold tracking-[1.29px]">
                CART ({cartItems.length})
              </h3>

              <button
                onClick={clearCart}
                className="hover:text-primary cursor-pointer text-[15px] leading-[25px] font-normal opacity-50 hover:opacity-100"
              >
                Remove all
              </button>
            </div>

            {!cartItems.length ? (
              <p>cart is empty</p>
            ) : (
              cartItems.map(item => (
                <div key={item._id} className="space-y-6">
                  <div className="flex items-center justify-start gap-4">
                    <div className="bg-secondary flex size-16 shrink-0 items-center justify-center rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-2">
                      <div className="max-w-20 leading-[25px] font-bold">
                        <p className="overflow-hidden text-[15px] text-ellipsis whitespace-nowrap uppercase">
                          {item.name}
                        </p>
                        <p className="text-sm opacity-50">
                          {formatCurrency(item.price)}
                        </p>
                      </div>

                      <IncDecButton productId={item._id} />
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] leading-[25px] font-normal">Total</h3>
              <h3 className="font-lg font-bold">
                {formatCurrency(totalPrice)}
              </h3>
            </div>
          </div>

          <Button
            onClick={() => {
              closePopoverRef.current?.click()
              router.push("/checkout")
            }}
            disabled={
              cartItems.length === 0 || pathname.startsWith("/checkout")
            }
            className="w-full"
          >
            Checkout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Cart
