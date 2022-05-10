import RootContainer from '../components/fragments/RootContainer'
import { NORMAL_HEADER } from '../consts/header_names'
import ItemArtistSong from '../components/fragments/ItemArtistSong'
import { INDEX_PANEL } from '../consts/panel_page_names'

const Home = () => {
  return (
    <RootContainer headerName={NORMAL_HEADER} panelName={INDEX_PANEL}>

      <main>
        <section className="section greetings">
          <h2 className="h-color-light">Titulo</h2>
          <div className="container">
          </div>
        </section>

        <section className="section recently-heard">
          <h2 className="h-color-light">Escuchado recientemente</h2>
          <div className="container">
            <ItemArtistSong />
            <ItemArtistSong />
            <ItemArtistSong />
            <ItemArtistSong />
            <ItemArtistSong />
            <ItemArtistSong />
          </div>
        </section>
      </main>
    </RootContainer>
  )
}

export default Home