import React from 'react'
import styles from './styles.module.css'

const TeamCardHolder = ({ children, }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card_holder}>
                {children}
            </div>
        </div>
    )
}

export default TeamCardHolder