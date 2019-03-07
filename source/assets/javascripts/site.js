require('script-loader!jquery');
require('script-loader!bootstrap');


$(document).ready(function() {

  var nav     = $('.navigation a, .featured .featured-box__item .actions .c-btn'),
      featBtn = $('.featured .featured-box__item');

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



$('#atp').parent().parent().css('height', $('#atp').parent().find('.tab-content.atp').outerHeight() + 200);

$('#atp').on('click', function(){
  if($(this).is(':checked')) {
    $(this).parent().parent().css('height', $(this).parent().find('.tab-content.atp').outerHeight() + 200);
  }
});

$('#match').on('click', function(){
  if($(this).is(':checked')) {
    $(this).parent().parent().css('height', $(this).parent().find('.tab-content.match').outerHeight() + 200);
  }
});

$('#verify').on('click', function(){
  if($(this).is(':checked')) {
    $(this).parent().parent().css('height', $(this).parent().find('.tab-content.verify').outerHeight() + 200);
  }
});


 $(window).resize(function() {

  if($('#atp').is(':checked')) {
    $('#atp').parent().parent().css('height', $('.tab-content.atp').outerHeight() + 200);
  }
  if($('#match').is(':checked')) {
  $('#match').parent().parent().css('height', $('#match').parent().find('.tab-content.match').outerHeight() + 200);

  }
  if($('#verify').is(':checked')) {
    $('#verify').parent().parent().css('height', $('#verify').parent().find('.tab-content.verify').outerHeight() + 200);

 }
});



  featBtn.on('mouseenter', function(){
    $('.featured .featured-box__item').removeClass('background-blue');
    $(this).addClass('background-blue');
  })
});
