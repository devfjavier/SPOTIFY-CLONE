import { useRef } from "react"
import classes from "../../styles/fragments/btn-play-pause.module.scss"
import Icon from "../icon-svg"

const BtnPlayPause = ({ item = false }) => {
  const buttonRef = useRef()
  const containerRef = useRef()

  const toggleButton = () => {
    buttonRef.current.classList.toggle(classes.active)
    if (item) containerRef.current.classList.toggle(classes.active)
  }
  return (
    <div className={item ? classes.container : null} ref={containerRef}>
      <button className={"h-unset " + classes.btn} ref={buttonRef} onClick={toggleButton}>
        <Icon className={classes.playIcon} name="play" fill="#000" size="1.5rem" />
        <Icon className={classes.pauseIcon} name="pause" fill="#000" size="1.5rem" />
      </button>
    </div>
  )
}

export default BtnPlayPause