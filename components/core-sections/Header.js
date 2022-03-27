import Link from "next/link"
import { COLLECTION_HEADER, NORMAL_HEADER } from "../../consts/header_types"
import UserMenu from "../fragments/UserMenu"

const Header = ({type, collectionsPage}) => {
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

      <UserMenu/>
    </header>
  )
}

export default Header