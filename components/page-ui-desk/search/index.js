import Items from "../../fragments/Items"
import RecentSearches from "./RecenSearches"

const PageSearch_uiDesk = () => {
  return <>
    <RecentSearches />
    <section>
      <h2 className="h-color-light h-fs-t3">Buscar todo</h2>
      <Items grid/>
    </section>
  </>
}

export default PageSearch_uiDesk