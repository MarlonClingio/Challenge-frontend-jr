import Head from 'next/head';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout'
import Link from 'next/link';
import { GoArrowLeft } from "react-icons/go";
import '../styles/globals.css'

export default function Ofertas() {
  return (
    <Layout>
      <Head>
        <title>Ofertas da Semana</title>
      </Head>
      <main className="flex flex-col h-full mt-16">
        <Banner />
        <div className="flex justify-left h-full text-center mx-8 my-6 max-sm:mx-4">
          <Link href="/" className="flex items-center gap-2 text-gray-800 rounded hover:underline">
              <GoArrowLeft /> Voltar á Página Inicial
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center">Ofertas da Semana</h1>
        <div className="max-w-6xl mx-auto px-4">
          <ProductList />
        </div>
      </main>
    </Layout>
  );
}
