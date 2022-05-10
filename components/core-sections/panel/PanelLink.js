import Link from "next/link"
import Icon from "../../icon-svg"

const PanelLink = ({ children, href, iconName, linkClassName, itemClassName }) => {
  return (
    <li className={itemClassName ?? ""}>
      <Link href={href}>
        <a className={`link h-color-light h-fs-st4${linkClassName}`}>
          {iconName && <Icon name={iconName} fill="currentColor" size="1.4rem" />}
          {children}
        </a>
      </Link>
    </li>
  )
}

export default PanelLink