import Image from 'next/image'

export default function Banner() {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/banner_principal.jpeg"
        alt="Banner de Ofertas"
        width={2500} 
        height={500}
        priority
      />
    </div>
  )
}

