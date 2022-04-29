import { INDEX_PANEL, LIBRARY_PANEL, SEARCH_PANEL, TRACKS_PANEL } from "../../../consts/panel_page_names"
import Icon from "../../icon-svg"
import PanelLink from "./PanelLink"


const Panel = ({ name }) => {
  const setPanelClass = (page) => name === page ? " actual" : ""

  return (
    <nav className="PANEL">
      <ul className="menu">
        <PanelLink href="/" linkClassName={setPanelClass(INDEX_PANEL)}>
          <Icon className="panel-icon" name="index" fill="currentColor" />
          <span>Inicio</span>
        </PanelLink>

        <PanelLink href="/search" linkClassName={setPanelClass(SEARCH_PANEL)}>
          <Icon className="panel-icon" name="search" stroke="currentColor" />
          <span>Buscar</span>
        </PanelLink>

        <PanelLink href="/collection/playlists" linkClassName={setPanelClass(LIBRARY_PANEL)} itemClassName="hidden-on-small-screen">
          <Icon className="panel-icon" name="library" stroke="currentColor" />
          <span>Tu Biblioteca</span>
        </PanelLink>

        <PanelLink href="/collection/tracks" linkClassName={setPanelClass(TRACKS_PANEL)} itemClassName="hidden-on-big-screen">
          <Icon className="panel-icon" name="tracks2" fill="currentColor" />
          <span>Favoritos</span>
        </PanelLink>

        <PanelLink href="#" linkClassName="" itemClassName="hidden-on-big-screen">
          <Icon className="panel-icon" name="spotify" fill="currentColor" />
          <span>Premium</span>
        </PanelLink>
      </ul>

      <ul className="hidden-on-small-screen">
        <li>
          <button className="link create-playlist fs-p4">
            <Icon className="panel-icon" name="createPlaylist" />
            <span>Crear playlist</span>
          </button>
        </li>
        <PanelLink href="/collection/tracks" linkClassName={setPanelClass(TRACKS_PANEL)}>
          <Icon className="panel-icon" name="tracks" />
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