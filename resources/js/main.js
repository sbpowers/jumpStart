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
});


//The carousel should autoplay when the page is loaded.
//The speed should be 4000 milliseconds.
//Do not include arrow buttons.
//Do not allow the user to drag the images.
//Do not pause on "focus" or "hover".
