import Footer from "../core-sections/Footer"

const RootContainer = ({pageClassName, children}) => {
  return (
    <div className={`root-container ${pageClassName}`}>
      {children}
      <Footer/>
    </div>
  )
}

export default RootContainer