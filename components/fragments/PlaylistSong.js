import Icon from "../icon-svg"
import styles from "../../styles/fragments/playlist-song.module.scss"

const PlaylistSong = () => {
  return (
    <article className={styles.song}>
      <div className={`${styles["number-container"]} color-text`}>
        <span className={`${styles.number} color-text`}>1</span>
        <button className={styles["play-btn"]}><Icon name="play" fill="#fff"/></button>
        <button className={styles["pause-btn"]}><Icon name="pause"  fill="#fff"/></button>
      </div>
      <div className={styles["title-container"]}>
        <img src={process.env.projectPath + "/img/song.webp"} alt=""/>
        <div>
          <span className={`${styles.title} color-title`}>nombre cancion</span>
          <a className={`${styles["artist-link"]} color-text`} href="">artista</a>
        </div>
      </div>
      <a className={`${styles["album-link"]} color-text`} href="">Album</a>
      <span className={`${styles.date} color-text`}>Fecha de agregacion</span>
      <button className={styles["like-btn"]}>icono</button>
      <span className={`${styles.length} color-text`}>Duracion</span>
      <button className={`${styles["more-options"]} color-text`}>...</button>
    </article>
  )
} 
export default PlaylistSong