import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { PLAYLISTS_COLLECTION } from "../../consts/collection_page_names"
import PagePlaylists_uiDesk from "../../components/page-content/page-library/subpages/page-playlists/ui-desk"
import PagePlaylists_uiM from "../../components/page-content/page-library/subpages/page-playlists/ui-m"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"

//page for mobile and desktop

const Playlists = () => {
  return (
    <RootContainer panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={PLAYLISTS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={LIBRARY_PANEL} />
        </header>
        {process.env.uiM ? <PagePlaylists_uiM /> : <PagePlaylists_uiDesk />}
      </main>
    </RootContainer>
  )
}

export default Playlists