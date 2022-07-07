import { btnPremium } from "./btn-premium.module.scss"

const PremiumButton = () => {

  return (
    <button className={"h-color-light h-bg-color-dark-1 " + btnPremium} title="Actualizar a Premium">
      PREMIUM
    </button>
  )
}

export default PremiumButton