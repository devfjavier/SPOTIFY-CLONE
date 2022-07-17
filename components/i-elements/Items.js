import ItemSongArCompact from "./item-song-ar-compact"
import ItemSongArCard from "./item-song-ar-card"

const Items = ({ artist, compact, row, grid }) => {
  if (compact) {
    return <div className="items-compact">
      <ItemSongArCompact />
      <ItemSongArCompact />
      <ItemSongArCompact />
      <ItemSongArCompact />
    </div>
  }

  return <>
    <div className={row ? "items-row" : grid ? "items-container" : ""}>
      {[1, 2, 3, 4, 5, 6].map(id => (
        <ItemSongArCard key={id} artist={artist} />
      ))}
    </div>
  </>
}

export default Items