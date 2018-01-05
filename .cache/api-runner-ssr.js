var plugins = [{
      plugin: require('C:/Users/Shane/Documents/GitHub/shanemckenna.ie/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Shane/Documents/GitHub/shanemckenna.ie/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-12345689-1"},
    },{
      plugin: require('C:/Users/Shane/Documents/GitHub/shanemckenna.ie/node_modules/gatsby-plugin-typography/gatsby-ssr.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.jsx"},
    },{
      plugin: require('C:/Users/Shane/Documents/GitHub/shanemckenna.ie/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Shane/Documents/GitHub/shanemckenna.ie/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Shane Mckenna","short_name":"Shane Mckenna - Portfolio","description":"Minimalistic bright portfolio with full-width grid and large images","start_url":"/","background_color":"#2b2e3c","theme_color":"#3498DB","display":"minimal-ui","icons":[{"src":"/logos/logo-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/logos/logo-512x512.png","sizes":"512x512","type":"image/png"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

const apis = require(`./api-ssr-docs`)

module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }
  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
