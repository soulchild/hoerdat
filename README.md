# node-hoerdat

An **experimental and very early alpha** node module for accessing the [Hördat](http://www.xn--hrdat-jua.de/) database of radio plays. There is no official API, so this module uses web scraping. Also, the Hördat backend oftentimes has very high latency. So be warned.

## Installation

Due to its alpha state this module is currently not (yet) available via npm.

## Querying

The following query attributes are supported. All attributes are joined with an AND condition. Note that Hördat only allows three attributes per query. If you specify more than three attributes an exception is raised.

  - title
  - authorName
  - authorFirstname
  - production
  - year
  - director
  - adaption
  - composer
  - translation
  - abstract
  - contributors
  - kunstkopfstereo

## Example

```js
"use strict";

const Hoerdat = require('./index');

Hoerdat.query({
  title: 'Jim Knopf',
  authorFirstname: 'Michael',
  authorName: 'Ende'
}).then(function(res) {
  console.log(JSON.stringify(res, null, 2));
}).catch(function(err) {
  console.error(err);
});
```
