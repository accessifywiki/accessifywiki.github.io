---
categories: fix
#layout: [ fix, fix-json ]
layout: fix
title:  Example fixes
#  07:24, July 28, 2013‎
date:   2013-07-28 07:24:00
tags:   [ example, test ]
x-wiki: http://accessify.wikia.com/wiki/Fix:Example_fixes
#_CONFIG_:
x-aw-config:
  include:
    - http://accessifywiki.github.io/*
    - http://accessifywiki.appspot.com/*
    - https://accessifywiki--1.appspot.com/*
  test_urls:
    - http://accessifywiki.appspot.com/site/example-1a.html
    - http://accessifywiki.github.io/example-1a.html
  default_locale: en-GB

x-aw-fixes:
  #
  # P1: high priority / blockers.
  #
  .page-heading:
    role: heading
    aria-level: 1

  "#nav":
    role: navigation
    aria-label: Site menu

  form#search:
    role: search

  input[name = 'q']:
    type: search
    aria-labelledby: label[for = 'missing-id']
    placeholder: Enter a search term
    required: ""

  form#search button:
    aria-label: Search
    title: Search

  form#search a:
    role: button
    title: Help with search
    aria-haspopup: true

x-aw-styles: > # CSS stylesheet.
  /* Be cautious when using the 'style' attribute!
  */
  body {
    background: #fcfcfc;
    color: #333;
    font: 1em sans-serif;
    margin: 1em 3em;
  }
  form#search a {
    cursor: help;
  }
  [role = heading][aria-level = '1'], h1 {
    font-size: 1.7em;
    margin: 1em 0;
  }
---



Below are accessibility and usability fixes for this [example page][].
The page contains deliberate accessibility bugs,
and together with the fixes are used in the [tutorial][].



[example page]: /example-1a.html
[example page.OLD]: http://accessifywiki.appspot.com/site/example-1a.html
[tutorial]: http://accessify.wikia.com/wiki/Write_fixes
