import RootContainer from "../components/fragments/RootContainer"
import { PREMIUM_PANEL } from "../consts/panel_page_names"

const Premium = () => {
  const Card = ({ title, par }) => (
    <article>
      <h2 className="h-fs-t3 h-color-light">{title}</h2>
      <p className="h-fs-st3 h-color-gray">{par}.</p>
    </article>
  )

  return (
    <RootContainer panelLink={PREMIUM_PANEL}>
      <h1 className="h-fs-t2 h-color-light">Toma el control de tu musica con Premium</h1>
      <Card title="Escucha sin anuncios" par="Disfruta de musica sin detener" />
      <Card title="Reproduce cualquier cancion" par="Incluso en moviles" />
      <Card title="Saltos ilimitados" par="Solo click en siguiente" />
      <Card title="Descarga musica" par="Escucha donde quieras, incluso sin conexion" />
      <Card title="Alta calidad de audio" par="3 veces mejor calidad de sonido" />
    </RootContainer>
  )
}

export default Premium