---
categories: fix
layout: fix
title:  Google search
date:   2013-04-03T19:34+01:00
tags:   [ English, Google, test, search, i18n ]
x-wiki: http://accessify.wikia.com/wiki/Fix:Google_search
#_CONFIG_:
x-aw-config:
    include:
        - http://*.google.de/*
        - https://*.google.de/*
        - http://*.google.co.uk/*
        - https://*.google.co.uk/*
        - http://www.google.com/*
    test_urls:
        - https://google.co.uk/search?q=Accessify+Wiki
        - http://www.google.de/
        - http://www.google.com.au/
        - http://www.google.com.br/
        - http://www.google.ca/
        - http://www.google.cn/
        - http://www.google.es/
        - http://www.google.fr/
        - http://www.google.ie/
        - http://www.google.com.hk/
        - http://www.google.co.in/
        - http://www.google.co.jp/
        - http://www.google.com/
        - https://www.google.co.in/
        - https://www.google.ru/
        - https://www.google.com.cy/

    global_rank: 1   # Alexa; US rank: 1; Google.co.in - Global rank: 15.
    default_locale: en-GB
    authors:
        - Nick @nfreear
    created: 2013-04-03T19:34+01:00

x-aw-fixes:
# Fixes.
  "#gbzw":
    role: navigation
    aria-label: Other Google services

  "#gbqf":
    role: search
    aria-label: Google search

  "#body":
    role: main

  "#footer":
    role: contentinfo

  "#gbu":
    role: navigation
    aria-label: Account options

  "[name = q]":
    #type: search
    title: Type a search term
    title.fr: Tapez un terme de recherche
    title.es: Escriba un término de búsqueda
    title.de: Geben Sie einen Suchbegriff ein
    title.zh-CN: 输入搜索内容
    placeholder: Type a search term
    placeholder.fr: Tapez un terme de recherche
    placeholder.es: Escriba un término de búsqueda
    placeholder.de: Geben Sie einen Suchbegriff ein
    placeholder.zh-CN: 输入搜索内容
    #style: cursor:help

  "#main":
    style: "background-color:#f8f8f8;color:#222;"
    _note: Caution, a visible change! (Reduce glare for those w. Dyslexia)

  "#top_nav":
    style: "background-color:#f8f8f8;color:#222;"
  "#mngb":
    style: "background:#f8f8f8;color:#222;"

  button:
    style: cursor:pointer


# "Welcome to the new way to find your favourite Google Products.."
  .gb_o:
    aria-label: Popup

  .gb_o > a.gb_wa:
    role: button
    title: Close
    aria-label: Close 'New feature' popup

  # Promote Chrome browser.
  .pmoabs img[src *= '/chrome-']:
    alt: Google Chrome logo
    title: Google Chrome logo

  .pmoabs .xbtn:
    role: button
    tabindex: 0
    title: Close
    aria-label: Close Chrome browser promotion

  a[ href = 'javascript:void(0)' ], a[href = "#"]:
    role: button

x-aw-styles: > #/* Experimental! */
  body {
    border:1px solid green;
  }

  .gbqfqw {
    border-color:rgba(0,0,0,.3); /*rgba(0,0,0,.15)*/
  }
  .gbqfqw.gbqfqw:hover {
    border-color:rgba(0,0,0,.5); /*rgba(0,0,0,.3)*/
  }
  .gbqfqw:active {
    border-color:#3174e3; /*#4285f4*/
  }
---


Accessibility and usability fixes for the country-specific Google search sites,
including Google.de (Not for Google Docs, Drive etc.)
Includes WAI-ARIA landmark roles.

Google logo 2013

* [Wikipedia:List of Google domains][]
* Wikipedia:File:Logo 2013 Google.png
* See also: [Fix:Baidu search][]


[Wikipedia:List of Google domains]: https://en.wikipedia.org/wiki/List_of_Google_domains
[Fix:Baidu search]: /fix/baidu-search.html
