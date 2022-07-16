import ItemArtistSong from "./ItemArtistSong"

const Items = ({ compact, row, grid }) => {
  if (compact) {
    return <div className="items-compact">
      <ItemArtistSong compact={compact} />
      <ItemArtistSong compact={compact} />
      <ItemArtistSong compact={compact} />
      <ItemArtistSong compact={compact} />
    </div>
  }

  return <>
    <div className={row ? "items-row" : grid ? "items-container" : ""}>
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
  </>
}

export default Items