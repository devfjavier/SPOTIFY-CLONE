import PageAlbums_uiDesk from "../../components/page-ui-desk/library/subpages/albums"
import PageAlbums_uiM from "../../components/page-ui-m/library/subpages/albums"

/**
 * page for mobile and desktop
 * @returns JSX.Element - page
*/

const Albums = () => {
  return <>
    {process.env.uiM ? <PageAlbums_uiM /> : <PageAlbums_uiDesk />}
  </>
}

export default Albums