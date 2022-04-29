import Icon from "../../icon-svg"

const FieldSearch = () => {
  return <>
    <form className="form-search">
      <Icon name="search" stroke="currentColor" />
      <input placeholder="Aristas, canciones o podcasts" />
      <Icon name="x" fill="currentColor" />
    </form>
    <span className="void fs-p3">H</span>
  </>
}

export default FieldSearch