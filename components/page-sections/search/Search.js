import FieldSearch from "../../core-sections/header/FieldSearch"
import ItemArtistSong from "../../fragments/ItemArtistSong"

const Search = () => {
  return (
    <section>
      <h2 className="h-color-light">Buscar</h2>
      <div className="sub-header"><FieldSearch/></div>
      <h3 className="h-color-light">Buscar todo</h3>
      <div className="items-container">
        <ItemArtistSong/>
        <ItemArtistSong/>
        <ItemArtistSong/>
        <ItemArtistSong/>
        <ItemArtistSong/>
        <ItemArtistSong/>
      </div>
    </section>
  )
}

export default Search