import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_types"
import Header from "../../components/core-sections/Header"
import Panel from "../../components/core-sections/Panel"
import Icon from "../../components/fragments/Icon"

const Playlist = () => {
  return (
    <RootContainer pageClassName="playlist">
      <Panel/>
      <Header type={NORMAL_HEADER}/>
      <main className="MAIN">
        <section className="section banner">
          <div classs="img-container"><img src="/img/song.jpg" alt=""/></div>
          <div className="container">
            <h2 className="title fs-h2">PLAYLIST</h2>
            <h1 className="title fs-h1">TITULO DEL PLAYLIST</h1>
            <div className="info text">
              <a href="../user/usuario"></a>
              <span>
                ·<span className="song-number">2</span> cancion, <span className="duration">2</span>
              </span>
            </div>
          </div>
        </section>

        <section className="section tracks">
          <div className="menu">
            <button className="play-pause"></button>
            <button className="download">#</button>
            <div className="more-options">
                <button className="button">...</button>
                <ul className="options">
                    <li className="op"></li>
                </ul>
            </div>
            <span className="void"></span>
            <div className="search">
                <button className="button">lupa</button>
                <input className="input" type="text"/>
            </div>
            <div className="filters">
                <button>Orden personalizado</button>
                  {/* <ul>
                    <li><button>Orden personalizado</button></li>
                    <li><button>Titulo</button></li>
                    <li><button>Artista</button></li>
                    <li><button>Album</button></li>
                    <li><button>Fecha en que se agrego</button></li>
                    <li><button>Duracion</button></li>
                </ul> */}
            </div>
          </div>

          <div>
            <div className="columns-info">
              <span className="song-number text">#</span>
              <span className="song-title text">TITULO</span>
              <span className="song-album text">ALBUM</span>
              <span className="song-info text">AGREGADO EL</span>
              <span className="song-like-btn void">like</span>
              <span className="song-duration text">reloj</span>
              <span className="song-more-options void">...op</span>
            </div>
            <hr/>
            <div className="song-container">
              <article className="song">
                <div className="song-number text">
                    <span className="number text">1</span>
                    <button className="play icon"><Icon name="play"/></button>
                    <button className="pause icon"><Icon name="pause"/></button>
                </div>
                <div className="song-title">
                    <div className="img-container"><img src="/img/song.jpg" alt=""/></div>
                    <div>
                        <span className="title">nombre cancion</span>
                        <a className="artist text" href="">artista</a>
                    </div>
                </div>
                <a className="song-album text" href="">Album</a>
                <span className="song-info text">Fecha de agregacion</span>
                <button className="song-like-btn">icono</button>
                <span className="song-duration text">Duracion</span>
                <button className="song-more-options text">...</button>
              </article>
              {/* <article className="song"></article> */}
            </div>
          </div>
        </section>
      </main>
    </RootContainer>
  )
}

export default Playlist