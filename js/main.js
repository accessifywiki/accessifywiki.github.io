/*!


  http://idodev.co.uk/2013/03/syntax-highlighting-with-highlightjs/
  http://www.minh.io/tech/2013/08/17/highlightjs-line-numbers/
*/


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


jQuery(function ($) {

  'use strict';

  var W = window
    , debug = W.location.search.match(/debug=1/) // /debug=([1-9])/
    , D = W.console /* && debug */
    , BLOG = $("#js-config").data()
    , fix_json = $("#fix-api-json").text()
    , fix_data = fix_json && JSON.parse(fix_json)
    , fix_css  = $("#fix-api-css").text()
    , $json_config = $("#config .json")
    , $json_fixes  = $("#fixes .json")
    , $screenshot  = $("#screenshot img")
    ;

  BLOG.debug = debug;


  $json_config.text( jsonify( fix_data.config ));
  $json_fixes.text( jsonify( fix_data.fixes ));

  $('pre code.yaml, pre code.json').each(function (i, block) {
    hljs.highlightBlock(block);
  })

  //$screenshot.attr("src", "http://s.wordpress.com/mshots/v1/http%3A%2F%2Flabnol.org%2F?w=1024")

  $.get("/fix/index.json", function (data) {
    D && console.log("/fix/index.json:", data);
  });


  D && console.log("Parsed fix-json / fix-css: ", fix_data, fix_css);

  D && console.log("highlight.js: "); //, hljs.listLanguages());


  // http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  function jsonify(data) {
    return JSON.stringify(data, null, 2);
  }

});

//End.
