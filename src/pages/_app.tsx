import { CartProvider } from '../context/CartContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: any) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
