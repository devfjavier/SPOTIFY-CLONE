import Items from "../../fragments/Items"
import Icon from "../../icon-svg"
import LinkToUiDesktop from "./LinkToUiDesktop"

const PageHome_uiM = () => {
  return <>
    <section>
      <div className="side-buttons-container">
        <h2 className={"h-color-light h-fs-t3"}>
          Greeting
        </h2>
        <SideButtons />
      </div>
      <LinkToUiDesktop />
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
    <div className="h-color-gray side-buttons">
      <a href="#"><Icon name="bell" fill="#fff" size="1.27rem" /></a>
      <a href="#"><Icon name="clock" fill="#fff" size="1.27rem" /></a>
      <a href="#"><Icon name="gear" fill="#fff" size="1.27rem" /></a>
    </div>
  )
}

export default PageHome_uiM