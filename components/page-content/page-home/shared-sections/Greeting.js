import ItemArtistSong from "../../../fragments/ItemArtistSong"

const Greeting = () => {
  return (
    <section>
      <div>
        <h2 className="h-color-light">Greeting</h2>
        {process.env.uiM && <SideButtons />}
      </div>
      <div className="items-container">
        <ItemArtistSong compact />
        <ItemArtistSong compact />
        <ItemArtistSong compact />
        <ItemArtistSong compact />
      </div>
    </section>
  )
}

function SideButtons() {
  return (
    <div className="h-color-gray">
      <a>icon</a>
      <a>icon</a>
      <a>icon</a>
    </div>
  )
}

export default Greeting