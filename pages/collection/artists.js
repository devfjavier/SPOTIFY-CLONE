import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ARTISTS_COLLECTION } from "../../consts/collection_page_names"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"
import PageArtists_uiM from "../../components/page-content/page-library/subpages/page-artists/ui-m"
import PageArtists_uiDesk from "../../components/page-content/page-library/subpages/page-artists/ui-desk"

//page for mobile and desktop

const Artists = () => {
  return (
    <RootContainer panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ARTISTS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={ARTISTS_COLLECTION} />
        </header>
        {process.env.uiM ? <PageArtists_uiM/> : <PageArtists_uiDesk/>}
      </main>
    </RootContainer>
  )
}

export default Artists