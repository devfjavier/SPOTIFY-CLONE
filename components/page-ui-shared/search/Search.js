import FieldSearch from "../../core-sections/header/FieldSearch"
import ItemArtistSong from "../../fragments/ItemArtistSong"

const Search = () => {
  return (
    <section>

      {process.env.uiM ? <>
        <h2 className="h-color-light h-fs-t2">Buscar</h2>
        <FieldSearch skeletonLink />
        <h3 className="h-color-light h-fs-t4">Buscar todo</h3>
      </> : <h2 className="h-color-light h-fs-t3">Buscar todo</h2>
      }

      <div className="items-container">
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
      </div>
    </section>
  )
}

export default Search