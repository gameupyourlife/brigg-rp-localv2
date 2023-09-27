import React from 'react'
import HoverCard from './HoverCard'
import SectionTransitionMarker from '../SectionTransitonMarker/SectionTransitonMarker'
import styles from './styles.module.css'

const YourAdventure = () => {
    return (
        <div className='z-10 relative' id='factions'>
            <SectionTransitionMarker trany='101.75px'/>

            <div className='bg-[var(--background)] py-[2px] my-[-2px]'>
            <section className="flex justify-center align-center text-center">
                <div className=' text-[var(--text)] 	 '>
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
                
            <section className="flex justify-center align-center  pb-10 flex-wrap ">

                <HoverCard alink="#crime" cover="/street_crew_memberBG.png" title="/street_crew_logo.png" character="/Hovercards/Gang/street_crew_memberSmooth.png" mImg='/street_crew_memberBG.png' mTitle="Gang Life" mText='In den gefährlichen Straßen von Los Santos regieren die Gangs. Als Mitglied einer Gang bist du Teil einer engen Gemeinschaft, die zusammenhält, um in dieser harten Welt zu überleben. Das Gang-Leben ist geprägt von Macht, Rivalitäten und den Banden, die um die Kontrolle über die Stadt kämpfen. Bist du bereit deinen Platz in dieser Welt zu finden?'/>
                {/* <HoverCard alink="#crime" cover="/Hovercards/RaceCrew/raceCrewBG.png" title="/street_crew_logo.png" character="/Hovercards/RaceCrew/raceCrew.png" mImg='/Hovercards/RaceCrew/raceCrewBG.png' mTitle="Gang Life" mText='"In den gefährlichen Straßen von Los Santos regieren die Gangs. Hier zählt nur Stärke und Loyalität. Als Mitglied einer Gang bist du Teil einer engen Gemeinschaft, die zusammenhält, um in dieser harten Welt zu überleben. Das Gang-Leben ist geprägt von Macht, Rivalitäten und den Banden, die um die Kontrolle über die Stadt kämpfen. Bist du bereit, dich dem Gang-Leben anzuschließen und deinen Platz in dieser Welt zu finden?'/> */}
                {/* <HoverCard alink="#civi" cover="/entrepreneurBG.png" title="Logos/doj.png" character="entrepreneur.png" /> */}
                <HoverCard alink="#medic" cover="/Hovercards/Fire/firemanBG.png" title="/Logos/lsmd.png" character="/Hovercards/Fire/firemanSmooth.png" mImg='/Hovercards/Fire/firemanBG.png' mTitle='Fire Department' mText='In einer Stadt, in der Gefahren und Brände lauern, sind wir die Helden. Unsere Feuerwehrleute riskieren ihr Leben, um Brände zu löschen und Leben zu retten. Wir sind stolz darauf, die Sicherheit der Bürger von Los Santos zu gewährleisten und in Notsituationen Hilfe zu leisten.'/>
                <HoverCard alink="#medic" cover="/Hovercards/Medic/medicbg.png" title="/Logos/lsmd.png" character="/Hovercards/Medic/medicSmooth.png" mImg='/Hovercards/Medic/medicbg.png' mTitle='Medical Department' mText='In einer gefährlichen Stadt sind wir die Helden des Alltags. Unsere Ärzte und Krankenschwestern stehen bereit, um Leben zu retten und Schmerzen zu lindern. Wir schützen die Gesundheit und Sicherheit der Bürger von Los Santos, sei es bei Notfällen oder im Krankenhaus. Im Medical Department sind wir stolz darauf, Leben zu retten und Hilfe zu leisten.'/>
                <HoverCard alink="#police" cover="/policemanBG.png" title="/Logos/PD_Logo.png" character="/Hovercards/Police/swatSmooth.png" mImg='/policemanBG.png' mTitle='Police Department' mText='In einer Stadt voller Verbrechen und Herausforderungen sind wir die Beschützer. Unsere Polizisten arbeiten rund um die Uhr, um die Sicherheit der Bürger von Los Santos zu gewährleisten. Wir bekämpfen das Verbrechen und stehen für Gerechtigkeit ein. Im Police Department sind wir stolz darauf, unsere Stadt zu schützen und für Frieden und Sicherheit zu sorgen.' />
                <HoverCard alink="#doj" cover="/prosecutorBG.png" title="/Logos/doj.png" character="/Hovercards/DoJ/prosecutorSmooth.png" mImg='/prosecutorBG.png' mTitle='Department of Justice' mText='In einer Stadt voller Kriminalität und Chaos ist das Department of Justice der Hüter der Gesetze von Los Santos. Unsere engagierten Anwälte, Richter und Strafverfolgungsbeamten setzen sich für Recht und Ordnung ein. Wir kämpfen für Gerechtigkeit und den Schutz der Bürger in dieser gefährlichen Stadt.'/>
            </section>
            </div>

            <SectionTransitionMarker trany='101.75px' orientation={"180deg"} />

        </div>
    )
}

export default YourAdventure