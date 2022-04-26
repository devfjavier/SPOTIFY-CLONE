import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_types"
import Panel from "../../components/core-sections/Panel"
import Header from "../../components/core-sections/Header"
import ItemArtistSong from "../../components/fragments/ItemArtistSong"

const Playlists = () => {
  return (
    <RootContainer pageClassName="user-playlists">
      <Panel panelName="library"/>
      <Header type={COLLECTION_HEADER} collectionsPage="playlist"/>
      <main className="MAIN">
        <section className="section playlists">
          <h1 className="color-title">PLAYLIST</h1>
          <div className="container">
            <ItemArtistSong/>
            <ItemArtistSong/>
            <ItemArtistSong/>
            <ItemArtistSong/>
          </div>
        </section>
      </main>
    </RootContainer>
  )
}

export default Playlists