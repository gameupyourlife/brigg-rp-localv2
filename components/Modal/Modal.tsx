"use client"

export interface ModalI {
    changeState: Function
    img: string
    title: string
    text: string

}

import Image from 'next/image'
import React, { useState } from 'react'

const Modal = ({ changeState, img, title, text }: ModalI) => {
    function handleBGClick (e: any)
    {
        if (e.target.id == 'authentication-modal')
            changeState()
    }

    return (
        <div>

            {/* <!-- Main modal --> */}
            <div onClick={e => handleBGClick(e)} id="authentication-modal" className={` flex justify-center bg-black/30 overflow-x-hidden overflow-y-auto fixed  max-md:pt-20 h-full top-4 left-0 right-0 md:inset-0 z-50  items-center`}>
                <div className=" relative w-full max-w-3xl px-4 h-full md:h-auto z-10">
                    {/* <!-- Modal content --> */}

                    <div id='modal-main' className="rounded-lg shadow relative bg-gray-800">
                        <div className="flex flex-wrap-reverse">
                                <Image id='modal-img' alt='flavor image' src={img} width={210} height={300} className=' min-h-full max-md:hidden' />

                            <div className='flex flex-col'>

                            <div className="flex  justify-end p-2">
                                <button onClick={e => changeState()} type="button" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>

                            <div className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 max-w-[500px] overflow-hidden'>

                                <h2 className='text-2xl font-bold'>
                                    {title}
                                </h2>
                                <p className='max-md:pb-5'>
                                    {text}
                                </p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal