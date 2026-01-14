import React from 'react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()
  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-between bg-white transition-transform duration-300 hover:scale-105">
      <Link href={`/produto/${product.id}`} className="cursor-pointer flex flex-col items-center">
        <div className="h-40 w-40 relative mb-4 ">
          <Image src={product.image} alt={product.title} layout='fill' className="object-contain" />
        </div>
        <h2 className="font-bold text-lg text-center hover:text-gray-600 transition-colors line-clamp-2">
          {product.title}
        </h2>
      </Link>
      
      <p className="text-green-600 text-xl font-semibold mt-2">
        R$ {product.price.toFixed(2)}
      </p>
      
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-white text-green-600 border border-green-600 px-8 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
      >
        Adicionar à sacola
      </button>
    </div>
  );
}
