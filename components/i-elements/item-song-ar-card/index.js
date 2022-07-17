import classes from "./index.module.scss"
import { useRef } from "react"
import Img from "../../i-particles/Img"
import BtnPlayPauseAlt from "../../i-particles/btn-play-pause"

const ItemSongArCard = ({ artist = false }) => {
  const btnContainerRef = useRef()

  const handleClickBtn = () => {
    btnContainerRef.current.classList.toggle(classes.isActive)
  }

  return (
    <article className={`${classes.itemCard} ${process.env.uiM ? classes.MobileC : `h-bg-color-dark-4 ${classes.DesktopC}`}`}>
      <Img
        className={artist ? "h-b-radius-50" : null}
        src={"/img/song.webp"}
        alt="godot engine"
      />

      <div className={classes.infoContainer}>
        <h3 className="h-color-light">title</h3>
        <p className="h-color-gray">subtitle</p>
        {process.env.uiM ? null : (
          <div ref={btnContainerRef}
            onClick={handleClickBtn}
            className={classes.btnContainer}
          >
            <BtnPlayPauseAlt />
          </div>
        )}
      </div>
      <a className={classes.link} href="#"></a>
    </article>
  )
}

export default ItemSongArCard