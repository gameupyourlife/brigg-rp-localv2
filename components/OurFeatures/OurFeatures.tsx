import React from 'react'
import styles from './styles.module.css'
import Feature from './Feature'
import Image from 'next/image'
import Seperator from '../Seperator'


const OurFeatures = () => {
  return (
    <section className='flex align-middle justify-center mx-auto -mb-[110px] pt-[10rem] -mt-[9rem]  box-border bg-black/[.4]  backdrop-blur-md -z-20 '>
      <div className='flex mr-10 mb-0' >
        <Image src={"/swat2.png"} width={500} height={500} alt="img" />
      </div>

      <div className='flex flex-col text-center items-center text-white  pt-[150px]'>
        <h2 className='text-4xl font-bold '>
          Unsere Features
        </h2>
        <Seperator width='600' top='20' bottom='40' />

        <div className='flex'>
          <div className=''>
          <Feature />
          <Feature />
          </div>
          
          <div>
          <Feature />
          <Feature />
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurFeatures  