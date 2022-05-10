import RootContainer from "../../components/fragments/RootContainer"
import { NORMAL_HEADER } from "../../consts/header_names"
import PlaylistSong from "../../components/fragments/PlaylistSong"
import PlaylistHeader from "../../components/fragments/PlaylistHeader"

const Playlist = () => {
  return (
    <RootContainer headerName={NORMAL_HEADER}>
      <main>
        <section className="section banner">
          <div classs="img-container"><img src={process.env.projectPath + "/img/song.webp"} alt=""/></div>
          <div className="container">
            <h2 className="h-color-light h-fs-t2">PLAYLIST</h2>
            <h1 className="h-color-light h-fs-t1">TITULO DEL PLAYLIST</h1>
            <div className="info h-color-gray">
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
            <PlaylistHeader/>
            <hr/>
            <div className="song-container">
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
            </div>
          </div>
        </section>
      </main>
    </RootContainer>
  )
}

export default Playlist