import classes from "./field-search.module.scss"
import Link from "next/link"
import Icon from "../../i-particles/icon-svg"

const FieldSearch = ({ skeletonLink = false }) => {

  if (skeletonLink) {
    return (
      <Link href="/search/query">
        <a className={"h-color-gray " + classes.skeletonLink}>
          <Icon name="search" fill="#fff" size="1.27rem"/>
          Aristas, canciones o podcasts
        </a>
      </Link>
    )
  }

  return (
    <form className={classes.fieldSearch}>
      <Icon name="search" size="1.27rem" />
      <input placeholder="Aristas, canciones o podcasts" />
      <Icon name="x" size="1.27rem" />
    </form>
  )
}

export default FieldSearch