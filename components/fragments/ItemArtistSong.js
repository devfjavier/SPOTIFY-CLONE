import classes from "../../styles/fragments/item-artist-song.module.scss"
import { useRef } from "react"
import Icon from "../icon-svg"

const ItemArtistSong = () => {
  const buttonRef = useRef()

  const toggleButton = () => {
    buttonRef.current.classList.toggle(classes.isActive)
  }

  return (
    <article className={classes.item}>
      <a className={classes.sourceLink} href="search.html"></a>
      <div className={classes.imgContainer}>
        <img className="artist-img" src={process.env.projectPath + "/img/song.webp"} alt="godot engine" />
        <button className={classes.playPause} ref={buttonRef} onClick={toggleButton}>
          <Icon className={classes.playIcon} name="play" fill="#000" size="1.5rem" />
          <Icon className={classes.pauseIcon} name="pause" fill="#000" size="1.5rem" />
        </button>
      </div>
      <div className={classes.infoContainer}>
        <h3 className="color-title">title</h3>
        <p className="color-text">subtitle</p>
      </div>
    </article>
  )
}

export default ItemArtistSong