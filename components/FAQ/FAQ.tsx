
import React, { useState } from 'react'
import styles from './styles.module.css'
import AccordionItem from './AccordionItem';
import SectionTransitionMarker from '../SectionTransitonMarker/SectionTransitonMarker';


const FAQ = () => {
    return (
        <section id='faq' >
 
            <script src="https://cdn.tailwindcss.com" />

            <SectionTransitionMarker trany='70px' rotation='1.3deg'/>

            <div className="relative font-inter antialiased bg-[var(--background)] text-[var(--text)] ">

                <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                    <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">

                        <h2 className='text-[var(--text)]  text-4xl font-bold flex align-middle items-center text-center justify-center ' >FAQs</h2>

                        {/* Accordion component */}
                        <div className="divide-y divide-slate-200">

                            <AccordionItem opened={true} title='Wie kann ich dem Server beitreten?' text='Um dem Brigg RP Server beizutreten, musst du auf unserem Discord Server ein Einreise-Ticket eröffnen. Dort vereinbarst du ein Termin mit einem Supporter und ihr führt das Einreisegespräch. Hast du das bestanden steht dir nichts mehr im Weg.' />
                            <AccordionItem title='Gibt es Altersbeschränkungen für die Teilnahme?' text='Ja, du musst mindestens 18 Jahre alt sein, um auf unserem Server zu spielen.' />
                            <AccordionItem title='Gibt es einen TeamSpeak?' text='Ja, du erreichst diesen unter brigg-rp.online' />
                            <AccordionItem title='Welche SaltyChat Version benötige ich?' text='Wir verwenden sowohl bei TeamSpeak als auch bei SaltyChat die neusten Versionen' />
                            <AccordionItem title='Welche Fraktionen oder Berufe stehen zur Verfügung?' text='Wir bieten eine Vielzahl von Fraktionen und Berufen auf unserem Server an, darunter Polizei, Gangs, Unternehmen und mehr. Wir sind auch immer offen für neue Anträge' />
                            <AccordionItem title='Gibt es Serverregeln?' text='Ja, wir haben klare Serverregeln, die auf Fairness, Respekt und ein angenehmes RP-Erlebnis für alle abzielen. Bitte lies unsere Regeln sorgfältig durch und halte dich daran, um Konflikte zu vermeiden.' />
                            <AccordionItem title='Wie kann ich Support erhalten?' text='Wenn du Fragen hast oder Unterstützung benötigst, kannst du uns über unseren Discord-Server erreichen. Unser Support-Team steht dir gerne zur Verfügung.' />
                            <AccordionItem title='Kann ich meinen Charakter anpassen?' text='Ja, du kannst deinen Charakter nach deinen Vorstellungen gestalten und seine Hintergrundgeschichte entwickeln. Wir ermutigen die Spieler, kreativ zu sein und einzigartige Charaktere zu erstellen.' />
                            <AccordionItem title='Wie bleibe ich über Neuigkeiten und Events auf dem Laufenden?' text='Halte dich über unseren Discord-Server auf dem Laufenden. Wir posten regelmäßig Updates, Ankündigungen und Informationen zu geplanten Events.' />
                            <AccordionItem title='Muss ich als neuer RP Spieler etwas beachten?' text='Neue RP-Spieler auf Brigg RP sollten sich einfach auf eine spannende Reise vorbereiten! Beachte die Regeln, sei kreativ und hab Spaß in Los Santos.' />
                            <AccordionItem title='Was brauche ich um zu spielen?' text='Um bei uns Gta 5 Rp spielen zu können brauchst du eine legale Version von Gta, den FiveM launcher sowie TeamSpeak mit der neusten SaltyChat Version und Discord. Hast du diese Voraussetzungen erfüllt steht deinem GTA RP Erlebnis nichts mehr im Weg' />

                        </div >
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FAQ