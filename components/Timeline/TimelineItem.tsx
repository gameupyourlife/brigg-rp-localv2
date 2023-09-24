import React from 'react'

export interface TimelineItemI {
    title: string,
    desc: string,
    date: string,
    direction: string,
}

const TimelineItem = ({title, desc, date, direction}: TimelineItemI) => {
    return (
        <li>
            <div className={`${direction} w-[500px] relative ${direction == "direction-r" ? "left-[120px]" : "right-[120px]"} `}>
                <div className="flag-wrapper">
                    <span className="hexa" />
                    <span className="flag">{title}</span>
                    <span className="time-wrapper">
                        <span className="time">{date}</span>
                    </span>
                </div>
                <div className={`desc bg-transparent text-white ${direction == "direction-r" ? "border-l-2" : "border-r-2"}  `}>
                    {desc}
                </div>
            </div>
        </li>
    )
}

export default TimelineItem