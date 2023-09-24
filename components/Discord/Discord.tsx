import Link from 'next/link'
import React from 'react'
import DiscordButton from './DiscordButton'
import Image from 'next/image'

const Discord = () => {
    return (
        <section className='text-white flex align-middle justify-center mx-auto pb-[0px] -mb-[250px] pt-[10rem] -mt-[9rem]  box-border bg-black/[.4]  backdrop-blur-md' >
            <Image src={"/street_crew_member.png"} width={500} height={500} alt="img" />
            <div className='flex flex-col  justify-center items-center max-w-3xl mb-[200px]' >
                <h2 className='text-4xl font-bold mb-5'>
                    Lust zu spielen?
                </h2>
                <p className='mb-10' >
                    Unser Discord-Server ist der zentrale Treffpunkt für die "Brigg RP"-Community. Hier kannst du dich mit anderen Spielern austauschen, nach RP-Partnern suchen und die neuesten Neuigkeiten und Ankündigungen erfahren. Trete unserer Discord-Familie bei und werde Teil einer lebendigen RP-Community!
                </p>
                <div>
                    <DiscordButton isSSO={false} url="/" />
                </div>
            </div>
        </section>
    )
}

export default Discord