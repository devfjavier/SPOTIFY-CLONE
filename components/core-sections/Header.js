import Link from "next/link"
import { useEffect, useRef } from "react"
import { COLLECTION_HEADER, NORMAL_HEADER } from "../../consts/header_types"
import Icon from "../fragments/Icon"

const Header = ({type, collectionsPage}) => {
  const userButton = useRef()
  const userMenu = useRef()

  const toggleMenu = e => {
    e.stopPropagation()
    userButton.current.classList.toggle("is-active")
    userMenu.current.classList.toggle("is-active")
  }

  useEffect(() => {
    document.onclick = () => {
      userButton.current?.classList.remove("is-active")
      userMenu.current?.classList.remove("is-active")
    }
  })

  return (
    <header className={`HEADER${type === NORMAL_HEADER ? " normal": ""}`}>
      <div className="page-navigation">
        <button className="button back">izq</button>
        <button className="button fordward">der</button>
      </div>

      {
        type === NORMAL_HEADER ? <>
          <span className="void fs-p3">H</span>
          <button className="premium">PREMIUM</button>
        </> : null
      }
      {
        type === COLLECTION_HEADER ? <>
          <ul className="collection-menu">
            <li>
              <Link href="playlists">
                <a className={`link fs-p3 title${collectionsPage === "playlist" && " actual"}`}>Listas</a>
              </Link>
            </li>
            <li>
              <Link href="podcasts">
                <a className={`link fs-p3 title${collectionsPage === "podcasts" && " actual"}`}>Podcasts</a>
              </Link>
            </li>
            <li>
              <Link href="artists">
                <a className={`link fs-p3 title${collectionsPage === "artists" && " actual"}`}>Artistas</a>
              </Link>
            </li>
            <li>
              <Link href="albums">
                <a className={`link fs-p3 title${collectionsPage === "albums" && " actual"}`}>Albumes</a>
              </Link>
            </li>
          </ul>
          <span className="void"></span>
        </> : null
      }

      <div className="user-container">
        <button onClick={toggleMenu} ref={userButton} className="user-btn" id="user-btn">
          <div className="img-container"><Icon name="user" stroke="#fff"/></div>
          <span className="name">Usuario</span>
          <div className="dd-menu-icon"><Icon name="play" fill="#fff"/></div>
        </button>
        <ul ref={userMenu} className="dd-menu" id="dd-menu">
          <li className="profile"><a className="link" href="">Perfil</a></li>
          <li className="preferences"><a className="link" href="">Preferencias</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header