import Link from "next/link"
import Icon from "../fragments/Icon"

const Panel = () => {
  return (
    <nav className="PANEL">
      <ul className="menu">
        <li>
          <Link href="/">
            <a className="link text fs-p4">
              <Icon className="panel-icon" name="index" fill="#fff"/>
              <span>Inicio</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/search">
            <a className="link text fs-p4">
              <Icon className="panel-icon" name="search" stroke="#fff"/>
              <span>Buscar</span>
            </a>
          </Link>
        </li>

        <li className="menu-link">
          <Link href="/collection/playlists">
            <a className="link text fs-p4">
              <Icon className="panel-icon" name="library" stroke="#fff"/>
              <span>Tu Biblioteca</span>
            </a>
          </Link>
        </li>

        <li className="footer-menu-link">
          <Link href="/collection/tracks">
            <a className="link text fs-p4">
              <Icon className="panel-icon" name="tracks2" fill="#fff"/>
              <span>Favoritos</span>
            </a>
          </Link>
        </li>

        <li className="footer-menu-link">
          <a className="link text fs-p4" href="#">
            <Icon className="panel-icon" name="spotify" fill="#fff"/>
              <span>Premium</span>
          </a>
        </li>
      </ul>
    
      <div className="buttons">
        <button className="link create-playlist text fs-p4">
          <Icon className="panel-icon" name="createPlaylist"/>
          <span>Crear playlist</span>
        </button>
        <Link href="/collection/tracks">
          <a className="link text fs-p4">
            <Icon className="panel-icon" name="tracks"/>
            <span>Tus me gusta</span>
          </a>
        </Link>
      </div>
      
      <hr className="hr"/>
      
      <ul className="playlists-shortcut">
        <li className="pl">
          <Link href="/playlist/playlist">
            <a className="text">LISTA</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Panel