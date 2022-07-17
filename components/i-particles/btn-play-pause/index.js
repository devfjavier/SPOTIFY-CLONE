import classes from "./index.module.scss"
import { useRef } from "react"
import Icon from "../icon-svg"

const BtnPlayPause = () => {
  const buttonRef = useRef()

  const toggleButton = () => {
    buttonRef.current.classList.toggle(classes.isActive)
  }

  return (
    <button
      className={`h-unset ${classes.btn} ${process.env.uiM ? classes.MobileC : classes.DesktopC}`}
      ref={buttonRef}
      onClick={toggleButton}
    >
      <Icon className={classes.playIcon} name="play" fill={process.env.uiM ? "#fff" :"#000"} size="1.9rem" />
      <Icon className={classes.pauseIcon} name="pause" fill={process.env.uiM ? "#fff" :"#000"} size="1.9rem" />
    </button>
  )
}

export default BtnPlayPause