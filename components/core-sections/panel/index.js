import DeskPanel from "./DeskPanel"
import MobilePanel from "./MobilePanel"
import { actual } from "../../../styles/core-sections/panel/panel-item.module.scss"

const Panel = ({ name }) => {
  const setPanelClass = (page) => name === page ? ` ${actual}` : ""

  return <>
    <DeskPanel setPanelClass={setPanelClass} />
    <MobilePanel setPanelClass={setPanelClass} />
  </>
}

export default Panel