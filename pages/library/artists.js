import PageArtists_uiDesk from "../../components/page-ui-desk/library/subpages/artists"
import PageArtists_uiM from "../../components/page-ui-m/library/subpages/artists"

/**
 * page for mobile and desktop
 * @returns JSX.Element - page
*/

const Artists = () => {
  return <>
    {process.env.uiM ? <PageArtists_uiM /> : <PageArtists_uiDesk />}
  </>
}

export default Artists