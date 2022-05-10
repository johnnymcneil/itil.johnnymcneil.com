import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { NavState } from '../contexts/NavState'
import { NavStructure } from '../contexts/NavStructure'

import styles from './Navigation.module.scss'
import NavItem from './NavItem'

export default function Navigation() {
    const navContext = useContext(NavState)
    const renderNav = (navItems) => {        
        return navItems.map((item) => (
            <>
                {
                    item.children ? (
                        <>
                            <NavItem item={item.note} active={navContext.router.asPath === item.note.href ? true : false} />
                            <div className={styles['nav-group']}>
                                { renderNav(item.children) }
                            </div>
                        </>
                    ) : (
                        <NavItem item={item} active={navContext.router.asPath === item.href ? true : false} />
                    )
                }
            </>
        ))
    }
    return (
        <div className={ styles['nav-menu'] }>
            <div className={ styles.nav }>
                { renderNav(NavStructure) }
            </div>
        </div>
    )
}