import NextLink from "next/link"
import classes from "../../../styles/core-sections/header/collection-links.module.scss"
import { ALBUMS_COLLECTION, ARTISTS_COLLECTION, PLAYLISTS_COLLECTION, PODCASTS_COLLECTION } from "../../../consts/collection_page_names"

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
      <Link href="/library/playlists" className={setLinkClass(PLAYLISTS_COLLECTION)}>Listas</Link>
      <Link href="/library/podcasts" className={setLinkClass(PODCASTS_COLLECTION)}>Podcasts</Link>
      <Link href="/library/artists" className={setLinkClass(ARTISTS_COLLECTION)}>Artistas</Link>
      <Link href="/library/albums" className={setLinkClass(ALBUMS_COLLECTION)}>Albumes</Link>
    </ul>
  )
}

export default LibraryLinks