import RootContainer from '../components/fragments/RootContainer'
import { NORMAL_HEADER } from '../consts/header_names'
import { INDEX_PANEL } from '../consts/panel_page_names'
import PageHome_uiM from '../components/page-ui-m/home'
import PageHome_uiDesk from '../components/page-ui-desk/home'

//page for mobile and desktop

const Home = () => {
  return (
    <RootContainer headerName={NORMAL_HEADER} panelLink={INDEX_PANEL}>
      {process.env.uiM ? <PageHome_uiM /> : <PageHome_uiDesk />}
    </RootContainer>
  )
}

export default Home