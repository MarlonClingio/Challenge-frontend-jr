import Banner from '@/components/Banner'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Minha Loja</title>
      </Head>
      <main className="flex flex-col items-center h-full text-center mt-16">
        <Banner />
        <h1 className="text-4xl font-bold mt-8 mb-4 max-sm:text-3xl">Bem-vindo à Loja!</h1>
        <p className="text-lg mb-8 max-sm:text-base">Confira nossas melhores ofertas!</p>
        <Link href="/ofertas" className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 mb-8">
            Ver Ofertas
        </Link>
      </main>
    </Layout>
  )
}
