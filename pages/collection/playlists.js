import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import ItemArtistSong from "../../components/fragments/ItemArtistSong"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { PLAYLISTS_COLLECTION } from "../../consts/collection_page_names"

const Playlists = () => {
  return (
    <RootContainer pageClassName="user-playlists" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={PLAYLISTS_COLLECTION}>
      <main>
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