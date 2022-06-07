import PageQuery_uiM from "../../components/page-ui-m/search/subpages/query"

/**
 * page only for mobile
 * @returns JSX.Element - page
*/

const Query = () => {
  return <>
    {process.env.uiM && <PageQuery_uiM />}
  </>
}

export default Query