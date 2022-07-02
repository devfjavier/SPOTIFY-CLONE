import { idMain } from "./main.module.scss"

const Main = ({ children }) => (
  <main id={idMain} className="h-bg-color-dark-3">
    {children}
  </main>
)

export default Main