import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer  id='footer' className='flex flex-col text-black-100 pt-5 border-t border-[var(--background-lighter)] bg-[var(--background)] text-[var(--text)]'>
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className='flex flex-col justify-start md:items-start gap-6 max-md:items-center max-md:text-center'>
                {/* <Image src="/brigglogo.svg" alt="Logo" width={118} height={18} className='object-contain' /> */}
                <p className='text-base text-grey-700'> &copy; 2023 gameup <br /> All rights reserved <br /> Icons by <a href="https://icons8.de/">Icons8</a> </p>
            </div>
            
            <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20 max-md:items-center max-md:justify-center'>
                { footerLinks.map((link) => (
                    <div key={link.title} className='flex flex-col gap-6 text-base min-w-[170px] max-md:text-center'>
                        <h3 className='font-bold text-[var(--text)]'>{link.title}</h3>
                        {link.links.map((item) => (
                            <Link 
                                key={item.title} 
                                href={item.url} 
                                className=" text-[var(--text-lighter)] " 
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )) }
            </div>
        </div>
{/* 
            <div className='flex justify-between flex-wrap items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>Copyright 2023 @gameup_ | All rights reserved</p>
                <div className='footer__copyrights-link'>
                    <Link href="/" className='text-grey-500'>
                            Privacy Policy
                    </Link>
                    <Link href="/" className='text-grey-500'>
                            Terms of Use
                    </Link>
                </div>
            </div> */}

    </footer>
  )
}

export default Footer