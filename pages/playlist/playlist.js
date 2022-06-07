import PlaylistSong from "../../components/fragments/PlaylistSong"
import PlaylistHeader from "../../components/fragments/PlaylistHeader"
import Banner from "../../components/fragments/Banner"

/**
 * page only for desktop
 * @returns JSX.Element - page
*/

const Playlist = () => {
  return <>
    <Banner />
    <section className="section tracks">
      {/* <div className="menu">
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
            <ul>
            <li><button>Orden personalizado</button></li>
            <li><button>Titulo</button></li>
            <li><button>Artista</button></li>
            <li><button>Album</button></li>
            <li><button>Fecha en que se agrego</button></li>
            <li><button>Duracion</button></li>
            </ul>
            </div>
          </div> */}

      <div>
        <PlaylistHeader />
        <hr />
        <div className="song-container">
          <PlaylistSong />
          <PlaylistSong />
          <PlaylistSong />
        </div>
      </div>
    </section>
  </>
}

export default Playlist