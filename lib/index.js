const cheerio = require('cheerio')
const decode = require('ent/decode')
const moment = require('moment')
const transformers = require('./transformers.js')

const attributeMap = {
  'Autor(en):': { to: 'authors', transform: transformers.br },
  'Produktion:': { to: 'production', transform: transformers.brSingle },
  'Genre(s):': { to: 'genres', transform: transformers.br },
  'Regie:': { to: 'directors', transform: transformers.br },
  'Inhaltsangabe:': { to: 'abstract', transform: transformers.brSingle },
  'Mitwirkende:': { to: 'contributors', transform: transformers.contributors },
  'Links:': { to: 'links', transform: transformers.links },
  'Komponist(en):': { to: 'composers', transform: transformers.br },
  'Bearbeitung:': { to: 'adaption', transform: transformers.br },
  'Auch unter dem Titel:': { to: 'alsoKnownAs', transform: transformers.br }
}

const queryAttributeMap = {
  title: 'ti',
  authorName: 'au.an',
  authorFirstname: 'au.av',
  production: 'pr',
  year: 'yr',
  director: 're.an',
  adaption: 'be.an',
  composer: 'ko.an',
  translation: 'ue.an',
  abstract: 'inhv',
  contributors: 'mit',
  kunstkopfstereo: 'm'
}

const queryAttributesTemplate = {
  bool8: 'and',
  sp: '',
  bool4: 'and',
  ga: '',
  'bool5': 'and',
  gb: '',
  bool7: 'and',
  aw: '',
  so: 'autor',
  soo: 'asc',
  dat: ''
}

/**
 * Builds query attributes for Hoerdat backend from given attributes.
 * @param {Object} attributes Attributes to query for
 * @returns {Object} Query attributes suitable for querying the Hoerdat backend
 */
const buildQueryAttributes = (attributes) => Object
  .keys(attributes)
  .reduce((result, key, index) => {
    if (index > 2) throw new Error('Too many search attributes (maximum 3)')

    // First three query attributes must be of form:
    // col1=attribute&bool1=and&a=value
    // col2=attribute&bool1=and&b=value
    // col3=attribute&bool1=and&c=value

    const queryAttribute = queryAttributeMap[key]
    const valueKey = String.fromCharCode(97 + index)  // a, b, c

    if (!queryAttribute) {
      throw new Error(
        'Invalid query attribute: ' + key + '. ' +
        'Valid options are: ' + Object.keys(queryAttributeMap).join(',')
        )
    }

    return Object.assign(
      {},
      result,
      {
        ['col' + (index + 1)]: queryAttribute,
        ['bool' + (index + 1)]: 'and',            // always joined by 'and' for now
        [valueKey]: '%' + attributes[key] + '%'
      }
    )
  }, queryAttributesTemplate)

/**
 * Parses body with cheerio and extracts results.
 * @param {Cheerio} $ - Cheerio parsed object
 * @returns {Array} Results
 */
const parse = (body) => {
  const $ = cheerio.load(body)

  if (/formulieren Sie Ihre Anfrage bitte etwas genauer/.test($.html())) {
    throw new Error('Query returned too many results (> 100). Please be more specific.')
  }

  let entries = []
  $('h1#pagetitle').nextAll('table').each((index, element) => {
    // Find title
    let $children = $(element).children('tr')
    let title = decode($children.eq(1).find('h1').html().trim())
    let attributes = {
      title: title
    }

    // Loop through children and transform them via attributeMap
    $children.each((index, element) => {
      const attributeName = $(element).find('td').eq(0).html()
      if (attributeName) {
        const attr = attributeMap[attributeName]
        if (attr) {
          const $element = $(element).find('td').eq(1)
          attributes[attr.to] = attr.transform($element, $)
        }
      }
    })

    entries.push(attributes)
  })
  return entries
}

class Hoerdat {
  /**
   * Creates an instance of Hoerdat.
   * @param {Object} [options] - Options.
   * @param {String} [options.baseURL] - URL to Hördat backend.
   * @param {Function} [options.request] - Function for making requests. Defaults to request/request.
   *
   * @memberOf Hoerdat
   */
  constructor (options = {}) {
    this.baseURL = options.baseURL || 'http://www.xn--hrdat-jua.de'
    this.request = options.request || require('request')
  }

  _request (method, url, formData) {
    return new Promise((resolve, reject) => {
      const absoluteURL = this.baseURL + url

      this.request({
        method: method || 'GET',
        encoding: 'utf8',
        uri: absoluteURL,
        form: formData || {},
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }, (err, response, body) => {
        if (err) return reject(err)
        resolve(body)
      })
    })
  }

  /**
   * Searches Hoerdat database for radio plays by given attributes.
   *
   * @param {Object} attributes to query for. See QUERY_ATTRIBUTES.
   * @returns {Promise<Array>} A result promise
   *
   * @memberOf Hoerdat
   */
  search (attributes) {
    let queryAttributes = {}
    try {
      queryAttributes = buildQueryAttributes(attributes)
    } catch (err) {
      return Promise.reject(err)
    }

    return this._request(
      'post',
      '/index.php',
      queryAttributes
    )
    .then(parse)
  }

  /**
   * Queries Hoerdat database for radio plays airing on given date.
   *
   * @param {Date} date
   * @returns {Promise<Array>} A result promise
   *
   * @memberOf Hoerdat
   */
  onAir (date) {
    return this._request(
      'post',
      '/index.php',
      {
        dat: moment(date).format('YYYY-MM-DD')
      }
    )
    .then(parse)
  }
}

Hoerdat.QUERY_ATTRIBUTES = Object.keys(queryAttributeMap)

module.exports = Hoerdat
