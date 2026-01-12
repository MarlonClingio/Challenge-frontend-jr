import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

export default function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible } = useCart()

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform z-50
      ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-bold">Carrinho</h3>
        <button onClick={() => setIsCartVisible(false)} className="text-xl">&times;</button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
        {cartItems.length > 0 ? (
          cartItems.map(product => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <>
            <p className="text-gray-500 text-center mt-12">Carrinho Vazio!</p>
            <FiShoppingCart className='text-7xl mt-6 m-auto'/>
          </>
        )}
      </div>

      <div className="flex justify-between items-center px-4 border-t border-t-gray-200 pt-2">
        <button
          className="bg-green-600 text-white border px-8 py-2 rounded hover:bg-green-700"
        >
          Finalizar
        </button>
        <p className="font-bold text-right">Total: R$ {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}
