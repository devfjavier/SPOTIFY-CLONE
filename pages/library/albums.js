import RootContainer from "../../components/fragments/RootContainer"
import { LIBRARY_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"
import { ALBUMS_LIBRARY } from "../../consts/library_page_names"
import PageAlbums_uiDesk from "../../components/page-ui-desk/library/subpages/albums"
import PageAlbums_uiM from "../../components/page-ui-m/library/subpages/albums"

//page for mobile and desktop

const Albums = () => {
  return (
    <RootContainer panelLink={LIBRARY_PANEL} headerName={LIBRARY_HEADER} libraryPageName={ALBUMS_LIBRARY}>
      {process.env.uiM ? <PageAlbums_uiM /> : <PageAlbums_uiDesk />}
    </RootContainer>
  )
}

export default Albums