import Icon from "../../icon-svg"

const FieldSearch = () => {
  return (
    <form className="field-search">
      <Icon name="search" stroke="currentColor" />
      <input placeholder="Aristas, canciones o podcasts" />
      <Icon name="x" fill="currentColor" />
    </form>
  )
}

export default FieldSearch