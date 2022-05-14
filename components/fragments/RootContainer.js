import { root_uiM, root_uiDesk } from "../../styles/config/root-layout.module.scss"
import NextHead from "next/head"
import Footer from "../core-sections/Footer"
import Header from "../core-sections/header"
import Panel from "../core-sections/panel"

const RootContainer = ({ panelLink, headerName, libraryPageName, children }) => {
  return (
    <div id={process.env.uiM ? root_uiM : root_uiDesk}>
      <NextHead>
        <title>SPOTIFY CLONE</title>
        <meta name="description" content="Spotify clone" />
        <link rel="icon" href={process.env.projectPath + "/svgs/spotify.svg"} />
      </NextHead>
      <Panel activeLink={panelLink} />
      <Header name={headerName} libraryPageName={libraryPageName} />
      <main className="h-bg-color-dark-3">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RootContainer
