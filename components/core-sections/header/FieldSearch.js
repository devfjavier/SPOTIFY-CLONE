import Link from "next/link"
import Icon from "../../icon-svg"

const FieldSearch = ({ skeletonLink = false }) => {

  if (skeletonLink) {
    return (
      <Link href="/search/query">
        <a className="h-color-gray skeleton-link">
          <Icon name="search" fill="#fff" size="1.27rem"/>
          Aristas, canciones o podcasts
        </a>
      </Link>
    )
  }

  return (
    <form className="field-search">
      <Icon name="search" fill="currentColor" size="1.27rem" />
      <input placeholder="Aristas, canciones o podcasts" />
      <Icon name="x" fill="currentColor" size="1.27rem" />
    </form>
  )
}

export default FieldSearch