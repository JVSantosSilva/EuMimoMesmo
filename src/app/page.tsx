import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { CheckCircle, HandCoins, Shield } from "lucide-react"

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
            <Button variant="ghost">Confira nossa qualidade &rarr;</Button>
          </div>
        </div>

      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        *<MaxWidthWrapper className='py-20'>
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
                  <h3 className='text-base font-medium text-gray-900'>
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
