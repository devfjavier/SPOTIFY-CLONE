import classes from "../../core-sections/panel-common/panel-item.module.scss"
import Icon from "../../icon-svg"

const LinkToUiDesktop = () => {
  return <div style={{
    display: "flex",
    justifyContent: "center",
    padding: ".6rem"
  }}>
    <a
      href="https://devfjavier.github.io/SPOTIFY-CLONE/"
      className={`h-color-light h-fs-st4 h-unset ${classes.item} ${classes.mobile} ${classes.isActive}`}
      style={{
        display: "inline-flex",
        backgroundColor: "var(--panel-bg-color)",
        borderRadius: "6px"
      }}
    >
      <Icon name="laptop" size="1.4rem" />
      Go to Desktop UI
    </a>
  </div>
}

export default LinkToUiDesktop