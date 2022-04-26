import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/Panel"
import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_types"

const Tracks = () => {
  return (
    <RootContainer pageClassName="user-tracks">
      <Panel panelName="tracks"/>
      <Header type={NORMAL_HEADER}/>

      <main className="MAIN">
        <section className="section tracks">
          <h1 className="color-title h1">Tus me gusta</h1>
        </section>
      </main>
    </RootContainer>
  )
}

export default Tracks