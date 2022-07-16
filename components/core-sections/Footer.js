import Img from "../i-particles/Img"
import classes from "./footer.module.scss"

const Footer = () => {
  return (
    <footer id={classes.idFooter}>
      <div className={classes.container}>
        <div className={classes.song}>
          <div>
            <Img src={"/img/song.webp"} alt="" />
          </div>
          <div className={classes.info}>
            <a className={"h-color-light " + classes.link} href="">cancion</a>
            <a className={"h-color-gray " + classes.link} href="">artista</a>
          </div>
          <button className={classes.like}>dar like</button>
          <button>play-pause</button>
        </div>

        <div className={classes["primary-controls"]}>
          controles
        </div>

        <div className={classes["secondary-controls"]}>
          volumen
        </div>
      </div>
    </footer>
  )
}

export default Footer