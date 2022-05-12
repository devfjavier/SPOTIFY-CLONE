import RootContainer from '../components/fragments/RootContainer'
import { NORMAL_HEADER } from '../consts/header_names'
import { INDEX_PANEL } from '../consts/panel_page_names'
import PageHome_uiM from '../components/page-content/page-home/ui-m'
import PageHome_uiDesk from '../components/page-content/page-home/ui-desk'

//page for mobile and desktop

const Home = () => {
  return (
    <RootContainer headerName={NORMAL_HEADER} panelName={INDEX_PANEL}>

      <main>
        {process.env.uiM ? <PageHome_uiM /> : <PageHome_uiDesk />}
      </main>
    </RootContainer>
  )
}

export default Home