import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

export interface TeamCardI {
    title1: string
    text1: string
    title2: string
    text2: string
    image: string
    logobg: string
}

const TeamCard = ({title1, text1, title2, text2, image, logobg}: TeamCardI ) => {
    return (

        <a href="#" className={styles.card}>
            <div
                className={`${styles.logo} ${logobg}`}
                
            >
                <Image src={image} alt="profile pic" width={256} height={256} className=' rounded-[50%] z-10'/>
            </div>
            <div className={styles.content_container}>
                <div className={styles.content + " " + styles.content_1}>
                    <h3 className=' text-[var(--text)]'>{title1}</h3>
                    {/* <p className='text-[var(--text)]'>{text1}</p> */}
                </div>
                <div className={styles.content + " " + styles.content_2}>
                    <h3 className='text-[var(--text)]'>{title2}</h3>
                    <p className='text-[var(--text)]'>{text2}</p>
                </div>
            </div>
        </a>    


    )
}

export default TeamCard