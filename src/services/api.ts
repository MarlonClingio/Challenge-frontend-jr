export const fetchProducts = async (limit = 20) => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
  if (!res.ok) {
    throw new Error('Erro ao buscar produtos')
  }
  return res.json()
}
