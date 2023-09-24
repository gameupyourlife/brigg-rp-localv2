import React from 'react'
import HoverCard from './HoverCard'
import SectionTransitionMarker from '../SectionTransitonMarker/SectionTransitonMarker'
import styles from './styles.module.css'

const YourAdventure = () => {
    return (
        <div className='z-10 relative'>
            <SectionTransitionMarker trany='101.75px'/>

            <div className='bg-slate-900 py-[2px] my-[-2px]'>
            <section className="flex justify-center align-center text-center">
                <div className=' text-white	 '>
                    <h2 className='text-4xl font-bold mb-3' >
                        Wähle deinen Weg!
                    </h2>
                    <p className='max-w-[1000px]'>
                        Wähle deinen Weg und erlebe die Welt von Los Santos aus verschiedenen Perspektiven.
                        Ob als Polizist, Zivilist oder Gangster, es ist für jeden etwas dabei!
                    </p>
                </div>
            </section>

            <div className='flex justify-center items-center align-middle'>
                <div id='separator' className='border border-gray-400 h-0 w-[1200px] mt-5 mb-[60px] '></div>
            </div>
                
            <section className="flex justify-center align-center">
                <HoverCard alink="/#crime" cover="street_crew_memberBG.png" title="street_crew_logo.png" character="street_crew_member2.png" />
                <HoverCard alink="#civi" cover="entrepreneurBG.png" title="Logos/doj.png" character="entrepreneur.png" />
                <HoverCard alink="#police" cover="policemanBG.png" title="policelogo.png" character="swat2.png" />
                <HoverCard alink="#doj" cover="prosecutorBG.png" title="Logos/doj.png" character="prosecutor.png" />
            </section>
            </div>

            <SectionTransitionMarker trany='101.75px' orientation={"180deg"} />

        </div>
    )
}

export default YourAdventure