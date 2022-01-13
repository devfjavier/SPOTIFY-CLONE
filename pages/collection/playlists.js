import RootContainer from "../../components/fragments/RootContainer"
import { COLLECTION_HEADER } from "../../consts/header_types"
import Panel from "../../components/core-sections/Panel"
import Header from "../../components/core-sections/Header"
import Link from "next/link"
import Icon from "../../components/fragments/Icon"

const Playlists = () => {
	return (
		<RootContainer pageClassName="user-playlists">
      <Panel/>
      <Header type={COLLECTION_HEADER} collectionsPage="playlist"/>
      <main className="MAIN">
        <section className="section playlists">
          <h1 className="title">PLAYLIST</h1>
          <div className="container">
            <article className="item">
              <Link href="/playlist/playlist">
                <a className="source-link"></a>
              </Link>
              <div className="img-container">
                <img src="/img/song.jpg" alt=""/>
                <button className="play-pause"><Icon name="play" fill="#fff"/><Icon name="pause" fill="#fff"/></button>
              </div>
              <div className="info">
                <h3 className="title">LISTA</h3>
                <p className="text">De *usuario</p>
              </div>
            </article>
          </div>
        </section>
      </main>
		</RootContainer>
	)
}

export default Playlists