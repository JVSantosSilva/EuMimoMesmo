// EuMimoMesmo/src/app/page.tsx


import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { CheckCircle, HandCoins, Shield } from "lucide-react"
import Carousel from "@/components/Carousel";
import Link from 'next/link'

import slide_image_1 from './assets/img_1.jpg';
import slide_image_2 from './assets/img_2.jpg';
import slide_image_3 from './assets/img_3.jpg';
import slide_image_4 from './assets/img_4.jpg';
import slide_image_5 from './assets/img_5.jpg';
import slide_image_6 from './assets/img_6.jpg';
import slide_image_7 from './assets/img_7.jpg';
import slide_image_8 from './assets/img_8.png';
import Carousel_v2 from "@/components/Carousel_v2";



const perks = [
  {
    name: 'Possuímos Segurança',
    Icon: Shield,
    description:
      'Garantimos segurança na compra',
  },
  {
    name: 'Qualidade Garantida',
    Icon: CheckCircle,
    description:
      'Possuímos alta qualidade nos produtos',
  },
  {
    name: 'Preços Bons',
    Icon: HandCoins,
    description:
      "Oferecemos preços em conta",
  },
]

export default function Home() {

  const slides = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
    slide_image_8
  ]
  
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className="text-4xl font-bold tracking-tight text-gray--900 sm:text-6xl">Seu ambiente de compra de{' '}<span className="text-pink-600">laços e tiaras criados com carinho</span> 
        </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Bem-vindo ao Eu Mimo Mesmo. Todos os produtos são feitos com o maior amor necessário
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/produtos'>
              <Button variant="ghost" className="hover:bg-pink-50">Confira nossa qualidade &rarr;</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="w-full">
          <Carousel autoSlide={true} autoSlideInterval={2500} slides={slides} />
      </div>
      
      

      <div>
        <Carousel_v2 autoSlide={true} autoSlideInterval={3000} slides={slides} />
      </div>

      <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" fill="#FDF2F8" fillOpacity="1"></path>
      </svg>
      <section className='border-t border-pink-50 bg-pink-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>
                
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-pink-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </MaxWidthWrapper>
      </section>
    </>
  )
}
