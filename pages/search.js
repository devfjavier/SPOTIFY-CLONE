import RootContainer from "../components/fragments/RootContainer"
import { SEARCH_PANEL } from "../consts/panel_page_names"
import { SEARCH_HEADER } from "../consts/header_names"
import SearchSongs from "../components/page-sections/search/Search"

const contaierSearch = () => {
  return (
    <RootContainer panelName={SEARCH_PANEL} headerName={SEARCH_HEADER}>

      <main>
        <SearchSongs/>
      </main>
    </RootContainer>
  )
}

export default contaierSearch