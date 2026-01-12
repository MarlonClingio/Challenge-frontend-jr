import { FiTrash, FiPlus, FiMinus } from 'react-icons/fi'
import { Product } from '../types/product'
import { useCart } from '../context/CartContext'
import Image from 'next/image'

type Props = {
  product: Product & { quantity: number }
}

export default function CartItem({ product }: Props) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  return (
    <div className="flex items-center gap-4 border-b py-3">
      <div className="h-16 w-16 relative mb-4">
        <Image src={product.image} alt={product.title} layout='fill' className="object-contain" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{product.title}</h4>
        <p className="text-green-600 font-semibold">R$ {product.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => decreaseQuantity(product.id)} className="border px-1 rounded"> <FiMinus /> </button>
          <span className="text-sm">{product.quantity}</span>
          <button onClick={() => increaseQuantity(product.id)} className="border px-1 rounded"> <FiPlus /> </button>
        </div>
      </div>
      <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-300">
        <FiTrash />
      </button>
    </div>
  )
}
