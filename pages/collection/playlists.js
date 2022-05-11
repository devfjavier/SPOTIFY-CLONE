import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { PLAYLISTS_COLLECTION } from "../../consts/collection_page_names"
import ItemArtistSong from "../../components/fragments/ItemArtistSong"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"

const Playlists = () => {
  return (
    <RootContainer panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={PLAYLISTS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={PLAYLISTS_COLLECTION}/>
        </header>
        <section className="section playlists">
          <h1 className="h-color-light">PLAYLIST</h1>
          <div className="items-container">
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