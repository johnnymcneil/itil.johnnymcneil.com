import styles from './Navigation.module.scss'
import NavItem from './NavItem'
import { NavStructure } from '../contexts/NavStructure'
import { useRouter } from 'next/router'
import { useState } from 'react'

const renderNav = (navItems) => {
    const router = useRouter()
    
    return navItems.map((item) => (
        <>
            {
                item.children ? (
                    <div className={styles['nav-folder']}>
                        {item.name}
                        <div className={styles['nav-container']}>
                            { renderNav(item.children) }
                        </div>
                    </div>
                ) : (
                    <NavItem item={item} active={router.asPath === item.href ? true : false} />
                )
            }
        </>
    ))
}
const storeState = (stateValue) => {
    localStorage.setItem()
}
export default function Navigation() {
    const stateInStorage = localStorage.getItem( 'NavVisibile' )
    const [showNav, setShowNav] = useState(stateInStorage ? stateInStorage : true)
    const toggleNav = () => {
        localStorage.setItem( 'NavVisible', !showNav)
        setShowNav(!showNav)
    }

    return (
        <div className={styles['navigation']}>
            <input id='collapsible' className={styles.toggle} type='checkbox' checked={showNav} />
            <label htmlFor='collapsible' className={styles['toggle-label']} tabindex='0' onClick={toggleNav}>
                <i className='bi bi-list' />
            </label>
            <div className={styles['nav-items']}>
                { renderNav(NavStructure) }
            </div>
        </div>
    )
}