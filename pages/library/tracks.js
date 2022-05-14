import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_names"
import { TRACKS_PANEL } from "../../consts/panel_page_names"

const Tracks = () => {
  return (
    <RootContainer panelName={TRACKS_PANEL} headerName={NORMAL_HEADER}>
      <section className="section tracks">
        <h1 className="h-color-light h1">Tus me gusta</h1>
      </section>
    </RootContainer>
  )
}

export default Tracks