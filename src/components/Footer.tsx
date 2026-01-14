export default function Footer() {
  return (
    <footer className="text-center py-6 px-4 bg-gray-200">
        <p className="text-lg text-gray-600 font-semibold mb-2">
          🛒  Store Brand
        </p>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
    </footer>
  )
}
