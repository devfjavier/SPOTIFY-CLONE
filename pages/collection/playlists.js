import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_types"
import Panel from "../../components/core-sections/Panel"
import Header from "../../components/core-sections/Header"
import Link from "next/link"
import Icon from "../../components/icon-svg"

const Playlists = () => {
  return (
    <RootContainer pageClassName="user-playlists">
      <Panel type="library"/>
      <Header type={COLLECTION_HEADER} collectionsPage="playlist"/>
      <main className="MAIN">
        <section className="section playlists">
          <h1 className="color-title">PLAYLIST</h1>
          <div className="container">
            <article className="item">
              <Link href="/playlist/playlist">
                <a className="source-link"></a>
              </Link>
              <div className="img-container">
                <img src={process.env.projectPath + "/img/song.webp"} alt=""/>
                <button className="play-pause">
                  <Icon className="play icon" name="play" fill="#fff"/>
                  <Icon className="pause icon" name="pause" fill="#fff"/>
                </button>
              </div>
              <div className="info">
                <h3 className="color-title">LISTA</h3>
                <p className="color-text">De *usuario</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </RootContainer>
  )
}

export default Playlists