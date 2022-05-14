const { PHASE_PRODUCTION_BUILD } = require("next/constants")

module.exports = phase => {
  const isActive_uiM = true //change to false to build the desk ui, cache must be disabled
  let PROJECT_PATH = ""
  let config = {}

  if (phase === PHASE_PRODUCTION_BUILD && isActive_uiM === false) {
    PROJECT_PATH = "/SPOTIFY-CLONE"

    config = {
      basePath: PROJECT_PATH,
      assetPrefix: `https://cdn.statically.io/gh/devfjavier${PROJECT_PATH}/gh-pages/`,
      async redirects() {
        return [
          {
            source: "/library",
            destination: "/library/playlists",
            permanent: false
          }
        ]
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      projectPath: PROJECT_PATH,
      uiM: isActive_uiM
    },
    ...config
  }
}
