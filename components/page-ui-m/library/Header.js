import classes from "../../../styles/fragments/library-header-link.module.scss"
import NextLink from "next/link"
import Icon from "../../icon-svg"
import { useRouter } from "next/router"

const Header = ({ pageLibrary = false }) => {

  return (
    <header>
      <div className="items-row">
        <h2 className="h-color-light h-fs-t2">Tu libreria</h2>
        <button className="h-unset"><Icon name="search" fill="#fff" size="1.27rem" /></button>
        <button className="h-unset"><Icon name="plus" fill="#fff" size="1.27rem" /></button>
      </div>
      <div className="h-color-light items-row">
        <Link href="/library/playlists" show={pageLibrary}>
          Listas
        </Link>
        <Link href="/library/podcasts" show={pageLibrary}>
          Podcasts
        </Link>
        <Link href="/library/artists" show={pageLibrary}>
          Artistas
        </Link>
        <Link href="/library/albums" show={pageLibrary}>
          Albumes
        </Link>
      </div>
    </header>
  )
}

function Link({ href, show = false, children }) {
  const isActive = href === useRouter().asPath

  const activeClass = isActive ? ` ${classes.activeLink}` : ""

  if (!show && !isActive) {
    return null
  }

  return (
    <NextLink href={isActive ? "/library" : href}>
      <a className={"h-unset " + classes.linkContainer}>
        {isActive && <Icon className={"h-b-radius-50 " + classes.icon} name="x" fill="#fff" size="1.9rem" />}
        <span className={`${classes.text}${activeClass}`}>
          {children}
        </span>
      </a>
    </NextLink>
  )
}

export default Header