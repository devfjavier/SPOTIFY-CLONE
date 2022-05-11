import RootContainer from '../components/fragments/RootContainer'
import { NORMAL_HEADER } from '../consts/header_names'
import { INDEX_PANEL } from '../consts/panel_page_names'
import Greeting from '../components/page-sections/home/Greeting'
import RecentlyPlayed from '../components/page-sections/home/RecentlyPlayed'

const Home = () => {
  return (
    <RootContainer headerName={NORMAL_HEADER} panelName={INDEX_PANEL}>

      <main>
        <Greeting/>
        <RecentlyPlayed/>
      </main>
    </RootContainer>
  )
}

export default Home