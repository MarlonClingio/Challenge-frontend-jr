import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../types/product';

export default function ProductSlider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await res.json();
        setProducts(data.filter((product) => product.rating.rate > 4).slice(0, 5));
      } catch (error) {
        console.error("Erro ao carregar slides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  if (loading || products.length === 0) return null;

  return (
    <div className="relative w-full max-w-[960px] mx-auto my-4 px-4">
      <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800 mb-6 text-center">Nossos Destaques</h2>
      
      <div className="relative overflow-hidden w-full h-[420px] rounded-2xl bg-white shadow-lg border border-gray-100">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 transition-all duration-700 ease-in-out
              ${index === currentSlider ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            <div className="relative w-full h-full max-w-[60%] transition-transform duration-300 hover:scale-105">
              <Image 
                src={product.image} 
                alt={product.title} 
                layout="fill" 
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 md:right-auto bg-gray-900/80 backdrop-blur-sm text-white p-5 rounded-xl max-w-full md:max-w-[80%] shadow-xl">
              <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
              <p className="text-green-400 font-bold mt-1">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlider(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 
              ${index === currentSlider ? 'bg-gray-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}