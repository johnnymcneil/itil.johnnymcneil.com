import styles from './KeyValuePill.module.scss'

export default function KeyValuePill({ pillKey, pillValue }) {
  return (
    <div className={styles.KVP}>
      <div className={styles.KVPKey}>
        { pillKey }
      </div>
      <div className={styles.KVPValue}>
        { pillValue }
      </div>
    </div>
  )
}