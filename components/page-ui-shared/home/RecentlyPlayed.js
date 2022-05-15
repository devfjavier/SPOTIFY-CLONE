import ItemArtistSong from "../../fragments/ItemArtistSong"

const RecentlyPlayed = () => {
  return (
    <section>
      <h2 className="h-color-light h-fs-t3">Escuchado recientemente</h2>
      <div className={process.env.uiM ? "items-row" : "items-container"}>
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong />
        <ItemArtistSong artist />
        <ItemArtistSong />
        <ItemArtistSong artist />
      </div>
    </section>
  )
}

export default RecentlyPlayed