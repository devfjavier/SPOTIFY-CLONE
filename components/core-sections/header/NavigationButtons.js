import Icon from "../../icon-svg"

const NavigationButtons = () => {
  return (
    <div className="page-navigation">
      <button className="button back">
        <Icon fill="#fff" stroke="#fff" name="chevronLeft" />
      </button>
      <button className="button fordward">
        <Icon fill="#fff" stroke="#fff" name="chevronRight" />
      </button>
    </div>
  )
}

export default NavigationButtons