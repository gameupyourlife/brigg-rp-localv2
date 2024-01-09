"use client"

import React, { useEffect } from 'react'
import Seperator from '../Seperator'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    function toggleNavbar() {
        console.log('toggle')
        setNavbarOpen(!navbarOpen)
    }

    // <!-- Event snippet for Discord conversion page -->
    // gtag('event', 'conversion', {'send_to': 'AW-940661394/HnRhCMLMlv0YEJK1xcAD'});
    function gtag_report_conversion(url:any) {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                if (url = "stay") {
                    return;
                }
                window.location = url;
            }
        };
        if (typeof window !== 'undefined') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-940661394/HnRhCMLMlv0YEJK1xcAD',
                'event_callback': callback
            });
        }
        return false;
    }







    return (
        <header className=' z-50   bg-[var(--background)]  py-3 flex max-md:flex-col'>
         

            <div className='flex justify-between max-md:w-full '>

                <Link href="/" className=''>
                    <Image
                        src="/brigglogo.svg"
                        alt="logo"
                        className="logo mt-0 pt-0"
                        width={64}
                        height={64}
                    />
                </Link>

                <button className='md:hidden' onClick={e => toggleNavbar()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px" className=' fill-white md:hidden'>
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
                    </svg>
                </button>
            </div>


            <div className={`${navbarOpen ? "" : "max-md:hidden"} `}>
                <nav className="max-md:flex max-md:flex-col max-md:text-center max-md:px-5 max-md:align-middle max-md:justify-center max-md:items-center  ">
                    <Link href="/#factions" onClick={e => setNavbarOpen(false)} className=" md:mx-3 lg:mx-5 max-md:text-2xl nav-item max-md:w-screen max-md:my-3 max-md:mx-0 " >Fraktionen</Link>
                    <Link href="/team" onClick={e => setNavbarOpen(false)} className=" md:mx-3 lg:mx-5 max-md:text-2xl nav-item max-md:w-screen max-md:my-3 max-md:mx-0 " >Team</Link>
                    <Link href="/rules" onClick={e => setNavbarOpen(false)} className=" md:mx-3 lg:mx-5 max-md:text-2xl nav-item max-md:w-screen max-md:my-3 max-md:mx-0 " >Regeln</Link>
                    <Link href="/dev-diaries" onClick={e => setNavbarOpen(false)} className=" md:mx-3 lg:mx-5 max-md:text-2xl nav-item max-md:w-screen max-md:my-3 max-md:mx-0 " >Dev Diaries</Link>
                    <Link href="/changelog" onClick={e => setNavbarOpen(false)} className=" md:mx-3 lg:mx-5 max-md:text-2xl nav-item max-md:w-screen max-md:my-3 max-md:mx-0 " >Changelog</Link>
                    <Link target='_blank' href="https://discord.gg/S2wc2NVGaN" onClick={e => { setNavbarOpen(false), gtag_report_conversion("stay") }} className=" md:mx-3 lg:mx-5 max-md:text-2xl nav-item max-md:w-screen max-md:my-3 max-md:mx-0 text-orange-600" >Jetzt Spielen!</Link>
                </nav>
            </div>

        </header>
    )
}

export default NavBar