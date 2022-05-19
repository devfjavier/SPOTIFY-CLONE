import Items from "../../fragments/Items"

const PageHome_uiM = () => {
  return <>
    <section>
      <div>
        <h2 className={"h-color-light h-fs-t3"}>
          Greeting
        </h2>
        <SideButtons />
      </div>
      <Items compact />
    </section>

    <section>
      <h2 className="h-color-light h-fs-t3">Escuchado recientemente</h2>
      <Items row />
    </section>

    <section>
      <h2 className="h-color-light h-fs-t3">Tus artistas favoritos</h2>
      <Items row />
    </section>
  </>
}

function SideButtons() {
  return (
    <div className="h-color-gray">
      <a>icon</a>
      <a>icon</a>
      <a>icon</a>
    </div>
  )
}

export default PageHome_uiM