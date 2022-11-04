import { useContext } from 'react'
import { cartContext } from './CartContext'

const useCart = () => {

  const { cart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, buyCart } = useContext(cartContext)
  return { cart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, buyCart }
}

export default useCart