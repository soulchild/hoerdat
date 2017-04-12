/*
 * Transform functions
 * These take various kinds of html input and transform them
 * into plain objects, strings or arrays.
 */

const decode = require('ent/decode');

// Transforms list of contributors into an array
const contributors = ($element, $) => $element
  .find('td.mit')
  .get()
  .map(el => decode(
    $(el)
      .html()
      .replace('\n', '')
    )
  );

// Transforms lines separated by <br> into an array
const br = ($element) => $element
  .html()
  .split('<br>')
  .map(el => decode(el.trim()))
  .filter(el => el.length > 0)

// Transforms lines ending with <br> into a string
const brSingle = ($element) => br($element)[0];

// Transforms link list into an array of objects
const links = ($element, $) => {
  let links = [];
  $element.find('a').each((index, link) => {
    let $element = $(link);
    links.push({
      url:  $element.attr('href'),
      text: decode($element.html())
    });
  });
  return links;
}

module.exports = {
  contributors,
  br,
  brSingle,
  links
};
