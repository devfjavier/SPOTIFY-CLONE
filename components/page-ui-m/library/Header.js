import classes from "../../../styles/fragments/library-header-link.module.scss"
import NextLink from "next/link"
import Icon from "../../icon-svg"

const Header = ({ activeLink = "", pageLibrary = false }) => {
  const setLinkClass = (link) => activeLink === link ? true : false

  return (
    <header>
      <div className="items-row">
        <h2 className="h-color-light h-fs-t2">Tu libreria</h2>
        <button className="h-unset"><Icon name="search" fill="#fff" size="1.27rem" /></button>
        <button className="h-unset"><Icon name="plus" fill="#fff" size="1.27rem" /></button>
      </div>
      <div className="h-color-light items-row">
        <Link href="/playlists" show={pageLibrary} active={setLinkClass("playlists")}>
          Listas
        </Link>
        <Link href="/podcasts" show={pageLibrary} active={setLinkClass("podcasts")}>
          Podcasts
        </Link>
        <Link href="/artists" show={pageLibrary} active={setLinkClass("artists")}>
          Artistas
        </Link>
        <Link href="/albums" show={pageLibrary} active={setLinkClass("albums")}>
          Albumes
        </Link>
      </div>
    </header>
  )
}

function Link({ href, show = false, active = false, children }) {
  const classActive = active ? ` ${classes.activeLink}` : ""

  if (!show && !active) {
    return null
  }

  return (
    <NextLink href={`/library${active ? "" : href}`}>
      <a className={"h-unset " + classes.linkContainer}>
        {active && <Icon className={"h-b-radius-50 " + classes.icon} name="x" fill="#fff" size="1.9rem" />}
        <span className={`${classes.text} ${classActive}`}>
          {children}
        </span>
      </a>
    </NextLink>
  )
}


export default Header