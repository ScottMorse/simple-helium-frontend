const DEV = require('./development')
const PROD = require('./production')
const STAGING = require('./staging')

module.exports = () => {
  const env = process.env.REACT_APP_ENV
  if(!env){
    console.warn('No REACT_APP_ENV provided')
  }
  const envObj = ({
    development: DEV,
    staging: STAGING,
    production: PROD
  })[env] || PROD
  
  envObj.nodeEnv = process.env.NODE_ENV

  return { ...PROD, ...envObj }
}