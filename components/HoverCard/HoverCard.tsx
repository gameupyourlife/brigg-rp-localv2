import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export interface HoverCardProps {
    alink: string,
    cover: string,
    title: string,
    character: string
}


const HoverCard = ({alink, cover, title, character}: HoverCardProps) => {
    return (
        
        <Link href={alink} className='pt-[55px]'>
            <div className={styles.card}>
                <div className={styles.wrapper}>
                    <img
                        src={cover}
                        className="cover-image"
                        />
                </div>
                <img
                    src={title}
                    className={styles.title}
                />
                <img
                    src={character}
                    className={styles.character}
                    />
            </div>
        </Link>
    )
}

export default HoverCard