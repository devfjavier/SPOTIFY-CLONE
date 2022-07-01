import classes from "./panel-item.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"
import Icon from "../../icon-svg"
import useMainPaths from "../../hooks/useMainPaths"

const PanelLink = ({ href, libraryPath = false, iconName, children }) => {
  const path = useRouter().asPath
  const { isPageLibrary } = useMainPaths()

  const activeClass = path === href || (libraryPath && isPageLibrary) ? ` ${classes.activeLink}` : ""

  const class_uiM = ` ${classes[process.env.uiM ? "s_uiM" : "s_uiDesk"]}`

  return (
    <li>
      <Link href={href}>
        <a className={`h-color-light h-fs-st4 h-unset ${classes.item}${class_uiM}${activeClass}`}>
          {iconName && <Icon name={iconName} size="1.4rem" />}
          {children}
        </a>
      </Link>
    </li>
  )
}

export default PanelLink