import styles from "./playlist-header.module.scss"

const PlaylistHeading = () => {
  return (
    <div className={styles.header}>
      <span className={`${styles.number} h-color-gray`}>#</span>
      <span className={`${styles.title} h-color-light`}>TITULO</span>
      <span className={`${styles["album-link"]} h-color-light`}>ALBUM</span>
      <span className={`${styles.date} h-color-light`}>AGREGADO EL</span>
      <span className={`void`}>like</span>
      <span className={`${styles.length} h-color-light`}>reloj</span>
      <span className={`void`}>...op</span>
    </div>
  )
} 

export default PlaylistHeading