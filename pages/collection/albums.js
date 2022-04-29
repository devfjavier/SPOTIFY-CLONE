import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ALBUMS_COLLECTION } from "../../consts/collection_page_names"

const Albums = () => {
  return (
    <RootContainer className="user-albums content" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ALBUMS_COLLECTION}>

      <main>
        <section className="section albums">

        </section>
      </main>
    </RootContainer>
  )
}

export default Albums