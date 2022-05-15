import Icon from "../../icon-svg"

const Header = () => {
  return (
    <header>
      <div className="items-row">
        <h2 className="h-color-light h-fs-t2">Tu libreria</h2>
        <button className="h-unset"><Icon name="search" fill="#fff" size="1.27rem"/></button>
        <button className="h-unset"><Icon name="plus" fill="#fff" size="1.27rem"/></button>
      </div>
      <div className="h-color-light">links library</div>
    </header>
  )
}

export default Header