"use strict";

const cheerio = require('cheerio');
const request = require('request');
const decode = require('ent/decode');
const moment = require('moment');
const transformers = require('./transformers.js');

const Hoerdat = module.exports = {};

const baseURL = "http://www.xn--hrdat-jua.de";

const attributeMap = {
  'Autor(en):':     { to: 'authors',      transform: transformers.br },
  'Produktion:':    { to: 'production',   transform: transformers.brSingle },
  'Genre(s):':      { to: 'genres',       transform: transformers.br },
  'Regie:':         { to: 'directors',    transform: transformers.br },
  'Inhaltsangabe:': { to: 'abstract',     transform: transformers.brSingle },
  'Mitwirkende:':   { to: 'contributors', transform: transformers.contributors },
  'Links:':         { to: 'links',        transform: transformers.links },
  'Komponist(en):': { to: 'composers',    transform: transformers.br },
  'Bearbeitung:':   { to: 'adaption',     transform: transformers.br },
  'Auch unter dem Titel:': { to: 'alsoKnownAs', transform: transformers.br },
};

const queryAttributeMap = {
  title:            'ti',
  authorName:       'au.an',
  authorFirstname:  'au.av',
  production:       'pr',
  year:             'yr',
  director:         're.an',
  adaption:         'be.an',
  composer:         'ko.an',
  translation:      'ue.an',
  abstract:         'inhv',
  contributors:     'mit',
  kunstkopfstereo:  'm'
};

// Makes a request to the Hördat web application
function _request(method, url, formData) {
  return new Promise((resolve, reject) => {
    const absoluteURL = baseURL + url;

    request({
      method: method || 'GET',
      encoding: 'binary',
      uri: absoluteURL,
      form: formData || {},
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }, (err, response, body) => {
      if (err) {
        return reject(err);
      }
      resolve(cheerio.load(body));
    });
  });
}

function buildQueryAttributes(attributes) {
  // Build query attributes object
  const queryAttributes = {
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
  };

  Object.keys(attributes).forEach((key, index) => {
    if (index > 2) throw new Error('Too many search attributes (maximum 3)');

    // First three query attributes must be of form:
    // col1=attribute&bool1=and&a=value
    // col2=attribute&bool1=and&b=value
    // col3=attribute&bool1=and&c=value
    let queryAttribute = queryAttributeMap[key];
    if (!queryAttribute) {
      throw new Error(
        'Invalid query attribute: ' + key + '. ' +
        'Valid options are: ' + Object.keys(queryAttributeMap).join(',')
        );
    }
    queryAttributes['col' + (index + 1)] = queryAttribute;
    queryAttributes['bool' + (index + 1)] = 'and';            // always joined by 'and' for now
    let valueKey = String.fromCharCode(97 + index);           // a, b, c
    queryAttributes[valueKey] = "%" + attributes[key] + "%";
  });

  return queryAttributes;
}

function parseResult($) {
  if (/formulieren Sie Ihre Anfrage bitte etwas genauer/.test($.html())) {
    throw new Error('Query returned too many results (> 100). Please be more specific.');
  }

  let entries = [];
  $('h1#pagetitle').nextAll('table').each((index, element) => {
    // Find title
    let $children = $(element).children('tr');
    let title = decode($children.eq(1).find('h1').html().trim());
    let attributes = {
      title: title
    };

    // Loop through children and map and transform them via attributeMap
    $children.each((index, element) => {
      const attributeName = $(element).find('td').eq(0).html();
      if (attributeName) {
        const attr = attributeMap[attributeName];
        if (attr) {
          const $element = $(element).find('td').eq(1);
          attributes[attr.to] = attr.transform($element, $);
        }
      }
    });

    entries.push(attributes);
  });

  return entries;
}

Hoerdat.query = function query(attributes) {
  let queryAttributes = {};
  try {
    queryAttributes = buildQueryAttributes(attributes);
  } catch(err) {
    return Promise.reject(err);
  }

  return _request(
    'post',
    '/index.php',
    queryAttributes
  ).then(parseResult);
};

Hoerdat.onAir = function daily(date) {
  return _request(
    'post',
    '/index.php',
    {
      dat: moment(date).format('YYYY-MM-DD')
    }
  ).then(parseResult);
};

Hoerdat.QUERY_ATTRIBUTES = Object.keys(queryAttributeMap);
