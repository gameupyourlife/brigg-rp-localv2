import Image from 'next/image'
import React from 'react'

const Feature = () => {
    return (
        <div className=' m-3  max-w-[400px] mx-10	 flex align-middle items-center '>
            <svg className="box-content	w-[64px] m-3  text-gray-600 dark:text-white" width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div className='max-w-[300px]'>
                <h3 className='text-2xl font-semibold text-left'>
                    Lebendiges RP-Erlebnis
                </h3>
                <p className='text-left '>
                    Tauche in eine immersive RP-Welt in Los Santos ein, in der deine Entscheidungen die Geschichte formen.
                </p>
            </div>
        </div>
    )
}

export default Feature