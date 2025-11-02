"use client"

import { Minus, Plus } from "lucide-react"

import { useCart } from "@/hooks/useCart"

function IncDecButton({ productId }: { productId: string }) {
  const { removeFromCart, cartItems, incQuantity } = useCart()

  return (
    <div className="bg-secondary flex items-center justify-between gap-3 p-1.5">
      <button
        onClick={() => {
          removeFromCart(productId)
        }}
        className="cursor-pointer"
      >
        <Minus size={16} className="opacity-25" />
      </button>

      <p className="text-[13px] font-bold tracking-[1px]">
        {cartItems.find(item => item._id === productId)?.quantity ?? 0}
      </p>

      <button
        onClick={() => {
          incQuantity(productId)
        }}
        className="cursor-pointer"
      >
        <Plus size={16} className="opacity-25" />
      </button>
    </div>
  )
}

export default IncDecButton
