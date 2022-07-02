import { root_uiM, root_uiDesk } from "../../styles/config/root-layout.module.scss"
import NextHead from "next/head"
import Footer from "../core-sections/Footer"
import Header from "../core-sections/header"
import Panel from "../core-sections/panel"
import Header_uiM from "../core-sections/header-ui-m"
import useMainPaths from "../hooks/useMainPaths"
import Main from "../core-sections/Main"

const RootContainer = ({ children }) => {
  const { isPageLibrary } = useMainPaths()

  return (
    <div id={process.env.uiM ? root_uiM : root_uiDesk}>
      <NextHead>
        <title>SPOTIFY CLONE</title>
        <meta name="description" content="Spotify clone" />
        <link rel="icon" href={process.env.projectPath + "/svgs/spotify.svg"} />
      </NextHead>
      <Panel />
      {process.env.uiM ? (isPageLibrary && <Header_uiM />) : <Header />}
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default RootContainer
