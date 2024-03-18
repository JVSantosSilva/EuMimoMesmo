// /home/apollo/Documentos/projetos_javascript/EuMimoMesmo/src/components/Footer.tsx
'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'


import siteProtegido from '../../public/siteProtegido.png'
import googleSecurity from '../../public/googleSecurity.png'
import whatsappIcon from '../../public/whatsapp_icon.png' // Certifique-se de que o caminho até o seu ícone do WhatsApp está correto
import  Image  from 'next/image';
import instagram from '../../public/instagram.png'
import thumbnail from '../../public/thumbnail.jpg'
import { Button } from './ui/button'

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]
  
  return (
    <>
      <footer className='bg-white flex-grow-0'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200'>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className='pb-8 pt-16'>
              <div className='flex flex-row items-center justify-center'>
                <Link href="#">
                  <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                      <g id="SVGRepo_iconCarrier"> 
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#EC4899"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#EC4899"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#EC4899">
                        </path>
                    </g>
                  </svg>
                  <Button variant="outline" className='text-pink-600 border-pink-600 hover:bg-pink-50'>SIGA-NOS</Button>
                </Link>
                <Image height={120} src={thumbnail} alt="thumbnail da empresa"/>
              </div>
            </div>
          )}
          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className='absolute bg-pink-50 inset-0 bg-gradient-to-br bg-opacity-90'
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center flex flex-col md:text-left'>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-gray-600'>
              Termos
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-gray-600'>
              Política de privacidade
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-gray-600'>
              Política de cookies
            </Link>
          </div>
          <div className="text-center ">
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href="https://transparencyreport.google.com/safe-browsing/search?url=eumimomesmo.com.br&hl=pt"
                target="_blank"
              >
                <Image height={25} width={225} src={googleSecurity} alt="ceritficado de segurança"/>
              </Link>
              <Link
                href="https://www.ssllabs.com/ssltest/analyze.html?d=eumimomesmo.com.br" 
                target="_blank"
              >
                <Image height={25} width={190} src={siteProtegido} alt="ceritficado de segurança SSL"/>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>

      {/* Ícone do WhatsApp */}
      <a href="https://wa.me/556198856142?text=Olá!%20Gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}>
        <Image src={whatsappIcon} alt="WhatsApp" width={60} height={60} />
      </a>
    </>
  )
}

export default Footer

