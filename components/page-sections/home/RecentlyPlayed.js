import ItemArtistSong from "../../fragments/ItemArtistSong"

const RecentlyPlayed = () => {
  return (
    <section>
      <h2 className="h-color-light">Escuchado recientemente</h2>
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

export default RecentlyPlayed