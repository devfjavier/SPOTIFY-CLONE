import useMainPaths from "../../hooks/useMainPaths"
import PanelItem from "../panel-common/PanelItem"
import classes from "./mobile-panel.module.scss"

const Panel_uiM = () => {
  const { isPageLibrary } = useMainPaths()

  return (
    <nav id={classes.idMobilePanel} className="h-bg-color-dark-1">
      <ul className={classes.menu}>
        <PanelItem href="/" iconName="index">
          Inicio
        </PanelItem>

        <PanelItem href="/search" iconName="search">
          Buscar
        </PanelItem>

        <PanelItem href="/library" isPageLibrary={isPageLibrary} iconName="library">
          Tu Biblioteca
        </PanelItem>

        <PanelItem href="/premium" iconName="spotify" oneVerIcon>
          Premium
        </PanelItem>
      </ul>
    </nav>
  )
}

export default Panel_uiM