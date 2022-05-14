import RootContainer from "../../components/fragments/RootContainer"
import PageQuery_uiM from "../../components/page-ui-m/search/subpages/query"
import { SEARCH_PANEL } from "../../consts/panel_page_names"

//page only for mobile

const Query = () => {
  return (
    <RootContainer panelName={SEARCH_PANEL}>
      <main>
        {process.env.uiM && <PageQuery_uiM />}
      </main>
    </RootContainer>
  )
}

export default Query