// // Nav Bar Shrinking on scroll
// $(document).ready(function() {
// 	$(window).scroll(function() {
//   	if($(document).scrollTop() > 10) {
//       $('#nav').addClass('shrink');
//       // $('.navbar-brand').css("color", "white");
//       // $('.nav-link').css("color", "white");

//     }
//     else {
//     $('#nav').removeClass('shrink');
//     // $('.navbar-brand').css("color", "black");
//     // $('.nav-link').css("color", "black");
//     }
//   });
// });

// Image Slider
$(document).ready(function () {

});
$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});
