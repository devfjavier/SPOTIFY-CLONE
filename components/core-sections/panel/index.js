import DeskPanel from "./DeskPanel"
import MobilePanel from "./MobilePanel"

const Panel = () => {
  return <>
    {process.env.uiM ?
      <MobilePanel />
      :
      <DeskPanel />
    }
  </>
}

export default Panel