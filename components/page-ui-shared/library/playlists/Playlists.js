import ItemArtistSong from "../../../fragments/ItemArtistSong"

const Playlists = () => {
  return (
    <section className="section playlists">
      <h1 className="h-color-light">PLAYLIST</h1>
      <div className="items-container">
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
      </div>
    </section>
  )

}

export default Playlists