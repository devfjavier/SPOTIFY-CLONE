import classes from "./page-navigation.module.scss"
import Icon from "../../icon-svg"

const NavigationButtons = () => {
  return (
    <div className={classes.pageNavigation}>
      <button className={"back " + classes.button}>
        <Icon fill="#fff" stroke="#fff" name="chevronLeft" size="1.27rem" />
      </button>
      <button className={"fordward " + classes.button}>
        <Icon fill="#fff" stroke="#fff" name="chevronRight" size="1.27rem" />
      </button>
    </div>
  )
}

export default NavigationButtons