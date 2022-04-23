import styles from './Layout.module.scss'

export default function Layout({ children })  {
  return (
    <>
      <main>
        <div className={styles.container}>
          { children }
        </div>
      </main>
    </>
  )
}