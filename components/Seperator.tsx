import React from 'react'

export interface SeperatorI {
    width: string
    top: string
    bottom: string
}

const Seperator = ({width, top, bottom}:SeperatorI) => {
    return (
        <div className='flex justify-center items-center align-middle'>
            <div id='separator' className={`border border-gray-400 h-0 w-[${width}px] mt-[${top}px] mb-[${bottom}px]`}></div>
        </div>
    )
}

export default Seperator