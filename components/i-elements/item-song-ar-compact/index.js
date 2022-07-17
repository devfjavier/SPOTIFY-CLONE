import classes from "./index.module.scss"
import { useRef } from "react"
import BtnPlayPauseAlt from "../../i-particles/btn-play-pause"
import Img from "../../i-particles/Img"

const ItemSongArCompact = () => {
  const btnContainerRef = useRef()

  const handleClickBtn = () => {
    btnContainerRef.current.classList.toggle(classes.isActive)
  }

  return (
    <article className={`${classes.itemCompact} ${process.env.uiM ? classes.MobileC : "h-bg-color-dark-4"}`}>
      <Img src={"/img/song.webp"} alt="godot engine" />
      <h3 className="h-color-light">title</h3>
      {process.env.uiM ? null : (
        <div
          ref={btnContainerRef}
          onClick={handleClickBtn}
          className={classes.btnContainer}
        >
          <BtnPlayPauseAlt />
        </div>
      )}
      <a className={classes.link} href="#"></a>
    </article>
  )
}

export default ItemSongArCompact