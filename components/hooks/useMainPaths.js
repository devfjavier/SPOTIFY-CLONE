import { useRouter } from "next/router"

const useMainPaths = () => {
  const path = useRouter().asPath

  return {
    get isPageSearch() {
      return path.includes("/search")
    },
    get isPageLibrary() {
      return path.includes("/library") && !path.includes("/tracks")
    }
  }
}

export default useMainPaths