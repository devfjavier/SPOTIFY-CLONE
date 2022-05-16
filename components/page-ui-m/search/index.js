import FieldSearch from "../../core-sections/header/FieldSearch"
import Items from "../../fragments/Items"

const PageSearch_uiM = () => {
  return <>
    <section>
      <h2 className="h-color-light h-fs-t2">Buscar</h2>
      <FieldSearch skeletonLink />

      <h3 className="h-color-light h-fs-t4">Buscar todo</h3>
      <Items grid/>
    </section>
  </>
}

export default PageSearch_uiM