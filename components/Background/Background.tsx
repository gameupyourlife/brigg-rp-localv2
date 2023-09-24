import React from 'react'

const Background = () => {
  return (
    <div className= "w-full h-full fixed bg-[url('/HeroImage.png')] bg-cover bg-no-repeat z-[-3] ">
        <div className='hero  w-full h-screen pl-20 h-[inherite] box-border bg-black/[.4]  backdrop-blur-md z-[inherite]	'>
            <div  className='herobgeffects w-[2000px] h-[2000px] right-[-1000px] top-[-500px] absolute [inherite]' >

            </div>
        </div>
    </div>
  )
}

export default Background