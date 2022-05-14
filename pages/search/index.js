import RootContainer from "../../components/fragments/RootContainer"
import { SEARCH_PANEL } from "../../consts/panel_page_names"
import { SEARCH_HEADER } from "../../consts/header_names"
import PageSearch_uiM from "../../components/page-ui-m/search"
import PageSearch_uiDesk from "../../components/page-ui-desk/search"

//page for mobile and desktop

const Search = () => {
  return (
    <RootContainer panelLink={SEARCH_PANEL} headerName={SEARCH_HEADER}>
      {process.env.uiM ? <PageSearch_uiM /> : <PageSearch_uiDesk />}
    </RootContainer>
  )
}

export default Search