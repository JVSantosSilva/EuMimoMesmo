// /home/apollo/Documentos/projetos_javascript/EuMimoMesmo/src/components/Footer.tsx
'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import Link from 'next/link'
import Image from 'next/image'

import siteProtegido from '../../public/siteProtegido.png'
import googleSecurity from '../../public/googleSecurity.png'
import whatsappIcon from '../../public/whatsapp_icon.png' // Certifique-se de que o caminho até o seu ícone do WhatsApp está correto

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
                <div className='flex justify-center'>
                  <Icons.logo className='h-12 w-auto' />
                </div>
              </div>
            )}
          </div>

          <div className='py-10 md:flex md:items-center md:justify-between'>
            <div className='text-center md:text-left'>
              <p className='text-sm text-muted-foreground'>
                &copy; {new Date().getFullYear()} Todos os direitos reservados
              </p>
            </div>

            <div className='mt-4 flex items-center justify-center md:mt-0'>
              <div className='flex space-x-8'>
                <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Termos</Link>
                <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Política de privacidade</Link>
                <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Política de cookies</Link>
                <Link href="https://transparencyreport.google.com/safe-browsing/search?url=eumimomesmo.com.br&hl=pt" target="_blank">
                  <Image height={25} width={225} src={googleSecurity} alt="certificado de segurança"/>
                </Link>
                <Link href="" target="_blank"> {/* Atualize com o link desejado */}
                  <Image height={25} width={190} src={siteProtegido} alt="certificado de segurança SSL"/>
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

