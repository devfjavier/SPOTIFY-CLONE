import RootContainer from "../components/fragments/RootContainer"
import Panel from "../components/core-sections/Panel"

const Search = () => {
  return (
    <RootContainer pageClassName="search">
      <Panel/>

      <header className="HEADER">
        <div className="page-navigation">
          <button className="button back">izq</button>
          <button className="button fordward">der</button>
        </div>

        <label><input type="text"/></label>

        <span className="void fs-p3">H</span>

        <div className="user-container">
          <button className="user-btn" id="user-btn">
            icon perfil
            <span className="name">Usuario</span>
            icon flecha
          </button>
          <ul className="dd-menu" id="dd-menu">
            <li className="profile"><a className="link" href="">Perfil</a></li>
            <li className="preferences"><a className="link" href="">Preferencias</a></li>
          </ul>
        </div>
      </header>

      <main className="MAIN">
          <section className="section recent-searches">
              <h2 className="title">Busquedas recientes</h2>
          </section>

          <section className="section most-listened-g">
              <h2 className="title">Los generos que mas escuchaste</h2>
          </section>
      </main>
    </RootContainer>
  )
}

export default Search