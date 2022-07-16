import classes from "./desk-panel.module.scss"
import PanelItem from "../panel-common/PanelItem"
import useMainPaths from "../../hooks/useMainPaths"
import PanelLinkToMobile from "../../i-particles/PanelLinkToUiMobile"

const Panel_uiDesk = () => {
  const { isPageLibrary } = useMainPaths()

  return (
    <nav id={classes.idDeskPanel} className="h-bg-color-dark-1">
      <ul className={classes.menu}>
        <PanelLinkToMobile />
        <PanelItem href="/" iconName="index">
          Inicio
        </PanelItem>

        <PanelItem href="/search" iconName="search">
          Buscar
        </PanelItem>

        <PanelItem href="/library/playlists" isPageLibrary={isPageLibrary} iconName="library">
          Tu Biblioteca
        </PanelItem>
      </ul>

      <ul>
        <PanelItem iconName="createPlaylist">
          Crear playlist
        </PanelItem>
        <PanelItem href="/library/tracks" iconName="tracks" oneVerIcon>
          Tus me gusta
        </PanelItem>
      </ul>

      <hr />

      <ul>
        <PanelItem href="/playlist/playlist">
          LISTA
        </PanelItem>
      </ul>
    </nav>
  )
}

export default Panel_uiDesk