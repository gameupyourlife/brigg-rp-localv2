import Background from '@/components/Background/Background'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import useExternalScripts from '@/components/useExternalScripts'
import { useEffect } from 'react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Brigg RP - Dein GTA Roleplay Server',
    description: 'Brigg RP ist ein deutscher GTA V Roleplay Server. Wir bieten dir ein einzigartiges Spielerlebnis mit vielen Features und einem aktiven Team.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

    return (
        <html lang="de">
            <head>
                <div className="container">
                    <Script src="https://www.googletagmanager.com/gtag/js?id=AW-940661394" />
                    <Script id="google-analytics">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                    
                            gtag('config', 'AW-940661394');
                            `}
                    </Script>
                </div>
            </head>
            <body className={`text-[var(--text)] ${inter.className} min-h-screen bg-[var(--background)]  flex flex-col  p-0 m-0`}>
                {/* <Background /> */}


                <NavBar />
                {children}

                <Footer />
            </body>
        </html>
    )
}
