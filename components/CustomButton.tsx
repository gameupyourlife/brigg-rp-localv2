import Link from 'next/link'
import React from 'react'

const CustomButton = () => {
    return (
        <div className="w-full flex items-center outline-none pt-5 max-md:align-middle max-md:justify-center">
            <a href="https://discord.gg/S2wc2NVGaN" target='_blank' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-[var(--text)] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[var(--background)] group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[var(--text)] ">Starte dein Abenteuer</span>
            </a>
        </div>

        // <div className="w-full h-40 flex items-center justify-center">
        //     <a href="#_" className="relative rounded pl-3 hover:pl-10 hover:pr-6 pr-12 py-2.5 overflow-hidden group bg-[var(--primary-button)] hover:bg-gradient-to-r hover:from-[var(--primary-button)] hover:to-[var(--design-primary-lighter)]  hover:ring-2 hover:ring-offset-2 hover:ring-[var(--design-primary-lighter)] transition-all ease-out duration-300">
        //         <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-transparent opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        //         <span className="relative">Starte jetzt!</span>
        //         <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        //             <svg className="w-5 h-5 text-[var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        //             </svg>
        //         </span>
        //         <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        //             <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        //             </svg>
        //         </span>
        //     </a>
        // </div>

        // <div className="w-full flex items-center  outline-none pt-5 max-md:align-middle max-md:justify-center">
        //     <a href="https://discord.gg/S2wc2NVGaN" target='_blank' className="rounded-xl border-orange-500 border-4  relative inline-flex items-center justify-start py-3 px-5 overflow-hidden font-semibold  text-[var(--primary-button)] transition-all duration-150 ease-in-out   bg-transparent group">
                
               
        //         <span className="relative w-full text-center transition-colors duration-200 ease-in-out text-[var(--text)] ">Starte dein Abenteuer</span>
        //     </a>
        // </div>
    )
}

export default CustomButton