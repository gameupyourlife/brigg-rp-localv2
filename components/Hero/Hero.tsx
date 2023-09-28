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

        <div className="hero w-full box-border md:px-20 max-lg:mx-auto ">
            {/* <div className='hero  w-full  h-[inherite] box-border herobgeffects  backdrop-blur-md	'>
            <div className='hero  w-full pl-20 h-[inherite] box-border 	'> */}

            <div className='flex-1 flex-wrap  pt-36 padding-x h-full hero_text_div_max_h max-lg:justify-center max-lg:items-center max-lg:align-middle'>
                <h1 className='max-lg:text-center text-6xl font-extrabold pb-3 flex-wrap max-w-screen max-sm:text4xl mx-0 px-0'>
                   Dein Abenteuer beginnt hier!
                </h1>
                <p className='max-md:text-center text-2xl text-gray-200'>
                    Tauche ein in die aufregende Welt von Brigg RP und erlebe Abenteuer wie noch nie zuvor
                </p>
                <CustomButton/>

           
                {/* <Link className="flex align-bottom items-end pt-20   " href="#calltoaction">
                    <button className="flex align-bottom bg-transparent  text-[var(--text)]  font-bold rounded-md py-4 px-8 shadow-lg border border-4 border-[var(--primary-button)] uppercase tracking-wider">
                        Starte dein RP-Abenteuer!
                    </button>
                </Link> */}

            </div>
                
            <div className='hero__image-container max-md:hidden -mr-20 md:-mb-[150px] lg:-mb-[200px] xl:-mb-[250px] 2xl:-mb-[300px] '>
                <div className='hero__image   p-0  max-h-[90vh] scale-75 z-30  '>
                    <Image src="/civWoman.png" alt='hero' fill className='object-contain'></Image>
                </div>
                <div className='hero__image   p-0 -ml-60 max-h-[90vh] z-40 -mb-10'>
                    <Image src="/gameup-removebg.png" alt='hero' fill className='object-contain'></Image>
                </div>
                <div className='hero__image   p-0 -ml-60  max-h-[90vh] z-20 -mb-20'>
                    <Image src="/civWomanB.png" alt='hero' fill className='object-contain'></Image>
                </div>
            </div>

           
        </div >
    )
}

export default Hero