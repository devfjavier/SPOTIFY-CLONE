import Link from "next/link"
import Icon from "../../icon-svg"
import classes from "../../../styles/core-sections/panel/panel-item.module.scss"

const PanelLink = ({ children, href, iconName, active = false }) => {
  const classActive = active ? ` ${classes.activeLink}` : ""
  const class_uiM =  ` ${ classes[process.env.uiM ? "s_uiM" : "s_uiDesk"]}`

  return (
    <li>
      <Link href={href}>
        <a className={`h-color-light h-fs-st4 h-unset ${classes.item}${class_uiM}${classActive}`}>
          {iconName && <Icon name={iconName} size="1.4rem" />}
          {children}
        </a>
      </Link>
    </li>
  )
}

export default PanelLink