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
});
