import FieldSearch from "../../../core-sections/header/FieldSearch"
import ItemArtistSong from "../../../fragments/ItemArtistSong"

const Search = () => {
  return (
    <section>

      {process.env.uiM ? <>
        <h2 className="h-color-light">Buscar</h2>
        <FieldSearch />
        <h3 className="h-color-light">Buscar todo</h3>
      </> : <h2 className="h-color-light">Buscar todo</h2>
      }

      <div className="items-container">
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