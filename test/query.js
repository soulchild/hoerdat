const Hoerdat = require('../lib')
const assert = require('assert')
const request = require('./helpers/fake-request')
const hoerdat = new Hoerdat({
  request
})

describe('parse', function () {
  it('should parse correctly', function () {
    return hoerdat
      .search({
        title: 'Räuber Hotzenplotz'
      })
      .then(res => {
        assert.equal(res[0].title, 'Neues vom Räuber Hotzenplotz')
      })
  })
})
