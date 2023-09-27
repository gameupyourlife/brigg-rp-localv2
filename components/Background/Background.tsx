import React from 'react'

const Background = () => {
  return (
    <div className= "w-full h-full min-h-screen fixed bg-[url('/hero2.png')] bg-cover bg-no-repeat z-[-3] ">
        <div className='w-full  pl-20 h-full box-border bg-black/[.5]  backdrop-blur-md z-[inherite]	'>
            <div  className='herobgeffects w-[2000px] h-[2000px] right-[-1000px] top-[-500px] absolute z-[inherite]' >

            </div>
        </div>
    </div>
  )
}

export default Background