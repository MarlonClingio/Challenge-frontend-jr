import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Cart />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
