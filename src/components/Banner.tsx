import Image from 'next/image'

export function Banner() {
  return (
    <div className="w-full h-full relative md:block hidden">
      <Image
        src="/banner_principal.jpeg"
        alt="Banner de Ofertas"
        width={1500} 
        height={500}
        priority
      />
    </div>
  )
}

export function BannerMobile() {
  return (
    <div className="w-full h-full relative md:hidden block">
      <Image
        src="/Sale-mobile.png"
        alt="Banner de Ofertas mobile"
        width={750} 
        height={1024}
        priority
      />
    </div>
  )
}

