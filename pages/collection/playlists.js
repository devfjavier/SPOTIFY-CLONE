import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { PLAYLISTS_COLLECTION } from "../../consts/collection_page_names"
import PagePlaylists_uiDesk from "../../components/page-ui-desk/library/subpages/playlists"
import PagePlaylists_uiM from "../../components/page-ui-m/library/subpages/playlists"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"

//page for mobile and desktop

const Playlists = () => {
  return (
    <RootContainer panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={PLAYLISTS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={PLAYLISTS_COLLECTION} />
        </header>
        {process.env.uiM ? <PagePlaylists_uiM /> : <PagePlaylists_uiDesk />}
      </main>
    </RootContainer>
  )
}

export default Playlists