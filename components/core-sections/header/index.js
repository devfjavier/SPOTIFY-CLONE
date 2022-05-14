import { LIBRARY_HEADER, NORMAL_HEADER, SEARCH_HEADER } from "../../../consts/header_names"
import LibraryLinks from "./LibraryLinks"
import FieldSearch from "./FieldSearch"
import NavigationButtons from "./NavigationButtons"
import PremiumButton from "./PremiumButton"
import UserMenu from "./UserMenu"

const Header = ({ name, libraryPageName }) => {

  return (
    <header className="HEADER">
      <NavigationButtons />

      {name === NORMAL_HEADER && <PremiumButton />}

      {
        name === LIBRARY_HEADER && (
          <LibraryLinks pageName={libraryPageName} />
        )
      }

      {name === SEARCH_HEADER && <FieldSearch />}

      <UserMenu />
    </header>
  )
}

export default Header