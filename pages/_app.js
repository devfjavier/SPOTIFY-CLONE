import '../styles/index.scss'
import RootContainer from '../components/i-elements/RootContainer'

/**
 * @returns JSX.Element - the current page and RootContainer
*/

function MyApp({ Component: Page, pageProps }) {
  return <>
    <RootContainer>
      <Page {...pageProps} />
    </RootContainer>
  </>
}

export default MyApp
