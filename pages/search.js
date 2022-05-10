import RootContainer from "../components/fragments/RootContainer"
import { SEARCH_PANEL } from "../consts/panel_page_names"
import { SEARCH_HEADER } from "../consts/header_names"

const Search = () => {
  return (
    <RootContainer panelName={SEARCH_PANEL} headerName={SEARCH_HEADER}>

      <main>
        <section className="section recent-searches">
          <h2 className="h-color-light">Busquedas recientes</h2>
        </section>

        <section className="section most-listened-g">
          <h2 className="h-color-light">Los generos que mas escuchaste</h2>
        </section>
      </main>
    </RootContainer>
  )
}

export default Search