import RootContainer from "../../components/fragments/RootContainer"
import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/Panel"
import { COLLECTION_HEADER } from "../../consts/header_types"

const Albums = () => {
  return (
    <RootContainer className="user-albums content">
      <Panel panelName="library"/>
      <Header type={COLLECTION_HEADER} collectionsPage="albums"/>

      <main className="MAIN">
        <section className="section albums">

        </section>
      </main>
    </RootContainer>
  )
}

export default Albums