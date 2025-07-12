import React from 'react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()
  return (
    <div className="border p-4 rounded shadow flex flex-col items-center justify-between">
      <img src={product.image} alt={product.title} className="h-40 w-40 object-contain mb-4" />
      <h2 className="font-bold text-lg text-center">{product.title}</h2>
      <p className="text-green-600 text-xl mt-2">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-white text-green-600 border border-green-600 px-8 py-2 rounded hover:bg-green-600 hover:text-white transition-colors"
      >
        Comprar
      </button>
    </div>
  );
}
