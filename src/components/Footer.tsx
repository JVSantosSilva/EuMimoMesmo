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
              <div className='flex flex-col items-center justify-center'>
                <Link href="#">
                  <Image height={70} src={instagram} alt="ícone do Instagram"/>
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

