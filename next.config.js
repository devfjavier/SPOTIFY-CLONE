const { PHASE_PRODUCTION_BUILD } = require("next/constants")

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      reactStrictMode: true,
      basePath: "/Proyecto-de-Clon-de-Spotify",
      assetPrefix: "https://cdn.statically.io/gh/devfjavier/Proyecto-de-Clon-de-Spotify/gh-pages/"
    }
  } 
  else {
    return {
      reactStrictMode: true
    }  
  }
}
