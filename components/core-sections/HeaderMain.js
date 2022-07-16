import { idHeaderMain } from "./header-main.module.scss"

const HeaderMain = ({ children }) => (
  <div
    id={idHeaderMain}
    className={"h-bg-color-dark-3" + (process.env.uiM ? "" : " h-pad-1-9rem")}
  >
    {children}
  </div>
)

export default HeaderMain 
