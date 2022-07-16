import FieldSearch from "../../core-sections/header-ui-desk/FieldSearch"
import ItemsGenre from "../../i-elements/ItemsGenre"

const PageSearch_uiM = () => {
  return <>
    <section className="h-pad-0-9rem">
      <h2 className="h-color-light h-fs-t2">Buscar</h2>
      <FieldSearch skeletonLink />

      <h3 className="h-color-light h-fs-t4">Buscar todo</h3>
      <ItemsGenre />
    </section>
  </>
}

export default PageSearch_uiM