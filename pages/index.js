import Head from 'next/head'
import RootContainer from '../components/fragments/RootContainer'
import Header from '../components/core-sections/Header'
import Panel from '../components/core-sections/Panel'
import { NORMAL_HEADER } from '../consts/header_types'
import ItemArtistSong from '../components/fragments/ItemArtistSong'

const Home = () => {
  return (
    <RootContainer pageClassName="index">
      <Head>
        <title>Clon de Spotify</title>
        <meta name="description" content="Clon de Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Panel panelName="index" />
      <Header type={NORMAL_HEADER} />

      <main className="MAIN">
        <section className="section greetings">
          <h2 className="color-title">Titulo</h2>
          <div className="container">
          </div>
        </section>

        <section className="section recently-heard">
          <h2 className="color-title">Escuchado recientemente</h2>
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