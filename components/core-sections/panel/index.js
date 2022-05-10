import { INDEX_PANEL, LIBRARY_PANEL, SEARCH_PANEL, TRACKS_PANEL } from "../../../consts/panel_page_names"
import Icon from "../../icon-svg"
import PanelLink from "./PanelLink"


const Panel = ({ name }) => {
  const setPanelClass = (page) => name === page ? " actual" : ""

  return (
    <nav className="PANEL">
      <ul className="menu">
        <PanelLink href="/" iconName="index" linkClassName={setPanelClass(INDEX_PANEL)}>
          <span>Inicio</span>
        </PanelLink>

        <PanelLink href="/search" iconName="search" linkClassName={setPanelClass(SEARCH_PANEL)}>
          <span>Buscar</span>
        </PanelLink>

        <PanelLink href="/collection/playlists" iconName="library" linkClassName={setPanelClass(LIBRARY_PANEL)} itemClassName="hidden-on-small-screen">
          <span>Tu Biblioteca</span>
        </PanelLink>

        <PanelLink href="/collection/tracks" iconName="tracks2" linkClassName={setPanelClass(TRACKS_PANEL)} itemClassName="hidden-on-big-screen">
          <span>Favoritos</span>
        </PanelLink>

        <PanelLink href="#" iconName="spotify" linkClassName="" itemClassName="hidden-on-big-screen">
          <span>Premium</span>
        </PanelLink>
      </ul>

      <ul className="hidden-on-small-screen">
        <li>
          <button className="link create-playlist fs-p4">
            <Icon name="createPlaylist" size="1.4rem" />
            <span>Crear playlist</span>
          </button>
        </li>
        <PanelLink href="/collection/tracks" iconName="tracks" linkClassName={setPanelClass(TRACKS_PANEL)}>
          <span>Tus me gusta</span>
        </PanelLink>
      </ul>

      <hr className="hr" />

      <ul className="playlists-shortcut">
        <PanelLink href="/playlist/playlist" itemClassName="pl">
          LISTA
        </PanelLink>
      </ul>
    </nav>
  )
}

export default Panel