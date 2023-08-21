jQuery(document).ready(function ($) {
  // Stick the header at top on scroll
  $('#header').sticky({
    topSpacing: 0,
    zIndex: '50',
  });

  // Intro background carousel
  $('#intro-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1,
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });

  // Initiate the wowjs animation library
  new WOW().init();
});
