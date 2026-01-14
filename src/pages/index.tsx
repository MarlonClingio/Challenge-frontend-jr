import { Banner, BannerMobile } from '@/components/Banner'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import ProductSlider from '@/components/ProductSlider'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Store Brand</title>
      </Head>
      <main className="flex flex-col items-center h-full text-center mt-16">
        <Banner />
        <BannerMobile />
        <div className="mx-auto my-10 max-w-[960px] rounded-xl bg-gray-100 p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <h1 className="text-3xl font-bold mt-8 mb-4 max-sm:text-2xl">Bem-vindo à Loja!</h1>
          <p className="mb-4 text-[1rem] leading-[1.4] text-gray-700">
            Na Store Brand, você encontra uma ampla variedade de produtos de
            alta qualidade, desde roupas e acessórios até eletrônicos e itens para
            sua casa. Nosso objetivo é oferecer a melhor experiência de compra
            online, com produtos selecionados e preços competitivos.
            Aproveite nossas ofertas exclusivas e descubra produtos incríveis com
            avaliações excelentes. Compre com segurança e receba tudo no conforto
            da sua casa.
            Explore nossa loja e encontre tudo o que você precisa em um só lugar!
          </p>
        </div>
        <ProductSlider />
        <p className="text-3xl font-bold mt-4 mb-4 max-sm:text-2xl">Confira nossas melhores ofertas!</p>
        <Link href="/ofertas" className="w-48 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 mb-8">
            Ver Ofertas
        </Link>
      </main>
    </Layout>
  )
}
