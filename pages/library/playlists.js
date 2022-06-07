import PagePlaylists_uiDesk from "../../components/page-ui-desk/library/subpages/playlists"
import PagePlaylists_uiM from "../../components/page-ui-m/library/subpages/playlists"

/**
 * page for mobile and desktop
 * @returns JSX.Element - page
*/

const Playlists = () => {
  return <>
    {process.env.uiM ? <PagePlaylists_uiM /> : <PagePlaylists_uiDesk />}
  </>
}

export default Playlists