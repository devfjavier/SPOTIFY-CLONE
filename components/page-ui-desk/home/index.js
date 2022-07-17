import Items from "../../i-elements/Items"

const PageHome_uiDesk = () => {
  return <>
    <section>
      <h2 className={"h-color-light h-fs-t2"}>
        Greeting
      </h2>
      <Items compact />
    </section>
    <section>
      <h2 className="h-color-light h-fs-t3">Escuchado recientemente</h2>
      <Items grid />
    </section>
    <section>
      <h2 className="h-color-light h-fs-t3">Tus artistas favoritos</h2>
      <Items artist grid />
    </section>
  </>
}

export default PageHome_uiDesk