
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cypher.cjs.production.min.js')
} else {
  module.exports = require('./cypher.cjs.development.js')
}
