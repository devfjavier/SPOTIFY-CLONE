import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ARTISTS_COLLECTION } from "../../consts/collection_page_names"

const Artists = () => {
  return (
    <RootContainer pageClassName="user-artists" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={ARTISTS_COLLECTION}>

      <main className="MAIN">
        <section className="section artists">

        </section>
      </main>
    </RootContainer>
  )
}

export default Artists