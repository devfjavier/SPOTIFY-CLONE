import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ALBUMS_COLLECTION } from "../../consts/collection_page_names"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"

const Albums = () => {
  return (
    <RootContainer className="user-albums content" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ALBUMS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={ALBUMS_COLLECTION} />
        </header>
      </main>
    </RootContainer>
  )
}

export default Albums