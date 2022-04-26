import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/Panel"
import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_types"

const Posdcasts = () => {
  return (
    <RootContainer className="user-podcasts content">
      <Panel panelName="library"/>

      <Header type={COLLECTION_HEADER} collectionsPage="podcasts"/>

      <main className="MAIN">
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