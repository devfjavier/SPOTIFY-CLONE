import RootContainer from "../../components/fragments/RootContainer"
import { PODCASTS_COLLECTION } from "../../consts/collection_page_names"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"

const Posdcasts = () => {
  return (
    <RootContainer className="user-podcasts content" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={PODCASTS_COLLECTION}>

      <main>
          <section className="section podcasts">
              <h1 className="color-title fs-h2">Sigue tu primer podcasts</h1>
              <p className="color-title">sigue podcasts que te gusten pulsando el boton Seguir</p>
              <button>Buscar Podcasts</button>
          </section>
      </main>
    </RootContainer>
  )
}

export default Posdcasts