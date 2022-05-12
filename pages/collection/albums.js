import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ALBUMS_COLLECTION } from "../../consts/collection_page_names"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"
import PageAlbums_uiM from "../../components/page-content/page-library/subpages/page-albums/ui-m"
import PageAlbums_uiDesk from "../../components/page-content/page-library/subpages/page-albums/ui-desk"

//page for mobile and desktop

const Albums = () => {
  return (
    <RootContainer className="user-albums content" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ALBUMS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={ALBUMS_COLLECTION} />
        </header>
        {process.env.uiM ? <PageAlbums_uiM /> : <PageAlbums_uiDesk />}
      </main>
    </RootContainer>
  )
}

export default Albums