import PageHome_uiM from '../components/page-ui-m/home'
import PageHome_uiDesk from '../components/page-ui-desk/home'

/**
 * page for mobile and desktop
 * @returns JSX.Element - page
*/

const Home = () => {
  return <>
    {process.env.uiM ? <PageHome_uiM /> : <PageHome_uiDesk />}
  </>
}

export default Home