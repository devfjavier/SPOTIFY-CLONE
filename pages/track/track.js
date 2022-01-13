import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_types"
import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/Panel"

const Track = () => {
  return (
    <RootContainer pageClassName="track">
      <Panel/>
      <Header type={NORMAL_HEADER}/>
      <main className="MAIN">

      </main>
    </RootContainer>
  )
}


export default Track