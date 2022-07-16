import { root_uiM, root_uiDesk } from "../../styles/config/root-layout.module.scss"
import NextHead from "next/head"
import Footer from "../core-sections/Footer"
import Header_uiDesk from "../core-sections/header-ui-desk"
import Panel_uiDesk from "../core-sections/panel-ui-desk"
import Header_uiM from "../core-sections/header-ui-m"
import useMainPaths from "../hooks/useMainPaths"
import HeaderMain from "../core-sections/HeaderMain"
import Panel_uiM from "../core-sections/panel-ui-m"

const RootContainer = ({ children }) => {
  const { isPageLibrary } = useMainPaths()

  return (
    <div id={process.env.uiM ? root_uiM : root_uiDesk}>
      <NextHead>
        <title>SPOTIFY CLONE</title>
        <meta name="description" content="Spotify clone" />
        <link rel="icon" href={process.env.projectPath + "/svgs/spotify.svg"} />
      </NextHead>
      {process.env.uiM ? <Panel_uiM /> : <Panel_uiDesk />}
      <HeaderMain>
        {process.env.uiM ? (isPageLibrary && <Header_uiM />) : <Header_uiDesk />}
        <main className={process.env.uiM ? "" : "h-pad-1-9rem"}>
          {children}
        </main>
      </HeaderMain>
      <Footer />
    </div>
  )
}

export default RootContainer
