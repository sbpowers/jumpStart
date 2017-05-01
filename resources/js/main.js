$(document).ready(function() {
// More jQuery code goes in here later

  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });

  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });
});


//The carousel should autoplay when the page is loaded.
//The speed should be 4000 milliseconds.
//Do not include arrow buttons.
//Do not allow the user to drag the images.
//Do not pause on "focus" or "hover".
