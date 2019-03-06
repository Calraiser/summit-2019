require('script-loader!jquery');
require('script-loader!bootstrap');


$(document).ready(function() {

  var nav     = $('.navigation a, .featured .featured-box__item .actions .c-btn'),
      featBtn = $('.featured .featured-box__item .actions .c-btn');

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


  $('.tab-content').each(function() {
    $(this).css('height', $(this).height());
     $(window).resize(function() {
        $(this).parent().css('height', $(this).outerHeight());
      });
  })



  featBtn.on('mouseenter', function(){
    $('.featured .featured-box__item').removeClass('background-blue');
    $(this).parents().addClass('background-blue');
  })
});
