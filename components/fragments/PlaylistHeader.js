import styles from "../../styles/fragments/playlist-header.module.scss"

const PlaylistHeading = () => {
  return (
    <div className={styles.header}>
      <span className={`${styles.number} text`}>#</span>
      <span className={`${styles.title} title`}>TITULO</span>
      <span className={`${styles["album-link"]} title`}>ALBUM</span>
      <span className={`${styles.date} title`}>AGREGADO EL</span>
      <span className={`void`}>like</span>
      <span className={`${styles.length} title`}>reloj</span>
      <span className={`void`}>...op</span>
    </div>
  )
} 

export default PlaylistHeading