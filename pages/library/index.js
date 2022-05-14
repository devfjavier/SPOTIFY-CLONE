import RootContainer from "../../components/fragments/RootContainer"
import PageLibrary_uiM from "../../components/page-ui-m/library"

// page only for mobile

const Library = () => {
  return <RootContainer>
    {process.env.uiM && <PageLibrary_uiM />}
  </RootContainer>
}

export default Library