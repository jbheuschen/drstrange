var rellax = new Rellax(".parallax")

$(document).ready(function() {
   $(".fullscreenable").click(function(e) {
      let l = $($(this).data('fullscreen'));
      if(l.hasClass('fullscreened')) {
          l.fadeOut();
      } else {
          l.fadeIn();
      }
      l.toggleClass('fullscreened');
      $("#content").toggleClass("blurred")
   });
   $(".parallax").each(function(i) {
      $(this).css('background-image', 'url(' + $(this).data('img') + ')')
   });
   $("#scrolldown").click(function(e) {
      $("body,html").animate({
         scrollTop: $("#content").offset().top
      },800, "swing", function() {
         $("body").removeClass("no-scroll");
      })
   });
   $(window).scroll(function() {
      if($(this).scrollTop() <= $("#opener").height() && !$("body").hasClass("no-scroll")) {
         $("body,html").animate({
            scrollTop: 0
         },800, "swing", function() {
            $("body").addClass("no-scroll");
         })
      }
   })
});
