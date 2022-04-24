import styles from './Layout.module.scss'
import Navigation from './Navigation'
import NavToggle from './NavToggle'


export default function Layout({ children })  {
  const nav = new Navigation()
  return (
    <>
      <div className={styles.page}>
        <Navigation />
        <main className={styles.container}>
          { children }
          <div className={styles.footer}>ITIL Notes by Johnny McNeil</div>
        </main>
      </div>
    </>
  )
}