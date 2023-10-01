import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '../CustomButton'

const Hero = () => {
    return (
        <div className="hero w-full h-full box-border md:px-20 max-md:mx-auto  "> 
            <div className='flex flex-1 flex-col flex-wrap mt-20 ld:mt-0 pb-20 padding-x h-screen justify-center '>
                <h1 className='flex max-md:text-center text-6xl font-extrabold pb-3 flex-wrap max-w-screen max-sm:text4xl mx-0 px-0'>
                   Dein Abenteuer beginnt hier!
                </h1>
                <p className='max-md:text-center text-2xl text-gray-200'>
                    Tauche ein in die aufregende Welt von Brigg RP und erlebe Abenteuer wie noch nie zuvor
                </p>
                <CustomButton/>
            </div>
                
            <div className=' hero__image-container max-md:hidden -mr-20  -mb-[10vh] '>
                <div className='hero__image   p-0  max-h-[90vh]  z-30 -mb-[10rem]'>
                    <Image src="/Hero/civWomanRedShirt.webp" alt='hero' fill className='object-contain'></Image>
                </div>
                <div className='hero__image   p-0 -ml-60 max-h-[90vh] z-40 -mb-[8rem]'>
                    <Image src="/Hero/mafiaMan.webp" alt='hero' fill className='object-contain'></Image>
                </div>
                <div className='hero__image   p-0 -ml-60  max-h-[90vh]  -mb-[8rem] z-20'>
                    <Image src="/Hero/civWomanBlackHair.webp" alt='hero' fill className='object-contain'></Image>
                </div>
            </div>
        </div >
    )
}

export default Hero

{/* <div className="hero w-full h-full box-border md:px-20 max-md:mx-auto  "> 
            <div className='flex flex-1 flex-col flex-wrap mt-20 ld:mt-0 pb-20 padding-x h-screen justify-center '>
                <h1 className='flex max-md:text-center text-6xl font-extrabold pb-3 flex-wrap max-w-screen max-sm:text4xl mx-0 px-0'>
                   Dein Abenteuer beginnt hier!
                </h1>
                <p className='max-md:text-center text-2xl text-gray-200'>
                    Tauche ein in die aufregende Welt von Brigg RP und erlebe Abenteuer wie noch nie zuvor
                </p>
                <CustomButton/>
            </div>
                
            <div className=' hero__image-container max-md:hidden -mr-20  -mb-[10vh] '>
                <div className='hero__image   p-0  max-h-[90vh]  z-30 -mb-[8rem]'>
                    <Image src="/civWoman2.png" alt='hero' fill className='object-contain'></Image>
                </div>
                <div className='hero__image   p-0 -ml-60 max-h-[90vh] z-40 -mb-[8rem]'>
                    <Image src="/gameup-removebg.png" alt='hero' fill className='object-contain'></Image>
                </div>
                <div className='hero__image   p-0 -ml-60  max-h-[90vh]  -mb-[8rem] z-20'>
                    <Image src="/civWomanB.png" alt='hero' fill className='object-contain'></Image>
                </div>
            </div>
        </div > */}