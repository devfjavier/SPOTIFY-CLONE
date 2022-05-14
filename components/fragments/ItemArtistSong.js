import classes from "../../styles/fragments/item-artist-song.module.scss"
import { item as btnItem } from "../../styles/fragments/btn-play-pause.module.scss"
import BtnPlayPause from "./BtnPlayPause"

const is_uiM = process.env.uiM

const ItemArtistSong = ({ compact = false, artist = false }) => {

  return (
    <Base className={compact ? ` ${classes.itemCompact}` : ""}>
      <div className={classes.container}>
        <img className={artist && !compact ? "h-b-radius-50" : null} src={process.env.projectPath + "/img/song.webp"} alt="godot engine" />
        {compact || is_uiM || <BtnPlayPause item />}
      </div>

      <div className={compact ? null : classes.infoContainer}>
        <h3 className="h-color-light">title</h3>
        {compact || <p className="h-color-gray">subtitle</p>}
      </div>
    </Base>
  )
}

function Base({ className, children }) {
  const class_uiM = classes[is_uiM ? "s_uiM" : "s_uiDesk"]

  return (
    <article className={`${btnItem} ${classes.item} ${class_uiM}${className}`}>
      <a className={classes.sourceLink} href="#"></a>
      {children}
    </article>
  )
}

export default ItemArtistSong