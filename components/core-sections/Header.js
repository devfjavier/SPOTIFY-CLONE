import Link from "next/link"
import { COLLECTION_HEADER, NORMAL_HEADER } from "../../consts/header_types"
import Icon from "../icon-svg"
import UserMenu from "../fragments/UserMenu"

const Header = ({type, collectionsPage}) => {
  return (
    <header className={`HEADER${type === NORMAL_HEADER ? " normal": ""}`}>
      <div className="page-navigation">
        <button className="button back">
          <Icon fill="#fff" stroke="#fff" name="chevronLeft"/>
        </button>
        <button className="button fordward">
          <Icon fill="#fff" stroke="#fff" name="chevronRight"/>
        </button>
      </div>

      {
        type === NORMAL_HEADER ? <>
          <span className="void fs-p3">H</span>
          <button className="premium" title="Actualizar a Premium">PREMIUM</button>
        </> : null
      }
      {
        type === COLLECTION_HEADER ? <>
          <ul className="collection-menu">
            <li>
              <Link href="/collection/playlists">
                <a className={`link fs-p3 title${collectionsPage === "playlist" && " actual"}`}>Listas</a>
              </Link>
            </li>
            <li>
              <Link href="/collection/podcasts">
                <a className={`link fs-p3 title${collectionsPage === "podcasts" && " actual"}`}>Podcasts</a>
              </Link>
            </li>
            <li>
              <Link href="/collection/artists">
                <a className={`link fs-p3 title${collectionsPage === "artists" && " actual"}`}>Artistas</a>
              </Link>
            </li>
            <li>
              <Link href="/collection/albums">
                <a className={`link fs-p3 title${collectionsPage === "albums" && " actual"}`}>Albumes</a>
              </Link>
            </li>
          </ul>
          <span className="void"></span>
        </> : null
      }

      <UserMenu/>
    </header>
  )
}

export default Header