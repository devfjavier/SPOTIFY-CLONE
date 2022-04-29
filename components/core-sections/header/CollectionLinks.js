import NextLink from "next/link"
import { ALBUMS_COLLECTION, ARTISTS_COLLECTION, PLAYLISTS_COLLECTION, PODCASTS_COLLECTION } from "../../../consts/collection_page_names"

const CollectionLinks = ({ pageName }) => {
  const setLinkClass = (page) => pageName === page ? " actual" : ""

  const Link = ({ href, className, children }) => (
    <li>
      <NextLink href={href}>
        <a className={`link fs-p3 color-title${className}`}>
          {children}
        </a>
      </NextLink>
    </li>
  )

  return <>
    <ul className="collection-menu">
      <Link href="/collection/playlists" className={setLinkClass(PLAYLISTS_COLLECTION)}>Listas</Link>
      <Link href="/collection/podcasts" className={setLinkClass(PODCASTS_COLLECTION)}>Podcasts</Link>
      <Link href="/collection/artists" className={setLinkClass(ARTISTS_COLLECTION)}>Artistas</Link>
      <Link href="/collection/albums" className={setLinkClass(ALBUMS_COLLECTION)}>Albumes</Link>
    </ul>
    <span className="void"></span>
  </>
}

export default CollectionLinks