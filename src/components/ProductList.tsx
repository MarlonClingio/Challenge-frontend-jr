import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Product } from '../types/product'

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  // Fetch dos produtos
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // Fetch das categorias
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  // Filtro de produtos
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true

    const priceMatch = (() => {
      if (selectedPriceRange === 'low') return product.price <= 50
      if (selectedPriceRange === 'medium') return product.price > 50 && product.price <= 150
      if (selectedPriceRange === 'high') return product.price > 150
      return true
    })()

    return categoryMatch && priceMatch
  })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="mt-6">
      {/* Filtros */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <select
          onChange={e => { setSelectedCategory(e.target.value); setCurrentPage(1) }}
          value={selectedCategory}
          className="border rounded px-3 py-2"
        >
          <option value="">Todas as Categorias</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          onChange={e => { setSelectedPriceRange(e.target.value); setCurrentPage(1) }}
          value={selectedPriceRange}
          className="border rounded px-3 py-2"
        >
          <option value="">Todas as Faixas de Preço</option>
          <option value="low">Até R$ 50</option>
          <option value="medium">R$ 50 a R$ 150</option>
          <option value="high">Acima de R$ 150</option>
        </select>

        {(selectedCategory || selectedPriceRange) && (
          <button
            onClick={() => { setSelectedCategory(''); setSelectedPriceRange(''); setCurrentPage(1) }}
            className="px-4 py-1.5 border rounded bg-gray-200"
          >
            Limpar Filtros
          </button>
        )}
      </div>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginação */}
      {filteredProducts.length > 0 ? (
        <div className="flex justify-center items-center gap-4 my-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-1 border rounded hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          <span className="text-gray-600">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-1 border rounded disabled:opacity-50 hover:bg-gray-200 disabled:hover:bg-white disabled:cursor-not-allowed"
          >
            Próximo
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500 my-12">Nenhum produto encontrado para esse filtro.</p>
      )}
    </div>
  )
}
