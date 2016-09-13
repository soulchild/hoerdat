/*
 * Transform functions
 * These take various kinds of html input and transform them
 * into plain objects, strings or arrays.
 */

const decode = require('ent/decode');

// Transforms list of contributors into an array
function contributors($element, $) {
  return $element
    .find('td.mit')
    .get()
    .map(el =>
      decode($(el)
        .html()
        .replace("\n", "")
      )
    );
}

// Transforms lines separated by <br> into an array
function br($element) {
  return $element
    .html()
    .split("<br>")
    .map(el =>
      decode(el.trim())
    )
    .filter(el => !!el);
}

// Transforms lines ending with <br> into a string
function brSingle($element) {
  return br($element)[0];
}

// Transforms link list into an array of objects
function links($element, $) {
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
