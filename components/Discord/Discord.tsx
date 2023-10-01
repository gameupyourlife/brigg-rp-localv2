import Link from 'next/link'
import React from 'react'
import DiscordButton from './DiscordButton'
import Image from 'next/image'

const Discord = () => {
    return (
        <section className='flex-wrap text-[var(--text)]  flex align-middle justify-center mx-auto pb-[0px]  -mb-[150px] md:-mb-[250px] calc-mt-2-7-deg  box-border bg-black/[.4]  backdrop-blur-md' >
            <Image src={"/DiscordCallToAction/street_crew_member3.webp"} width={500} height={500} alt="img" />
            <div className='flex flex-col  justify-center items-center max-w-3xl mb-[200px] px-10' >
                <h2 className='text-4xl font-bold mb-5 text-center'>
                    Lust zu spielen?
                </h2>
                <p className='mb-10 text-center' >
                    Unser Discord-Server ist der zentrale Treffpunkt für die Brigg RP-Community. Hier kannst du dich mit anderen Spielern austauschen und die neuesten Ankündigungen und Neuigkeiten erhalten. Trete unserer Discord-Familie bei und werde Teil einer lebendigen RP-Community!
                </p>
                <div className='mb-0 pb-0'>
                    <DiscordButton isSSO={false} url="https://discord.gg/S2wc2NVGaN" />
                </div>
            </div>
        </section>
    )
}

export default Discord