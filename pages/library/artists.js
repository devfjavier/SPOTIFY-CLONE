import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ARTISTS_COLLECTION } from "../../consts/collection_page_names"
import LibraryLinks from "../../components/core-sections/header/LibraryLinks"
import PageArtists_uiDesk from "../../components/page-ui-desk/library/subpages/artists"
import PageArtists_uiM from "../../components/page-ui-m/library/subpages/artists"

//page for mobile and desktop

const Artists = () => {
  return (
    <RootContainer panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ARTISTS_COLLECTION}>
      <header className="sub-header">
        <LibraryLinks pageName={ARTISTS_COLLECTION} />
      </header>
      {process.env.uiM ? <PageArtists_uiM /> : <PageArtists_uiDesk />}
    </RootContainer>
  )
}

export default Artists