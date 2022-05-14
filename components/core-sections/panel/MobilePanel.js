import { INDEX_PANEL, LIBRARY_PANEL, PREMIUM_PANEL, SEARCH_PANEL } from "../../../consts/panel_page_names"
import PanelLink from "./PanelLink"

const MobilePanel = ({ activeLink }) => {
  const isActive = (link) => activeLink === link ? true : false
  return (
    <nav id="mobile-panel" className="h-bg-color-dark-1">
      <ul className="menu">
        <PanelLink href="/" iconName="index" active={isActive(INDEX_PANEL)}>
          <span>Inicio</span>
        </PanelLink>

        <PanelLink href="/search" iconName="search" active={isActive(SEARCH_PANEL)}>
          <span>Buscar</span>
        </PanelLink>

        <PanelLink href="/library" iconName="library" active={isActive(LIBRARY_PANEL)}>
          <span>Tu Biblioteca</span>
        </PanelLink>

        <PanelLink href="/premium" iconName="spotify" active={isActive(PREMIUM_PANEL)}>
          <span>Premium</span>
        </PanelLink>
      </ul>
    </nav>
  )
}

export default MobilePanel