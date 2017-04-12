const fs = require('fs')
const path = require('path')
const mockFilename = path.resolve(__dirname, '..', 'mocks', 'query.html')

module.exports = (args, cb) => {
  fs.readFile(mockFilename, 'utf8', (err, data) => {
    if (err) {
      cb(err)
      return
    }
    cb(null, null, data)
  })
}
