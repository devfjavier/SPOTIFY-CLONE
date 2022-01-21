import Link from "next/link"

const PanelLink = ({ children, href, linkClassName, itemClassName}) => {
  return (
    <li className={itemClassName ?? ""}>
      <Link href={href}>
        <a className={`link text fs-p4${linkClassName}`}>
          { children }
        </a>
      </Link>
    </li>
  )
}

export default PanelLink