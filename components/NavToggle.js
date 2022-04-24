import { useState } from 'react'
import styles from './NavToggle.module.scss'

export default function NavToggle({ nav }) {

    return (
        <div className={styles['nav-btn']} onClick={nav.toggleNav}>
            <i className='bi bi-list' />
        </div>
    )
}