import classes from "../core-sections/panel-common/panel-item.module.scss"
import Icon from "./icon-svg"

const LinkToUiDesktop = () => {
  return (
    <div>
      <a
        href="https://devfjavier.github.io/SPOTIFY-CLONE/"
        className={`h-color-light h-fs-st4 h-unset ${classes.item} ${classes.mobile} ${classes.isActive}`}
      >
        <Icon name="laptop" size="1.4rem" />
        Go to Desktop UI
      </a>
      <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        padding: 1.9rem;
      }
      
      a {
        display: inline-flex;
        background-color: var(--user-bg-color);
        border-radius: 6px;
      }
    `}</style>
    </div>
  )
}

export default LinkToUiDesktop