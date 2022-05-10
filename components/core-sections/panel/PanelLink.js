import Link from "next/link"
import Icon from "../../icon-svg"
import classes from "../../../styles/core-sections/panel/panel-item.module.scss"

const PanelLink = ({ children, href, iconName, className }) => {
  const customClassName = className ? ` ${className}` : ""
  return (
    <li>
      <Link href={href}>
        <a className={`h-color-light h-fs-st4 ${classes.item}${customClassName}`}>
          {iconName && <Icon name={iconName} fill="currentColor" size="1.4rem" />}
          {children}
        </a>
      </Link>
    </li>
  )
}

export default PanelLink