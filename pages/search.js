import RootContainer from "../components/fragments/RootContainer"
import Panel from "../components/core-sections/Panel"
import UserMenu from "../components/fragments/UserMenu"

const Search = () => {
  return (
    <RootContainer pageClassName="search">
      <Panel type="search"/>

      <header className="HEADER">
        <div className="page-navigation">
          <button className="button back">izq</button>
          <button className="button fordward">der</button>
        </div>

        <label><input type="text"/></label>

        <span className="void fs-p3">H</span>

        <UserMenu/>
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