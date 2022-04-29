import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_names"

const Track = () => {
  return (
    <RootContainer pageClassName="track" headerName={NORMAL_HEADER}>
      <main>
        dynamic route
      </main>
    </RootContainer>
  )
}


export default Track