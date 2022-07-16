import ItemsGenre from "../../i-elements/ItemsGenre"
import RecentSearches from "./RecenSearches"

const PageSearch_uiDesk = () => {
  return <>
    <RecentSearches />
    <section>
      <h2 className="h-color-light h-fs-t3">Buscar todo</h2>
      <ItemsGenre />
    </section>
  </>
}

export default PageSearch_uiDesk