import PagePodcasts_uiDesk from "../../components/page-ui-desk/library/subpages/podcasts"
import PagePodcasts_uiM from "../../components/page-ui-m/library/subpages/podcasts"

/**
 * page for mobile and desktop
 * @returns JSX.Element - page
*/

const Posdcasts = () => {
  return <>
    {process.env.uiM ? <PagePodcasts_uiM /> : <PagePodcasts_uiDesk />}
  </>
}

export default Posdcasts