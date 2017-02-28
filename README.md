# hoerdat

> An **experimental and very early alpha** node module for accessing the [Hördat](http://www.xn--hrdat-jua.de/) database of radio plays. There is no official API, so this module uses web scraping. Note that the Hördat backend oftentimes has **very high latency**.

## Installation

Due to its alpha state this module is currently not (yet) available via npm, so you need to clone the Github repo.

```bash
npm install
```

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

Use the provided example script to give it a try:

```bash
bin/hoerdat search title="Knopf" authorName="Ende" authorFirstname="Michael"
```

## Author

[Tobi Kremer](https://github.com/soulchild)
