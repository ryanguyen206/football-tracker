import type { Metadata } from 'next'
import { Be_Vietnam_Pro} from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/(context)/AuthProvider'


const vietnam = Be_Vietnam_Pro({
  weight: ['400', '700', '300'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Football Tracker',
  description: 'Know all you need about football',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${vietnam.className} text-black w-9/12 m-auto h-full`}>
        <AuthProvider>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        </AuthProvider>
        <footer>
          <p className='mb-5'>This website is created for educational learning purposes only. All data is accredited to SportsData.io</p>
        </footer>
      </body>
    </html>
  )
}
