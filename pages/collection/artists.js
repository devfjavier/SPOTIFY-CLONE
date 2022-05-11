import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ARTISTS_COLLECTION } from "../../consts/collection_page_names"
import CollectionLinks from "../../components/core-sections/header/CollectionLinks"

const Artists = () => {
  return (
    <RootContainer panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ARTISTS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={ARTISTS_COLLECTION} />
        </header>
      </main>
    </RootContainer>
  )
}

export default Artists