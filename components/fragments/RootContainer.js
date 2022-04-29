import NextHead from "next/head"
import Footer from "../core-sections/Footer"
import Header from "../core-sections/header"
import Panel from "../core-sections/panel"

const RootContainer = ({ panelName, headerName, collectionPageName, children }) => {
  return <>
    <NextHead>
      <title>SPOTIFY CLONE</title>
      <meta name="description" content="Spotify clone" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    <Panel name={panelName}/>
    <Header name={headerName} collectionPageName={collectionPageName}/>
    {children}
    <Footer />
  </>
}

export default RootContainer
