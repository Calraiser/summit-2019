import './components/fakeDemo.js'

require('script-loader!jquery');
require('script-loader!bootstrap');

$(document).ready(function() {

  var nav = $('.navigation a');

  nav.on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        target.prop("checked", "checked");
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 30
        }, 1000);
      }
  });
});
