import { INDEX_PANEL, LIBRARY_PANEL, SEARCH_PANEL, TRACKS_PANEL } from "../../../consts/panel_page_names"
import Icon from "../../icon-svg"
import PanelLink from "./PanelLink"
import { item } from "../../../styles/core-sections/panel/panel-item.module.scss"

const DeskPanel = ({ setPanelClass }) => (
  <nav id="desk-panel">
    <ul className="menu">
      <PanelLink href="/" iconName="index" className={setPanelClass(INDEX_PANEL)}>
        <span>Inicio</span>
      </PanelLink>

      <PanelLink href="/search" iconName="search" className={setPanelClass(SEARCH_PANEL)}>
        <span>Buscar</span>
      </PanelLink>

      <PanelLink href="/collection/playlists" iconName="library" className={setPanelClass(LIBRARY_PANEL)}>
        <span>Tu Biblioteca</span>
      </PanelLink>
    </ul>

    <ul>
      <li>
        <button className={"link h-color-light h-fs-st4 h-unset " + item}>
          <Icon name="createPlaylist" size="1.4rem" />
          <span>Crear playlist</span>
        </button>
      </li>
      <PanelLink href="/collection/tracks" iconName="tracks" className={setPanelClass(TRACKS_PANEL)}>
        <span>Tus me gusta</span>
      </PanelLink>
    </ul>

    <hr />

    <ul>
      <PanelLink href="/playlist/playlist">
        LISTA
      </PanelLink>
    </ul>
  </nav>
)

export default DeskPanel