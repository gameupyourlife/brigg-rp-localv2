import React from 'react'

export interface SeperatorI {
    width: string
    top: string
    bottom: string
}

const Seperator = ({width, top, bottom}:SeperatorI) => {
    return (
        <div className='flex justify-center items-center align-middle mx-0 px-0'>
            <div id='separator' className={`pd-0 mx-0 border border-gray-400 h-0 w-[${width}px] max-w-[100vw] mt-[${top}px] mb-[${bottom}px]`}></div>
        </div>
    )
}

export default Seperator