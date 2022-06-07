import Items from "../../../../fragments/Items"
import Header from "../../Header"

const PagePlaylists_uiM = () => {
  return <>
    <Header />
    <section className="section playlists">
      <h1 className="h-color-light h-fs-t2">PLAYLIST</h1>
      <Items grid/>
    </section>
  </>
}

export default PagePlaylists_uiM