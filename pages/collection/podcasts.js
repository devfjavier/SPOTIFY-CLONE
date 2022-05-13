import CollectionLinks from "../../components/core-sections/header/CollectionLinks"
import RootContainer from "../../components/fragments/RootContainer"
import PagePodcasts_uiDesk from "../../components/page-ui-desk/library/subpages/podcasts"
import PagePodcasts_uiM from "../../components/page-ui-m/library/subpages/podcasts"
import { PODCASTS_COLLECTION } from "../../consts/collection_page_names"
import { COLLECTION_HEADER } from "../../consts/header_names"
import { LIBRARY_PANEL } from "../../consts/panel_page_names"

//page for mobile and desktop

const Posdcasts = () => {
  return (
    <RootContainer className="user-podcasts content" panelName={LIBRARY_PANEL} headerName={COLLECTION_HEADER} collectionPageName={PODCASTS_COLLECTION}>
      <main>
        <header className="sub-header">
          <CollectionLinks pageName={PODCASTS_COLLECTION} />
        </header>
        {process.env.iuM ? <PagePodcasts_uiM /> : <PagePodcasts_uiDesk />}
      </main>
    </RootContainer>
  )
}

export default Posdcasts