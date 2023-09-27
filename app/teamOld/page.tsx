import Modal from '@/components/Modal/Modal'
import TeamCard from '@/components/TeamCards/TeamCard'
import TeamCardHolder from '@/components/TeamCards/TeamCardHolder'
import React from 'react'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'


export const metadata: Metadata = {
    title: 'Brigg RP - Team',
    description: 'Das aktive, kompetente und freundliche Team von Brigg RP.',
}

export default function Home() {
    redirect("/team")

    return (
        <main className='pt-20 bg-[var(--background)] h-full px-auto flex justify-center min-h-screen w-full ' >
            

            <section className='flex flex-col    items-center  gap-0' >
                <div className='flex flex-col items-center '>
                    <h2 className='flex text-center text-4xl font-bold -mb-7 p-0'>
                        Projektleiung
                    </h2>

                    <TeamCardHolder >
                        <TeamCard title1='Dieter Denkhaus' text1='Developer' title2='@adrian_prinsen' text2='Gott und die Welt' image='/Team/adrian.png' logobg="bg-gradient-to-b from-orange-500 to-red-500" />
                        <TeamCard title1='Lion Tyler' text1='Dev' title2='@keksegaming' text2='Items' image='/Team/keks.png' logobg="" />
                    </TeamCardHolder>

                </div>
                <div  className='flex flex-col items-center'>
                    <h2 className='flex text-center text-4xl font-bold -mb-7 p-0'>
                        Admin
                    </h2>
                    <TeamCardHolder>
                        <TeamCard title1='Thilo Leitner' text1='Developer' title2='@gameup_' text2='Web Dev, Scripting & kreative Einfälle' image='/Team/gameup.png' logobg="bg-gradient-to-b from-cyan-500 to-blue-500" />
                        <TeamCard title1='Caitlyn Harrison' text1='Developer' title2='@sheeeekz' text2='...' image='/Team/caitlyn.jpg' logobg="bg-transparent" />
                    </TeamCardHolder>
                </div>

                <div  className='flex flex-col items-center '>
                    <h2 className='flex text-center text-4xl font-bold -mb-7 p-0'>
                        Support
                    </h2>
                    <TeamCardHolder>
                        <TeamCard title1='Deandre Saint' text1='Developer' title2='@lob_star' text2='Community Mng., Crime Mng., Support' image='/Team/saint.png' logobg="bg-gradient-to-b from-lime-500 to-green-500" />
                        <TeamCard title1='Marc Dean' text1='Developer' title2='@.marcdean' text2='Testing, Support, Events' image='/Team/dean.png' logobg="bg-gradient-to-b from-lime-500 to-green-500" />
                        <TeamCard title1='Luis Hartmann' text1='Developer' title2='@nasu9748' text2='Moderation' image='/Team/luis.jpg' logobg="bg-gradient-to-b from-lime-500 to-green-500" />
                        
                    </TeamCardHolder>
                </div>

                
            </section>

        </main>
    )
}
