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
    , SITE = $('#js-config').data()
    , debug = W.location.search.match(/debug=([1-9])/) || SITE.debug
    , D = W.console && debug
    , fix_json = $(SITE.fix_selector).text()
    , fix_data = fix_json && JSON.parse(fix_json)
    //, fix_css  = $('#fix-api-css').text()
    , $json_config = $('#config .json')
    , $yaml_config = $('#config .yaml')
    , $json_fixes  = $('#fixes .json')
    , $yaml_fixes  = $('#fixes .yaml')
    , $btn_json_config = $('#config .btn-json')
    , $btn_yaml_config = $('#config .btn-yaml')
    , $btn_json_fixes = $('#fixes .btn-json')
    , $btn_yaml_fixes = $('#fixes .btn-yaml')
    , $help_what = $('#what')
    , $btn_what = $('#btn-what')
    //, $screenshot  = $('#screenshot img')
    , anim = 500  //Was: 'slow'
    ;

  SITE.debug = debug;

  $.AW_SITE = SITE;

  /* Google Analytics.
  */
  ga('create', SITE.analytics_id, 'auto');
  ga('send', 'pageview');


  D && console.log($.AW_SITE);

  $('a[ href *= "/use.html" ]').each(function () {
    var url = $(this).attr('href');
    $(this).attr('href', url + fix_data.params);
  })


  $json_config.text( jsonify( fix_data.config ));
  $json_fixes.text( jsonify( fix_data.fixes ));

  $yaml_config.text( yamlify( fix_data.config ));
  $yaml_fixes.text( yamlify( fix_data.fixes ));

  $btn_what.on('click', function () {
    $help_what.toggle(anim);
  });

  $btn_yaml_fixes.on('click', function () {
    toggle_buttons($(this), $btn_json_fixes);
    toggle_code($yaml_fixes, $json_fixes);
  });
  $btn_json_fixes.on('click', function () {
    toggle_buttons($(this), $btn_yaml_fixes);
    toggle_code($yaml_fixes, $json_fixes);
  });


  $btn_yaml_config.on('click', function () {
    toggle_buttons($(this), $btn_json_config);
    toggle_code($yaml_config, $json_config);
  });
  $btn_json_config.on('click', function () {
    toggle_buttons($(this), $btn_yaml_config);
    toggle_code($yaml_config, $json_config);
  });


  function toggle_buttons($btn_to_disable, $btn_to_enable) {
    $btn_to_disable.attr({ disabled: 'disabled', title: 'Currently ' + $btn_to_disable.text() });
    $btn_to_enable.attr({ disabled: null, title: 'Switch to ' + $btn_to_enable.text() });
    console.log('toggle_buttons');
  }
  function toggle_code($code_a, $code_b) {
    $code_a.parent().toggle(anim); //Was: 'slow'
    $code_b.parent().toggle(anim);
  }


  $('pre code.yaml, pre code.json').each(function (i, block) {
    hljs.highlightBlock(block);
  })

  //$screenshot.attr("src", "http://s.wordpress.com/mshots/v1/http%3A%2F%2Flabnol.org%2F?w=1024")

  D && $.get(SITE.fix_index, function (data) {
    console.log(SITE.fix_index, data);
  });


  D && console.log("Parsed fix-json / fix-css: ", fix_data);

  D && console.log("highlight.js: "); //, hljs.listLanguages());


  // http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  function jsonify(data) {
    return JSON.stringify(data, null, 2);
  }
  function yamlify(data) {
    return data && jsyaml.safeDump( data , { indent: 6 /*, lineWidth: 80*/ });
  }

});

//End.
