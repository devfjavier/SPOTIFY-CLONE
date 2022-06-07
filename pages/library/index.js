import PageLibrary_uiM from "../../components/page-ui-m/library"

/**
 * page only for mobile
 * @returns JSX.Element - page
 */

const Library = () => {
  return <>
    {process.env.uiM && <PageLibrary_uiM />}
  </>
}

export default Library