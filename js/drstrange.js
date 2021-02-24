$(document).ready(function() {
   $("#sidebar").hide();
   $("#opener").show();
   $(this).scrollTop(0);
   /*$(".fullscreenable").click(function(e) {
      let l = $($(this).data('fullscreen'));
      if(l.hasClass('fullscreened')) {
          l.fadeOut();
      } else {
          l.fadeIn();
      }
      l.toggleClass('fullscreened');
      $("#content").toggleClass("blurred")
   });*/
   $(".parallax").each(function(i) {
      $(this).css('background-image', 'url(' + $(this).data('img') + ')')
   });
   /*$(".blurable").each(function(i) {
      let caption = $(this).data('caption');
      $(this).append(
          '<div class="img-caption">' +
          '<p>' + caption + '</p>' +
          '</div>' +
          '<div class="blur"></div>'
      );
   })*/
   $("#scrolldown").click(function(e) {
      $("#opener").fadeOut(function() {
         $("#navbar").fadeIn();
         $("#sidebar").fadeIn();
      });
      $("body").removeClass("no-scroll");
   });
   $(window).scroll(function() {
      $("section").each(function() {
         if($(window).scrollTop() > $(this).offset().top) {
            $("a[href=" + $(this).attr('id') + "]").toggleClass('active');
         }
      });
   });
});
