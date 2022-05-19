import { useRef } from "react"
import classes from "../../styles/fragments/btn-play-pause.module.scss"
import Icon from "../icon-svg"

const is_uiM = process.env.uiM

const BtnPlayPause = ({ itemCompact = false }) => {
  const buttonRef = useRef()
  const containerRef = useRef()

  const toggleButton = () => {
    buttonRef.current.classList.toggle(classes.active)
    if (!is_uiM) containerRef.current.classList.toggle(classes.active)
  }
  return (
    <div className={`${classes.container} ${classes[itemCompact ? "compact" : "card"]}`} ref={containerRef}>
      <button className={"h-unset " + classes.btn} ref={buttonRef} onClick={toggleButton}>
        <Icon className={classes.playIcon} name="play" fill="#000" size="1.5rem" />
        <Icon className={classes.pauseIcon} name="pause" fill="#000" size="1.5rem" />
      </button>
    </div>
  )
}

export default BtnPlayPause