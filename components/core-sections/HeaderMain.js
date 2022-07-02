import { idHeaderMain } from "./header-main.module.scss"

const HeaderMain = ({ children }) => (
  <div id={idHeaderMain} className="h-bg-color-dark-3">{children}</div>
)

export default HeaderMain 
