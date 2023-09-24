import React from 'react'
import Seperator from '../Seperator'

const NavBar = () => {
    return (
        <header className=' z-50   bg-slate-900 flex-col pb-0'>
            <div className='flex z-50 justify-start align-top '>

                <a href="#" className='justify-start align-top'
                ><img
                        src="/brigglogo.svg"
                        alt="logo"
                        className="logo"
                    /></a>
                <div className=' '>
                    <nav className="navbar">
                        <a href="#" className="nav-item text-2xl" >Projekt</a>
                        <a href="#" className="nav-item text-2xl" >Features</a>
                        <a href="#" className="nav-item text-2xl" >Fraktionen</a>
                        <a href="#" className="nav-item text-2xl" >FAQ</a>
                    </nav>
                </div>
            </div>
            <Seperator width='3000' top='10' bottom='0'/>
        </header>
    )
}

export default NavBar