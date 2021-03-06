import { idHeader } from "./index.module.scss"
import useMainPaths from "../../hooks/useMainPaths"
import LibraryLinks from "./LibraryLinks"
import FieldSearch from "./FieldSearch"
import NavigationButtons from "./NavigationButtons"
import PremiumButton from "./PremiumButton"
import UserMenu from "./UserMenu"

const Header = () => {
  const paths = useMainPaths()

  return (
    <header id={idHeader}>
      <NavigationButtons />

      {
        paths.isPageLibrary ? <LibraryLinks />
          : paths.isPageSearch ? <FieldSearch />
            : <PremiumButton />
      }

      <UserMenu />
    </header>
  )
}

export default Header