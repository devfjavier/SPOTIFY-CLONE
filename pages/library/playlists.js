import RootContainer from "../../components/fragments/RootContainer"
import { LIBRARY_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { PLAYLISTS_LIBRARY } from "../../consts/library_page_names"
import PagePlaylists_uiDesk from "../../components/page-ui-desk/library/subpages/playlists"
import PagePlaylists_uiM from "../../components/page-ui-m/library/subpages/playlists"

//page for mobile and desktop

const Playlists = () => {
  return (
    <RootContainer panelLink={LIBRARY_PANEL} headerName={LIBRARY_HEADER} libraryPageName={PLAYLISTS_LIBRARY}>
      {process.env.uiM ? <PagePlaylists_uiM /> : <PagePlaylists_uiDesk />}
    </RootContainer>
  )
}

export default Playlists