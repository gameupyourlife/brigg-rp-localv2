import React from 'react'

export interface TimelineItemI {
    title: string,
    desc: string,
    date: string,
    direction: string,
}

const TimelineItem = ({title, desc, date, direction}: TimelineItemI) => {
    //${direction == "direction-r" ? "left-[120px]" : "right-[120px]"}  

    return (
        <li>
            <div className={`${direction}  relative `}> 
                <div className="flag-wrapper">
                    <span className="hexa" />
                    <span className="flag">{title}</span>
                    <span className="time-wrapper">
                        <span className="time">{date}</span>
                    </span>
                </div>
                {/* ${direction == "direction-r" ? "border-l-2" : "border-r-2"}      */}
                <div className={`desc bg-[var(--background)] text-[var(--text)] ${title == "Full Release" ? "hidden opacity-0": ""} `}>
                    {desc}
                </div>
            </div>
        </li>
    )
}

export default TimelineItem