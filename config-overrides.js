
const getEnv = require('./config/env')
const webpack = require('webpack')

module.exports = function override(config, env) {
  config.plugins.push(new webpack.DefinePlugin({ ENV: JSON.stringify(getEnv()) }))
  return config
}
