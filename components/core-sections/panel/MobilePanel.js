import { INDEX_PANEL, LIBRARY_PANEL, SEARCH_PANEL } from "../../../consts/panel_page_names"
import PanelLink from "./PanelLink"

const MobilePanel = ({ setPanelClass }) => (
  <nav id="mobile-panel">
    <ul className="menu">
      <PanelLink href="/" iconName="index" className={setPanelClass(INDEX_PANEL)}>
        <span>Inicio</span>
      </PanelLink>

      <PanelLink href="/search" iconName="search" className={setPanelClass(SEARCH_PANEL)}>
        <span>Buscar</span>
      </PanelLink>

      <PanelLink href="/library/playlists" iconName="library" className={setPanelClass(LIBRARY_PANEL)}>
        <span>Tu Biblioteca</span>
      </PanelLink>

      <PanelLink href="/premium" iconName="spotify" className="h-unset">
        <span>Premium</span>
      </PanelLink>
    </ul>
  </nav>
)

export default MobilePanel