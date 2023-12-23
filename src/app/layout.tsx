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
  icons:{
    apple:'/football_icon.png',
    icon:'/favicon.ico'
  }

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vietnam.className}`}>
        <main className='flex flex-col min-h-screen text-black dark:bg-slate-900 dark:min-w-full dark:container'>
          <div className='container mx-auto px-12 py-4'>

     

        <AuthProvider>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        </AuthProvider>
        <footer>
          <p className='sticky top-[100vh] dark:text-slate-400 '>This website is created for educational learning purposes only. All data is accredited to SportsData.io. Data is not accurate due free trial</p>
        </footer>
        </div>
        </main>
      </body>
    </html>
  )
}
