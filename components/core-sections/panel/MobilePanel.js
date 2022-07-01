import classes from "./mobile-panel.module.scss"
import PanelLink from "./PanelLink"

const MobilePanel = () => {
  return (
    <nav id={classes.idMobilePanel} className="h-bg-color-dark-1">
      <ul className={classes.menu}>
        <PanelLink href="/" iconName="index">
          <span>Inicio</span>
        </PanelLink>

        <PanelLink href="/search" iconName="search">
          <span>Buscar</span>
        </PanelLink>

        <PanelLink href="/library" libraryPath iconName="library">
          <span>Tu Biblioteca</span>
        </PanelLink>

        <PanelLink href="/premium" iconName="spotify">
          <span>Premium</span>
        </PanelLink>
      </ul>
    </nav>
  )
}

export default MobilePanel