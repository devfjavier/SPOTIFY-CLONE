import RootContainer from "../components/fragments/RootContainer"
import { SEARCH_PANEL } from "../consts/panel_page_names"
import { SEARCH_HEADER } from "../consts/header_names"
import PageSearch_uiM from "../components/page-content/page-search/ui-m"
import PageSearch_uiDesk from "../components/page-content/page-search/ui-desk"

//page for mobile and desktop

const Search = () => {
  return (
    <RootContainer panelName={SEARCH_PANEL} headerName={SEARCH_HEADER}>

      <main>
        {process.env.uiM ? <PageSearch_uiM/> : <PageSearch_uiDesk/>}
      </main>
    </RootContainer>
  )
}

export default Search