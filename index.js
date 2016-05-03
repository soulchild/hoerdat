"use strict";

const cheerio = require('cheerio');
const request = require('request');
const decode = require('ent/decode');

const Hoerdat = module.exports = {};

const baseURL = "http://www.xn--hrdat-jua.de";

/*
 * Transform functions
 * These take various kinds of html input and transform them 
 * into plain objects, strings or arrays.
 */

// Transforms list of contributors into an array
function transformContributors($element, $) {
  let contributors = [];
  $element.find('td.mit').each(function(index, el) {
    contributors.push(decode($(el).html().replace("\n", "")));
  });
  return contributors;
}

// Transforms lines separated by <br> into an array
function transformBr($element) {
  let entries = $element.html().split("<br>");
  let splitValues = entries.map(function(el) {
    return decode(el.trim());
  }).filter(function(el) {
    return !!el;
  });
  return splitValues;
}

// Transforms lines ending with <br> into a string
function transformBrSingle($element) {
  return transformBr($element)[0];
}

// Transforms link list into an array of objects
function transformLinks($element, $) {
  let links = [];
  $element.find('a').each(function(index, link) {
    let $element = $(link);
    links.push({
      url:  $element.attr('href'),
      text: decode($element.html())
    });
  });
  return links;
}

const attributeMap = {
  'Autor(en):':     { to: 'authors',      transform: transformBr },
  'Produktion:':    { to: 'production',   transform: transformBrSingle },
  'Genre(s):':      { to: 'genres',       transform: transformBr },
  'Regie:':         { to: 'directors',    transform: transformBr },
  'Inhaltsangabe:': { to: 'abstract',     transform: transformBrSingle },
  'Mitwirkende:':   { to: 'contributors', transform: transformContributors },
  'Links:':         { to: 'links',        transform: transformLinks },
  'Komponist(en):': { to: 'composers',    transform: transformBr },
  'Bearbeitung:':   { to: 'adaption',     transform: transformBr },
  'Auch unter dem Titel:': { to: 'alsoKnownAs', transform: transformBr },
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
  return new Promise(function(resolve, reject) {
    let absoluteURL = baseURL + url;
    
    request({
      method: method || 'GET',
      encoding: 'binary',
      uri: absoluteURL,
      form: formData || {},
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }, function(err, response, body) {
      if (err) return reject(err);
      let $ = cheerio.load(body);
      resolve($);
    });
  });
}

function buildQueryAttributes(attributes) {
  // Build query attributes object
  let queryAttributes = {
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

  Object.keys(attributes).forEach(function(key, index) {
    if (index > 2) throw new Error('Too many search attributes (maximum 3)');

    // First three query attributes must be of form:
    // col1=attribute&bool1=and&a=value
    // col2=attribute&bool1=and&b=value
    // col3=attribute&bool1=and&c=value
    let queryAttribute = queryAttributeMap[key];
    if (! queryAttribute) {
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

Hoerdat.query = function query(attributes) {
  let queryAttributes = {};
  try {
    queryAttributes = buildQueryAttributes(attributes);
  } catch(err) {
    return Promise.reject(err);
  }

  return _request('post', '/index.php', queryAttributes).then(function($) {
    if (/formulieren Sie Ihre Anfrage bitte etwas genauer/.test($.html())) {
      throw new Error('Query returned too many results (> 100). Please be more specific.');
    }

    let entries = [];

    $('h1#pagetitle').nextAll('table').each(function(index, element) {
      // Find title
      let $children = $(element).children('tr');
      let title = decode($children.eq(1).find('h1').html().trim());
      let attributes = {
        title: title
      };

      // Loop through children and map and transform them via attributeMap
      $children.each(function(index, element) {
        let attributeName = $(element).find('td').eq(0).html();
        if (attributeName) {
          let attr = attributeMap[attributeName];
          if (attr) {
            let $element = $(element).find('td').eq(1);
            attributes[attr.to] = attr.transform($element, $);
          }
        }
      });

      entries.push(attributes);
    });

    return entries;
  });
};
