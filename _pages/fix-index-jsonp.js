---
x-note:     JSON with padding.
x-callback: _fix_index_CB
layout:     null
permalink:  /fix/index.js
---
/*
  Index of accessibility fixes in JSONP format - with a pre-defined callback function.
*/

;{{ page.x-callback }}(
{% include_relative fix-index-source.json %});
