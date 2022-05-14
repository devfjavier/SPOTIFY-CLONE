import NextLink from "next/link"
import classes from "../../../styles/core-sections/header/collection-links.module.scss"
import { ALBUMS_LIBRARY, ARTISTS_LIBRARY, PLAYLISTS_LIBRARY, PODCASTS_LIBRARY } from "../../../consts/library_page_names"

const LibraryLinks = ({ pageName }) => {
  const setLinkClass = (page) => pageName === page ? ` ${classes.actual}` : ""

  const Link = ({ href, className, children }) => (
    <li>
      <NextLink href={href}>
        <a className={`h-fs-st3 h-color-light ${classes.link + className}`}>
          {children}
        </a>
      </NextLink>
    </li>
  )

  return (
    <ul className={classes.collection}>
      <Link href="/library/playlists" className={setLinkClass(PLAYLISTS_LIBRARY)}>Listas</Link>
      <Link href="/library/podcasts" className={setLinkClass(PODCASTS_LIBRARY)}>Podcasts</Link>
      <Link href="/library/artists" className={setLinkClass(ARTISTS_LIBRARY)}>Artistas</Link>
      <Link href="/library/albums" className={setLinkClass(ALBUMS_LIBRARY)}>Albumes</Link>
    </ul>
  )
}

export default LibraryLinks