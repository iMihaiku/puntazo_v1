import { Inter } from 'next/font/google'
import './main.css'
import { DeviceProvider } from '@/hooks/useContextMobile'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  return (
    <html lang="es">
      <body className={inter.className} id="body">
        <DeviceProvider>{children}</DeviceProvider>
      </body>
    </html>
  )
}
