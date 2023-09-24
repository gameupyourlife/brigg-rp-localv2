import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        // <div>
        //     <div className={styles.bgimagehero}>
        //         {/* <img src="/HeroImage.png" className="title opacity-0 display-none "  /> */}
        //         <div className="flex flex-col justify-end align-bottom container mx-auto px-6">
        //             <h2 className="flex align-bottom text-4xl font-bold mb-2 text-white">
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

        <div className="hero w-full box-border pl-20 ">
            {/* <div className='hero  w-full  h-[inherite] box-border herobgeffects  backdrop-blur-md	'>
            <div className='hero  w-full pl-20 h-[inherite] box-border 	'> */}

            <div className='flex-1 pt-36 padding-x h-screen '>
                <h1 className='hero__title'>
                    Dein Abenteuer beginnt hier!
                </h1>
                <p className='hero__subtitle'>
                    Tauche ein in die aufregende Welt von Brigg RP und erlebe Abenteuer wie noch nie zuvor
                </p>

           
                <Link className="flex align-bottom items-end pt-20   " href="#calltoaction">
                    <button className="flex align-bottom bg-white text-black font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Starte dein RP-Abenteuer!
                    </button>
                </Link>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image   p-0 m-0  max-h-[90vh]'>
                    <Image src="/MafiaMan.png" alt='hero' fill className='object-contain'></Image>
                </div>
            </div>
            {/* </div> */}

             {/* </div> */}
        </div >
    )
}

export default Hero