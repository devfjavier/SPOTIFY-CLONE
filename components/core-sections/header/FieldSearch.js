import Icon from "../../icon-svg"

const FieldSearch = () => {
  return (
    <form className="field-search">
      <Icon name="search" fill="currentColor" size="1.27rem" />
      <input placeholder="Aristas, canciones o podcasts" />
      <Icon name="x" fill="currentColor" size="1.27rem"/>
    </form>
  )
}

export default FieldSearch