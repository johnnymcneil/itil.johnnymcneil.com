import styles from './Tags.module.scss'

export default function Tags({ dict }) {
  var tags = []
  for (var key in dict) {
    var value = dict[key];
    var tag = (
      <div className={ styles.tag }>
        <div className={ styles.tagKey }>
          { key }
        </div>
        <div className={ styles.tagValue }>
          { value }
        </div>
      </div>
    )
    tags.push(tag)
  }
  return tags
}