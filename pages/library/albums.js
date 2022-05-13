import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ALBUMS_COLLECTION } from "../../consts/collection_page_names"
import LibraryLinks from "../../components/core-sections/header/LibraryLinks"
import PageAlbums_uiDesk from "../../components/page-ui-desk/library/subpages/albums"
import PageAlbums_uiM from "../../components/page-ui-m/library/subpages/albums"

//page for mobile and desktop

const Albums = () => {
  return (
    <RootContainer className="user-albums content" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ALBUMS_COLLECTION}>
      <main>
        <header className="sub-header">
          <LibraryLinks pageName={ALBUMS_COLLECTION} />
        </header>
        {process.env.uiM ? <PageAlbums_uiM /> : <PageAlbums_uiDesk />}
      </main>
    </RootContainer>
  )
}

export default Albums