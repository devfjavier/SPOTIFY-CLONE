import Icon from "../../icon-svg"

const NavigationButtons = () => {
  return (
    <div className="page-navigation">
      <button className="button back">
        <Icon fill="#fff" stroke="#fff" name="chevronLeft" size="1.27rem" />
      </button>
      <button className="button fordward">
        <Icon fill="#fff" stroke="#fff" name="chevronRight" size="1.27rem" />
      </button>
    </div>
  )
}

export default NavigationButtons