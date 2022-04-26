import styles from "../../styles/fragments/playlist-header.module.scss"

const PlaylistHeading = () => {
  return (
    <div className={styles.header}>
      <span className={`${styles.number} color-text`}>#</span>
      <span className={`${styles.title} color-title`}>TITULO</span>
      <span className={`${styles["album-link"]} color-title`}>ALBUM</span>
      <span className={`${styles.date} color-title`}>AGREGADO EL</span>
      <span className={`void`}>like</span>
      <span className={`${styles.length} color-title`}>reloj</span>
      <span className={`void`}>...op</span>
    </div>
  )
} 

export default PlaylistHeading