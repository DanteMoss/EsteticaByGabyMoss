import { Inter } from 'next/font/google'
import './globals.css'
import { fira } from './ui/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Estetica By GabyMoss',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en `${Forum.classname} antialiased`">
      <body className={`${fira.className} antialiased`}>{children}</body>
    </html>
  )
}
