import classes from "./panel-item.module.scss"
import { createElement } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import Icon from "../../i-particles/icon-svg"

const PanelItem = ({ href, isPageLibrary, iconName, oneVerIcon, children }) => {
  const isActive = href === useRouter().asPath

  const activeClass = isActive || isPageLibrary ? ` ${classes.isActive}` : ""

  const itemClass = `${classes.item} ${classes[process.env.uiM ? "mobile" : "desktop"]}`

  return (
    <li>
      {createElement(
        href ? Link : "button",
        { href, className: `h-color-light h-fs-st4 h-unset ${itemClass}${activeClass}` },
        <>
          {iconName && <Icon name={iconName + (isActive && !oneVerIcon || isPageLibrary ? "Fill" : "")} size="1.4rem" />}
          {children}
        </>
      )}
    </li>
  )
}

function Link({ href, className, children }) {
  return (
    <NextLink href={href}>
      <a className={className}>
        {children}
      </a>
    </NextLink>
  )
}

export default PanelItem