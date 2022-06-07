import PageSearch_uiM from "../../components/page-ui-m/search"
import PageSearch_uiDesk from "../../components/page-ui-desk/search"

/**
 * page for mobile and desktop
 * @returns JSX.Element - page
*/

const Search = () => {
  return <>
    {process.env.uiM ? <PageSearch_uiM /> : <PageSearch_uiDesk />}
  </>
}

export default Search