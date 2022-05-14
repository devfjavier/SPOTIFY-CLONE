import classes from "../../styles/fragments/item-artist-song.module.scss"
import { item } from "../../styles/fragments/btn-play-pause.module.scss"
import BtnPlayPause from "./BtnPlayPause"

const ItemArtistSong = ({ compact = false, artist = false }) => {
  const is_uiM = process.env.uiM
  return (
    <ItemBase className={compact ? classes.itemCompact : "" + (is_uiM ? ` ${classes.s_uiM}` : "")}>
      <div className={classes.container}>
        <img className={artist && !compact ? "h-b-radius-50" : null} src={process.env.projectPath + "/img/song.webp"} alt="godot engine" />
        {compact || is_uiM || <BtnPlayPause item />}
      </div>

      <div className={compact ? null : classes.infoContainer}>
        <h3 className="h-color-light">title</h3>
        {compact || <p className="h-color-gray">subtitle</p>}
      </div>
    </ItemBase>
  )
}

function ItemBase({ className, children }) {
  return (
    <article className={`${item} ${classes.item}` + (className ? ` ${className}` : "")}>
      <a className={classes.sourceLink} href="#"></a>
      {children}
    </article>
  )
}

export default ItemArtistSong