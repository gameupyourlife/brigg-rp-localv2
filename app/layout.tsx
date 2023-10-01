import Background from '@/components/Background/Background'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brigg RP - Dein GTA Roleplay Server',
  description: 'Brigg RP ist ein deutscher GTA V Roleplay Server. Wir bieten dir ein einzigartiges Spielerlebnis mit vielen Features und einem aktiven Team.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`text-[var(--text)] ${inter.className} min-h-screen `}>
        <Background />

        <NavBar />
        {children}

        <Footer />
      </body>
    </html>
  )
}
