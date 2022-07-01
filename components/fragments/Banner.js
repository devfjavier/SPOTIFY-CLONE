import classes from "./banner.module.scss"

/**
 * @returns banner in a tag section
 */
const Banner = () => {
  return (
    <section className={classes.banner}>
      <div classs="img-container"><img src={process.env.projectPath + "/img/song.webp"} alt="song spotify clone godot engine" /></div>
      <div>
        <h2 className="h-color-light h-fs-st3">PLAYLIST</h2>
        <h1 className="h-color-light h-fs-t1">TITULO DEL PLAYLIST</h1>
        <div className="info h-color-gray">
          {/* <a href="../user/usuario"></a> */}
          <span>
            ·<span className="song-number">9</span> cancion, <span className="duration">27</span>
          </span>
        </div>
      </div>
    </section>
  )

}

export default Banner