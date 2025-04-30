(function ($) {
  "use strict";

  var nav_offset_top = $("header").height() + 10;

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
          $(".header_area").removeClass("nav-paad");
          $(".navbar-light").removeClass("bg1");
        } else {
          $(".header_area").removeClass("navbar_fixed");
          $(".navbar-light").addClass("bg1");
        }
      });
    }
  }
  navbarFixed();
})(jQuery);

jQuery(document).ready(function ($) {
  $(".pkg1").owlCarousel({
    // center: true,
    nav: true,
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    dots: false,
    smartSpeed: 2500,
    arrow: true,
    navText: [
      "<img src='images/arrow-right.png'>",
      "<img src='images/arrow-left.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 2,
      },

      1200: {
        items: 3,
      },
    },
  });
});

jQuery(document).ready(function ($) {
  $(".ser1").owlCarousel({
  
    nav: true,
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    smartSpeed: 2500,
    arrow: false,
    navText: [
      "<img src='images/arrow-right.png'>",
      "<img src='images/arrow-left.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },

      1200: {
        items: 6,
      },
    },
  });
});
