import React from 'react'
import styles from './styles.module.css'
import SectionTransitionMarker from '../SectionTransitonMarker/SectionTransitonMarker'
import Timeline from '../Timeline/Timeline'

const TheProject = () => {
  return (
    <div className=' z-10 relative ' >
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`rotate-[0deg]`}>
        <path d="M 0 120 L 1500 16.48 1500 0 0 0 0 120 z" className={`rotate-[1.3deg] fill-slate-900  translate-x-[-1px] translate-y-[80.705px] shape-fill ${false && "outline outline-[15px] outline-[#1180bb]"}`} ></path>
      </svg>

      <section className="flex justify-center align-center py-5 bg-slate-900">
        <div className="flex flex-col justify-center align-center mx-auto px-6 text-center text-white">
          <h2 className='text-4xl font-bold mb-3 '>
            Das Projekt
          </h2>
          <p className="max-w-5xl">
            Brigg RP ist ein deutscher GTA V Roleplay Server, der auf dem RageMP Framework basiert.
            Unser Ziel ist es, ein möglichst realistisches und authentisches Spielerlebnis zu schaffen.
            Wir haben es uns zur Aufgabe gemacht, das Spielgeschehen so realitätsnah wie möglich zu gestalten,
            wobei der Spielspaß stets im Vordergrund steht.
          </p>
          <Timeline/>
        </div>
      </section>

      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`rotate-[180deg]`}>
        <path d="M 0 120 L 1500 16.48 1500 0 0 0 0 120 z" className={`rotate-[1.3deg] fill-slate-900  translate-x-[-1px] translate-y-[80.705px] shape-fill ${false && "outline outline-[15px] outline-[#1180bb]"}`} ></path>
      </svg>


    </div>


  )
}

export default TheProject