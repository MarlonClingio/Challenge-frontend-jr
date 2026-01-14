import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { GoArrowLeft } from "react-icons/go";

export default function ProductDetail() {
  const { query, isReady } = useRouter();
  const { id } = query;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!isReady) return;
    
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Erro ao buscar produto:", err));
  }, [id, isReady]);

  if (!product) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link href="/ofertas" className="flex items-center gap-2 text-gray-800 rounded hover:underline pt-12 pb-6">
						<GoArrowLeft /> Voltar á Página de Produtos
				</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative h-[400px] w-full bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image 
              src={product.image} 
              alt={product.title} 
              layout="fill" 
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-sm text-green-600 font-semibold uppercase tracking-widest mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-bold">
                ★ {product?.rating?.rate}
              </span>
              <span className="text-gray-400 text-sm">({product?.rating?.count} avaliações)</span>
            </div>

            <p className="text-4xl font-light text-gray-900 mb-6">
              {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>

            <div className="border-t border-gray-100 pt-6 mb-8">
              <h3 className="text-gray-800 font-semibold mb-2">Descrição</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full md:w-max bg-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all active:scale-95"
            >
              Adicionar à sacola
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}