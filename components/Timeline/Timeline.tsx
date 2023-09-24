import React from 'react'
import styles from './styles.module.css'
import TimelineItem from './TimelineItem'

const Timeline = () => {
    return (
            <ul className="timeline text-black my-20">
                <TimelineItem direction='direction-r' title="Alpha Release" date="29 Juli 2023" desc="Der Alpharelease von Brigg RP markiert den Startpunkt unserer aufregenden Reise. In dieser Phase laden wir ausgewählte Spieler ein, die Grundlagen unserer RP-Welt zu erkunden und uns beim Feinschliff der Spielerfahrung zu unterstützen." />
                <TimelineItem direction='direction-l' title="Beta Release" date="30 November 2024" desc="Der Alpharelease von Brigg RP markiert den Startpunkt unserer aufregenden Reise. In dieser Phase laden wir ausgewählte Spieler ein, die Grundlagen unserer RP-Welt zu erkunden und uns beim Feinschliff der Spielerfahrung zu unterstützen." />
                <TimelineItem direction='direction-r' title="Full Release" date="15 April 2026" desc="Der Alpharelease von Brigg RP markiert den Startpunkt unserer aufregenden Reise. In dieser Phase laden wir ausgewählte Spieler ein, die Grundlagen unserer RP-Welt zu erkunden und uns beim Feinschliff der Spielerfahrung zu unterstützen." />

            </ul>
        


    )
}

export default Timeline