import Link from 'next/link'
import styles from './PageHeading.module.scss'
import KeyValuePill from './KeyValuePill'

export default function PageHeading({ title, stage, process}) {
  var stagePill;
  var processPill;

  if (stage != null) {
    stagePill = <KeyValuePill pillKey={'Stage'} pillValue={stage} />
  }
  
  if (process != null) {
    processPill = <KeyValuePill pillKey={'Process'} pillValue={process} />
  }
  
  return (
    <>
      <h1>{ title }</h1>
      <div className={styles.pillContainer}>
        { stage ? stagePill : '' }
        { process ? processPill : '' }
      </div>
    </>
  )
}