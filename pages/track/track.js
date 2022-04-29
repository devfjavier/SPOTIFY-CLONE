import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_names"
import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/panel"

const Track = () => {
  return (
    <RootContainer pageClassName="track">
      <Panel/>
      <Header headerName={NORMAL_HEADER}/>
      <main className="MAIN">

      </main>
    </RootContainer>
  )
}


export default Track