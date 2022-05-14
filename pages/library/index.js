import RootContainer from "../../components/fragments/RootContainer"
import PageLibrary_uiM from "../../components/page-ui-m/library"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"

// page only for mobile

const Library = () => {
  return <RootContainer panelLink={LIBRARY_PANEL}>
    {process.env.uiM && <PageLibrary_uiM />}
  </RootContainer>
}

export default Library