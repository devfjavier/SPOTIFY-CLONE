import classes from "../../../styles/core-sections/header/user-menu.module.scss"
import { useRef, useEffect } from "react"
import Icon from "../../icon-svg"

const UserMenu = () => {
  const containerRef = useRef()
  
  const toggleMenu = e => {
    e.stopPropagation()
    containerRef.current.classList.toggle(classes.active)
  }

  useEffect(() => {
    document.onclick = () => {
      containerRef.current?.classList.remove(classes.active)
    }
  })

  return (
    <div className={classes.container} ref={containerRef}>
      <button onClick={toggleMenu} className={classes.btn}>
        <div className={classes.imgContainer}><Icon name="user" fill="#fff" size="1.9rem"/></div>
        <span className="h-color-light">Usuario</span>
        <Icon className={classes.icon} name="play" fill="#fff" size="0.9rem"/>
      </button>
      <ul className={classes.menu}>
        <li><a className={"h-color-light-alt " + classes.link} href="">Perfil</a></li>
        <li><a className={"h-color-light-alt " + classes.link} href="">Preferencias</a></li>
      </ul>
    </div>
  )
}

export default UserMenu
