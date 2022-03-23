import Icon from "./Icon"
import styles from "../../styles/fragments/playlist-song.module.scss"

const PlaylistSong = () => {
  return (
    <article className={styles.song}>
      <div className={`${styles["number-container"]} text`}>
        <span className={`${styles.number} text`}>1</span>
        <button className={styles["play-btn"]}><Icon name="play" fill="#fff"/></button>
        <button className={styles["pause-btn"]}><Icon name="pause"  fill="#fff"/></button>
      </div>
      <div className={styles["title-container"]}>
        <img src="/img/song.webp" alt=""/>
        <div>
          <span className={`${styles.title} title`}>nombre cancion</span>
          <a className={`${styles["artist-link"]} text`} href="">artista</a>
        </div>
      </div>
      <a className={`${styles["album-link"]} text`} href="">Album</a>
      <span className={`${styles.date} text`}>Fecha de agregacion</span>
      <button className={styles["like-btn"]}>icono</button>
      <span className={`${styles.length} text`}>Duracion</span>
      <button className={`${styles["more-options"]} text`}>...</button>
    </article>
  )
} 
export default PlaylistSong