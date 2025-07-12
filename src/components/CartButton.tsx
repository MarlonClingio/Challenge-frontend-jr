import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

export default function CartButton() {
  const { cartItems, setIsCartVisible } = useCart()
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <button onClick={() => setIsCartVisible(true)} className="relative text-2xl">
      <FiShoppingCart />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}

