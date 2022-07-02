import classes from "./library-header-link.module.scss"
import NextLink from "next/link"
import { useRouter } from "next/router"
import Icon from "../../icon-svg"

const Header_uiM = () => {
  return (
    <header className={classes.header}>
      <div className="items-row">
        <h2 className="h-color-light h-fs-t2">Tu libreria</h2>
        <button className="h-unset"><Icon name="search" fill="#fff" size="1.27rem" /></button>
        <button className="h-unset"><Icon name="plus" fill="#fff" size="1.27rem" /></button>
      </div>
      <div className={"h-color-light " + classes.container}>
        <Link href="/library/playlists">
          Listas
        </Link>
        <Link href="/library/podcasts">
          Podcasts
        </Link>
        <Link href="/library/artists">
          Artistas
        </Link>
        <Link href="/library/albums">
          Albumes
        </Link>
      </div>
    </header>
  )
}

function Link({ href, children }) {
  const { asPath, basePath } = useRouter()

  const isCurrentPath = href === asPath
  const isParentPath = asPath === basePath + "/library"

  const activeClass = isCurrentPath ? ` ${classes.isActive}` : ""
  const hiddenClass = !isParentPath && !isCurrentPath ? ` ${classes.isHidden}` : ""

  return (
    <NextLink href={isCurrentPath ? "/library" : href}>
      <a className={"h-unset " + classes.link + hiddenClass}>
        {isCurrentPath && <Icon className={"h-b-radius-50 " + classes.icon} name="x" fill="#fff" size="1.9rem" />}
        <span className={`${classes.text}${activeClass}`}>
          {children}
        </span>
      </a>
    </NextLink>
  )
}

export default Header_uiM