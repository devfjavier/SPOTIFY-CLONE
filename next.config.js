const { PHASE_PRODUCTION_BUILD } = require("next/constants")

module.exports = phase => {
  let PROJECT_PATH = ""
  let config = {}

  if (phase === PHASE_PRODUCTION_BUILD) {
    PROJECT_PATH = "/SPOTIFY-CLONE"
  
    config = {
      basePath: PROJECT_PATH,
      assetPrefix: `https://cdn.statically.io/gh/devfjavier/${PROJECT_PATH}/gh-pages/`
    }
  }

  return {
    reactStrictMode: true,
    env: {
      projectPath: PROJECT_PATH
    },
    ...config
  }
}
