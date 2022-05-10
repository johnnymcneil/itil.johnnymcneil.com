import styles from './Layout.module.scss'
import Navigation from './Navigation'
import NavToggle from './NavToggle'

import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { NavState } from '../contexts/NavState'


export default function Layout({ children })  {
  const navState = useContext(NavState)
  const didMount = useRef(false)
  const [navIsOpen, setNavIsOpen] = useState(navState.isOpen)
  const toggleNav = () => {
      setNavIsOpen(!navIsOpen)
  }
  const setLocalState = (isOpen) => {
      window.localStorage.setItem('navIsOpen', isOpen)
  }

  const navContext = {
    navIsOpen: navIsOpen,
    toggleNav: toggleNav,
    router: useRouter()
  }

  const collapseClass = navIsOpen ? styles.expanded : styles.collapsed

  useEffect(() => {
    console.log('useEffect(() => {})')
    if ( !didMount.current ) {
      const mq = matchMedia('(max-width: 767px')
      if (mq.matches) {
        setNavIsOpen(false)
      } else {
        setNavIsOpen( localStorage.getItem('navIsOpen') )
      }

      didMount.current = true
    }

    if (!navIsOpen) {
      localStorage.removeItem('navIsOpen')
    } else {
      localStorage.setItem('navIsOpen', navIsOpen)
    }
    navState.isOpen = navIsOpen
  }, [navIsOpen])

  
  return (
    <>
      <div className={ styles.header }>
        <div className={ styles.navToggle } onClick={ toggleNav }>
          <i class="bi bi-list" />
        </div>
        <div className={ styles.headerTitle }>
          ITIL Fundamentals
        </div>
      </div>
      <div className={styles.page}>
        <div className={ `${styles['col']} ${styles['col-nav']} ${collapseClass}` }>
          <NavState.Provider value={navContext}>
            <Navigation />
          </NavState.Provider>
        </div>
        <div className={ `${styles['col']} ${styles['col-main']}` }>
          <main className={ styles.container }>
            { children }
            <div className={styles.footer}>ITIL Notes by Johnny McNeil</div>
          </main>
        </div>
      </div>
    </>
  )
}