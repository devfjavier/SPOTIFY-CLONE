import classes from "../core-sections/panel-common/panel-item.module.scss"
import Icon from "./icon-svg"

const PanelLinkToMobile = () => {
  return <a
    href="https://spotify-clone-sigma-ten.vercel.app/"
    className={`h-color-light h-fs-st4 h-unset ${classes.item} ${classes.desktop}`}
  >
    <Icon name="phone" size="1.4rem" />
    Go to Mobile UI
  </a>
}

export default PanelLinkToMobile