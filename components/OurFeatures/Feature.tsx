import Image from 'next/image'
import React from 'react'

interface FeatureI {
    title: string
    text: string
    img?: string
}

const Feature = ({title, text, img}:FeatureI) => {
    return (
        <div className=' m-3  max-w-[600px] mx-10 pb-5 md:h-40	 flex  '  >
            {/* <svg className="box-content	w-[64px] m-3  text-gray-600 dark:text-[var(--text)] " width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg> */}

            {/* <div className='invert '>
                <Image src={img} alt='Feature Icon' width={64} height={64} className='m-3 w-[64px]'/>
            </div> */}



            <div className='h-full'>
                <h3 className='text-2xl font-semibold text-left'>
                    {title}
                </h3>
                <p className='text-left text-[var(--text-lighter)] '>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Feature