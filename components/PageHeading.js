import Head from 'next/head';
import styles from './PageHeading.module.scss'
import Tags from './Tags'

export default function PageHeading({ note }) {
  return (
    <>
      <Head>
        <title>{ note.name }</title>
        { note.description != null ? <meta name="description" content={note.description} /> : '' }
      </Head>
      <h1>{ note.name }</h1>
      <div className={styles.pillContainer}>
        <Tags dict={note.tags} />
      </div>
    </>
  )
}