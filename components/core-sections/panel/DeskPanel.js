import classes from "./desk-panel.module.scss"
import { item } from "./panel-item.module.scss"
import Icon from "../../icon-svg"
import PanelLink from "./PanelLink"

const DeskPanel = () => {

  return (
    <nav id={classes.idDeskPanel} className="h-bg-color-dark-1">
      <ul className={classes.menu}>
        <PanelLink href="/" iconName="index">
          <span>Inicio</span>
        </PanelLink>

        <PanelLink href="/search" iconName="search">
          <span>Buscar</span>
        </PanelLink>

        <PanelLink href="/library/playlists" libraryPath iconName="library">
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
        <PanelLink href="/library/tracks" iconName="tracks">
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
}

export default DeskPanel