import RootContainer from "../../components/fragments/RootContainer"
import PagePodcasts_uiDesk from "../../components/page-ui-desk/library/subpages/podcasts"
import PagePodcasts_uiM from "../../components/page-ui-m/library/subpages/podcasts"
import { PODCASTS_LIBRARY } from "../../consts/library_page_names"
import { LIBRARY_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"

//page for mobile and desktop

const Posdcasts = () => {
  return (
    <RootContainer panelLink={LIBRARY_PANEL} headerName={LIBRARY_HEADER} libraryPageName={PODCASTS_LIBRARY}>
      {process.env.uiM ? <PagePodcasts_uiM /> : <PagePodcasts_uiDesk />}
    </RootContainer>
  )
}

export default Posdcasts