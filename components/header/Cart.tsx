"use client"

import { useRef } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { PopoverClose } from "@radix-ui/react-popover"
import { AnimatePresence, motion } from "framer-motion"
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
      <PopoverTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <ShoppingCart />
        </motion.button>
      </PopoverTrigger>
      <PopoverClose ref={closePopoverRef} className="hidden"></PopoverClose>
      <PopoverContent className="mt-10 mr-10 border-none p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
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
              <AnimatePresence mode="popLayout">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="space-y-6"
                  >
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
                  </motion.div>
                ))}
              </AnimatePresence>
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
        </motion.div>
      </PopoverContent>
    </Popover>
  )
}

export default Cart
