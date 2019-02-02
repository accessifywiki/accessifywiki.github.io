// ---
// layout: null
// permalink: /js/main.js
// ---
/*!

  http://idodev.co.uk/2013/03/syntax-highlighting-with-highlightjs/
  http://www.minh.io/tech/2013/08/17/highlightjs-line-numbers/
*/

/* eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
/* eslint-enable */

window.jQuery(function ($) {
  'use strict';

  const W = window;
  const L = W.location;
  const ga = W.ga;
  const hljs = W.hljs;
  const jsyaml = W.jsyaml;

  let SITE = $('#js-config').data();
  const debug = L.search.match(/debug=([1-9])/) || SITE.debug;
  const D = W.console && debug;
  const IS_FIX_PAGE = L.pathname.match(/\/fix\/[a-z]+/);
  const FIX_JSON = $(SITE.fix_selector).text();
  const FIX_DATA = FIX_JSON && JSON.parse(FIX_JSON);
  // , fix_css  = $('#fix-api-css').text()
  const $json_config = $('#config .json');
  const $yaml_config = $('#config .yaml');
  const $json_fixes = $('#fixes .json');
  const $yaml_fixes = $('#fixes .yaml');
  const $BTN_json_config = $('#config .btn-json');
  const $BTN_yaml_config = $('#config .btn-yaml');
  const $BTN_json_fixes = $('#fixes .btn-json');
  const $BTN_yaml_fixes = $('#fixes .btn-yaml');
  const $help_what = $('#what');
  const $BTN_what = $('#btn-what');
  //, $screenshot  = $('#screenshot img')
  const anim = 500; // Was: 'slow'

  SITE.debug = debug;

  $.AW_SITE = SITE;

  console.warn($.AW_SITE);

  /* Google Analytics.
  */
  ga('create', SITE.analytics_id, 'auto'); // Was: '{{ site.js_config.analytics_id }}'
  ga('send', 'pageview');

  if (IS_FIX_PAGE) {
    $('a[ href *= "/use.html" ]').each(function () {
      const URL = $(this).attr('href');
      $(this).attr('href', URL + FIX_DATA.params);
    });
  }

  $json_config.text(jsonify(FIX_DATA.config));
  $json_fixes.text(jsonify(FIX_DATA.fixes));

  $yaml_config.text(yamlify(FIX_DATA.config));
  $yaml_fixes.text(yamlify(FIX_DATA.fixes));

  $BTN_what.on('click', function () {
    $help_what.toggle(anim);
  });

  $BTN_yaml_fixes.on('click', function () {
    toggle_buttons($(this), $BTN_json_fixes);
    toggle_code($yaml_fixes, $json_fixes);
  });
  $BTN_json_fixes.on('click', function () {
    toggle_buttons($(this), $BTN_yaml_fixes);
    toggle_code($yaml_fixes, $json_fixes);
  });

  $BTN_yaml_config.on('click', function () {
    toggle_buttons($(this), $BTN_json_config);
    toggle_code($yaml_config, $json_config);
  });
  $BTN_json_config.on('click', function () {
    toggle_buttons($(this), $BTN_yaml_config);
    toggle_code($yaml_config, $json_config);
  });

  function toggle_buttons ($BTN_to_disable, $BTN_to_enable) {
    $BTN_to_disable.attr({ disabled: 'disabled', title: 'Currently ' + $BTN_to_disable.text() });
    $BTN_to_enable.attr({ disabled: null, title: 'Switch to ' + $BTN_to_enable.text() });

    console.warn('toggle_buttons');
  }

  function toggle_code ($code_a, $code_b) {
    $code_a.parent().toggle(anim); // Was: 'slow'
    $code_b.parent().toggle(anim);
  }

  $('pre code.yaml, pre code.json').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  // $screenshot.attr("src", "http://s.wordpress.com/mshots/v1/http%3A%2F%2Flabnol.org%2F?w=1024")

  D && $.get(SITE.fix_index).then(function (data) {
    console.warn(SITE.fix_index, data);
  });

  console.warn('Parsed fix-json / fix-css: ', FIX_DATA);

  // console.warn('highlight.js: '); // , hljs.listLanguages());

  // http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  function jsonify (data) {
    return JSON.stringify(data, null, 2);
  }

  function yamlify (data) {
    return data && jsyaml.safeDump(data, { indent: 6 /* , lineWidth: 80 */});
  }

  // .
});

// End.
