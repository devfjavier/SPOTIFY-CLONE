import styles from "../../styles/fragments/user-menu.module.scss"
import { useRef, useEffect } from "react"
import Icon from "./Icon"

const UserMenu = () => {
  const containerRef = useRef()
  
  const toggleMenu = e => {
    e.stopPropagation()
    containerRef.current.classList.toggle(styles.active)
  }

  useEffect(() => {
    document.onclick = () => {
      containerRef.current?.classList.remove(styles.active)
    }
  })

  return (
    <div className={styles.container} ref={containerRef}>
      <button onClick={toggleMenu} className={styles.btn}>
        <div className={styles.imgContainer}><Icon name="user" stroke="#fff"/></div>
        <span className={styles.name}>Usuario</span>
        <Icon className={styles.icon} name="play" fill="#fff"/>
      </button>
      <ul className={styles.menu}>
        <li><a className={styles.link} href="">Perfil</a></li>
        <li><a className={styles.link} href="">Preferencias</a></li>
      </ul>
    </div>
  )
}

export default UserMenu
