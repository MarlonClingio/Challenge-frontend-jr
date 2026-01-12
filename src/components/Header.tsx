import Link from 'next/link'
import { FiUser, FiHeart, FiSearch } from 'react-icons/fi'
import CartButton from './CartButton'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="text-2xl font-bold text-black max-sm:text-xl">
        Store Brand
      </Link>

      <div className="hidden sm:flex flex-1 mx-6 relative">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <div className="flex items-center gap-4 text-2xl text-gray-500 absolute bottom-2 right-2">
            <button className="block">
                <FiSearch />
            </button>
        </div>
      </div>

      <div className="flex items-center gap-4 text-2xl text-gray-700 max-sm:text-xl max-sm:gap-2">
        <button className="block sm:hidden outline outline-1 outline-gray-300 p-2 rounded hover:bg-gray-100">
          <FiSearch />
        </button>
        <Link href="#"><FiUser /></Link>
        <Link href="#"><FiHeart /></Link>
        <CartButton />
      </div>
    </header>
  )
}
