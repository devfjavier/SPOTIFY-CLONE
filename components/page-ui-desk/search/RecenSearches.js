import ItemArtistSong from "../../fragments/ItemArtistSong"

const RecentSearches = () => {
  return (
    <section>
      <h2 className="h-color-light">Busquedas recientes</h2>
      <div className="items-container">
      <ItemArtistSong/>
      </div>
    </section>
  )
}

export default RecentSearches