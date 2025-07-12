import { FiTrash, FiPlus, FiMinus } from 'react-icons/fi'
import { Product } from '../types/product'
import { useCart } from '../context/CartContext'

type Props = {
  product: Product & { quantity: number }
}

export default function CartItem({ product }: Props) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  return (
    <div className="flex items-center gap-4 border-b py-3">
      <img src={product.image} alt={product.title} className="w-16 h-16 object-contain" />
      <div className="flex-1">
        <h4 className="text-sm font-medium">{product.title}</h4>
        <p className="text-green-600 font-semibold">R$ {product.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => decreaseQuantity(product.id)} className="border px-1 rounded"> <FiMinus /> </button>
          <span className="text-sm">{product.quantity}</span>
          <button onClick={() => increaseQuantity(product.id)} className="border px-1 rounded"> <FiPlus /> </button>
        </div>
      </div>
      <button onClick={() => removeFromCart(product.id)} className="text-red-500">
        <FiTrash />
      </button>
    </div>
  )
}
