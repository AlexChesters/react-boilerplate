const R = require('ramda')

const base = require('./base')

module.exports = R.merge(base, {
  NODE_ENV: JSON.stringify('development')
})
