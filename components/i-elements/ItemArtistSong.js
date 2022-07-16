import classes from "./item-artist-song.module.scss"
import { item as btnItem } from "./btn-play-pause.module.scss"
import BtnPlayPause from "./BtnPlayPause"

const is_uiM = process.env.uiM

const ItemArtistSong = ({ compact = false, artist = false }) => {
  const img = <img className={artist && !compact ? "h-b-radius-50" : null} src={process.env.projectPath + "/img/song.webp"} alt="godot engine" />

  if (compact) {
    return (
      <Base className={classes.itemCompact}>
        {img}
        <h3 className="h-color-light">title</h3>
        {is_uiM ? null : <BtnPlayPause itemCompact />}
      </Base>
    )
  }

  return (
    <Base className={classes.itemCard}>
      <div className={classes.imgContainer}>
        {img}
        {is_uiM ? null : <BtnPlayPause />}
      </div>

      <div className={classes.infoContainer + (is_uiM ? "" : ` ${classes.s_uiDesk}`)}>
        <h3 className="h-color-light">title</h3>
        <p className="h-color-gray">subtitle</p>
      </div>
    </Base>
  )
}

function Base({ className, children }) {
  const class_uiM = classes[is_uiM ? "s_uiM" : "s_uiDesk"]

  return (
    <article className={`h-bg-color-dark-4 ${btnItem} ${classes.base} ${className} ${class_uiM}`}>
      <a className={classes.sourceLink} href="#"></a>
      {children}
    </article>
  )
}

export default ItemArtistSong