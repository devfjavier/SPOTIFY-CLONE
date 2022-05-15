import RootContainer from "../../components/fragments/RootContainer"
import { LIBRARY_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ARTISTS_LIBRARY } from "../../consts/library_page_names"
import PageArtists_uiDesk from "../../components/page-ui-desk/library/subpages/artists"
import PageArtists_uiM from "../../components/page-ui-m/library/subpages/artists"

//page for mobile and desktop

const Artists = () => {
  return (
    <RootContainer panelLink={LIBRARY_PANEL} headerName={LIBRARY_HEADER} libraryPageName={ARTISTS_LIBRARY}>
      {process.env.uiM ? <PageArtists_uiM /> : <PageArtists_uiDesk />}
    </RootContainer>
  )
}

export default Artists