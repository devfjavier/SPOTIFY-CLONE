import NextLink from "next/link"
import { useRouter } from "next/router"
import classes from "./collection-links.module.scss"

const LibraryLinks = () => {
  const path = useRouter().asPath

  const activeClass = (href) => href === path ? ` ${classes.actual}` : ""

  const Link = ({ href, children }) => (
    <li>
      <NextLink href={href}>
        <a className={`h-fs-st3 h-color-light ${classes.link}${activeClass(href)}`}>
          {children}
        </a>
      </NextLink>
    </li>
  )
  
  return (
    <ul className={classes.collection}>
      <Link href="/library/playlists">Listas</Link>
      <Link href="/library/podcasts">Podcasts</Link>
      <Link href="/library/artists">Artistas</Link>
      <Link href="/library/albums">Albumes</Link>
    </ul>
  )
}

export default LibraryLinks