import { useContext } from "react"

import { CartContext } from "@/providers/CartProvider"

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart
}
