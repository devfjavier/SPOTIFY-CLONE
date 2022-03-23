const { PHASE_PRODUCTION_BUILD } = require("next/constants")

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      reactStrictMode: true,
      basePath: "/SPOTIFY-CLONE",
      assetPrefix: "https://cdn.statically.io/gh/devfjavier/SPOTIFY-CLONE/gh-pages/"
    }
  } 
  else {
    return {
      reactStrictMode: true
    }  
  }
}
