import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '../CustomButton'

const Hero = () => {
    return (
        // <div>
        //     <div className={styles.bgimagehero}>
        //         {/* <img src="/HeroImage.png" className="title opacity-0 display-none "  /> */}
        //         <div className="flex flex-col justify-end align-bottom container mx-auto px-6">
        //             <h2 className="flex align-bottom text-4xl font-bold mb-2 text-[var(--text)] ">
        //                 Brigg RP - Dein Abenteuer beginnt hier!
        //             </h2>
        //             <h3 className="flex align-bottom text-2xl mb-8 text-gray-200">
        //                 Tauche ein in eine lebendige RP-Welt, erschaffe deinen eigenen Charakter und erlebe aufregende Geschichten in Los Santos.
        //             </h3>
        //             <Link className="flex align-bottom" href="#calltoaction">
        //                 <button className="flex align-bottom bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
        //                     Starte dein RP-Abenteuer!
        //                 </button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

        <div className="hero relative w-full box-border md:px-20 max-lg:mx-auto ">
            {/* <div className='hero  w-full  h-[inherite] box-border herobgeffects  backdrop-blur-md	'>
            <div className='hero  w-full pl-20 h-[inherite] box-border 	'> */}

            <div className='flex-1 flex-wrap  pt-36 padding-x h-full hero_text_div_max_h max-lg:justify-center max-lg:items-center max-lg:align-middle'>
                <h1 className='max-lg:text-center text-6xl font-extrabold pb-3 flex-wrap max-w-screen max-sm:text4xl mx-0 px-0'>
                   Dein Abenteuer beginnt hier!
                </h1>
                <p className='max-lg:text-center text-2xl text-gray-200'>
                    Tauche ein in die aufregende Welt von Brigg RP und erlebe Abenteuer wie noch nie zuvor
                </p>
                <CustomButton/>

           
                {/* <Link className="flex align-bottom items-end pt-20   " href="#calltoaction">
                    <button className="flex align-bottom bg-transparent  text-[var(--text)]  font-bold rounded-md py-4 px-8 shadow-lg border border-4 border-[var(--primary-button)] uppercase tracking-wider">
                        Starte dein RP-Abenteuer!
                    </button>
                </Link> */}

            </div>
                
            <div className='flex inherit-height self-end justify-self-end items-end align-bottom justify-end bottom-0 w-full  max-md:hidden -mr-20 md:-mb-[150px] lg:-mb-[200px] xl:-mb-[250px] 2xl:-mb-[300px] bg-red-300'>
                <div className=' xl:h-full h-[590px] flex items-end justify-end  p-0 m-0  inherit-height   z-30  bg-lime-200 w-'>
                    <Image src="/civWoman.png" alt='hero' height={900} width={300} className='object-contain'></Image>
                </div>
                <div className='xl:w-full w-[90%] xl:h-full h-[590px] flex items-end  inherit-height justify-end p-0 -mx-[300px]  z-40  '>
                    <Image src="/gameup-removebg.png" alt='hero'  height={900} width={300} className='object-contain'></Image>
                </div>
                <div className='xl:w-full w-[90%] xl:h-full h-[590px] flex items-end justify-end inherit-height  p-0   z-20  '>
                    <Image src="/civWomanB.png" alt='hero'  height={900} width={300} className='object-contain'></Image>
                </div>
            </div>

           
        </div >
    )
}

export default Hero