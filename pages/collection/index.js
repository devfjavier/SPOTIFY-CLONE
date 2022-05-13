import RootContainer from "../../components/fragments/RootContainer"
import PageLibrary_uiM from "../../components/page-ui-m/library"

// page only for mobile

const Library = () => {
  return <RootContainer>
    <main>
      {process.env.uiM && <PageLibrary_uiM />}
    </main>
  </RootContainer>
}

export default Library