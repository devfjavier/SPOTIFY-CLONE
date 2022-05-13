import { COLLECTION_HEADER, NORMAL_HEADER, SEARCH_HEADER } from "../../../consts/header_names"
import LibraryLinks from "./LibraryLinks"
import FieldSearch from "./FieldSearch"
import NavigationButtons from "./NavigationButtons"
import PremiumButton from "./PremiumButton"
import UserMenu from "./UserMenu"

const Header = ({ name, collectionPageName }) => {

  return (
    <header className="HEADER">
      <NavigationButtons />

      {name === NORMAL_HEADER && <PremiumButton />}

      {
        name === COLLECTION_HEADER && (
          <LibraryLinks pageName={collectionPageName} />
        )
      }

      {name === SEARCH_HEADER && <FieldSearch />}

      <UserMenu />
    </header>
  )
}

export default Header