import RootContainer from "../../components/fragments/RootContainer"
import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/Panel"
import { COLLECTION_HEADER } from "../../consts/header_types"

const Artists = () => {
  return (
    <RootContainer pageClassName="user-artists">
      <Panel panelName="library"/>

      <Header type={COLLECTION_HEADER} collectionsPage="artists"/>

      <main className="MAIN">
        <section className="section artists">

        </section>
      </main>
    </RootContainer>
  )
}

export default Artists