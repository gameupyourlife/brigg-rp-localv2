import React from 'react'
import styles from './styles.module.css'
import TimelineItem from './TimelineItem'

const Timeline = () => {
    return (
            <ul className="timeline text-black my-20">
                <TimelineItem direction='direction-r' title="Alpha Release" date="29 Juli 2023" desc="Der Alpha Release von Brigg RP markiert den Startpunkt unserer aufregenden Reise. In dieser Phase laden wir alle Spieler ein, die Grundlagen unserer RP-Welt zu erkunden und uns beim Feinschliff der Spielerfahrung zu unterstützen." />
                <TimelineItem direction='direction-l' title="Beta Release" date="Q3 2024" desc="Unser Beta Release ist der nächste Schritt auf unserer Reise in die Welt von Brigg RP. Dies ist deine Chance, die erweiterte RP-Erfahrung vorab zu erleben und aktiv zur Entwicklung unserer Serverwelt beizutragen. Freue dich auf neue Funktionen, Fraktionen und Events, während wir gemeinsam Los Santos weiterentwickeln. Werde Teil des Wandels im Beta-Release von Brigg RP!" />
                <TimelineItem direction='direction-r' title="Full Release" date="2025" desc="" />

            </ul>
        


    )
}

export default Timeline