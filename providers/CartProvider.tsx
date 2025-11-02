"use client"

import { createContext, ReactNode, useMemo, useState } from "react"

interface Cart {
  _id: string
  name: string
  quantity: number
  price: number
  image: string
}

interface Context {
  cartItems: Cart[]
  addToCart: (item: Omit<Cart, "quantity">) => void
  removeFromCart: (itemName: string) => void
  clearCart: () => void
  incQuantity: (id: string) => void
  totalPrice: number
}

export const CartContext = createContext<Context>({
  totalPrice: 0,
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incQuantity: () => {},
  clearCart: () => {},
})

function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Cart[]>([])

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  )

  const addToCart = (item: Omit<Cart, "quantity">) => {
    // check if item already exists in cart
    const existingItem = cartItems.find(cartItem => cartItem._id === item._id)

    // if it does, update quantity
    if (existingItem) {
      setCartItems(prev =>
        prev.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      // else, add item to cart
      setCartItems(prev => [...prev, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id: string) => {
    const existingItem = cartItems.find(item => item._id === id)

    if (existingItem) {
      // if item quantity is more than 1, decrease quantity
      if (existingItem.quantity > 1) {
        setCartItems(prev =>
          prev.map(item =>
            item._id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        )
      } else {
        // if quantity is 1, remove item from cart
        setCartItems(prev => prev.filter(item => item._id !== id))
      }
    }
  }

  const incQuantity = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        incQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
