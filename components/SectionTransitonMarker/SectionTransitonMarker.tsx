import React from 'react'

export interface SectionTransitionMarkerI {
    orientation?: string,
    rotation?: string,
    coloredDemarker?: boolean,
    trany: string
}

const SectionTransitionMarker = ({orientation, rotation, coloredDemarker, trany}:SectionTransitionMarkerI) => {

    if (orientation == null ) {
        orientation = "0deg"
    }
    if (rotation == null ) {
        rotation = "-2.7deg"
    }
    if (coloredDemarker == null ) {
        coloredDemarker = true
    }
    return (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`rotate-[${orientation}]`}>
                <path d="M 1500 120 L 0 120 0 0 1500 0 1500 120z" className={`rotate-[${rotation}] fill-[var(--background)]  translate-x-[-1px] translate-y-[${trany}] shape-fill ${coloredDemarker &&  "outline outline-[15px] outline-[var(--accent)]"}`} ></path>
        </svg>
    )
}

export default SectionTransitionMarker