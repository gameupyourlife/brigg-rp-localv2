"use client"


import React from 'react'
import styles from './styles.module.css'

export interface AccordionItemI {
    title: string,
    text: string,
    opened?: boolean
}

const AccordionItem = ({title, text, opened}: AccordionItemI) => {
    if (opened === undefined || opened === null) {
        opened = false
    }
    const [open, SetOpen] = React.useState<boolean>(opened);



    return (
        <div className="py-2">
            <h3>

                <button id="faqs-title-01" type="button" className="flex items-center justify-between w-full text-left font-semibold py-2" onClick={e => SetOpen(!open)}>
                    <span>{title}</span>
                    <svg className="fill-[var(--accent)] shrink-0 ml-8" width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out" style={open ? { transform: "rotate(180deg)" } : {}} />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out" style={open ? { transform: "rotate(180deg)" } : {}} />
                    </svg>
                </button>
            </h3>
            <div id="faqs-text-01" role="region" aria-labelledby="faqs-title-01" className={`grid text-sm text-slate-300 overflow-hidden transition-all duration-300 ease-in-out ${open ? styles.show : styles.hide}`}>
                <div className="overflow-hidden">
                    <p className="pb-3">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem