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
        <div className={classes.imgContainer}><Icon name="user" fill="#fff"/></div>
        <span className={classes.name}>Usuario</span>
        <Icon className={classes.icon} name="play" fill="#fff"/>
      </button>
      <ul className={classes.menu}>
        <li><a className={classes.link} href="">Perfil</a></li>
        <li><a className={classes.link} href="">Preferencias</a></li>
      </ul>
    </div>
  )
}

export default UserMenu
