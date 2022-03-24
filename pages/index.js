import Head from 'next/head'
import RootContainer from '../components/fragments/RootContainer'
import Header from '../components/core-sections/Header'
import Panel from '../components/core-sections/Panel'
import { NORMAL_HEADER } from '../consts/header_types'
import Icon from '../components/fragments/Icon'
import { useRef } from 'react'

const Home = () => {
  const button = useRef()
  const toggleButton = () => {
    button.current.classList.toggle("is-active")
  }

  return (
    <RootContainer pageClassName="index">
      <Head>
        <title>Clon de Spotify</title>
        <meta name="description" content="Clon de Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Panel type="index"/>
      <Header type={NORMAL_HEADER}/>

      <main className="MAIN">
        <section className="section greetings">
          <h2 className="title">Titulo</h2>
          <div className="container">
          </div>
        </section>

        <section className="section recently-heard">
          <h2 className="title">Escuchado recientemente</h2>
          <div className="container">
            <article className="item">
              <a className="source-link" href="search.html"></a>
              <div className="img-container">
                <img className="artist-img" src={process.env.projectPath + "/img/song.webp"} alt="godot engine"/>
                <button ref={button} onClick={toggleButton} className="play-pause">
                  <Icon className="play icon" name="play" fill="#fff"/>
                  <Icon className="pause icon" name="pause" fill="#fff"/>
                </button>
              </div>
              <div className="info">
                <h3 className="title">cancion/album</h3>
                <p className="text">Artista</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </RootContainer>
  )
}

export default Home