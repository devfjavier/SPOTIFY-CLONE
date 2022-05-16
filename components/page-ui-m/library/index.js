import Items from "../../fragments/Items"
import Header from "./Header"
import Sort from "./Sort"

const PageLibrary_uiM = () => {
  return <>
    <Header pageLibrary/>
    <Sort />
    <Items grid/>
  </>
}

export default PageLibrary_uiM