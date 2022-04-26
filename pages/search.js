import RootContainer from "../components/fragments/RootContainer"
import Panel from "../components/core-sections/Panel"
import UserMenu from "../components/fragments/UserMenu"
import Icon from "../components/icon-svg"

const Search = () => {
  return (
    <RootContainer pageClassName="search">
      <Panel type="search" />

      <header className="HEADER">
        <div className="page-navigation">
          <button className="button back">
            <Icon fill="#fff" stroke="#fff" name="chevronLeft" />
          </button>
          <button className="button fordward">
            <Icon fill="#fff" stroke="#fff" name="chevronRight" />
          </button>
        </div>

        <form className="form-search">
          <Icon name="search" stroke="currentColor"/>
          <input type="text" placeholder="Aristas, canciones o podcasts" />
          <Icon name="x" fill="currentColor"/>
        </form>

        <span className="void fs-p3">H</span>

        <UserMenu />
      </header>

      <main className="MAIN">
        <section className="section recent-searches">
          <h2 className="color-title">Busquedas recientes</h2>
        </section>

        <section className="section most-listened-g">
          <h2 className="color-title">Los generos que mas escuchaste</h2>
        </section>
      </main>
    </RootContainer>
  )
}

export default Search