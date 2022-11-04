import React, { createContext, useState } from 'react'

export const cartContext = createContext({} as any)

type Cart = {
  id: number,
  title: string,
  image: string,
  price: number,
  quantity: number
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const [cart, setCart] = useState<Cart[]>([])

  const cartQuantity = cart.reduce((previusValue, currentValue) => previusValue + currentValue.quantity, 0)

  const buyCart = () => {
    setCart([])
  }

  const getItemQuantity = (id: number) => {
    return cart.find(item => item.id === id)?.quantity || 0
  }

  const increaseCartQuantity = ({ id, title, price, image }: Partial<Cart>) => {
    setCart((current): any => {
      if (current.find(item => item.id === id)?.quantity == null) {
        return [...current, { id, title, price, image, quantity: 1 }]
      } else {
        return current.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id: number) => {
    setCart(current => {
      if (current.find(item => item.id === id)?.quantity === 1) {
        return current.filter(item => item.id !== id)
      } else {
        return current.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCart(current => current.filter(item => item.id !== id))
  }


  return (
    <cartContext.Provider value={{ cart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, buyCart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider