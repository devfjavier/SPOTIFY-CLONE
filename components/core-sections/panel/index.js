import DeskPanel from "./DeskPanel"
import MobilePanel from "./MobilePanel"

const Panel = ({ activeLink }) => {
  return <>
    {process.env.uiM ?
      <MobilePanel activeLink={activeLink} />
      :
      <DeskPanel activeLink={activeLink} />
    }
  </>
}

export default Panel