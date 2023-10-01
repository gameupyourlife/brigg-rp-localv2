"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Modal from '../Modal/Modal'


export interface HoverCardProps {
    alink: string,
    cover: string,
    title?: string,
    character: string,
    mImg: string,
    mTitle: string,
    mText: string
}


const HoverCard = ({alink, cover, title, character, mImg, mTitle, mText}: HoverCardProps) => {
    const [open, SetOpen] = React.useState<boolean>(false);

    function Toggle () {
        SetOpen(!open)
    }

    return (
        <div>

        <button className='pt-[55px]' onClick={e => (Toggle())}>
            <div className={styles.card}>
                <div className={styles.wrapper}>
                    <img
                        src={cover}
                        className="cover-image"
                        alt='cover'
                        />
                </div>
                {/* <img
                    src={title}
                    className={`${styles.title}`}
                    alt='title'
                    /> */}
                <img
                    src={character}
                    className={styles.character}
                    alt='character'
                    />
            </div>
        </button>
            { open == true && <Modal changeState={Toggle} img={mImg} title={mTitle} text={mText} />}
                    </div>
    )
}

export default HoverCard

