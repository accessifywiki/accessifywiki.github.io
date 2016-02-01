---
layout: page
title:  Use fixes
permalink: /use.html
x-wiki: http://accessify.wikia.com/wiki/Users
x-api-url: https://accessifywiki.appspot.com/fix?min=1&callback=%CB&url=%URL&lang=%LANG
x-api-callback: window.AC5U.__callback
x-user-js-url: https://accessifywiki.appspot.com/browser/userjs/accessify.user.js
x-marklet-url: https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js
x-marklet: >
  javascript:(function(){AC5U={};var D=document,s=D.createElement('script')/*T*/;s.src='%s?x='+(Math.random());D.body.appendChild(s)})();
---



Software tools for end-users.

Below are two prototype tools to apply accessibility fixes to the sites that you visit.
The first, a user Javascript will attempt to find fixes for every page you visit without your intervention.
On the other hand, if you install the bookmarklet (favelet) you will need to press it for every page.

Both tools are built on [AccessifyHTML5.js][].

To give feedback on the tools [write on my wall][] or find [@nfreear on Twitter][].


<!--<section id="bookmarklet" role="region" aria-label="Bookmarklet">-->


## Bookmarklet

The bookmarklet works in all browsers.

Bookmarklet – right-click and add or save the link below to your browser's bookmarks or favourites bar
(Chrome and Safari users will wish to start by copying the link).


<a href="{{ page.x-marklet | replace: '%s', page.x-marklet-url }}">Accessify</a>


<!--</section><section id="user-js" role="region" aria-label="User Javascript">-->


## User Javascript

Currently works in [Firefox][]/ Greasemonkey and [Chrome][]/ [Tampermonkey][]
(other browsers to follow – [Cross-browser user scripting][x-browser]).

Instructions for use with Firefox and Greasemonkey:

1. Download and install the [Firefox web browser][Firefox],
2. Install the [Greasemonkey][] add-on for Firefox,
3. Press to <a href="{{ page.x-user-js-url }}">install the user Javascript</a>

Other [installation instructions][] and user Javascripts.


<!--</section>-->

## Other

* <a href="{{ page.x-marklet-url }}">Source: bookmarklet-inner Javascript</a>
* <a href="{{ page.x-api-url | replace: '%CB', page.x-api-callback }}">Fix API call</a>



[AccessifyHTML5.js]: https://github.com/yatil/accessifyhtml5.js
[write on my wall]: http://accessify.wikia.com/wiki/Message_Wall:NickFreear
[@nfreear on Twitter]: http://twitter.com/nfreear

[Firefox]: https://www.mozilla.org/en-US/firefox/new/
[fx-old]: http://www.mozilla.com/firefox/
[Chrome]: https://www.google.com/chrome/
[Greasemonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[Greasemonkey-other]: http://www.greasespot.net/
[Tampermonkey]: http://tampermonkey.net/
[x-browser]: http://wiki.greasespot.net/Cross-browser_userscripting
[installation instructions]: http://userscripts.org/about/installing

[End]: //end
