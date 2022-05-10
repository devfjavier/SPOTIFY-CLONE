import Icon from "../icon-svg"
import styles from "../../styles/fragments/playlist-song.module.scss"

const PlaylistSong = () => {
  return (
    <article className={styles.song}>
      <div className={`${styles["number-container"]} h-color-gray`}>
        <span className={`${styles.number} h-color-gray`}>1</span>
        <button className={styles["play-btn"]}><Icon name="play" fill="#fff"/></button>
        <button className={styles["pause-btn"]}><Icon name="pause"  fill="#fff"/></button>
      </div>
      <div className={styles["title-container"]}>
        <img src={process.env.projectPath + "/img/song.webp"} alt=""/>
        <div>
          <span className={`${styles.title} h-color-light`}>nombre cancion</span>
          <a className={`${styles["artist-link"]} h-color-gray`} href="">artista</a>
        </div>
      </div>
      <a className={`${styles["album-link"]} h-color-gray`} href="">Album</a>
      <span className={`${styles.date} h-color-gray`}>Fecha de agregacion</span>
      <button className={styles["like-btn"]}>icono</button>
      <span className={`${styles.length} h-color-gray`}>Duracion</span>
      <button className={`${styles["more-options"]} h-color-gray`}>...</button>
    </article>
  )
} 
export default PlaylistSong