import React from 'react'
import styles from './styles.module.css'
import Feature from './Feature'
import Image from 'next/image'
import Seperator from '../Seperator'

// -mb-[110px] 2xl:-mb-[150px]
const OurFeatures = () => {
  return (
    <section  className=' flex-wrap-reverse flex align-middle justify-center mx-0 px-0  pt-[10rem] -mt-[9rem] calc-mb-2-7-deg  2xl:pt-[13rem] 2xl:-mt-[18rem] box-border bg-black/[.4]  backdrop-blur-md -z-20 '> 
      <div className='flex mr-10 mb-0' >
        <Image src={"/OurFeatures/swatFeatures.webp"} width={500} height={500} alt="img" />
      </div>

      <div id='features' className='flex flex-col text-center items-center text-[var(--text)]   pt-[150px]'>
        <h2  className='text-4xl font-bold '>
          Unsere Features
        </h2>
        <Seperator width='600' top='20' bottom='40' />

        <div className='flex max-md:flex-col max-w-[900px]'>
          <div className=''>
                    
          <Feature img='/Icons/gruppe.png' title='Communityorientiert' text='Wir hören auf die Community! In regelmäßigen Sitzungen mit der Community nehmen wir eure Wünsche wahr und setzen diese um.'/>
          <Feature img='/Icons/geld.png' title='Businesses' text='Hast du Lust auf dein eigenes Business? Kein Problem, ob Banker oder Anwalt, bei uns stehen dir alle Türen offen.'/>
          </div>
          
          <div>
          <Feature img='/Icons/performance.png' title='Performance' text='Dich erwartet ein nahezu lagfreies Spielerlebnis verbunden mit einer sehr geringen Downtime.'/>
          <Feature img='/Icons/medizin.png' title='Medic System' text='Unser detailliertes Gesundheitssystem sorgt für starkes Medic RP. Von Schmerztherapie über Narkose, bis hin zu Bluttransfusion.' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurFeatures  