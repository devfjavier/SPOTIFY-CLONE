import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_names"
import { TRACKS_PANEL } from "../../consts/panel_page_names"

const Tracks = () => {
  return (
    <RootContainer pageClassName="user-tracks" panelName={TRACKS_PANEL} headerName={NORMAL_HEADER}>
      <main>
        <section className="section tracks">
          <h1 className="color-title h1">Tus me gusta</h1>
        </section>
      </main>
    </RootContainer>
  )
}

export default Tracks