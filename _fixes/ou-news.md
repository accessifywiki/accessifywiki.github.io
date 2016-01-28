---
categories: fix
#layout: [ fix, fix-json ]
layout: fix
title:  OU News
date:   2016-01-21 15:49:42
tags:   [ OU, news ]
x-wiki: http://accessify.wikia.com/wiki/Fix:OU_News
x-gdoc: https://docs.google.com/document/d/1bCsgti8z2EZgpHi3xTiv5FpR3HlJ5-VhV4IFCjusask/#
x-gdoc-2: https://drive.google.com/open?id=1bCsgti8z2EZgpHi3xTiv5FpR3HlJ5-VhV4IFCjusask
#_CONFIG_:
x-aw-config:
  include:
    - http://ounews.co/*
  test_urls:
    - http://ounews.co/education-languages-health/education/15-years-of-wikipedia/
    - http://ounews.co/arts-social-sciences/art-literature-music/david-bowie-a-bio-obituary/
  default_locale: en-GB
  created: 2016-01-21

x-aw-fixes:
#
# P1: high priority / blockers.
#
  .main-nav-wrap .logo a img:
    # Replace existing ALT text!
    alt: OU News home page
    title: "OU News home page"

  "#nav-open-btn, #back-top, .nav-prev, .nav-next, .flex-prev, .flex-next, .ajax-search-icon, .mobile-menu-close, .widget a.close, .ajax-load-btn":
    role: button
    tabindex: 0

  "#nav-open-btn":
    title: Open mobile navigation menu
    aria-label: Open mobile navigation menu

  a.mobile-menu-close:
    title: Close mobile navigation

  "#back-top":
    title: To the top of the page

  .ajax-search-wrap .ajax-search-icon:
    # Also: opens the search form.
    title: Search site

  .ajax-search-wrap form input.field:
    # Match the placeholder.
    aria-label: Search this site

  .s-post-nav .nav-prev:
    title: Previous blog post

  .s-post-nav .nav-next:
    title: Next blog post

  .widget-twitter .flexslider .flex-prev:
    title: Previous Tweet

  .widget-twitter .flexslider .flex-next:
    title: Next Tweet

  a[ href *= 'facebook.com/theopenuni' ]:
    # Modify existing title.
    title: The Open University on Facebook

  .widget.recommend-box > a.close:
    # Modify the existing title.
    title: Close stories about the OU
#
# P2: medium priority.
#
  ".main-nav, .bk-breadcrumbs-wrap, #main-mobile-menu":
    role: navigation

  .ajax-search-wrap form:
    role: search

  .bk-breadcrumbs-wrap:
    aria-label: Site breadcrumbs

  .bk-page-header:
    role: banner

  .footer:
    # https://www.w3.org/TR/wai-aria/roles#landmark_roles
    role: contentinfo

  body.single-post .single-page, body.home div#page-content-wrap:
    role: main

x-aw-styles: > # CSS stylesheet.
  .body {
    color: red;
  }
---



[OU News][] is a web site from The Open University, built on WordPress.


[OU News]: http://ounews.co
