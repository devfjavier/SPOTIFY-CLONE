const Footer = () => {
  return (
    <footer className="FOOTER">
      <div className="container">
        <div className="song">
          <div>
            <img src="/img/song.webp"alt=""/>
          </div>
          <div className="info">
            <a className="link title" href="">cancion</a>
            <a className="link text" href="">artista</a>
          </div>
          <button className="btn like">dar like</button>
          <button className="btn play-pause">play-pause</button>
        </div>
          
        <div className="primary-controls">
          controles
        </div>               
        
        <div className="secondary-controls">
          volumen
        </div>
      </div>
    </footer>
  )
}

export default Footer