const webpack = require('webpack')
const DefinePlugin = webpack.DefinePlugin
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

exports.modifyWebpackConfig = ({ config, stage }) => {
  config._config.plugins = config._config.plugins.filter(plug => {
    return !(plug instanceof UglifyJsPlugin)
  })
    .map(plug => {
      if(plug instanceof DefinePlugin) {
        plug.definitions['process.env'].NODE_ENV = '"development"'
      }
      return plug
    })
  return config
}
