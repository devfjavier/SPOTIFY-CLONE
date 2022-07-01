import { main } from "./main.module.scss"

const Main = ({ children }) => (
  <main id={main} className="h-bg-color-dark-3">
    {children}
  </main>
)

export default Main